# CI Future

A structured manifesto exploring how AI agents will transform CI/CD. Published as a static site via GitHub Pages.

## Tech Stack
- **Astro** — static site generator
- **MDX** — content format (Markdown + JSX)
- **GitHub Pages** — hosting
- **GitHub Actions** — deploy pipeline (`.github/workflows/deploy.yml`)

## Content Structure

Sections live in `src/content/sections/` as numbered MDX files:

```
src/content/sections/
  01-introduction.mdx
  02-the-problem.mdx
  03-agents-enter.mdx
  ...
```

Each file has frontmatter:
```yaml
---
title: "Section Title"
order: 1
status: draft | review | published
lastUpdated: 2026-03-12
---
```

## Conventions
- **Naming:** `NN-slug.mdx` where NN is the section order
- **Status flow:** draft → review → published
- **Layout:** Single-column, typography-focused reading experience
- **Tone:** Thought-leadership, clear and direct

## Adding a New Section

### Via CLI script
```bash
pnpm new-section "Section Title"           # creates draft
pnpm new-section "Section Title" --status=review  # creates with specific status
```
This auto-detects the next order number, generates the slug, and creates the MDX file with correct frontmatter.

### Via Claude Code skill
Use `/new-section` — it will scaffold the file and optionally draft content that matches the manifesto's voice and narrative flow.

### Manually
1. Create `src/content/sections/NN-slug.mdx` with frontmatter
2. Set `status: draft` and `order` to the next number
3. Write content in MDX
4. Update status as it matures

## Current State
- **Done:** Specs and memory setup
- **Next:** Scaffold Astro project, create initial content sections
