import fs from "node:fs";
import path from "node:path";
import { events } from "@/data/events";
import { founders } from "@/data/founders";

// Runs at build time. Fails the build with a readable message if content is
// malformed, so a typo never reaches the live site.
export function validateContent() {
  const problems: string[] = [];

  const imageExists = (src: string) =>
    fs.existsSync(path.join(process.cwd(), "public", src));

  for (const event of events) {
    const label = `Event "${event.title}"`;
    const date = new Date(`${event.date}T00:00:00Z`);
    if (
      !/^\d{4}-\d{2}-\d{2}$/.test(event.date) ||
      isNaN(date.getTime()) ||
      date.toISOString().slice(0, 10) !== event.date
    ) {
      problems.push(`${label}: date "${event.date}" must be a real date written as YYYY-MM-DD.`);
    }
    if (!event.registrationUrl.startsWith("https://")) {
      problems.push(`${label}: registrationUrl must start with https://`);
    }
    if (event.image && !imageExists(event.image)) {
      problems.push(`${label}: image "${event.image}" not found in public/.`);
    }
  }

  for (const founder of founders) {
    const label = `Founder "${founder.name}"`;
    if (!imageExists(founder.photo)) {
      problems.push(`${label}: photo "${founder.photo}" not found in public/.`);
    }
    if (!founder.linkedIn.startsWith("https://")) {
      problems.push(`${label}: linkedIn must start with https://`);
    }
  }

  if (problems.length > 0) {
    throw new Error(`Content check failed:\n- ${problems.join("\n- ")}`);
  }
}
