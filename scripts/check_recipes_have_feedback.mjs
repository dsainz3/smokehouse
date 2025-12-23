import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();

const SCAN_DIRS = [
  path.join(ROOT, "proteins"),
  path.join(ROOT, "holidays"),
];

function shouldIgnoreFile(basename) {
  if (basename.toLowerCase() === "readme.md") return true;
  if (basename.toLowerCase().startsWith("readme.")) return true;
  return false;
}

function listMarkdownFiles(dirPath) {
  if (!fs.existsSync(dirPath)) return [];
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      files.push(...listMarkdownFiles(fullPath));
      continue;
    }
    if (!entry.isFile()) continue;
    if (!entry.name.toLowerCase().endsWith(".md")) continue;
    if (shouldIgnoreFile(entry.name)) continue;
    files.push(fullPath);
  }
  return files;
}

function hasFeedbackSection(markdown) {
  return /^##\s+Feedback\s+&\s+Ratings\s*$/im.test(markdown);
}

const recipeFiles = SCAN_DIRS.flatMap(listMarkdownFiles);
const missing = [];

for (const filePath of recipeFiles) {
  const markdown = fs.readFileSync(filePath, "utf8");
  if (!hasFeedbackSection(markdown)) missing.push(path.relative(ROOT, filePath));
}

if (missing.length > 0) {
  console.error("Recipes missing `## Feedback & Ratings` section:");
  for (const file of missing) console.error(`- ${file}`);
  console.error("");
  console.error("Fix: copy the section from `TEMPLATE_RECIPE.md` into each recipe.");
  process.exit(1);
}

console.log(`Recipe feedback check passed (${recipeFiles.length} file(s)).`);
