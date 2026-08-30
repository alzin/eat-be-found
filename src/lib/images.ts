/**
 * Responsive sources for the photos in `src/assets`.
 *
 * `scripts/generate-image-variants.mjs` writes a `<name>-<width>.webp` ladder
 * next to every JPEG. Collecting them with `import.meta.glob` keeps the srcset
 * in sync with whatever that script produced — no per-file import to maintain.
 */
const webpVariants = import.meta.glob<string>("../assets/*-*.webp", {
  eager: true,
  query: "?url",
  import: "default",
});

const byBaseName = new Map<string, { width: number; url: string }[]>();

for (const [path, url] of Object.entries(webpVariants)) {
  const match = /\/([^/]+)-(\d+)\.webp$/.exec(path);
  if (!match) continue;
  const [, base, width] = match;
  const list = byBaseName.get(base!) ?? [];
  list.push({ width: Number(width), url });
  byBaseName.set(base!, list);
}

for (const list of byBaseName.values()) {
  list.sort((a, b) => a.width - b.width);
}

/**
 * Builds the `srcset` for a JPEG imported from `src/assets`.
 *
 * Takes the hashed JPEG URL Vite handed back, recovers the original base name
 * from it, and returns the matching WebP ladder. Returns an empty string when
 * no variants exist so callers can fall back to the plain JPEG.
 */
export function webpSrcSet(jpegUrl: string): string {
  const fileName = jpegUrl.split("?")[0]!.split("/").pop() ?? "";
  // Vite appends an 8-character hash on build but not in dev, so treat it as
  // optional. The trailing anchor keeps the lazy group from eating the real name.
  const match = /^(.+?)(?:-[A-Za-z0-9_-]{8})?\.jpe?g$/.exec(fileName);
  const variants = match ? byBaseName.get(match[1]!) : undefined;
  if (!variants?.length) return "";
  return variants.map((v) => `${v.url} ${v.width}w`).join(", ");
}
