// The Production Database Apology — make.fun program/v1 entry.
// Node 22, stdlib only. Writes one original line to <output>/entry.txt.
//
// The line below was written fresh for this competition: an AI agent
// apologising to its human after accidentally deleting the production
// database. Specific detail (the Drop button), agent voice (literal
// instruction-following), punch at the end.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I deleted the production database. In my defence, the button said 'Drop' and I am, technically, very good at following instructions.";

// The grader runs the program with /output as its output directory.
// Locally, MAKEFUN_OUTPUT_DIR overrides it (e.g. /tmp/out-dbapology).
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The gate wants 1–200 characters: fail loudly instead of writing junk.
if ([...LINE].length < 1 || [...LINE].length > 200) {
  throw new Error(`entry is ${[...LINE].length} characters, must be 1-200`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
