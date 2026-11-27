#!/usr/bin/env node
/**
 * Next.js: archivos con "use server" solo pueden exportar async functions.
 */
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const ROOT = join(import.meta.dirname, "..", "src");

function walk(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) out.push(...walk(p));
    else if (p.endsWith(".ts") || p.endsWith(".tsx")) out.push(p);
  }
  return out;
}

function isUseServerFile(source) {
  const line = source.split("\n").find((l) => l.trim() !== "")?.trim() ?? "";
  return /^["']use server["'];?$/.test(line);
}

const bad = [];

for (const file of walk(ROOT)) {
  const source = readFileSync(file, "utf8");
  if (!isUseServerFile(source)) continue;

  const exportRe = /^export\s+(?!async\s+function\b)/gm;
  let m;
  while ((m = exportRe.exec(source)) !== null) {
    const lineNo = source.slice(0, m.index).split("\n").length;
    bad.push({ file, line: lineNo, export: m[0].trim() });
  }
}

if (bad.length) {
  console.error('Invalid exports in "use server" modules (only `export async function` allowed):\n');
  for (const b of bad) {
    console.error(`  ${b.file}:${b.line}  (${b.export}…)`);
  }
  process.exit(1);
}

console.log('OK: "use server" modules export only async functions.');