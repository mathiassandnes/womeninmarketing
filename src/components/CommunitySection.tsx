import PhotoCarousel from "@/components/PhotoCarousel";
import SpeechBubble from "@/components/SpeechBubble";
import SectionHeading from "@/components/SectionHeading";

// Community photos shown in the carousel. Add more here (files go in public/community/).
const communityPhotos = [
  { src: "/community/ai-for-marketers-front-row.jpg", alt: "The audience at AI for Marketers" },
  { src: "/community/ai-for-marketers-crowd.jpg", alt: "The crowd at AI for Marketers" },
  { src: "/community/follow-the-trend-filming.jpg", alt: "Filming the hosts at Follow the Trend or Don't" },
  { src: "/community/spill-the-beans-room.jpg", alt: "A full room at Spill the Beans" },
  // position picks which part of a tall photo shows in the frame
  { src: "/community/ai-for-marketers-stage.jpg", alt: "A talk at AI for Marketers", position: "center 70%" },
  { src: "/community/courtyard-crowd.jpg", alt: "A packed courtyard at a Women in Marketing event", position: "center 75%" },
  { src: "/community/follow-the-trend-speakers.jpg", alt: "Speakers and hosts at Follow the Trend or Don't" },
  { src: "/community/follow-the-trend-talk.jpg", alt: "A talk at Follow the Trend or Don't" },
  { src: "/community/courtyard-tables.jpg", alt: "People chatting in the courtyard at a Women in Marketing event" },
  { src: "/community/ai-for-marketers-listening.jpg", alt: "People listening at AI for Marketers" },
];

export default function CommunitySection() {
  return (
    <section
      id="community"
      className="scroll-mt-20 bg-gradient-to-br from-brand-blue via-brand-indigo to-brand-purple py-24 px-6 relative overflow-hidden"
    >
      {/* "Bubble" background from the brand book */}
      <div className="absolute -top-24 -left-24 h-[26rem] w-[26rem] rounded-full bg-brand-pink/30" />
      <div className="absolute -right-32 -bottom-40 h-[32rem] w-[32rem] rounded-full bg-brand-dark/30" />
      <div className="absolute top-[30%] right-[-5rem] h-44 w-72 rotate-3 rounded-[3rem] rounded-br-md bg-white/10" />

      <div className="relative mx-auto max-w-4xl text-center">
        <SectionHeading
          label="Join the community"
          title="The community"
          highlight="where marketers meet."
        />
        <p className="mt-6 text-xl text-indigo-200">
          Connect with women in marketing across all specialties, from social
          media and content strategy to brand management and growth marketing.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/15 bg-white/10 backdrop-blur-sm p-8 text-left">
            <h3 className="text-xl font-bold text-white">Slack Community</h3>
            <p className="mt-3 text-base text-indigo-200">
              Join our Slack workspace to chat with peers, share opportunities,
              ask questions, and stay connected between events.
            </p>
            <a
              href="https://join.slack.com/t/theoslomarketingclub/shared_invite/zt-3ri1gay86-ZP23OhaJXWHDX4Dv3e_YJQ"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block rounded-full bg-white px-7 py-2.5 text-base font-bold text-brand-blue hover:bg-indigo-50 transition-colors"
            >
              Join Slack
            </a>
          </div>
          <div className="rounded-2xl border border-white/15 bg-white/10 backdrop-blur-sm p-8 text-left">
            <h3 className="text-xl font-bold text-white">Follow Us on Instagram</h3>
            <p className="mt-3 text-base text-indigo-200">
              See photos from our events, hear about new workshops first, and
              catch highlights from the community.
            </p>
            <a
              href="https://www.instagram.com/womeninmarketing_no/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block rounded-full border-[1.5px] border-white px-7 py-2.5 text-base font-bold text-white hover:bg-white/10 transition-colors"
            >
              Follow on Instagram
            </a>
          </div>
        </div>

        <div className="relative mx-auto mt-14 max-w-2xl">
          <PhotoCarousel photos={communityPhotos} />
          <SpeechBubble className="absolute -top-5 -left-3 z-10 sm:-left-6">
            See you there!
          </SpeechBubble>
        </div>
      </div>
    </section>
  );
}
