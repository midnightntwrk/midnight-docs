// This file is part of midnight-docs.
// Copyright (C) Midnight Foundation
// SPDX-License-Identifier: Apache-2.0
//
// Detects upstream component releases that have no release notes in the docs.
//
// For each component, the script fetches the GitHub releases of the product
// repo, keeps only stable releases (not draft, not prerelease, and a clean
// x.y.z tag with no rc/beta/alpha suffix), and compares the highest stable
// version against the newest entry in the component's DynamicList file.
// Both filters matter: some repos forget the prerelease flag on betas, and
// some flag clean-tagged builds as prereleases.
//
// When a gap is found, the script opens one GitHub issue per component and
// version (title: "Release notes gap: <component> <version>"). An issue that
// already exists for that title, open or closed, is never recreated, so
// closing an issue as "won't document" silences that version for good.
//
// Usage:
//   GITHUB_TOKEN=... node scripts/check-release-gaps.mjs           # detect + open issues
//   GITHUB_TOKEN=... DRY_RUN=1 node scripts/check-release-gaps.mjs # detect only
//
// Runs daily via .github/workflows/release-watch.yml.

import { readFileSync, existsSync, appendFileSync } from 'node:fs';

const DOCS_REPO = process.env.GITHUB_REPOSITORY ?? 'midnightntwrk/midnight-docs';
const TOKEN = process.env.GITHUB_TOKEN;
const DRY_RUN = process.env.DRY_RUN === '1';

if (!TOKEN) {
  console.error('GITHUB_TOKEN is required');
  process.exit(1);
}

// tag: anchored regex whose first capture group is the x.y.z version.
const COMPONENTS = [
  { name: 'Node',               repo: 'midnightntwrk/midnight-node',               tag: /^node-(\d+\.\d+\.\d+)$/,                                  list: 'src/components/DynamicListNode.js' },
  { name: 'Ledger',             repo: 'midnightntwrk/midnight-ledger',             tag: /^ledger-(\d+\.\d+\.\d+)$/,                                list: 'src/components/DynamicListLedger.js' },
  { name: 'Midnight Indexer',   repo: 'midnightntwrk/midnight-indexer',            tag: /^v(\d+\.\d+\.\d+)$/,                                      list: 'src/components/DynamicListMidnightIndexer.js' },
  { name: 'Midnight.js',        repo: 'midnightntwrk/midnight-js',                 tag: /^v(\d+\.\d+\.\d+)$/,                                      list: 'src/components/DynamicListMidnightJS.js' },
  { name: 'DApp Connector API', repo: 'midnightntwrk/midnight-dapp-connector-api', tag: /^v(\d+\.\d+\.\d+)$/,                                      list: 'src/components/DynamicListDappConnectorAPI.js' },
  { name: 'Compact toolchain',  repo: 'midnightntwrk/compact',                     tag: /^compactc-v(\d+\.\d+\.\d+)$/,                             list: 'src/components/DynamicListCompact.js' },
  { name: 'Compact devtools',   repo: 'midnightntwrk/compact',                     tag: /^compact-v(\d+\.\d+\.\d+)$/,                              list: 'src/components/DynamicListCompactTools.js' },
  { name: 'Compact JS',         repo: 'midnightntwrk/midnight-sdk',                tag: /^compact-js-v(\d+\.\d+\.\d+)$/,                           list: 'src/components/DynamicListCompactJS.js' },
  { name: 'Wallet SDK',         repo: 'midnightntwrk/midnight-wallet',             tag: /^@midnight-?ntwrk\/wallet-sdk-facade@(\d+\.\d+\.\d+)$/,   list: 'src/components/DynamicListWallet.js' },
];

const api = async (path) => {
  const res = await fetch(`https://api.github.com${path}`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
    },
  });
  if (!res.ok) throw new Error(`GET ${path} -> ${res.status} ${await res.text()}`);
  return res.json();
};

