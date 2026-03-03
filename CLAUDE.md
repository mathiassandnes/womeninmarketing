# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Women in Marketing** — a simple single-page landing site giving the movement an official online presence. Tone: empowering, professional, inclusive.

## Commands

- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run lint` — run ESLint

## Tech Stack

- Next.js 16 (App Router) with TypeScript
- Tailwind CSS v4
- Static site — no database, no auth, no backend

## Architecture

Single-page landing site. All content on one page with a fixed navbar that smooth-scrolls to sections.

**Page sections** (in order): Hero → About → Events → Community → Footer

**Key directories:**
- `src/components/` — one component per section (Navbar, Hero, AboutSection, EventsSection, CommunitySection, Footer)
- `src/data/events.ts` — hardcoded event data (array of `Event` objects)
- `src/lib/types.ts` — shared TypeScript types

**Content approach:** All content is hardcoded inline or in data files under `src/data/`. No CMS. To add an event, add an entry to the `events` array in `src/data/events.ts`.

**Styling:** Tailwind utility classes directly in components. Brand colors defined as CSS custom properties in `globals.css` and exposed via `@theme inline`.

## Brand

**Colors** (use the `brand-*` Tailwind tokens):
- `brand-blue` (#4F46E5) — primary, buttons, hero background
- `brand-purple` (#C084FC) — secondary accent
- `brand-pink` (#F0ABFC) — tertiary accent, highlights
- `brand-dark` (#1E1B4B) — text on light backgrounds

**Typography:**
- Headings: Plus Jakarta Sans (font-extrabold / font-bold)
- Body: Inter (`font-body` class)
