// Generates responsive WebP variants for every JPEG in src/assets.
//
// Sources are 1280px wide; the ladder below covers a 335px mobile slot at 2-3x
// DPR up to the ~600px desktop hero at 2x. Run after adding or replacing a
// source photo:  node scripts/generate-image-variants.mjs
import { execFileSync } from "node:child_process";
import { readdirSync, statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const assetsDir = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "src", "assets");
const WIDTHS = [640, 960, 1280];
const QUALITY = 76;

const sources = readdirSync(assetsDir).filter((f) => f.endsWith(".jpg"));

for (const file of sources) {
  const base = path.basename(file, ".jpg");
  for (const width of WIDTHS) {
    const out = path.join(assetsDir, `${base}-${width}.webp`);
    execFileSync("ffmpeg", [
      "-hide_banner",
      "-loglevel",
      "error",
      "-y",
      "-i",
      path.join(assetsDir, file),
      "-vf",
      `scale=${width}:-2:flags=lanczos`,
      "-c:v",
      "libwebp",
      "-quality",
      String(QUALITY),
      "-compression_level",
      "6",
      out,
    ]);
    console.log(`${path.basename(out)}  ${(statSync(out).size / 1024).toFixed(0)} KB`);
  }
}
