import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ENTRY =
  "Thanks for your email. I'm away and your message is number 47 in a queue I will not be reading today.";
const MAX_CHARS = 200;

function abort(message: string): never {
  console.error(`error: ${message}`);
  process.exit(1);
}

const chars = [...ENTRY].length;
if (chars < 1 || chars > MAX_CHARS) {
  abort(`entry must be 1-${MAX_CHARS} characters, got ${chars}`);
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  abort("entry must be a single line");
}
if (ENTRY.trim().length === 0) {
  abort("entry must not be whitespace only");
}
if (/[\u0000-\u001f\u007f-\u009f]/.test(ENTRY)) {
  abort("entry must not contain control characters");
}

const here = dirname(fileURLToPath(import.meta.url));
const shipped = readFileSync(join(here, "entry.txt"), "utf8");
if (shipped !== ENTRY) {
  abort("entry.txt does not match the built-in entry");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
try {
  mkdirSync(outDir, { recursive: true });
} catch {
  abort(`cannot create output directory ${outDir}`);
}
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY, "utf8");

const written = readFileSync(outPath, "utf8");
if (written !== ENTRY) {
  abort("output does not match entry.txt");
}
if (Buffer.byteLength(written, "utf8") !== Buffer.byteLength(shipped, "utf8")) {
  abort("output byte length differs from entry.txt");
}
