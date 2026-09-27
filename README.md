# womeninmarketing.no

The website for the Women in Marketing community in Norway. You update it by talking to Claude; no coding needed.

## First time on a new computer

1. Install the **Claude desktop app** and sign in.
2. Open the **Code** tab and choose this project folder (or give Claude the repo link: `https://github.com/mathiassandnes/womeninmarketing.git`).
3. Say: **"Set up this project for me."** Claude will check what's missing and walk you through it. You may need to:
   - install Node.js from https://nodejs.org (the "LTS" version),
   - log in to GitHub (Mathias must add your GitHub account to the project first).

## Everyday use

Just tell Claude what you want, for example:

- "Add an event": paste the Luma link and drop in the event image
- "Change the text in the About section to …"
- "Replace Barbara's photo with this one"
- "Update the Slack invite link"
- "Show me a preview"
- **"Publish"**: makes your changes live on womeninmarketing.no (takes about 2 minutes)
- **"Undo that"** / "Put the site back to how it was yesterday"

Claude will always show you a summary and ask before anything goes live.

## If something goes wrong

Nothing is ever lost. Every published version of the site is saved, and Claude can undo any change. If Claude gets stuck or something looks broken, contact Mathias.

---

*For developers:* Next.js 16 + Tailwind v4 static export, deployed to GitHub Pages via GitHub Actions on push to `main`. See [CLAUDE.md](CLAUDE.md) for structure and conventions.
