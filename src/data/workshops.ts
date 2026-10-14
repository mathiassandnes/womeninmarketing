// Detailed content for each workshop's own landing page, at
// /workshops/<slug>. The date, place, image and registration link come from
// the matching event in events.ts (same `slug`).

export interface WorkshopDetails {
  slug: string;
  // Title shown on the page, split so the second part sits in the pink box
  title: string;
  highlight: string;
  level: string;
  time: string;
  intro: string;
  price: string;
  priceNote: string;
  seats: string;
  address: string;
  forWho: string[];
  takeaways: string[];
  agenda: { time: string; title: string; text?: string }[];
  bring: string[];
  booking: string[];
  goodToKnow?: string[];
}

export const workshops: WorkshopDetails[] = [
  {
    slug: "claude-for-marketers-from-scratch",
    title: "Claude for Marketers,",
    highlight: "From Scratch",
    level: "Beginner",
    time: "10:00 to 13:00",
    intro:
      "A hands-on morning for marketers who are new to Claude. You work on your own marketing task on your own laptop, and with only 12 seats, everyone gets help with their own work.",
    price: "2 700 kr",
    priceNote: "10% off the second seat from the same company",
    seats: "12 seats",
    address: "Mesh Nationaltheatret, Tordenskiolds gate 2, 0160 Oslo",
    forWho: [
      "Marketers, content creators, founders and freelancers",
      "People with little or no experience with Claude",
      "Anyone who wants to speed up everyday marketing work",
      "No tech background needed",
    ],
    takeaways: [
      "A Claude Project set up with your brand, audience and tone of voice",
      "One real piece of your own work, improved twice during the session",
      "A prompt structure you can reuse for any task",
      "A checklist to use before you publish anything",
      "A simple plan for practising every week",
    ],
    agenda: [
      {
        time: "10:00",
        title: "Welcome and goals",
        text: "A quick round on which marketing task you want to speed up.",
      },
      {
        time: "10:10",
        title: "What Claude is",
        text: "What marketers can do with it, and how it differs from ChatGPT.",
      },
      {
        time: "10:30",
        title: "A guided tour",
        text: "Models, file and image uploads, web search, Projects, Artifacts and Skills, and the free and paid plans.",
      },
      { time: "10:55", title: "Break" },
      {
        time: "11:05",
        title: "How to write a good prompt",
        text: "A reusable structure: context, task, audience, format and examples. Then how to improve the answer and ask Claude to critique its own work.",
      },
      {
        time: "11:25",
        title: "Hands-on #1",
        text: "Write and refine a prompt for a real task: a LinkedIn post, an email, a campaign idea, a content plan or a brief.",
      },
      { time: "11:50", title: "Share and compare results" },
      { time: "12:00", title: "Break" },
      {
        time: "12:10",
        title: "Build a Claude Project, live",
        text: "Brand, audience, goals, tone of voice, words to use and avoid, examples and instructions.",
      },
      {
        time: "12:30",
        title: "Hands-on #2",
        text: "Build your own Project, run your task again and compare the results.",
      },
      {
        time: "12:50",
        title: "The human check",
        text: "A checklist to go through before anything you make with AI is published.",
      },
      { time: "12:57", title: "Wrap-up and group photo" },
    ],
    bring: [
      "Your laptop and charger",
      "A paid Claude account (Pro or higher), set up and signed in before you arrive. A free account runs out partway through.",
      "One real piece of work you are happy to share with the person next to you",
    ],
    booking: [
      "Request a seat on Luma. We approve requests within 24 hours.",
      "You get an email from Barbara or Gabriela with an invoice and your room number.",
      "Pay within 24 hours by bank transfer or Vipps to keep your seat. Seats paid by a company have 48 hours.",
    ],
    goodToKnow: [
      "Coffee, tea and food are included.",
      "Bookings are final and non-refundable. You can pass your seat to someone else, or move it once to a future workshop if there is space.",
    ],
  },
  {
    slug: "build-your-marketing-system-with-claude",
    title: "Build Your Marketing System",
    highlight: "with Claude",
    level: "For Claude users",
    time: "16:00 to 19:00",
    intro:
      "For marketers who already use Claude and want to stop rebuilding the same work every week. You map your monthly tasks to Claude's features, and leave with one complete workflow built on your own data and running on a schedule.",
    price: "2 700 kr",
    priceNote: "10% off the second seat from the same company",
    seats: "12 seats",
    address: "Mesh Nationaltheatret, Tordenskiolds gate 2, 0160 Oslo",
    forWho: [
      "Marketers who already use Claude, including Projects and chats",
      "People who repeat the same marketing tasks every month",
      "A great next step after Claude for Marketers, From Scratch, but it works on its own too",
    ],
    takeaways: [
      "A map of your repeated monthly marketing work, matched to Claude features",
      "A Claude Project set up properly, with a list of the documents it needs",
      "One tested workflow, built on your own data",
      "One scheduled task already running, and clarity on whether it needs your laptop open",
      "A 30-day plan for building the rest",
    ],
    agenda: [
      {
        time: "16:00",
        title: "Welcome",
        text: "Where the gap is, and what you will have running by 19:00.",
      },
      {
        time: "16:15",
        title: "Map your marketing tasks",
        text: "Match your monthly work to the four layers of a Claude system: context (Projects), inputs (connectors and local files), process (Skills), and output and automation (scheduled tasks).",
      },
      { time: "16:50", title: "Break" },
      {
        time: "17:00",
        title: "Set up a Project properly",
        text: "Instructions and supporting documents, then test it and tune it.",
      },
      {
        time: "17:25",
        title: "Connect your data",
        text: "Connect and test your data sources, and learn the difference between cloud connectors and local folders.",
      },
      { time: "17:50", title: "Break" },
      {
        time: "18:00",
        title: "Build one workflow from start to finish",
        text: "Use a workflow template, save it as a Skill and run it once with your own data.",
      },
      {
        time: "18:35",
        title: "Put it on a schedule",
        text: "Turn your workflow into a scheduled task and watch it run.",
      },
      { time: "18:50", title: "Your next 30 days, and close" },
    ],
    bring: [
      "Your laptop and charger",
      "A paid Claude plan (Pro or higher) and the Claude Desktop app installed. You confirm both when you request your seat.",
      "The pre-workshop questionnaire, filled in and returned by 2 November",
      "A short setup check one week before: connect one data source and let us know how it went",
    ],
    booking: [
      "Request a seat on Luma. We approve requests within 24 hours.",
      "Pay within 24 hours by bank transfer or Vipps to keep your seat. Seats paid by a company have 48 hours.",
    ],
    goodToKnow: [
      "Coffee, tea and food are included.",
      "Scheduled tasks that use connected cloud data run with your laptop closed. Tasks that read files on your computer need the desktop app open.",
    ],
  },
];