const cmpVersion = (a, b) => {
  const pa = a.split('.').map(Number);
  const pb = b.split('.').map(Number);
  for (let i = 0; i < Math.max(pa.length, pb.length); i++) {
    const d = (pa[i] ?? 0) - (pb[i] ?? 0);
    if (d !== 0) return d;
  }
  return 0;
};

const documentedVersion = (listFile) => {
  if (!existsSync(listFile)) return null;
  const m = readFileSync(listFile, 'utf8').match(/version: '([^']+)'/);
  return m ? m[1] : null;
};

const latestStable = async (component) => {
  // Two pages cover repos whose recent history is dominated by prereleases.
  const releases = [
    ...(await api(`/repos/${component.repo}/releases?per_page=100`)),
    ...(await api(`/repos/${component.repo}/releases?per_page=100&page=2`)),
  ];
  let best = null;
  for (const r of releases) {
    if (r.draft || r.prerelease) continue;
    const m = r.tag_name.match(component.tag);
    if (!m) continue;
    if (!best || cmpVersion(m[1], best.version) > 0) {
      best = { version: m[1], url: r.html_url, publishedAt: r.published_at };
    }
  }
  return best;
};

const issueExists = async (title) => {
  const q = encodeURIComponent(`repo:${DOCS_REPO} is:issue in:title "${title}"`);
  const found = await api(`/search/issues?q=${q}&per_page=20`);
  return found.items.some((i) => i.title === title);
};

const openIssue = async (title, body) => {
  const res = await fetch(`https://api.github.com/repos/${DOCS_REPO}/issues`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
    },
    body: JSON.stringify({ title, body }),
  });
  if (!res.ok) throw new Error(`POST issue -> ${res.status} ${await res.text()}`);
  return (await res.json()).html_url;
};

const rows = [];
let gaps = 0;

for (const c of COMPONENTS) {
  const documented = documentedVersion(c.list);
  let upstream;
  try {
    upstream = await latestStable(c);
  } catch (e) {
    rows.push([c.name, documented ?? '?', 'lookup failed', ':warning:']);
    console.error(`${c.name}: ${e.message}`);
    continue;
  }
  if (!upstream || !documented) {
    rows.push([c.name, documented ?? 'none', upstream?.version ?? 'none', ':grey_question:']);
    continue;
  }
  if (cmpVersion(upstream.version, documented) <= 0) {
    rows.push([c.name, documented, upstream.version, ':white_check_mark:']);
    continue;
  }

  gaps++;
  rows.push([c.name, documented, upstream.version, ':x: gap']);
  const title = `Release notes gap: ${c.name} ${upstream.version}`;
  const body = [
    `The latest stable ${c.name} release has no release notes in the docs.`,
    '',
    `- Documented (newest entry in \`${c.list}\`): **${documented}**`,
    `- Upstream stable: **${upstream.version}**, published ${upstream.publishedAt?.slice(0, 10)}`,
    `- Release: ${upstream.url}`,
    '',
    'To resolve, run the `sync-release-notes.yml` workflow for this component (or add the notes manually), fill in the DynamicList entry, and check whether the support matrix needs an update.',
    '',
    'Opened automatically by `release-watch.yml`. Closing this issue without documenting the release permanently silences this version.',
  ].join('\n');

  if (DRY_RUN) {
    console.log(`[dry-run] would open issue: ${title}`);
  } else if (await issueExists(title)) {
    console.log(`issue already exists: ${title}`);
  } else {
    console.log(`opened: ${await openIssue(title, body)}`);
  }
}

const table = [
  '## Release notes coverage',
  '',
  '| Component | Documented | Upstream stable | Status |',
  '|---|---|---|---|',
  ...rows.map((r) => `| ${r.join(' | ')} |`),
  '',
  gaps === 0 ? 'No gaps detected.' : `${gaps} gap(s) detected.`,
].join('\n');

console.log(table);
if (process.env.GITHUB_STEP_SUMMARY) appendFileSync(process.env.GITHUB_STEP_SUMMARY, table + '\n');
