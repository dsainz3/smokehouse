import { spawnSync } from "node:child_process";
import crypto from "node:crypto";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const README_PATH = path.resolve("README.md");

function requireFile(filePath) {
  if (!fs.existsSync(filePath)) {
    console.error(`Missing file: ${filePath}`);
    process.exit(2);
  }
}

function requireDoctocMarkers(markdown) {
  const hasStart = markdown.includes("<!-- START doctoc");
  const hasEnd = markdown.includes("<!-- END doctoc");
  if (!hasStart || !hasEnd) {
    console.error("README.md is missing doctoc markers.");
    console.error("Add markers and run `npm run toc`.");
    process.exit(2);
  }
}

function resolveDoctocBin() {
  const binName = process.platform === "win32" ? "doctoc.cmd" : "doctoc";
  const binPath = path.resolve("node_modules", ".bin", binName);
  if (!fs.existsSync(binPath)) {
    console.error(`Missing doctoc binary at ${binPath}`);
    console.error("Install dev dependencies with `npm ci` (or `npm install`).");
    process.exit(2);
  }
  return binPath;
}

function runDoctoc(doctocBin, filePath) {
  if (process.platform === "win32") {
    return spawnSync(doctocBin, [filePath], {
      stdio: "inherit",
      shell: true,
    });
  }

  return spawnSync(doctocBin, [filePath], {
    stdio: "inherit",
    shell: false,
  });
}

function sha256(content) {
  const normalized = content.replace(/\r\n/g, "\n");
  return crypto.createHash("sha256").update(normalized).digest("hex");
}

function normalizeForCompare(text) {
  return (
    text
      .replace(/\r\n/g, "\n")
      .split("\n")
      .map((line) => line.replace(/\s+$/u, ""))
      .join("\n")
      .trimEnd() + "\n"
  );
}

function extractDoctocBlock(markdown) {
  const normalized = markdown.replace(/\r\n/g, "\n");
  const startMatch = normalized.match(/^[^\S\n]*<!-- START doctoc.*-->[^\S\n]*$/m);
  const endMatch = normalized.match(/^[^\S\n]*<!-- END doctoc.*-->[^\S\n]*$/m);
  if (!startMatch || !endMatch) return null;

  const startIndex = normalized.indexOf(startMatch[0]);
  const endIndex = normalized.indexOf(endMatch[0]);
  if (startIndex === -1 || endIndex === -1 || endIndex < startIndex) return null;

  const endLineEnd = endIndex + endMatch[0].length;
  return normalized.slice(startIndex, endLineEnd);
}

function extractDoctocListLines(markdown) {
  const block = extractDoctocBlock(markdown);
  if (!block) return null;
  return normalizeForCompare(block)
    .split("\n")
    .filter((line) => /^\s*-\s+\[.+\]\(.+\)\s*$/u.test(line))
    .map((line) => line.trim());
}

requireFile(README_PATH);
const original = fs.readFileSync(README_PATH, "utf8");
requireDoctocMarkers(original);

const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "doctoc-check-"));
const tempReadme = path.join(tempDir, "README.md");
fs.writeFileSync(tempReadme, original, "utf8");

const doctocBin = resolveDoctocBin();
const result = runDoctoc(doctocBin, tempReadme);
if (result.error) {
  console.error(result.error);
  process.exit(1);
}
if (result.status !== 0) process.exit(result.status ?? 1);

const updated = fs.readFileSync(tempReadme, "utf8");
const originalList = extractDoctocListLines(original);
const updatedList = extractDoctocListLines(updated);
if (!originalList || !updatedList) {
  console.error("Unable to locate doctoc markers/section in README.md.");
  process.exit(2);
}

if (sha256(originalList.join("\n") + "\n") !== sha256(updatedList.join("\n") + "\n")) {
  console.error("README.md Table of Contents is out of date.");
  console.error("Run `npm run toc` and commit the updated README.md.");
  process.exit(1);
}

console.log("doctoc check passed.");
