import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

const siteUrl = siteConfig.url.replace(/\/+$/, "");

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Khaate Peete Pashu and our focus on cattle feed, animal nutrition products and dairy farm essentials.",

  keywords: [
    "about Khaate Peete Pashu",
    "cattle feed supplier",
    "animal nutrition products",
    "dairy farm essentials",
    "livestock care products",
    ...siteConfig.keywords,
  ],

  alternates: {
    canonical: `${siteUrl}/about`,
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: `${siteUrl}/about`,
    siteName: siteConfig.name,
    title: "About Us",
    description:
      "Discover Khaate Peete Pashu and explore cattle feed, animal nutrition and dairy farm essentials.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}