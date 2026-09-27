---
name: undo
description: Undo a change, either unpublished edits or something already published to the live site. Use when the user says undo, revert, go back, "I broke something", "that was a mistake", or "put it back how it was".
---

# Undo a change

Stay calm and reassuring: everything that has ever been published is saved in git history and can be restored.

Never use `git reset --hard`, `git clean`, `git checkout -- .`, `git restore`, `git rebase`, or `git push --force`. Always undo by making a new change on top.

## Not yet published (only on this computer)

1. `git status` and `git diff` to see what changed. Describe it in plain words.
2. Ask which parts to undo. Undo them by editing the files back to how they were (use `git diff` / `git show HEAD:<file>` to see the original), not with destructive git commands.
3. `npm run build` to check.

## Already published

1. `git fetch origin main`, then `git log origin/main --oneline -15 --date=short --format="%h %ad %an: %s"`.
2. Show the user the recent changes in plain language with dates and who made them, and ask which one to undo. If they're unsure, look at what each commit changed (`git show --stat <hash>`) and help them pick.
3. Confirm: "I'll undo '<commit message>' from <date>. The site will go back to how it was before that change. OK?"
4. Make sure your local copy is up to date first (publish skill, step 5), then `git revert --no-edit <hash>`. For several commits, revert newest first.
5. `npm run build`, then publish using the `publish` skill (the confirmation step can be brief since the user already agreed).

If the revert has conflicts or the problem looks technical (the site won't build, the deploy fails, styling is broken everywhere), stop and suggest the user contact Mathias. Tell them the change can be recovered and nothing is lost.
