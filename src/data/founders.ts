export interface Founder {
  name: string;
  title: string;
  bio: string;
  photo: string;
  linkedIn: string;
}

export const founders: Founder[] = [
  {
    name: "Barbara Casique",
    title: "Digital Marketing Strategist",
    bio: "Barbara is a digital marketing strategist based in Norway. She works with performance marketing, digital growth and brand positioning, helping brands cut through the noise and make clear decisions backed by data. For Barbara, marketing isn't about chasing every new trend. It's about understanding people, building trust and growing in a way that lasts.",
    photo: "/founders/barbara.jpg",
    linkedIn: "https://www.linkedin.com/in/barbara-casique-021048101",
  },
  {
    name: "Gabriela Staccioli",
    title: "Social Media Marketing Professional",
    bio: "Gabriela is a social media marketer based in Norway, with more than 5 years of experience in storytelling, community building and event marketing. She loves turning ideas into stories, and stories into communities. Online and in person, she creates experiences where people feel seen, included and part of something bigger.",
    photo: "/founders/gabriela.jpg",
    linkedIn: "https://www.linkedin.com/in/gabrielastaccioli",
  },
];
