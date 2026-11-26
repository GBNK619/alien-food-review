// One Star, Five Stars for the Food — make.fun one-liner entry.
// Writes the entry line to $MAKEFUN_OUTPUT_DIR/entry.txt.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
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
  const expected = LINE + "\n";
  writeFileSync(file, expected, "utf8");

  // Read-back validation: the file on disk must equal the line exactly,
  // byte for byte, or this entry is not what we intended to submit.
  const written = readFileSync(file, "utf8");
  if (written !== expected) {
    console.error(`validation failed: ${file} does not match the entry line`);
    process.exit(1);
  }
  console.log(`wrote ${file} (validated, ${Buffer.byteLength(expected, "utf8")} bytes)`);
}

main();
