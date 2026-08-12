// Generates a single consolidated Vale report for a PR.
//
// Runs Vale over the .md/.mdx files changed between BASE_SHA and HEAD_SHA
// (docs/ and sdks/ only), keeps findings on added lines, and renders
// a markdown report suitable for one sticky PR comment.
//
// Inputs:
//   env BASE_SHA, HEAD_SHA   required commit SHAs (PR base and head)
//   --out <path>             required output path for the comment report;
//                            the untruncated report is written to <path minus .md>.full.md
//   env GITHUB_OUTPUT        optional; receives has_findings/errors/warnings/suggestions
//   env GITHUB_SERVER_URL, GITHUB_REPOSITORY  optional; enable file/line links
//
// Exit code is 0 with or without findings; non-zero only on real failures.

import { execFileSync } from "node:child_process";
import fs from "node:fs";

const SCOPE = /^(docs|sdks)\/.*\.(md|mdx)$/;
const MAX_BODY = 60_000; // headroom under GitHub's 65536-char comment limit
const CHUNK = 50;
const ICONS = { error: "🔴", warning: "🟡", suggestion: "💡" };

function sh(cmd, args) {
  return execFileSync(cmd, args, {
    encoding: "utf8",
    maxBuffer: 64 * 1024 * 1024,
  });
}

// Parse added-line ranges per file from the PR diff, the equivalent of
// reviewdog's filter_mode: added.
function addedRanges(baseSha, headSha) {
  const diff = sh("git", [
    "-c",
    "core.quotepath=false",
    "diff",
    "--no-color",
    "--unified=0",
    "--diff-filter=ACMR",
    `${baseSha}...${headSha}`,
    "--",
    "docs",
    "sdks",
  ]);
  const ranges = new Map();
  let file = null;
  for (const line of diff.split("\n")) {
    if (line.startsWith("+++ b/")) {
      const path = line.slice(6);
      file = SCOPE.test(path) ? path : null;
      continue;
    }
    if (line.startsWith("+++ ")) {
      file = null; // e.g. +++ /dev/null for deletions
      continue;
    }
    if (!file) continue;
    const m = /^@@ .* \+(\d+)(?:,(\d+))? @@/.exec(line);
    if (m) {
      const start = Number(m[1]);
      const count = m[2] === undefined ? 1 : Number(m[2]);
      if (count > 0) {
        if (!ranges.has(file)) ranges.set(file, []);
        ranges.get(file).push({ start, end: start + count - 1 });
      }
    }
  }
  return ranges;
}

// Run Vale from the repo root so .vale.ini applies exactly as in local runs.
function runVale(files) {
  const alerts = new Map();
  for (let i = 0; i < files.length; i += CHUNK) {
    const out = sh("vale", [
      "--output=JSON",
      "--no-exit",
      ...files.slice(i, i + CHUNK),
    ]);
    if (!out.trim()) continue;
    for (const [path, fileAlerts] of Object.entries(JSON.parse(out))) {
      alerts.set(path, fileAlerts);
    }
  }
  return alerts;
}

function filterToAdded(alerts, ranges) {
  const findings = [];
  for (const [path, fileAlerts] of alerts) {
    const fileRanges = ranges.get(path);
    if (!fileRanges) continue;
    for (const a of fileAlerts) {
      const line = Number(a.Line);
      if (!Number.isInteger(line) || line < 1) continue;
      if (!fileRanges.some((r) => line >= r.start && line <= r.end)) continue;
      findings.push({
        file: path,
        line,
        severity: a.Severity,
        check: a.Check,
        message: a.Message,
      });
    }
  }
  findings.sort(
    (x, y) => x.file.localeCompare(y.file) || x.line - y.line
  );
  return findings;
}

function cell(text) {
  return String(text).replace(/\s+/g, " ").replaceAll("|", "\\|").trim();
}

function plural(n, word) {
  return `${n} ${word}${n === 1 ? "" : "s"}`;
}

const blobBase =
  process.env.GITHUB_SERVER_URL && process.env.GITHUB_REPOSITORY
    ? `${process.env.GITHUB_SERVER_URL}/${process.env.GITHUB_REPOSITORY}/blob/${process.env.HEAD_SHA}`
    : null;

function fileHeading(file) {
  return blobBase ? `#### [\`${file}\`](${blobBase}/${file})` : `#### \`${file}\``;
}

function lineCell(file, line) {
  return blobBase ? `[${line}](${blobBase}/${file}#L${line})` : `${line}`;
}

