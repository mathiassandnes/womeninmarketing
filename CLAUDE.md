# CLAUDE.md

This repo powers **womeninmarketing.no**, a single-page website for the Women in Marketing community in Norway.

## Who you're working with

The person you're talking to is most likely a **non-technical** community organiser, not a developer. They know the content (events, text, photos) but not code, git, or the terminal.

- Speak in plain language. Say "the website", "publish", "undo", not "commit", "push", "revert", "build". Don't show code or diffs unless they ask; describe changes in words instead.
- Do the technical work yourself. Only ask them for decisions and content.
- Always confirm before anything goes live, with a short plain-language summary of what will change.
- Keep changes small and limited to what they asked for. Don't refactor, restyle, upgrade packages, or "improve" things they didn't mention.
- If something looks technical or risky (build config, deployment, dependencies, anything outside content), stop and suggest they contact **Mathias**, who set the site up. Reassure them nothing is lost: all published versions are in git history.

## Start of every session

1. If `node_modules/` is missing or `node`/`npm` isn't found, use the `setup` skill.
2. Run `git status`. If there are leftover changes from a previous session, tell the user what they are and ask whether to publish or discard them before starting something new.
3. Run `git fetch origin main` and bring the local copy up to date (see the `publish` skill, step 5) so you're editing the latest version.

## Skills (in `.claude/skills/`)

| Skill       | Use when the user wants to…                                   |
|-------------|---------------------------------------------------------------|
| `setup`     | set up on a new computer, or when node/git/GitHub access fails |
| `add-event` | add, edit, or remove an event (or pastes a Luma link)          |
| `publish`   | make changes live on womeninmarketing.no                       |
| `undo`      | revert a change, published or not                              |

## Commands

- `npm run dev`: local preview at http://localhost:3000
- `npm run build`: production build (static export to `out/`); also runs the content check
- `npm run lint`: ESLint
- `npm run setup`: install dependencies and start the preview

## Preview

In the Claude desktop app, start the `website` preview from `.claude/launch.json` so the user sees the site in the browser pane. Otherwise run `npm run dev` in the background and tell them to open http://localhost:3000.

## Safety rules

- **Always run `npm run build` before publishing.** Never publish if it fails.
- **Never** force-push, `git reset --hard`, `git rebase`, `git clean`, delete branches, or rewrite history. Undo by making a new change on top (`git revert`).
- Only edit content files (see below) unless the user explicitly asks for something else. Don't touch `.github/`, `package.json`, `package-lock.json`, `next.config.ts`, `public/CNAME`, or `.claude/` without flagging that this is a technical change.
- Don't run `npm update`, `npm audit fix`, or install new packages.
- Publishing goes straight to the live site. There is no staging, so the confirmation step matters.

## Content operations

### Events: `src/data/events.ts`

Use the `add-event` skill. Each event:

```ts
{
  title: string;                  // Event name
  date: string;                   // "YYYY-MM-DD" format
  format: "In-Person" | "Virtual" | "Hybrid";
  location: string;               // e.g. "Mesh Youngstorget, Oslo"
  description: string;            // 1-2 sentence summary
  speakers: string[];             // List of speaker names (can be empty [])
  registrationUrl: string;        // Link to sign-up page (usually Luma), must start with https://
  category: "Conference" | "Workshop" | "Webinar" | "Meetup" | "Panel";
  image?: string;                 // Optional, path like "/events/filename.jpg"
}
```

Keep the array sorted by date. Past events hide automatically on their date (client-side filtering), so old entries can stay. If there are no upcoming events, the Events section and its navbar link hide themselves.

### Founders: `src/data/founders.ts`

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

- **Event images** → `public/events/`, referenced as `/events/filename.jpg`
- **Founder photos** → `public/founders/`, referenced as `/founders/filename.jpg`
- File names: lowercase, dashes, no spaces (e.g. `spill-the-beans.jpg`).
- Always shrink before adding: `sips -s format jpeg -Z 1600 "<source>" --out public/<folder>/<name>.jpg`. Phone and camera photos can be 5–10 MB, which makes the site slow.
- When replacing an image, overwrite the file with the same name or update the reference and delete the old file.
- `photos/` holds original high-resolution founder photos and `style-samples/` holds design references. Neither is used by the site.

### Section text / copy

| Section              | File                                   |
|----------------------|----------------------------------------|
| Navbar               | `src/components/Navbar.tsx`            |
| Hero (top)           | `src/components/Hero.tsx`              |
| About + founders     | `src/components/AboutSection.tsx`      |
| Events               | `src/components/EventsSection.tsx`     |
| Community            | `src/components/CommunitySection.tsx`  |
| Contact / consulting | `src/components/ContactSection.tsx` (services list and contact emails at the top of the file) |
| Footer               | `src/components/Footer.tsx`            |

When editing copy, change only the text between tags or inside quotes. Leave `className`, tags, and code structure alone.

### Links

- **Slack invite link** appears in three places: `Navbar.tsx` (twice, desktop and mobile) and `CommunitySection.tsx`. Update all of them together.
- **Membership Google Form** is in `CommunitySection.tsx`.
- **Contact emails** are in the `contactEmails` list in `ContactSection.tsx`.
- **LinkedIn links** are in `src/data/founders.ts`.

## Content check

`src/lib/validateContent.ts` runs during the build and fails it with a readable message if an event date isn't a real `YYYY-MM-DD` date, a URL doesn't start with `https://`, or an image/photo file is missing from `public/`. If the build fails with "Content check failed", fix the listed items.

## Brand rules

**Colors** (use `brand-*` Tailwind tokens):
- `brand-blue` (#4F46E5): primary, buttons, hero background
- `brand-purple` (#C084FC): secondary accent
- `brand-pink` (#F0ABFC): tertiary accent, highlights
- `brand-dark` (#1E1B4B): text on light backgrounds

**Typography:**
- Headings: Climate Crisis (`font-display` class)
- Body: Inter (`font-body` class)

**Design and writing:**
- All section backgrounds are colored (no white backgrounds).
- Use existing Tailwind classes and brand tokens; don't introduce new colors.
- Keep the empowering, professional, inclusive tone.
- Site copy is in English. Don't use em dashes (—) in site copy.

## Tech stack & architecture

- Next.js 16 (App Router), TypeScript, Tailwind CSS v4
- Static site: no database, no auth, no backend
- Single page with a fixed navbar that smooth-scrolls: Hero → About → Events → Community → Contact → Footer
- `src/components/`: one component per section · `src/data/`: events and founders · `src/lib/`: types, upcoming-event filter, content check · `public/`: images, CNAME

**Deployment:** Push to `main` → GitHub Actions builds the static export → deploys to GitHub Pages at `womeninmarketing.no` (about 2 minutes). Check status with `gh run list --branch main --limit 3`.
