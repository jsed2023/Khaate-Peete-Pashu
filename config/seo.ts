
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const seoConfig = {
  titleTemplate: `%s | ${siteConfig.name}`,
  defaultDescription: siteConfig.description,
  defaultKeywords: [
    ...siteConfig.keywords,
    "product catalogue",
    "product guides",
    "customer support India"
  ]
};

export function buildMetadata({
  title,
  description = seoConfig.defaultDescription,
  path = "",
  keywords = []
}: {
  title: string;
  description?: string;
  path?: string;
  keywords?: string[];
}): Metadata {
  const canonical = `${siteConfig.url}${path}`;

  return {
    title,
    description,
    keywords: [...seoConfig.defaultKeywords, ...keywords],
    alternates: {
      canonical
    },
    robots: {
      index: true,
      follow: true
    },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      title,
      description,
      url: canonical
    },
    twitter: {
      card: "summary_large_image",
      title,
      description
    }
  };
}
