import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

const siteUrl = siteConfig.url.replace(/\/+$/, "");
const pageTitle = "Shop Cattle Feed & Animal Nutrition Products";
const pageDescription =
  "Explore cattle feed, animal nutrition supplements, mineral mixtures, calf care products and dairy farm essentials at Khaate Peete Pashu.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,

  keywords: [
    "buy cattle feed",
    "cattle feed products",
    "animal nutrition supplements",
    "mineral mixture for cattle",
    "calf care products",
    "dairy farm supplies",
    "pashu aahar",
    "pashu poshan",
    ...siteConfig.keywords,
  ],

  alternates: {
    canonical: `${siteUrl}/products`,
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: `${siteUrl}/products`,
    siteName: siteConfig.name,
    title: pageTitle,
    description: pageDescription,
  },

  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function ProductsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}