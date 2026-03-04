import type { Metadata } from "next";
import { Climate_Crisis, Inter } from "next/font/google";
import { events } from "@/data/events";
import "./globals.css";

const nextEvent = events
  .filter((e) => new Date(e.date) >= new Date(new Date().toDateString()))
  .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())[0];

const climateCrisis = Climate_Crisis({
  variable: "--font-climate-crisis",
  subsets: ["latin"],
  weight: ["400"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Women in Marketing — Connect, Collaborate, Grow",
  description:
    "A community where women in marketing at every career stage connect, collaborate, and grow together.",
  openGraph: {
    title: "Women in Marketing — Connect, Collaborate, Grow",
    description:
      "A community where women in marketing at every career stage connect, collaborate, and grow together.",
    ...(nextEvent?.image && {
      images: [
        {
          url: `https://womeninmarketing.no${nextEvent.image}`,
          width: 1200,
          height: 630,
        },
      ],
    }),
  },
  twitter: {
    card: "summary_large_image",
    ...(nextEvent?.image && {
      images: [`https://womeninmarketing.no${nextEvent.image}`],
    }),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${climateCrisis.variable} ${inter.variable} font-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
