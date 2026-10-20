import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
const siteUrl = siteConfig.url.replace(/\/+$/, "");

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Khaate Peete Pashu for cattle feed, animal nutrition products, order enquiries and farm supply assistance.",
  keywords: [
    "contact Khaate Peete Pashu",
    "cattle feed enquiry",
    "animal feed supplier contact",
    "livestock nutrition enquiry",
    "cattle feed customer support",
    "mineral mixture enquiry",
    "farm supplies India",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: `Contact Us | ${siteConfig.name}`,
    description:
      "Get in touch with Khaate Peete Pashu for product information and order enquiries.",
    url: `${siteUrl}/contact`,
    siteName: siteConfig.name,
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary",
    title: `Contact Us | ${siteConfig.name}`,
    description:
      "Contact us for cattle feed, livestock nutrition and farm supply enquiries.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="min-h-[60vh]">{children}</div>;
}