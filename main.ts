// A gamer's text to the boss for GTA 6 launch week, at most 20 words.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "Boss, my power's out and my phone is at 2%. I'll be back online the moment the grid returns.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
