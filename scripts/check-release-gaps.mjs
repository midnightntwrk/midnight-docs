// This file is part of midnight-docs.
// Copyright (C) Midnight Foundation
// SPDX-License-Identifier: Apache-2.0
//
// Detects upstream component releases that have no release notes in the docs.
//
// For each component, the script fetches the GitHub releases of the product
// repo and classifies them: a release is a prerelease when its tag has an
// rc/beta/alpha suffix or GitHub flags it as a prerelease, and stable
// otherwise. Both checks are needed. The tag suffix catches prereleases the
// product repos forget to flag (node-2.1.0-rc.1 shipped flagged as stable),
// and the flag catches releases that are not public yet even though the tag
// looks final (node-1.0.2 runs on the networks but the node team has not
// released it publicly, so the docs wait). Drafts are skipped.
//
// A stable release is a gap when it has no entry in the component's
// DynamicList file and it is newer than the oldest entry the list still marks
// LATEST or SUPPORTED. That catches holes behind the newest version (an
// indexer 4.1.0 missing between documented 4.0.2 and 4.3.2), not just a lagging
// latest, while ignoring history older than the supported window.
//
// A component that ships as an npm package can set `npm` to its package name.
// A stable tag whose version was never published to that package is a
// version-alignment tag, not a release readers can install, so it is reported
// in the summary table but never opened as an issue. Compact JS 2.5.2 is the
// case this exists for: it was tagged during the midnight-sdk repository
// migration, never published to npm, and 2.5.3 supersedes it. The registry
// lookup fails open, so an npm outage can never hide a real gap.
//
// When a gap is found, the script opens one GitHub issue per component and
// version (title: "Release notes gap: <component> <version>"). An issue that
// already exists for that title, open or closed, is never recreated, so
// closing an issue as "won't document" silences that version for good.
//
// The newest upstream prerelease is reported in the summary table for
// information only; no issue is opened for it.
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

