import { cp, mkdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const rawName = process.argv[2];
if (!rawName) {
  console.error("Usage: npm run new:recipe -- <recipe-name>");
  process.exit(1);
}

const name = rawName.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
if (!name) {
  console.error("Recipe name must contain at least one letter or number.");
  process.exit(1);
}

const root = fileURLToPath(new URL("..", import.meta.url));
const destination = join(root, "recipes", name);
await mkdir(join(root, "recipes"), { recursive: true });
await cp(join(root, "recipes", "launch-teaser"), destination, { recursive: true, errorOnExist: true });
const htmlPath = join(destination, "index.html");
const html = await readFile(htmlPath, "utf8");
const updated = html
  .replaceAll("launch-teaser", name)
  .replaceAll("Launch Teaser", name.split("-").map((word) => word[0].toUpperCase() + word.slice(1)).join(" "));
await writeFile(htmlPath, updated);
console.log(`Created recipes/${name}/index.html from the launch-teaser starter.`);
