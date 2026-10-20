import { products } from "@/config/products";

export type ProductNavItem = {
  product: string;
  href: string;
};

export type SiteNavItem = {
  label: string;
  href: string;
  items?: ProductNavItem[];
};

export const siteConfig = {
  name: "Khaate Peete Pashu",
  shortName: "Khaate Peete Pashu",
  url: "https://khaatepeetepashu.com",

  whatsappNumber: "919772430585",

  description:
    "Explore cattle feed, pashu aahar, animal nutrition, dairy farming and livestock care information for farmers in India.",

  language: "en-IN",
  locale: "en_IN",

  keywords: [
    "Khaate Peete Pashu",
    "pashu aahar",
    "cattle feed",
    "animal feed",
    "dairy farming",
    "livestock nutrition",
    "cattle nutrition",
    "dairy cattle care",
    "animal husbandry India",
    "pashu palan",
  ],

  navItems: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    {
      label: "Products",
      href: "/products",
      items: products
        .filter((product) => product.active)
        .map((product) => ({
          product: product.name,
          href: `products/${product.slug}`,
        })),
    },
    { label: "Contact Us", href: "/contact" },
  ] satisfies SiteNavItem[],

  footerLinks: [
    { label: "About Us", href: "/about" },
    { label: "All Products", href: "/products" },
    { label: "Contact Us", href: "/contact" },
  ],

  socialLinks: {
    instagram: "",
    facebook: "",
    youtube: "",
  },
} as const;


