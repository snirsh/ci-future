#!/usr/bin/env node

/**
 * Creates a new MDX section file with correct frontmatter and naming.
 *
 * Usage:
 *   pnpm new-section "My Section Title"
 *   pnpm new-section "My Section Title" --status=review
 */

import { readdirSync, writeFileSync } from "fs";
import { join } from "path";

const SECTIONS_DIR = new URL(
  "../src/content/sections",
  import.meta.url
).pathname;

const title = process.argv[2];
if (!title) {
  console.error("Usage: pnpm new-section <title> [--status=draft|review|published]");
  process.exit(1);
}

// Parse optional --status flag
const statusArg = process.argv.find((a) => a.startsWith("--status="));
const status = statusArg ? statusArg.split("=")[1] : "draft";
if (!["draft", "review", "published"].includes(status)) {
  console.error(`Invalid status "${status}". Must be draft, review, or published.`);
  process.exit(1);
}

// Determine next order number from existing files
const existing = readdirSync(SECTIONS_DIR)
  .filter((f) => f.endsWith(".mdx"))
  .map((f) => parseInt(f.split("-")[0], 10))
  .filter((n) => !isNaN(n));

const nextOrder = existing.length > 0 ? Math.max(...existing) + 1 : 1;
const padded = String(nextOrder).padStart(2, "0");

// Generate slug from title
const slug = title
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/^-|-$/g, "");

const filename = `${padded}-${slug}.mdx`;
const filepath = join(SECTIONS_DIR, filename);

const today = new Date().toISOString().split("T")[0];

const content = `---
title: "${title}"
order: ${nextOrder}
status: ${status}
lastUpdated: ${today}
---

## ${title}

<!-- Write your content here -->
`;

writeFileSync(filepath, content);
console.log(`Created ${filename} (order: ${nextOrder}, status: ${status})`);
