import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import WorkshopLanding, { WorkshopClosing } from "@/components/WorkshopLanding";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import { workshops } from "@/data/workshops";
import { events } from "@/data/events";

// One page per workshop in workshops.ts, built ahead of time
export const dynamicParams = false;

export function generateStaticParams() {
  return workshops.map((workshop) => ({ slug: workshop.slug }));
}

function find(slug: string) {
  const workshop = workshops.find((w) => w.slug === slug);
  const event = events.find((e) => e.slug === slug);
  return workshop && event ? { workshop, event } : null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const found = find((await params).slug);
  if (!found) return {};
  const title = `${found.workshop.title} ${found.workshop.highlight} | Women in Marketing`;
  return {
    title,
    description: found.workshop.intro,
    openGraph: {
      title,
      description: found.workshop.intro,
      images: found.event.image
        ? [`https://womeninmarketing.no${found.event.image}`]
        : undefined,
    },
  };
}

export default async function WorkshopPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const found = find((await params).slug);
  if (!found) notFound();

  return (
    <>
      <Navbar />
      <WorkshopLanding workshop={found.workshop} event={found.event} />
      <AboutSection />
      <WorkshopClosing workshop={found.workshop} event={found.event} />
      <Footer />
    </>
  );
}
