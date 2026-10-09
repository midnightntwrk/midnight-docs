// This file is part of midnight-docs.
// Copyright (C) Midnight Foundation
// SPDX-License-Identifier: Apache-2.0
//
// Compiles the Compact code samples in the docs with the toolchain version
// pinned in the compatibility matrix (docs/relnotes/support-matrix.json).
//
// The script reads every ```compact code block in docs/, sdks/, and blog/.
// It skips docs/compact/, which is synced from the compiler repo; send
// failures there to mn-codeowners-compact instead.
//
// What happens to a block depends on its content and on the words after the
// language on its opening fence. Docusaurus ignores these words, so readers
// never see them.
//
//   ```compact                A block with a `pragma language_version` line is
//                             a whole contract and must compile. A block
//                             without one is a fragment and is not compiled.
//                             A fragment that starts with `module NAME {` is
//                             saved as NAME.compact next to every contract on
//                             the page, so `import "NAME"` works.
//   ```compact fragment       Not compiled, even with a pragma. Use it for a
//                             partial contract that starts with the pragma.
//   ```compact nocompile      Not compiled. Use it for code that is not meant
//                             to compile with the pinned toolchain, such as old
//                             syntax in a release note or a known-bad example.
//   ```compact group=NAME     Every block on the page with the same group is
//                             joined in page order and compiled as one
//                             contract, so a tutorial that builds a contract
//                             step by step is checked as a whole. NAME uses
//                             letters, digits, - and _.
//   ```compact group=NAME file=schnorr.compact
//                             Puts the block in its own file next to the rest
//                             of the group, so the contract can import it.
//                             The group compiles the file that has the pragma.
//                             The file is a relative path ending in .compact.
//
// The pin is the Compact toolchain row of the matrix, using the Mainnet column
// when the networks differ. Every compile runs
// `compact compile +VERSION --skip-zk`, so that toolchain must already be
// installed (`compact update VERSION`).
//
// Usage:
//   node scripts/compile-doc-samples.mjs                 # every sample
//   node scripts/compile-doc-samples.mjs docs/tutorials  # samples under a path
//   node scripts/compile-doc-samples.mjs --base main     # samples changed since main
//   node scripts/compile-doc-samples.mjs --list          # classify only, no compiling
//
// Options:
//   --base <ref>       Only compile samples that are new or changed since the
//                      merge base with <ref>. Also read from env BASE_SHA.
//                      When the pinned toolchain or this checker changes,
//                      every sample counts as changed.
//   --toolchain <ver>  Compiler version to use instead of the matrix pin.
//   --list             Print what would be compiled, without compiling.
//   --json <file>      Write the results as JSON.
//   --jobs <n>         Parallel compiles (default: up to 4).
//   --keep <dir>       Keep the extracted sources and compiler output in <dir>.
//
// Outputs: a table on stdout, GitHub annotations and a job summary when run
// in GitHub Actions, and `samples`, `failed`, and `toolchain` in
// $GITHUB_OUTPUT when that is set.
//
// Exit codes: 0 when every compiled sample passes or there is nothing to
// compile, 1 when at least one sample fails, 2 on a usage or setup error.

