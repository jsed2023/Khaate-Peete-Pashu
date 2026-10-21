
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

export type FooterLink = {
  label: string;
  href: string;
};

export type SocialLinks = {
  facebook: string;
  instagram: string;
};

export const siteConfig = {
  name: "Khaate Peete Pashu",
  shortName: "Khaate Peete Pashu",
  url: "https://khaatepeetepashu.com",
  logo: "/images/logo.png",

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

  whatsappNumber: "919772430585",

  contact: {
    address:
      "Village Haripura, Sangaria, Hanumangarh, Rajasthan, India - 335063",
    phone: "+919783002446",
    phoneDisplay: "+91 97830 02446",
    email: "srishayamagrocattlefeeds@gmail.com",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Haripura%2C+Sangaria%2C+Hanumangarh%2C+Rajasthan+335063",
  },

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
          href: `/products/${product.slug}`,
        })),
    },
    { label: "Contact Us", href: "/contact" },
  ] satisfies SiteNavItem[],

  footerLinks: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "All Products", href: "/products" },
    { label: "Contact Us", href: "/contact" },
  ] satisfies FooterLink[],

  socialLinks: {
    facebook: "https://www.facebook.com/Khaate_Peete_Pashu",
    instagram: "https://www.instagram.com/khaate_peete_pashu/",
  } satisfies SocialLinks,

  footerDescription:
    "Animal nutrition, cattle feed and farm essentials to support healthier livestock and better farming.",

  footerTagline:
    "Better nutrition. Healthier livestock. Better farming.",
} as const;
