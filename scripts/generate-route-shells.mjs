// GitHub Pages has no SPA rewrite: it only serves files that exist on disk.
// Without a file at /services/meo/index.html it falls back to 404.html, which
// renders the right page but answers with an HTTP 404 — bad for crawlers.
//
// So copy the built index.html to the path of every static route. Pages then
// answers 200 and the router takes over from there. 404.html stays as the
// catch-all for genuinely unknown URLs.
import { readdir, readFile, mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const dist = join(root, "dist");

const routeFiles = await readdir(join(root, "src", "routes"));
const routes = routeFiles
  .filter((f) => f.endsWith(".tsx"))
  .map((f) => f.replace(/\.tsx$/, ""))
  .filter((name) => name !== "__root" && name !== "index")
  // TanStack's dot-notation filenames map to path segments: services.meo -> services/meo
  .map((name) => name.split(".").join("/"));

const shell = await readFile(join(dist, "index.html"), "utf8");

await writeFile(join(dist, "404.html"), shell);
console.log("404.html (SPA fallback)");

for (const route of routes) {
  const dir = join(dist, route);
  await mkdir(dir, { recursive: true });
  await writeFile(join(dir, "index.html"), shell);
  console.log(`${route}/index.html`);
}

console.log(`\n${routes.length} route shells + 404.html written`);
