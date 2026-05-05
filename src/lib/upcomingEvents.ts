import { events } from "@/data/events";

export function getUpcomingEvents() {
  return events.filter(
    (event) => new Date(event.date) > new Date(new Date().toDateString())
  );
}
