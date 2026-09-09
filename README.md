# Portfolio

My personal portfolio site: a project showcase, skills, experience, and a
web resume, built as a full-stack Next.js app rather than just a link to
GitHub.

## Stack

Next.js (App Router) + TypeScript + Tailwind CSS. No backend/database —
content lives in `src/data/` as typed TypeScript modules.

## Structure

- `src/app/page.tsx` — home page composing the hero, featured work, project
  showcase, skills, experience, and contact sections.
- `src/app/resume/page.tsx` — a print-optimized web resume with a
  "Print / Save as PDF" button, references intentionally omitted (available
  on request).
- `src/data/` — site copy, project list, and resume content.
- `src/components/` — one component per section.

## Development

```bash
npm install
npm run dev
```

## Deployment

Deployed on Vercel, connected to this repo's `main` branch.
