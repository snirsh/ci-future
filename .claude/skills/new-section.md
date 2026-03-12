---
name: new-section
description: Create a new content section for the CI Future manifesto
user_invocable: true
---

# New Section Skill

Create a new MDX section for the CI Future manifesto site.

## Steps

1. **Determine placement.** Read existing sections in `src/content/sections/` to understand the current narrative arc and find the next order number.

2. **Get section details.** Ask the user for:
   - Section title
   - Brief description of what it should cover
   - Whether to draft content now or just scaffold the file

3. **Create the file.** Run the CLI script:
   ```bash
   pnpm new-section "<title>"
   ```

4. **Write content** (if requested). Read 2-3 surrounding sections to match voice and flow, then fill in the MDX file with content that:
   - Matches the manifesto's tone: thought-leadership, clear, direct
   - Uses `##` for the section heading, `###` for subsections
   - Connects logically to the previous and next sections
   - Keeps paragraphs concise and punchy
   - Uses bold for key terms on first mention

5. **Verify.** Run `pnpm build` to confirm the site builds with the new section.

## Content Guidelines

- **Voice:** Authoritative but accessible. Write as a practitioner sharing hard-won insight, not as a vendor pitching.
- **Structure:** Lead with the core insight, then expand with specifics. End sections with a forward-looking hook.
- **Length:** Aim for 300-600 words per section. Dense and valuable, not padded.
- **Formatting:** Use `###` subsections sparingly. Prefer flowing prose over bullet lists, but use lists when comparing options or listing concrete steps.

## Frontmatter Reference

```yaml
---
title: "Section Title"
order: 5
status: draft          # draft | review | published
lastUpdated: 2026-03-12
---
```

## Status Flow

- `draft` — work in progress, hidden from live site
- `review` — content complete, visible on site, needs final approval
- `published` — final, live on site
