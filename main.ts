// Worst Superpower — make.fun bounty
// u-suroto-worst-superpower-461dcdbe
//
// Writes one line — the most useless superpower imaginable —
// to /output/entry.txt. The program is deterministic: the line is a
// fixed string; the program only validates it against the gate
// (1-140 characters, not only whitespace, a single line) and writes it.
//
// The line: a hero who can teleport anywhere he has already been,
// as long as he walks there first. The grand setup ("teleport
// anywhere") collapses into walking — the power adds nothing at all,
// which is exactly the joke.
//
// Run: node main.ts
// (or MAKEFUN_OUTPUT_DIR=<dir> node main.ts to write elsewhere)

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const power =
  "I can teleport anywhere I've already been \u2014 as long as I walk there first.";

// The gate allows 1-140 characters; reject anything outside it before writing.
const chars = [...power].length;
if (chars < 1 || chars > 140) {
  throw new Error(`entry must be 1-140 characters, got ${chars}`);
}
if (power.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (power.includes("\n")) {
  throw new Error("entry must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const dest = join(outDir, "entry.txt");
writeFileSync(dest, power, "utf8");
// Confirm the line landed whole before reporting success.
const check = readFileSync(dest, "utf8");
if (check !== power) throw new Error("entry.txt does not match the power");
console.log(`wrote entry.txt (${chars} chars) to ${outDir}`);
console.log(power);
