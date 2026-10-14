import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import WorkshopsHero from "@/components/WorkshopsHero";
import EventsSection from "@/components/EventsSection";
import WorkshopFormat from "@/components/WorkshopFormat";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Workshops | Women in Marketing",
  description:
    "Hands-on marketing workshops in Oslo. Small groups, real examples, and you leave with something that works.",
};

export default function WorkshopsPage() {
  return (
    <>
      <Navbar />
      <WorkshopsHero />
      <EventsSection
        paidOnly
        label="Workshops"
        title="Upcoming workshops"
        intro="Pick a session and save your seat. Places are limited."
        emptyText="No workshops are scheduled right now. Follow us on Luma to hear about the next one first."
      />
      <WorkshopFormat />
      <AboutSection />
      <Footer />
    </>
  );
}
