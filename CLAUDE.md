# CLAUDE.md

Operational handbook for Claude Code. This repo powers **womeninmarketing.no** — a single-page landing site for the Women in Marketing community in Norway.

## Commands

- `npm run dev` — start local dev server (preview changes)
- `npm run build` — production build (static export to `out/`)
- `npm run lint` — run ESLint
- `npm run setup` — install dependencies and start dev server (one command)

## Tech Stack

- Next.js 16 (App Router) with TypeScript
- Tailwind CSS v4
- Static site — no database, no auth, no backend
- Deployed to GitHub Pages via GitHub Actions (auto-deploys on push to `main`)

## Content Operations

### Events — `src/data/events.ts`

Add, edit, or remove entries in the `events` array. Each event has these fields:

```ts
{
  title: string;                  // Event name
  date: string;                   // "YYYY-MM-DD" format
  format: "In-Person" | "Virtual" | "Hybrid";
  location: string;               // e.g. "Mesh Youngstorget, Oslo"
  description: string;            // 1-2 sentence summary
  speakers: string[];             // List of speaker names (can be empty [])
  registrationUrl: string;        // Link to sign-up page
  category: "Conference" | "Workshop" | "Webinar" | "Meetup" | "Panel";
  image?: string;                 // Optional — path like "/events/filename.webp"
}
```

Past events auto-hide on the site (client-side date filtering).

### Founders — `src/data/founders.ts`

Edit names, titles, bios, photos, and LinkedIn URLs:

```ts
{
  name: string;       // Full name
  title: string;      // Professional title
  bio: string;        // Bio paragraph
  photo: string;      // Path like "/founders/name.jpg"
  linkedIn: string;   // Full LinkedIn profile URL
}
```

### Images

- **Event images** → save to `public/events/`, reference as `/events/filename.webp`
- **Founder photos** → save to `public/founders/`, reference as `/founders/filename.jpg`

### Section Text / Copy

Each section's text lives in its component file:

| Section   | File                                |
|-----------|-------------------------------------|
| Navbar    | `src/components/Navbar.tsx`         |
| Hero      | `src/components/Hero.tsx`           |
| About     | `src/components/AboutSection.tsx`   |
| Events    | `src/components/EventsSection.tsx`  |
| Community | `src/components/CommunitySection.tsx` |
| Footer    | `src/components/Footer.tsx`         |

## Workflow Instructions

**After ANY content change:**
1. Run `npm run build` to verify nothing is broken.
2. Commit the changes and push to `main` — GitHub Actions will auto-deploy to womeninmarketing.no.

**When user says "add an event":** Ask for title, date, format, location, description, registration URL, and optional image. Add the entry to `src/data/events.ts`.

**When user says "change a link":** Find the link in the relevant data file or component, update it.

**When user drops an image file:** Copy it to the right `public/` subfolder (`public/events/` or `public/founders/`), then update the data file to reference it.

**When user wants to preview:** Run `npm run dev` so they can see changes at http://localhost:3000.

**After making changes:** Proactively offer to commit and push so changes go live.

## Brand Rules

**Colors** (use `brand-*` Tailwind tokens):
- `brand-blue` (#4F46E5) — primary, buttons, hero background
- `brand-purple` (#C084FC) — secondary accent
- `brand-pink` (#F0ABFC) — tertiary accent, highlights
- `brand-dark` (#1E1B4B) — text on light backgrounds

**Typography:**
- Headings: Climate Crisis (`font-display` class)
- Body: Inter (`font-body` class)

**Design rules:**
- All section backgrounds are colored (no white backgrounds)
- Use existing Tailwind classes and brand tokens — don't introduce new colors
- Keep the empowering, professional, inclusive tone

## Architecture

Single-page landing site. All content on one page with a fixed navbar that smooth-scrolls to sections.

**Page sections** (in order): Hero → About → Events → Community → Footer

**Key directories:**
- `src/components/` — one component per section
- `src/data/` — hardcoded content (events, founders)
- `src/lib/types.ts` — shared TypeScript types
- `public/` — static assets (images, CNAME)

**Deployment:** Push to `main` → GitHub Actions builds static export → deploys to GitHub Pages with custom domain `womeninmarketing.no`.
