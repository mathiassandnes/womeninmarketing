---
name: add-event
description: Add a new event (or edit/remove an existing one) on the website's Events section. Use when the user wants to add, announce, change, or cancel an event, or pastes a Luma (luma.com / lu.ma) event link.
---

# Add an event

Events live in `src/data/events.ts`. The field reference is in CLAUDE.md under "Events".

## 1. Gather the details

If the user gives a Luma link, fetch it and pre-fill as much as you can: title, date, location, description, speakers, registration URL (the Luma link itself). Then only ask for what is missing.

Otherwise ask, in one friendly message, for:
- Title
- Date (convert whatever they say, e.g. "next Thursday" or "22. oktober", into `YYYY-MM-DD`; today's date is in your context, double-check the year)
- In-person, virtual, or hybrid
- Location (e.g. "Mesh Youngstorget, Oslo")
- Short description (1–2 sentences; offer to write it from their notes in the site's tone)
- Speakers (optional)
- Registration link
- Type: Conference, Workshop, Webinar, Meetup, or Panel (suggest one if they don't know)
- Image (optional, but recommended: ask them to drag the image file into the chat)

## 2. Image

If they provide an image:
- Name it after the event in lowercase with dashes, no spaces or special characters, e.g. `human-algorithm.jpg`.
- Shrink and convert it so the site stays fast: `sips -s format jpeg -Z 1600 "<source path>" --out public/events/<name>.jpg`
- Reference it as `/events/<name>.jpg`.

Do not download images from the web without asking the user first.

## 3. Confirm, then write it

Show the user a plain-language summary (not code), for example:

> **The Human Algorithm**, Thursday 22 October 2026, in person at Mesh Nationaltheatret, Oslo. Workshop. Speakers: … Sign-up link: … Image: yes

Ask "Does this look right?" Once they say yes, add the entry to the `events` array in `src/data/events.ts`, keeping the array sorted by date. Match the formatting of the existing entries exactly.

Editing an event: change only the fields they asked about. Removing/cancelling: delete that entry (past events hide automatically, so there's no need to remove old ones).

## 4. Check

1. Run `npm run build`. If it fails, read the error (the content check prints plain messages like "date must be YYYY-MM-DD"), fix it, and rebuild.
2. Offer to show a preview.
3. Offer to publish it (use the `publish` skill).
