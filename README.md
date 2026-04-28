# AI in Schools — Book Companion

An interactive dashboard companion to **_The Future of Artificial Intelligence: Emerging Technologies and Trends in Education_** (2025), compiled by Brian S. Graham, Ed.D.

The site doubles as a marketing front door for non-readers and a working companion for readers — role-aware navigation, theme exploration, chapter detail pages, a contributor network, a tool library, a six-dimension readiness self-check, and a book-grounded chat.

## What's inside

- **Role picker + dashboard** — superintendent, principal, teacher, technology director, special education, board member. Chapters and tools surface based on role fit.
- **Theme Explorer** — ten threads (Leadership, Ethics, Personalization, Engagement, Policy, Community, Operations, Tools, Accessibility, Culture) with the chapters that develop each.
- **Chapter Hub** — all 14 chapters across four parts. Each chapter page has the tagline, summary, signature quote, key takeaways, three discussion questions, and a Monday-morning action.
- **Contributor Network** — all 13 contributors, the chapters they wrote, and external links.
- **Tool Library** — every AI tool referenced in the book, filterable by category, with chapter cross-links.
- **Readiness Self-Check** — 18 Likert questions across six dimensions (Vision, Policy, People, Instruction, Ethics, Community) producing a score profile with chapter recommendations.
- **Ask the Book** — chat grounded in the full book corpus. Cites chapters and contributors; says when something isn't covered.

## About the book

> A collaborative, leader-focused exploration of AI in K–12 education — from foundations and ethics to classroom practice and district-wide change.

A follow-up book, **_The AI Ready School Leader_**, is targeted for September 2026 as a hands-on companion.

## Tech stack

- **Frontend:** React 18 + Vite + Tailwind CSS + shadcn/ui + wouter (hash routing)
- **Backend:** Express on Node, Anthropic SDK (Claude Sonnet 4.6) for the book-grounded chat
- **Routing:** Hash-based for iframe compatibility
- **Hosting:** The deployed Perplexity Computer build serves the SPA from S3 and proxies `/api/chat` to the Express backend.

## Run locally

```bash
npm install
npm run dev
```

Dev server runs on `http://localhost:5000` (Express + Vite on the same port).

To use the chat locally, set:

```bash
export ANTHROPIC_API_KEY=sk-ant-…
npm run dev
```

The chat route loads the book corpus from `server/data/book.txt` at startup.

## Build and deploy yourself

```bash
npm run build
NODE_ENV=production node dist/index.cjs
```

The build produces:

- `dist/public/` — static SPA bundle (deploy to any static host)
- `dist/index.cjs` — Express server (run on any Node host with `ANTHROPIC_API_KEY` set)
- `dist/data/book.txt` — book corpus the chat route reads at startup

If you only need the marketing front door (no chat), the static bundle is self-sufficient.

## Project structure

```
client/
  src/
    components/    SiteHeader, SiteFooter, Layout, ThemeBadge, ui/
    data/          book.ts — chapters, themes, contributors, tools, assessment
    lib/           role-context, queryClient
    pages/         Home, RolePicker, Dashboard, ThemeExplorer, ThemeDetail,
                   ChapterList, ChapterDetail, Contributors, Tools, Assessment, Chat
server/
  data/book.txt    book corpus used to ground the chat
  routes.ts        /api/chat, /api/health
  index.ts         Express bootstrap
shared/schema.ts   (template scaffolding — not used by this project)
```

## Credits

Compiled and led by **Brian S. Graham, Ed.D.**, Superintendent of Grand Island Central School District. Companion contributors: Danielle Sullivan · Michael Lubelfeld · John Fitzpatrick · Hillary Kretz-Harvey · Scott Martin · Heather Lyon · Erich Reiter · Mark Beehler · Kirk Koennecke · Jared T. Bloom · Matthew C. Gaven · Kusum Sinha.

© 2025 Brian S. Graham. All rights reserved on the book content. The companion site is provided as a reading aid.
