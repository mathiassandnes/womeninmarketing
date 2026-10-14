export interface Event {
  title: string;
  date: string;
  format: "In-Person" | "Virtual" | "Hybrid";
  location: string;
  description: string;
  speakers: string[];
  registrationUrl: string;
  category: "Conference" | "Workshop" | "Webinar" | "Meetup" | "Panel";
  image?: string;
  tags?: string[];
  slug?: string; // Links to a workshop page in workshops.ts, e.g. "claude-for-marketers-from-scratch" // Extra labels shown next to category and format, e.g. "Paid"
}
