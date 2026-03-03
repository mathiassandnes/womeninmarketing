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
}
