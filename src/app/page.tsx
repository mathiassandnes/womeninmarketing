import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import EventsSection from "@/components/EventsSection";
import CommunitySection from "@/components/CommunitySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BackgroundIllustrations from "@/components/BackgroundIllustrations";
import { validateContent } from "@/lib/validateContent";

export default function Home() {
  validateContent();

  return (
    <>
      <BackgroundIllustrations />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <AboutSection />
        <EventsSection />
        <CommunitySection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
}
