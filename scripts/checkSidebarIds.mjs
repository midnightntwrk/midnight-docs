// scripts/checkSidebarIds.mjs
import fs from "fs";
import path from "path";
import url from "url";

const root = path.dirname(url.fileURLToPath(import.meta.url));
const repoRoot = path.resolve(root, "..");

const plugin = process.argv[2] || "main";
const cfg = {
  main:  { dir: "docs",     sidebar: "./sidebars.main.js" },
  compact:{ dir: "compact",  sidebar: "./sidebars.compact.js" },
  academy:{ dir: "academy",  sidebar: "./sidebars.academy.js" },
}[plugin];

if (!cfg) {
  console.error("Usage: node scripts/checkSidebarIds.mjs [main|compact|academy]");
  process.exit(1);
}

const sidebar = (await import(path.resolve(repoRoot, cfg.sidebar))).default
  || (await import(path.resolve(repoRoot, cfg.sidebar))).sidebar
  || require(path.resolve(repoRoot, cfg.sidebar));

function collectIds(items, acc = []) {
  if (!items) return acc;
  for (const it of items) {
    if (typeof it === "string") acc.push(it);
    else if (Array.isArray(it.items)) collectIds(it.items, acc);
    else if (it.type === "doc" && it.id) acc.push(it.id);
    else if (it.link && it.link.type === "doc" && it.link.id) acc.push(it.link.id);
  }
  return acc;
}

// Sidebars can be {sidebar:[...]} or {someName:[...]}
const arrays = Object.values(sidebar).filter(Array.isArray);
const allIds = arrays.flatMap(arr => collectIds(arr));
const uniq = [...new Set(allIds)];

function existsForId(id) {
  const base = path.join(repoRoot, cfg.dir, id);
  const candidates = [
    base + ".md",
    base + ".mdx",
    path.join(repoRoot, cfg.dir, id, "index.md"),
    path.join(repoRoot, cfg.dir, id, "index.mdx"),
    path.join(repoRoot, cfg.dir, id, "README.md"),
    path.join(repoRoot, cfg.dir, id, "README.mdx"),
  ];
  return candidates.find(p => fs.existsSync(p));
}

let missing = [];
for (const id of uniq) {
  const file = existsForId(id);
  if (!file) missing.push(id);
}

if (missing.length) {
  console.log(`\n[${plugin}] MISSING (${missing.length})`);
  for (const id of missing) console.log(" -", id);
  process.exit(2);
} else {
  console.log(`[${plugin}] OK: all ${uniq.length} sidebar IDs resolve under ${cfg.dir}/`);
}
