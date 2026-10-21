import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import { CartProvider } from "@/context/CartContext";
import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/Footer";

import "./globals.css";

const siteUrl = siteConfig.url.replace(/\/+$/, "");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },

  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [...siteConfig.keywords],

  authors: [
    {
      name: siteConfig.name,
      url: siteUrl,
    },
  ],

  alternates: {
    canonical: "/",
  },
// Google verification yahan add karein 👇
  verification: {
    google: "rY6SzNFyVITWqic5zrmNVWkSM0MZJeXKBD7tZLTLTmw",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      {
        url: "/icon.png",
        type: "image/png",
        sizes: "512x512",
      },
    ],
    shortcut: "/favicon.ico",
    apple: [
      {
        url: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} logo`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: ["/images/logo.png"],
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

  category: "business",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#166534",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en-IN" suppressHydrationWarning>
      <body className="min-h-screen antialiased">
        <CartProvider>
          <Navbar />
          <main className="min-h-[60vh]">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
