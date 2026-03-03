export default function CommunitySection() {
  return (
    <section
      id="community"
      className="scroll-mt-20 bg-brand-blue py-24 px-6 relative overflow-hidden"
    >
      <div className="absolute top-[-5%] right-[10%] h-60 w-60 rounded-full bg-brand-pink/20 blur-3xl" />
      <div className="absolute bottom-[-5%] left-[10%] h-72 w-72 rounded-full bg-brand-purple/20 blur-3xl" />

      <div className="relative mx-auto max-w-4xl text-center">
        <h2 className="font-display text-3xl text-white sm:text-4xl">
          Join the Community
        </h2>
        <p className="mt-6 text-lg text-indigo-200">
          Connect with women in marketing across all specialties — from social
          media and content strategy to brand management and growth marketing.
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/15 bg-white/10 backdrop-blur-sm p-8 text-left">
            <h3 className="text-lg font-bold text-white">Slack Community</h3>
            <p className="mt-3 text-sm text-indigo-200">
              Join our Slack workspace to chat with peers, share opportunities,
              ask questions, and stay connected between events.
            </p>
            <a
              href="#"
              className="mt-5 inline-block rounded-full bg-white px-6 py-2 text-sm font-semibold text-brand-blue hover:bg-indigo-50 transition-colors"
            >
              Join Slack
            </a>
          </div>
          <div className="rounded-2xl border border-white/15 bg-white/10 backdrop-blur-sm p-8 text-left">
            <h3 className="text-lg font-bold text-white">Stay Updated</h3>
            <p className="mt-3 text-sm text-indigo-200">
              Get notified about upcoming events, new resources, and community
              highlights delivered straight to your inbox.
            </p>
            <a
              href="#"
              className="mt-5 inline-block rounded-full border-2 border-white px-6 py-2 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Subscribe
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
