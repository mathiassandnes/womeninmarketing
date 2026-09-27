---
name: publish
description: Publish changes to the live website womeninmarketing.no (commit and push to main, then confirm the deploy). Use when the user says publish, go live, deploy, push, save to the website, or "make it live".
---

# Publish to womeninmarketing.no

Pushing to `main` on GitHub deploys the live site automatically in about 2 minutes. Never publish a broken build and never force-push.

## 1. What is being published?

Run `git status` and `git diff --stat`. If nothing has changed, tell the user there's nothing new to publish and stop.

Only content should be published: files in `src/data/`, `src/components/`, `public/events/`, `public/founders/`, and similar. If anything else changed (`package.json`, `.github/`, `next.config.ts`, `.claude/`, CLAUDE.md, or files you don't recognise), stop and ask the user whether they meant to change it. If they are unsure, leave those files out of the commit.

Never commit `node_modules/`, `.next/`, `out/`, `.env*`, or `.DS_Store`.

## 2. Build

Run `npm run build`. If it fails, fix the problem first and explain it in one plain sentence. Do not continue until the build passes.

## 3. Confirm with the user

Summarise the changes in plain language (e.g. "Adds the 'Spill the Beans' event on 23 March with its image; fixes a typo in the About text") and ask: **"Ready to publish this to womeninmarketing.no?"** Wait for a clear yes.

## 4. Commit

Stage the specific files (`git add <paths>`, not `git add -A`), then commit with a short, descriptive message, e.g. `Add "Spill the Beans" event (Mar 23)`.

## 5. Get up to date with the live version

Someone else (e.g. Mathias) may have published since this session started.

- Run `git fetch origin main`.
- If the session is in a worktree the Claude app created, use the app's sync-with-base-branch tool. Otherwise run `git merge origin/main` (if on a branch) or `git pull --no-rebase origin main` (if on `main`).
- **If there is a merge conflict:** if it is simple (e.g. two events added at the same place in `events.ts`), keep both sides and tell the user what you did. Otherwise stop, explain in plain words, and suggest they contact Mathias. Never discard someone else's changes.
- If anything came in, run `npm run build` again.

## 6. Push

- On `main`: `git push origin main`
- On any other branch (e.g. a `claude/...` worktree branch): `git push origin HEAD:main`

If the push is rejected:
- "non-fast-forward" / "fetch first" → go back to step 5.
- Authentication / 403 / permission denied → run the `setup` skill's GitHub access step.
- Never use `--force`.

## 7. Confirm it went live

Run `gh run list --branch main --limit 3`, then `gh run watch <id>` on the newest "Deploy" run. If `gh` is unavailable, wait about 2 minutes instead.

- Success → tell the user it's live at https://womeninmarketing.no and that they may need to hard-refresh (Cmd+Shift+R) to see it.
- Failure → run `gh run view <id> --log-failed`, explain simply, fix and publish again, or suggest contacting Mathias if it's not a content problem.
