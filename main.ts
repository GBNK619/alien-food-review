// One Star, Five Stars for the Food — make.fun one-liner entry.
// Writes the entry line to $MAKEFUN_OUTPUT_DIR/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "One star: the locals pay to sit in traffic, breathe unfiltered sky, and queue for everything — but I would cross the galaxy again for their fried chicken.";

function outputDir(): string {
  const dir = process.env.MAKEFUN_OUTPUT_DIR;
  return dir && dir.length > 0 ? dir : "./output";
}

function main(): void {
  const dir = outputDir();
  mkdirSync(dir, { recursive: true });
  const file = join(dir, "entry.txt");
  writeFileSync(file, LINE + "\n", "utf8");
  console.log(`wrote ${file}`);
}

main();
