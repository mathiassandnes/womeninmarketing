import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Women in Marketing | Connect, Collaborate, Grow",
  description:
    "A community where women in marketing at every career stage connect, collaborate, and grow together.",
  openGraph: {
    title: "Women in Marketing | Connect, Collaborate, Grow",
    description:
      "A community where women in marketing at every career stage connect, collaborate, and grow together.",
    images: [
      {
        url: "https://womeninmarketing.no/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://womeninmarketing.no/og-image.png"],
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
        className={`${inter.variable} font-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
