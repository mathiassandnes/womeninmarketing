import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import EventsSection from "@/components/EventsSection";
import CommunitySection from "@/components/CommunitySection";
import Footer from "@/components/Footer";
import BackgroundIllustrations from "@/components/BackgroundIllustrations";

export default function Home() {
  return (
    <>
      <BackgroundIllustrations />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <AboutSection />
        <EventsSection />
        <CommunitySection />
        <Footer />
      </div>
    </>
  );
}