// Render one per-file table; maxRows caps the table for the truncated variant.
function fileSection(file, findings, maxRows = Infinity) {
  const shown = findings.slice(0, maxRows);
  const lines = [
    fileHeading(file),
    "",
    "| Line | Severity | Rule | Message |",
    "|---:|---|---|---|",
    ...shown.map(
      (f) =>
        `| ${lineCell(f.file, f.line)} | ${ICONS[f.severity] ?? ""} ${f.severity} | \`${f.check}\` | ${cell(f.message)} |`
    ),
  ];
  if (findings.length > shown.length) {
    lines.push(`| | | | …and ${findings.length - shown.length} more in this file |`);
  }
  lines.push("");
  return lines.join("\n");
}

function groupByFile(findings) {
  const groups = new Map();
  for (const f of findings) {
    if (!groups.has(f.file)) groups.set(f.file, []);
    groups.get(f.file).push(f);
  }
  return groups;
}

function render(findings, { maxRowsPerFile = Infinity, suggestionsInline = true } = {}) {
  const counts = { error: 0, warning: 0, suggestion: 0 };
  for (const f of findings) counts[f.severity] = (counts[f.severity] ?? 0) + 1;

  const parts = [
    "## 📝 Vale style check",
    "",
    `**${plural(counts.error, "error")} · ${plural(counts.warning, "warning")} · ${plural(counts.suggestion, "suggestion")}** on lines added in this PR.`,
    "",
  ];

  const hard = findings.filter((f) => f.severity !== "suggestion");
  const soft = findings.filter((f) => f.severity === "suggestion");

  for (const [file, group] of groupByFile(hard)) {
    parts.push(fileSection(file, group, maxRowsPerFile));
  }

  if (soft.length > 0) {
    if (suggestionsInline) {
      parts.push(`<details><summary>💡 ${plural(soft.length, "suggestion")}</summary>`, "");
      for (const [file, group] of groupByFile(soft)) {
        parts.push(fileSection(file, group, maxRowsPerFile));
      }
      parts.push("</details>", "");
    } else {
      parts.push(
        `💡 ${plural(soft.length, "suggestion")} omitted (comment size limit); see the workflow job summary for the full report.`,
        ""
      );
    }
  }

  parts.push(
    "<sub>Vale checks only lines added in this PR and never blocks merge. Rules live in `.github/styles/Midnight/`. Run `vale <file>` locally to see all findings for a page.</sub>"
  );
  return parts.join("\n");
}

// Truncation ladder: full render, then collapse suggestions to a count,
// then also cap rows per file.
function renderForComment(findings) {
  const attempts = [
    {},
    { suggestionsInline: false },
    { suggestionsInline: false, maxRowsPerFile: 20 },
    { suggestionsInline: false, maxRowsPerFile: 5 },
  ];
  for (const options of attempts) {
    const body = render(findings, options);
    if (body.length <= MAX_BODY) return body;
  }
  return render(findings.slice(0, 50), { suggestionsInline: false, maxRowsPerFile: 5 });
}

// --- main ---
const { BASE_SHA, HEAD_SHA } = process.env;
const outFlag = process.argv.indexOf("--out");
const outPath = outFlag === -1 ? null : process.argv[outFlag + 1];
if (!BASE_SHA || !HEAD_SHA || !outPath) {
  console.error("Usage: BASE_SHA=<sha> HEAD_SHA=<sha> node scripts/vale-report.mjs --out <path>");
  process.exit(1);
}

const ranges = addedRanges(BASE_SHA, HEAD_SHA);
const files = [...ranges.keys()];
const findings = files.length ? filterToAdded(runVale(files), ranges) : [];

const clean = "## 📝 Vale style check\n\nNo issues on lines added in this PR.\n";
const fullReport = findings.length ? render(findings) : clean;
const commentReport = findings.length ? renderForComment(findings) : clean;

fs.writeFileSync(outPath, commentReport);
fs.writeFileSync(outPath.replace(/\.md$/, "") + ".full.md", fullReport);

if (process.env.GITHUB_OUTPUT) {
  const counts = { error: 0, warning: 0, suggestion: 0 };
  for (const f of findings) counts[f.severity] = (counts[f.severity] ?? 0) + 1;
  fs.appendFileSync(
    process.env.GITHUB_OUTPUT,
    `has_findings=${findings.length > 0}\n` +
      `errors=${counts.error}\nwarnings=${counts.warning}\nsuggestions=${counts.suggestion}\n`
  );
}

console.log(
  `${findings.length} finding(s) on added lines across ${files.length} changed file(s) in scope`
);