import { execFileSync, spawn } from "node:child_process";
import { createHash } from "node:crypto";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SCAN_ROOTS = ["docs", "sdks", "blog"];
const EXCLUDED = ["docs/compact/"];
const MATRIX = "docs/relnotes/support-matrix.json";
const CHECKER_FILES = [
  "scripts/compile-doc-samples.mjs",
  ".github/workflows/compile-doc-samples.yml"
];
const PRAGMA = /^\s*pragma\s+language_version\b/m;
const UNPINNED = /^import\s+CompactStandardLibrary\s*;/m;
const TOP_LEVEL = /^(export\s+)?(circuit|ledger)\s/m;
const MODULE = /^\s*module\s/m;
const MODULE_DEF = /^\s*(?:export\s+)?module\s+([A-Za-z_]\w*)\s*\{/;
const SAFE_FILE = /^(?!.*\.\.)[\w.-]+(\/[\w.-]+)*\.compact$/;
const SAFE_GROUP = /^[\w-]+$/;
const COMPILE_TIMEOUT_MS = 180_000;

class SetupError extends Error {}

// ---------------------------------------------------------------- arguments

function parseArgs(argv) {
  const opts = { paths: [], jobs: Math.min(4, os.cpus().length || 1) };
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    const value = () => {
      if (i + 1 >= argv.length) throw new SetupError(`${arg} needs a value`);
      return argv[++i];
    };
    if (arg === "--base") opts.base = value();
    else if (arg === "--toolchain") opts.toolchain = value();
    else if (arg === "--json") opts.json = value();
    else if (arg === "--keep") opts.keep = value();
    else if (arg === "--jobs") opts.jobs = Math.max(1, Number(value()) || 1);
    else if (arg === "--list") opts.list = true;
    else if (arg === "--help" || arg === "-h") opts.help = true;
    else if (arg.startsWith("-")) throw new SetupError(`unknown option ${arg}`);
    else opts.paths.push(arg);
  }
  if (!opts.base && process.env.BASE_SHA) opts.base = process.env.BASE_SHA;
  return opts;
}

// ------------------------------------------------------------------ helpers

const rel = (p) =>
  path.relative(ROOT, path.resolve(p)).split(path.sep).join("/");
const sha = (s) => createHash("sha256").update(s).digest("hex");
const inScope = (p) =>
  /\.mdx?$/.test(p) &&
  SCAN_ROOTS.some((r) => p.startsWith(`${r}/`)) &&
  !EXCLUDED.some((e) => p.startsWith(e));

function git(args) {
  return execFileSync("git", args, {
    cwd: ROOT,
    encoding: "utf8",
    maxBuffer: 64 * 1024 * 1024,
    stdio: ["ignore", "pipe", "pipe"]
  });
}

function gitShow(ref, file) {
  try {
    return git(["show", `${ref}:${file}`]);
  } catch {
    return null; // the file does not exist at that ref
  }
}

function walk(dir, out) {
  if (!fs.existsSync(dir)) return out;
  if (fs.statSync(dir).isFile()) {
    out.push(rel(dir));
    return out;
  }
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === "node_modules" || entry.name.startsWith(".")) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else out.push(rel(full));
  }
  return out;
}

// ------------------------------------------------------------- toolchain pin

// The toolchain row of the matrix. Mainnet wins when the networks differ.
function toolchainFromMatrix(text) {
  let matrix;
  try {
    matrix = JSON.parse(text);
  } catch (e) {
    throw new SetupError(`${MATRIX} is not valid JSON: ${e.message}`);
  }
  const row = (matrix.components ?? []).find((c) =>
    /^compact toolchain$/i.test(c.component ?? "")
  );
  for (const network of ["mainnet", "preprod", "preview"]) {
    const tag = row?.versions?.[network]?.tag ?? "";
    const version = /(\d+\.\d+\.\d+(?:-[\w.]+)?)$/.exec(tag)?.[1];
    if (version) return version;
  }
  throw new SetupError(`no Compact toolchain version found in ${MATRIX}`);
}

// ---------------------------------------------------------------- extraction

