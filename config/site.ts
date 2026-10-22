
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
  // Brand Keywords
  "Khaate Peete Pashu",
  "Khaate Peete Pashu Rajasthan",
  "Khaate Peete Pashu cattle feed",
  "Khaate Peete Pashu animal feed",
  "Shri Shyam Agro Cattle Feeds",
  "Shri Shyam Agro Cattle Feeds Rajasthan",
  "Khaate Peete Pashu products",
  "Khaate Peete Pashu contact",
  "Khaate Peete Pashu Sangaria",
  "Khaate Peete Pashu Hanumangarh",

  // Main Cattle Feed Keywords
  "cattle feed",
  "best cattle feed",
  "best cattle feed in India",
  "best cattle feed in Rajasthan",
  "animal feed",
  "animal feed manufacturer",
  "animal feed supplier",
  "animal feed company India",
  "livestock feed",
  "livestock nutrition",
  "dairy cattle feed",
  "dairy animal feed",
  "cattle nutrition",
  "nutritious cattle feed",
  "premium cattle feed",
  "quality cattle feed",
  "balanced cattle feed",
  "high protein cattle feed",
  "energy rich cattle feed",
  "cattle feed manufacturer Rajasthan",
  "cattle feed supplier Rajasthan",
  "cattle feed company Rajasthan",
  "cattle feed brand India",
  "cattle feed for farmers",
  "cattle feed wholesale",

  // Hindi and Hinglish Keywords
  "pashu aahar",
  "pashu aahar Rajasthan",
  "achha pashu aahar",
  "best pashu aahar",
  "pashu aahar company",
  "pashu aahar manufacturer",
  "pashu aahar supplier",
  "pashu aahar dealer",
  "pashu aahar price",
  "pashu aahar online",
  "pashu feed",
  "gay ka aahar",
  "gaay ka dana",
  "bhains ka aahar",
  "bhains ka dana",
  "gay bhains ka feed",
  "doodh dene wali gay ka aahar",
  "doodh dene wali bhains ka aahar",
  "pashuon ke liye poshtik aahar",
  "pashu poshan",
  "pashu palan",
  "dairy farming India",
  "pashu palan ke liye feed",
  "pashu aahar factory",
  "pashu aahar company Rajasthan",

  // Product Keywords: Calf Starter
  "calf starter",
  "calf starter feed",
  "best calf starter",
  "calf feed",
  "calf nutrition",
  "calf starter feed India",
  "calf starter manufacturer",
  "calf starter for young calves",
  "calf growth feed",
  "bachhde ka aahar",
  "bachhde ka dana",
  "bachhde ke liye poshtik feed",

  // Product Keywords: Heifer Dry
  "Heifer Dry",
  "heifer feed",
  "heifer cattle feed",
  "heifer nutrition",
  "heifer feed India",
  "dry cow feed",
  "dry cow nutrition",
  "feed for pregnant cows",
  "pregnant cow feed",
  "dry period cattle nutrition",
  "gabhini gay ka aahar",
  "sukhi gay ka aahar",
  "heifer feed manufacturer",

  // Product Keywords: Cattle Gold
  "Cattle Gold",
  "Cattle Gold feed",
  "Cattle Gold cattle feed",
  "premium dairy cattle feed",
  "dairy cow feed",
  "milking cow feed",
  "feed for milk producing cows",
  "feed for dairy buffaloes",
  "cow and buffalo feed",
  "dairy feed manufacturer",
  "doodh dene wali gay ka dana",
  "doodh dene wali bhains ka dana",

  // Product Keywords: Mustard Gold
  "Mustard Gold",
  "Mustard Gold cattle feed",
  "mustard oil cake",
  "mustard cake for cattle",
  "mustard khal",
  "sarson khal",
  "sarson ki khal for cattle",
  "mustard oil cake supplier",
  "mustard cake animal feed",
  "mustard cake for dairy animals",
  "sarson khal manufacturer",
  "sarson khal Rajasthan",

  // Product Keywords: Binola Khal
  "Binola Khal",
  "binola khal for cattle",
  "binola khal price",
  "binola khal supplier",
  "binola khal manufacturer",
  "cottonseed cake for cattle",
  "cottonseed meal animal feed",
  "cottonseed cake supplier",
  "cottonseed cake for dairy cows",
  "binola cattle feed",
  "binola khal Rajasthan",
  "binola khal wholesale",

  // Nutrition and Dairy Farming
  "cattle protein feed",
  "cattle energy feed",
  "dairy animal nutrition",
  "livestock feeding management",
  "dairy farm feed management",
  "cattle feeding guide",
  "cow nutrition",
  "buffalo nutrition",
  "calf nutrition management",
  "animal husbandry India",
  "dairy farming tips",
  "healthy cattle feed",
  "cattle feed quality",
  "cattle feed ingredients",
  "cattle feed for dairy farmers",
  "animal nutrition products",
  "dairy cattle care",
  "livestock care India",
  "cattle feed for better nutrition",
  "balanced feed for dairy animals",

  // Rajasthan Local SEO
  "cattle feed in Sangaria",
  "cattle feed Sangaria Rajasthan",
  "animal feed Sangaria",
  "pashu aahar Sangaria",
  "cattle feed Hanumangarh",
  "animal feed Hanumangarh",
  "pashu aahar Hanumangarh",
  "cattle feed dealer Hanumangarh",
  "cattle feed Rajasthan",
  "animal feed Rajasthan",
  "pashu aahar Rajasthan India",
  "cattle feed North Rajasthan",
  "cattle feed Punjab",
  "animal feed Punjab",
  "cattle feed Haryana",
  "dairy feed Rajasthan",
  "cattle feed near Sangaria",
  "pashu aahar near me",
  "cattle feed supplier near me",
  "animal feed supplier near me",

  // Buying Intent Keywords
  "buy cattle feed",
  "buy animal feed online",
  "cattle feed price",
  "animal feed price",
  "cattle feed bag price",
  "50 kg cattle feed bag",
  "cattle feed bulk order",
  "wholesale cattle feed supplier",
  "cattle feed distributor",
  "cattle feed dealership",
  "cattle feed products India",
  "order cattle feed",
  "cattle feed WhatsApp order",
  "pashu aahar wholesale price",
  "cattle feed company contact",

  // General Livestock Keywords
  "cow feed",
  "buffalo feed",
  "cattle feed for cows",
  "cattle feed for buffaloes",
  "dairy cattle products",
  "livestock feed supplier India",
  "animal husbandry products",
  "dairy farming supplies",
  "cattle farm nutrition",
  "farm animal feed",
  "nutritional feed for livestock",
  "quality animal nutrition India",
  "Indian cattle feed brand",
  "trusted cattle feed company",
  "cattle feed for Indian farmers",
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
    facebook: "https://www.facebook.com/Khaatepeetepashus/",
    instagram: "https://www.instagram.com/khaate_peete_pashu/",
  } satisfies SocialLinks,

  footerDescription:
    "Animal nutrition, cattle feed and farm essentials to support healthier livestock and better farming.",

  footerTagline:
    "Better nutrition. Healthier livestock. Better farming.",
} as const;
