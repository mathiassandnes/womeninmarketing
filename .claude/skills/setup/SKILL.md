---
name: setup
description: First-time setup of this website project on a new computer, or fixing a broken setup. Use when the user says "set up", "get started", "first time", when npm/node is missing, when node_modules is missing, or when a git push is rejected for authentication/permission reasons.
---

# First-time setup

The user is non-technical. Explain each step in one plain sentence. Run the checks yourself; only hand things to the user that need their password, a browser login, or an installer.

## 1. Command line tools (git)

Run `git --version`. If macOS pops up a dialog asking to install "command line developer tools", tell the user to click **Install** and wait for it to finish (5–10 min), then continue.

## 2. Node.js

Run `node -v`. Need version 20 or newer.
If missing or older: ask the user to download and run the **LTS** installer from https://nodejs.org, then fully quit and reopen the Claude app, and come back. You cannot install it for them.

## 3. Project packages

If `node_modules/` does not exist, run `npm install`. Warnings are normal; only errors matter.

## 4. Git identity

Run `git config user.name` and `git config user.email`. If either is empty, ask the user for their name and the email they use on GitHub, then set them with `git config --global user.name "..."` and `git config --global user.email "..."`.

## 5. GitHub access (needed to publish)

1. The user needs a GitHub account that Mathias has added as a collaborator on `mathiassandnes/womeninmarketing`. If they are not sure, tell them to ask Mathias.
2. Check `gh auth status`.
   - If `gh` is not installed: ask the user to install GitHub CLI from https://cli.github.com (download the macOS installer), then reopen the Claude app.
   - If not logged in: ask the user to open the Terminal app and run `gh auth login` (choose GitHub.com → HTTPS → Yes to authenticate Git → Login with a web browser), then `gh auth setup-git`. They must do this themselves because it involves their login.
3. Verify with `git fetch origin` and `git push --dry-run origin HEAD:main`. "Everything up-to-date" or a list of refs means it works. "Permission denied" or 403 means they are not a collaborator yet → ask Mathias.

## 6. Check it all works

Run `npm run build`. If it succeeds, start the preview (see CLAUDE.md "Preview") and tell the user setup is complete, with a short list of things they can ask for: add an event, change text, swap a photo, publish, undo.