function parseMeta(meta) {
  const words = new Set();
  const attrs = {};
  for (const m of meta.matchAll(
    /([A-Za-z][\w-]*)(?:=("[^"]*"|'[^']*'|\S+))?/g
  )) {
    if (m[2] === undefined) words.add(m[1]);
    else attrs[m[1]] = m[2].replace(/^["']|["']$/g, "");
  }
  return { words, attrs };
}

// Returns the ```compact blocks of one page, with their position on the page.
function extractBlocks(page, text) {
  const lines = text.split(/\r?\n/);
  const blocks = [];
  let open = null;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (!open) {
      const m = /^( *)(`{3,}|~{3,})(.*)$/.exec(line);
      if (!m || (m[2][0] === "`" && m[3].includes("`"))) continue;
      const info = m[3].trim();
      const lang = /^[^\s{]*/.exec(info)[0];
      open = {
        indent: m[1].length,
        fence: m[2],
        lang: lang.toLowerCase(),
        meta: info.slice(lang.length).trim(),
        line: i + 1,
        body: []
      };
      continue;
    }
    const close = /^ *(`{3,}|~{3,})\s*$/.exec(line);
    if (
      close &&
      close[1][0] === open.fence[0] &&
      close[1].length >= open.fence.length
    ) {
      if (open.lang === "compact") blocks.push(classify(page, open));
      open = null;
    } else {
      const strip = Math.min(
        open.indent,
        line.length - line.trimStart().length
      );
      open.body.push(line.slice(strip));
    }
  }
  // An unclosed fence runs to the end of the page, as it does when rendered.
  if (open?.lang === "compact") blocks.push(classify(page, open));
  return blocks;
}

function classify(page, open) {
  const { words, attrs } = parseMeta(open.meta);
  const code = open.body.join("\n");
  let role;
  if (words.has("nocompile")) role = "nocompile";
  else if (attrs.group) role = "group";
  else if (words.has("fragment")) role = "fragment";
  else if (PRAGMA.test(code)) role = "contract";
  else role = "fragment";
  const first = open.body.find((l) => l.trim() && !l.trim().startsWith("//"));
  return {
    page,
    line: open.line, // the opening fence
    firstLine: open.line + 1, // the first line of code
    code,
    role,
    group: attrs.group,
    file: attrs.file,
    // A block that defines a module can be imported by the page's contracts.
    module:
      role === "nocompile" ? undefined : MODULE_DEF.exec(first ?? "")?.[1],
    // An unmarked block without a pragma that reads like a whole contract.
    // It is not compiled, but the report lists it so someone can add the
    // missing pragma.
    unpinned:
      role === "fragment" &&
      !words.has("fragment") &&
      !PRAGMA.test(code) &&
      !MODULE.test(code) &&
      UNPINNED.test(code) &&
      TOP_LEVEL.test(code)
  };
}

// A unit is what gets compiled: one whole-contract block, or one group.
// Module blocks on the page go along as NAME.compact so that a contract can
// import them, the way a tutorial asks readers to create schnorr.compact.
function buildUnits(page, blocks) {
  const units = [];
  const groups = new Map();
  const modules = blocks.filter((b) => b.module);
  for (const b of blocks) {
    if (b.role === "contract") units.push(makeUnit(page, [b], null, modules));
    if (b.role !== "group") continue;
    if (!groups.has(b.group)) {
      groups.set(b.group, []);
      units.push({ placeholder: b.group }); // keep page order
    }
    groups.get(b.group).push(b);
  }
  return units.map((u) =>
    u.placeholder
      ? makeUnit(page, groups.get(u.placeholder), u.placeholder, modules)
      : u
  );
}

function makeUnit(page, blocks, group, modules) {
  const problems = [];
  if (group && !SAFE_GROUP.test(group))
    problems.push(
      `line ${blocks[0].line}: group=${group} may only use letters, digits, - and _`
    );
  const files = new Map();
  for (const b of blocks) {
    let name =
      group && SAFE_GROUP.test(group) ? `${group}.compact` : "sample.compact";
    if (b.file) {
      if (!group)
        problems.push(`line ${b.line}: file= only works together with group=`);
      else if (!SAFE_FILE.test(b.file))
        problems.push(
          `line ${b.line}: file=${b.file} must be a relative path ending in .compact`
        );
      else name = b.file;
    }
    if (!files.has(name))
      files.set(name, { name, text: "", lines: 0, segments: [] });
    const f = files.get(name);
    const count = b.code.split("\n").length;
    f.segments.push({ block: b, start: f.lines + 1, count });
    f.text += `${b.code}\n`;
    f.lines += count;
  }
  const own = [...files.values()];
  const entry = (own.find((f) => PRAGMA.test(f.text)) ?? own[0]).name;
  for (const m of modules) {
    const name = `${m.module}.compact`;
    if (blocks.includes(m) || files.has(name)) continue;
    const count = m.code.split("\n").length;
    files.set(name, {
      name,
      text: `${m.code}\n`,
      lines: count,
      segments: [{ block: m, start: 1, count }]
    });
  }
  const list = [...files.values()];
  const key = sha(
    JSON.stringify([group, entry, list.map((f) => [f.name, f.text]), problems])
  );
  return {
    page,
    line: blocks[0].line,
    group,
    blocks,
    files: list,
    entry,
    key,
    problems
  };
}

function scanPage(page, text) {
  const blocks = extractBlocks(page, text);
  return { page, blocks, units: buildUnits(page, blocks) };
}

// ------------------------------------------------------------------ scoping

// Picks the pages to scan and, with a base ref, the units that changed.
// Change detection compares the merge base with the working tree, so local
// runs see uncommitted edits too. A unit counts as changed when the code it
// compiles is not on the page at the merge base, so moving a block or editing
// the prose around it does not trigger a compile.
function plan(opts) {
  const targets = opts.paths.length
    ? opts.paths.map((p) => path.resolve(p))
    : SCAN_ROOTS.map((r) => path.join(ROOT, r));
  const pages = [
    ...new Set(targets.flatMap((t) => walk(t, [])).filter(inScope))
  ].sort();
  const scans = pages.map((p) =>
    scanPage(p, fs.readFileSync(path.join(ROOT, p), "utf8"))
  );
  const headPin = toolchainFromMatrix(
    fs.readFileSync(path.join(ROOT, MATRIX), "utf8")
  );
  const result = {
    scans,
    pages: new Set(pages),
    toolchain: opts.toolchain ?? headPin,
    mode: "all",
    reason: ""
  };
  let units = scans.flatMap((s) => s.units);

  if (opts.base) {
    let mergeBase;
    try {
      mergeBase = git(["merge-base", opts.base, "HEAD"]).trim();
    } catch {
      throw new SetupError(
        `cannot find a merge base between ${opts.base} and HEAD (fetch more history?)`
      );
    }
    const changed = [
      ...git(["diff", "--name-only", "--no-renames", "-z", mergeBase]).split(
        "\0"
      ),
      ...git(["ls-files", "--others", "--exclude-standard", "-z"]).split("\0")
    ].filter(Boolean);
    const baseMatrix = gitShow(mergeBase, MATRIX);
    const basePin = baseMatrix ? toolchainFromMatrix(baseMatrix) : null;
    const checkerChanged = changed.some((f) => CHECKER_FILES.includes(f));
    result.base = mergeBase;
    if (checkerChanged || basePin !== headPin) {
      result.reason = checkerChanged
        ? "this change edits the sample checker, so every sample is checked"
        : `the pinned toolchain changed from ${basePin} to ${headPin}, so every sample is checked`;
    } else {
      result.mode = "changed";
      result.pages = new Set(changed.filter((f) => result.pages.has(f)));
      units = [];
      for (const scan of scans) {
        if (!result.pages.has(scan.page)) continue;
        const before = gitShow(mergeBase, scan.page);
        const old = new Set(
          before === null
            ? []
            : scanPage(scan.page, before).units.map((u) => u.key)
        );
        units.push(...scan.units.filter((u) => !old.has(u.key)));
      }
      result.reason = `only samples that are new or changed since ${mergeBase.slice(0, 12)} are checked`;
    }
  }
  result.units = units;
  return result;
}

// ---------------------------------------------------------------- compiling

function run(cmd, args, cwd) {
  return new Promise((resolve) => {
    let output = "";
    let timedOut = false;
    const child = spawn(cmd, args, { cwd, env: process.env });
    const timer = setTimeout(() => {
      timedOut = true;
      child.kill("SIGKILL");
    }, COMPILE_TIMEOUT_MS);
    child.stdout.on("data", (d) => (output += d));
    child.stderr.on("data", (d) => (output += d));
    child.on("error", (error) => {
      clearTimeout(timer);
      resolve({ code: null, output, error });
    });
    child.on("close", (code) => {
      clearTimeout(timer);
      resolve({
        code,
        output: timedOut
          ? `${output}\ncompile timed out after ${COMPILE_TIMEOUT_MS / 1000}s`
          : output
      });
    });
  });
}

async function checkToolchain(toolchain) {
  const r = await run(
    "compact",
    ["compile", `+${toolchain}`, "--version"],
    ROOT
  );
  if (r.error?.code === "ENOENT") {
    throw new SetupError(
      "the Compact CLI (compact) is not on PATH. Install it as described in docs/getting-started/installation.mdx"
    );
  }
  if (r.code !== 0) {
    throw new SetupError(
      `Compact toolchain ${toolchain} is not installed. Run: compact update ${toolchain}\n${r.output.trim()}`
    );
  }
}

// Maps "file line N" in compiler output back to a line on the docs page.
function locate(unit, fileName, line) {
  const file =
    unit.files.find((f) => f.name === fileName) ??
    unit.files.find(
      (f) =>
        fileName &&
        (fileName.endsWith(`/${f.name}`) || f.name.endsWith(`/${fileName}`))
    );
  if (!file || !line) return { page: unit.page, line: unit.line };
  const seg =
    file.segments.find((s) => line >= s.start && line < s.start + s.count) ??
    file.segments.at(-1);
  const offset = Math.min(Math.max(line - seg.start, 0), seg.count - 1);
  return { page: unit.page, line: seg.block.firstLine + offset };
}

// Turns compiler output into a page location and a message whose
// "line N char M" references are page lines too.
function parseFailure(unit, output) {
  const text =
    output.replace(/\r/g, "").trim() || "the compiler failed with no output";
  const m = /Exception:\s*(?:(.+?) line (\d+) char (\d+):\s*\n)?([\s\S]*)/.exec(
    text
  );
  const file = m?.[1] ?? unit.entry;
  const message = (m ? m[4] : text)
    .split("\n")
    .map((l) => l.replace(/^ {2}/, ""))
    .join("\n")
    .trim()
    .replace(
      /\bline (\d+) char (\d+)/g,
      (_, n, c) => `line ${locate(unit, file, Number(n)).line} char ${c}`
    );
  return {
    where: m?.[2]
      ? locate(unit, file, Number(m[2]))
      : { page: unit.page, line: unit.line },
    message,
    summary: message.replace(/\s+/g, " ").trim()
  };
}

async function compileUnit(unit, index, toolchain, workDir) {
  if (unit.problems.length) {
    const message = unit.problems.join("\n");
    return {
      unit,
      ok: false,
      ms: 0,
      where: { page: unit.page, line: unit.line },
      message,
      summary: unit.problems[0]
    };
  }
  const dir = path.join(workDir, String(index).padStart(3, "0"));
  for (const f of unit.files) {
    fs.mkdirSync(path.dirname(path.join(dir, f.name)), { recursive: true });
    fs.writeFileSync(path.join(dir, f.name), f.text);
  }
  const started = Date.now();
  const r = await run(
    "compact",
    ["compile", `+${toolchain}`, "--skip-zk", unit.entry, "out"],
    dir
  );
  const ms = Date.now() - started;
  if (r.code === 0) return { unit, ok: true, ms };
  return {
    unit,
    ok: false,
    ms,
    ...parseFailure(unit, r.output || String(r.error ?? ""))
  };
}

async function compileAll(units, toolchain, jobs, workDir) {
  const results = new Array(units.length);
  let next = 0;
  async function worker() {
    while (next < units.length) {
      const i = next++;
      results[i] = await compileUnit(units[i], i, toolchain, workDir);
    }
  }
  await Promise.all(
    Array.from({ length: Math.min(jobs, units.length) }, worker)
  );
  return results;
}

// ---------------------------------------------------------------- reporting

const plural = (n, word) => `${n} ${word}${n === 1 ? "" : "s"}`;
const label = (u) =>
  u.group
    ? `group ${u.group}, ${plural(u.blocks.length, "block")}`
    : "contract";
const shorten = (s, n) => (s.length > n ? `${s.slice(0, n - 3)}...` : s);
const where = (r) =>
  r.ok ? `${r.unit.page}:${r.unit.line}` : `${r.where.page}:${r.where.line}`;

// Block counts and unpinned contracts for the pages this run looked at.
function overview(p) {
  const c = { pages: 0, contract: 0, group: 0, fragment: 0, nocompile: 0 };
  const unpinned = [];
  for (const s of p.scans) {
    if (!p.pages.has(s.page) || !s.blocks.length) continue;
    c.pages++;
    for (const b of s.blocks) {
      c[b.role]++;
      if (b.unpinned) unpinned.push(`${b.page}:${b.line}`);
    }
  }
  return { c, unpinned };
}

function headerLines(p, opts) {
  const { c } = overview(p);
  const source = opts.toolchain
    ? "set with --toolchain"
    : `pinned in ${MATRIX}`;
  return [
    `Compact toolchain ${p.toolchain} (${source})`,
    `Scope: ${p.reason || "every sample"}.`,
    `Compact blocks on ${plural(c.pages, "page")}: ${plural(c.contract, "whole contract")}, ${c.group} in groups, ` +
      `${plural(c.fragment, "fragment")}, ${c.nocompile} marked nocompile.`
  ];
}

function printTable(rows) {
  const widths = rows[0].map((_, i) =>
    Math.max(...rows.map((r) => r[i].length))
  );
  for (const r of rows)
    console.log(
      r
        .map((cell, i) => cell.padEnd(widths[i]))
        .join("  ")
        .trimEnd()
    );
}

const escapeData = (s) =>
  s.replace(/%/g, "%25").replace(/\r/g, "%0D").replace(/\n/g, "%0A");
const escapeProp = (s) =>
  escapeData(s).replace(/:/g, "%3A").replace(/,/g, "%2C");

function writeOutputs(values) {
  if (!process.env.GITHUB_OUTPUT) return;
  fs.appendFileSync(
    process.env.GITHUB_OUTPUT,
    Object.entries(values)
      .map(([k, v]) => `${k}=${v}\n`)
      .join("")
  );
}

const HOW_TO_FIX =
  "To fix a failure, correct the sample. If the block is not meant to compile on its own, mark its fence: " +
  "`compact fragment` for part of a contract, `compact nocompile` for old or deliberately broken code, or " +
  "`compact group=NAME` on several blocks that make one contract. The header of " +
  "scripts/compile-doc-samples.mjs explains each marker.";

function markdownSummary(p, results, opts) {
  const { unpinned } = overview(p);
  const failed = results.filter((r) => !r.ok);
  const out = [
    `## Compact samples`,
    "",
    ...headerLines(p, opts).map((l) => `${l}  `),
    ""
  ];
  if (!results.length) out.push("No Compact samples to compile.", "");
  else {
    out.push(
      `**${results.length - failed.length} of ${results.length} compiled samples passed.**`,
      ""
    );
    out.push(
      "| Result | Sample | What | Compiler error |",
      "|---|---|---|---|"
    );
    for (const r of [...failed, ...results.filter((x) => x.ok)]) {
      const err = r.ok
        ? ""
        : `\`${shorten(r.summary, 140).replace(/\|/g, "\\|").replace(/`/g, "'")}\``;
      out.push(
        `| ${r.ok ? "pass" : "**fail**"} | \`${where(r)}\` | ${label(r.unit)} | ${err} |`
      );
    }
    out.push("");
  }
  if (failed.length) out.push(HOW_TO_FIX, "");
  if (unpinned.length) {
    out.push(
      "These blocks read like whole contracts but have no `pragma language_version` line, so they are not compiled. " +
        "Adding the pragma gets them checked:",
      "",
      ...unpinned.map((u) => `- \`${u}\``),
      ""
    );
  }
  return out.join("\n");
}

function report(p, results, opts) {
  const { c, unpinned } = overview(p);
  const failed = results.filter((r) => !r.ok);
  for (const line of headerLines(p, opts)) console.log(line);
  console.log("");
  if (results.length) {
    const rows = [["RESULT", "SAMPLE", "WHAT", "TIME", "COMPILER ERROR"]];
    for (const r of results) {
      rows.push([
        r.ok ? "pass" : "FAIL",
        where(r),
        label(r.unit),
        `${(r.ms / 1000).toFixed(1)}s`,
        r.ok ? "" : shorten(r.summary, 100)
      ]);
    }
    printTable(rows);
    console.log("");
  }
  for (const r of failed) {
    console.log(
      `FAIL ${where(r)} (${r.unit.group ? `group ${r.unit.group}, first block` : "block"} at line ${r.unit.line})`
    );
    console.log(r.message.replace(/^/gm, "    "));
    console.log("");
    if (process.env.GITHUB_ACTIONS) {
      const title = `Compact sample does not compile with toolchain ${p.toolchain}`;
      console.log(
        `::error file=${escapeProp(r.where.page)},line=${r.where.line},title=${escapeProp(title)}::${escapeData(r.message)}`
      );
    }
  }
  if (failed.length) console.log(`${HOW_TO_FIX}\n`);
  if (unpinned.length) {
    console.log(
      "Not compiled because there is no pragma, but these read like whole contracts:"
    );
    for (const u of unpinned) console.log(`  ${u}`);
    console.log("");
  }
  console.log(
    results.length
      ? `${results.length - failed.length} of ${results.length} compiled samples passed.`
      : "No Compact samples to compile."
  );

  if (process.env.GITHUB_STEP_SUMMARY) {
    fs.appendFileSync(
      process.env.GITHUB_STEP_SUMMARY,
      `${markdownSummary(p, results, opts)}\n`
    );
  }
  if (opts.json) {
    const json = {
      toolchain: p.toolchain,
      mode: p.mode,
      base: p.base ?? null,
      counts: c,
      passed: results.length - failed.length,
      failed: failed.length,
      results: results.map((r) => ({
        page: r.unit.page,
        line: r.unit.line,
        group: r.unit.group ?? null,
        blocks: r.unit.blocks.map((b) => b.line),
        ok: r.ok,
        ms: r.ms,
        errorLine: r.ok ? null : r.where.line,
        error: r.ok ? null : r.message
      })),
      unpinned
    };
    fs.writeFileSync(opts.json, `${JSON.stringify(json, null, 2)}\n`);
  }
  writeOutputs({
    toolchain: p.toolchain,
    samples: results.length,
    failed: failed.length
  });
}

// --------------------------------------------------------------------- main

async function main() {
  const opts = parseArgs(process.argv.slice(2));
  if (opts.help) {
    const header = fs
      .readFileSync(fileURLToPath(import.meta.url), "utf8")
      .split("\n\nimport ")[0];
    console.log(header.replace(/^\/\/ ?/gm, ""));
    return 0;
  }
  const p = plan(opts);

  if (opts.list) {
    for (const line of headerLines(p, opts)) console.log(line);
    console.log(`\nSamples to compile: ${p.units.length}`);
    for (const u of p.units) console.log(`  ${u.page}:${u.line}  ${label(u)}`);
    const { unpinned } = overview(p);
    if (unpinned.length) {
      console.log(
        "\nNot compiled because there is no pragma, but these read like whole contracts:"
      );
      for (const u of unpinned) console.log(`  ${u}`);
    }
    writeOutputs({ toolchain: p.toolchain, samples: p.units.length });
    return 0;
  }

  if (!p.units.length) {
    report(p, [], opts);
    return 0;
  }
  await checkToolchain(p.toolchain);
  const workDir = opts.keep
    ? path.resolve(opts.keep)
    : fs.mkdtempSync(path.join(os.tmpdir(), "compact-samples-"));
  fs.mkdirSync(workDir, { recursive: true });
  try {
    const results = await compileAll(p.units, p.toolchain, opts.jobs, workDir);
    report(p, results, opts);
    return results.every((r) => r.ok) ? 0 : 1;
  } finally {
    if (!opts.keep) fs.rmSync(workDir, { recursive: true, force: true });
  }
}

main().then(
  (code) => process.exit(code),
  (error) => {
    console.error(
      `compile-doc-samples: ${error instanceof SetupError ? error.message : error.stack}`
    );
    process.exit(2);
  }
);