// tag: anchored regex whose first capture group is the version, with any
// prerelease suffix included so prereleases can be reported in the summary.
// npm (optional): package whose published versions decide whether a stable tag
// is a real release. Only set it for a component whose git tag versions and
// npm versions are the same numbers.
const COMPONENTS = [
  { name: 'Node',               repo: 'midnightntwrk/midnight-node',               tag: /^node-(\d+\.\d+\.\d+(?:-[0-9A-Za-z.]+)?)$/,                                  list: 'src/components/DynamicListNode.js' },
  { name: 'Ledger',             repo: 'midnightntwrk/midnight-ledger',             tag: /^ledger-(\d+\.\d+\.\d+(?:\.\d+)?(?:-[0-9A-Za-z.]+)?)$/,                                list: 'src/components/DynamicListLedger.js' },
  { name: 'Midnight Indexer',   repo: 'midnightntwrk/midnight-indexer',            tag: /^v(\d+\.\d+\.\d+(?:-[0-9A-Za-z.]+)?)$/,                                      list: 'src/components/DynamicListMidnightIndexer.js' },
  { name: 'Midnight.js',        repo: 'midnightntwrk/midnight-js',                 tag: /^v(\d+\.\d+\.\d+(?:-[0-9A-Za-z.]+)?)$/,                                      list: 'src/components/DynamicListMidnightJS.js' },
  { name: 'DApp Connector API', repo: 'midnightntwrk/midnight-dapp-connector-api', tag: /^v(\d+\.\d+\.\d+(?:-[0-9A-Za-z.]+)?)$/,                                      list: 'src/components/DynamicListDappConnectorAPI.js' },
  { name: 'Compact toolchain',  repo: 'midnightntwrk/compact',                     tag: /^compactc-v(\d+\.\d+\.\d+(?:-[0-9A-Za-z.]+)?)$/,                             list: 'src/components/DynamicListCompact.js' },
  { name: 'Compact devtools',   repo: 'midnightntwrk/compact',                     tag: /^compact-v(\d+\.\d+\.\d+(?:-[0-9A-Za-z.]+)?)$/,                              list: 'src/components/DynamicListCompactTools.js' },
  { name: 'Compact JS',         repo: 'midnightntwrk/midnight-sdk',                tag: /^compact-js-v(\d+\.\d+\.\d+(?:-[0-9A-Za-z.]+)?)$/,                           list: 'src/components/DynamicListCompactJS.js', npm: '@midnight-ntwrk/compact-js' },
  { name: 'Wallet SDK',         repo: 'midnightntwrk/midnight-wallet',             tag: /^@midnight-?ntwrk\/wallet-sdk@(\d+\.\d+\.\d+(?:-[0-9A-Za-z.]+)?)$/,   list: 'src/components/DynamicListWallet.js' },
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

// Suffix that marks a prerelease tag (-rc.1, -beta.3, -alpha.1).
const PRERELEASE = /[-+][0-9A-Za-z.]+$/;

// Numeric comparison of the x.y.z part; a prerelease suffix is ignored.
const cmpVersion = (a, b) => {
  const pa = a.replace(PRERELEASE, '').split('.').map(Number);
  const pb = b.replace(PRERELEASE, '').split('.').map(Number);
  for (let i = 0; i < Math.max(pa.length, pb.length); i++) {
    const d = (pa[i] ?? 0) - (pb[i] ?? 0);
    if (d !== 0) return d;
  }
  return 0;
};

// Every entry in the DynamicList, newest first, with its status.
const documentedEntries = (listFile) => {
  if (!existsSync(listFile)) return [];
  const src = readFileSync(listFile, 'utf8');
  const entries = [];
  const re = /version: '([^']+)'[\s\S]*?status: '([^']+)'/g;
  let m;
  while ((m = re.exec(src)) !== null) entries.push({ version: m[1], status: m[2] });
  return entries;
};

// Oldest version still marked LATEST or SUPPORTED; anything older is out of
// the window and never reported.
const supportedFloor = (entries) => {
  const supported = entries.filter((e) => e.status === 'LATEST' || e.status === 'SUPPORTED');
  if (supported.length === 0) return entries[0]?.version ?? null;
  return supported.reduce((min, e) => (cmpVersion(e.version, min) < 0 ? e.version : min), supported[0].version);
};

// All non-draft releases matching the component's tag shape, split into
// stable and prerelease by the tag suffix and the GitHub prerelease flag.
const upstreamReleases = async (component) => {
  // Two pages cover repos whose recent history is dominated by prereleases.
  const releases = [
    ...(await api(`/repos/${component.repo}/releases?per_page=100`)),
    ...(await api(`/repos/${component.repo}/releases?per_page=100&page=2`)),
  ];
  const stable = [];
  const prerelease = [];
  for (const r of releases) {
    if (r.draft) continue;
    const m = r.tag_name.match(component.tag);
    if (!m) continue;
    const entry = { version: m[1], url: r.html_url, publishedAt: r.published_at };
    (r.prerelease || PRERELEASE.test(m[1]) ? prerelease : stable).push(entry);
  }
  const newest = (list) =>
    list.reduce((best, e) => (!best || cmpVersion(e.version, best.version) > 0 ? e : best), null);
  return { stable, newestStable: newest(stable), newestPrerelease: newest(prerelease) };
};

// Versions that actually exist on npm for a package, or null when the lookup
// fails. Null means "do not filter", so a registry outage never hides a gap.
const npmVersions = async (pkg) => {
  try {
    const res = await fetch(`https://registry.npmjs.org/${encodeURIComponent(pkg)}`, {
      headers: { Accept: 'application/vnd.npm.install-v1+json' },
    });
    if (!res.ok) throw new Error(`${res.status} ${await res.text()}`);
    return new Set(Object.keys((await res.json()).versions ?? {}));
  } catch (e) {
    console.error(`npm lookup failed for ${pkg}: ${e.message}`);
    return null;
  }
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
  const entries = documentedEntries(c.list);
  const documented = entries[0]?.version ?? null;
  const floor = supportedFloor(entries);
  const known = new Set(entries.map((e) => e.version));
  let upstream;
  try {
    upstream = await upstreamReleases(c);
  } catch (e) {
    rows.push([c.name, documented ?? '?', 'lookup failed', '', ':warning:']);
    console.error(`${c.name}: ${e.message}`);
    continue;
  }
  const pre = upstream.newestPrerelease;
  const preCell = pre && documented && cmpVersion(pre.version, documented) > 0 ? pre.version : '';
  if (!upstream.newestStable || !documented) {
    rows.push([c.name, documented ?? 'none', upstream.newestStable?.version ?? 'none', preCell, ':grey_question:']);
    continue;
  }

  // Stable releases inside the supported window with no DynamicList entry.
  let missing = upstream.stable
    .filter((r) => !known.has(r.version) && (!floor || cmpVersion(r.version, floor) > 0))
    .sort((a, b) => cmpVersion(a.version, b.version));

  // Drop version-alignment tags: a stable tag the package never published is
  // not installable, so it gets no release notes.
  let unpublished = [];
  if (c.npm && missing.length > 0) {
    const published = await npmVersions(c.npm);
    if (published) {
      unpublished = missing.filter((r) => !published.has(r.version)).map((r) => r.version);
      missing = missing.filter((r) => published.has(r.version));
    }
  }
  const note = unpublished.length > 0 ? ` (not on npm: ${unpublished.join(', ')})` : '';

  if (missing.length === 0) {
    rows.push([c.name, documented, upstream.newestStable.version, preCell, `:white_check_mark:${note}`]);
    continue;
  }

  gaps += missing.length;
  rows.push([c.name, documented, upstream.newestStable.version, preCell, `:x: missing ${missing.map((r) => r.version).join(', ')}${note}`]);

  for (const r of missing) {
    const title = `Release notes gap: ${c.name} ${r.version}`;
    const body = [
      `The ${c.name} ${r.version} release has no release notes in the docs.`,
      '',
      `- Newest documented entry in \`${c.list}\`: **${documented}**`,
      `- Oldest entry still marked LATEST or SUPPORTED: **${floor}** (releases older than this are not reported)`,
      `- Upstream release: **${r.version}**, published ${r.publishedAt?.slice(0, 10)}`,
      `- Release: ${r.url}`,
      '',
      'To resolve, run the `sync-release-notes.yml` workflow for this component if the version is the newest, or add the page and DynamicList entry by hand for an older version (the workflow always marks the new entry LATEST). Then check whether the support matrix needs an update.',
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
}

const table = [
  '## Release notes coverage',
  '',
  '| Component | Documented | Upstream stable | Newer prerelease | Status |',
  '|---|---|---|---|---|',
  ...rows.map((r) => `| ${r.join(' | ')} |`),
  '',
  gaps === 0 ? 'No gaps detected.' : `${gaps} gap(s) detected.`,
].join('\n');

console.log(table);
if (process.env.GITHUB_STEP_SUMMARY) appendFileSync(process.env.GITHUB_STEP_SUMMARY, table + '\n');
