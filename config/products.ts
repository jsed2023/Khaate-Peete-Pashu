export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  price: number;
  unit: string;
  emoji: string;
  image: string;
  tag: string;
  description: string;
  details: string[];
  keywords: string[];
  featured: string[];
  active: boolean;
};

export const products: Product[] = [
  {
  "id": "p1",
  "slug": "binola-khal",
  "name": "Binola Khal",
  "category": "Cattle Feed",
  "price": 1250,
  "unit": "50 kg bag",
  "emoji": "🌾",
  "image": "/images/products/binola-khal.webp",
  "tag": "Bestseller",
  "description": "Binola Khal cattle feed marketed by Shree Shayam Agro Cattle Feed.",
  "details": [
    "Cattle feed in a convenient 50 kg bag",
    "Marketed by Shree Shayam Agro Cattle Feed",
    "Suitable for routine cattle feeding"
  ],
  "keywords": [
    "binola khal",
    "binola khal price",
    "binola khal 50 kg bag",
    "binola khal cattle feed",
    "cattle feed",
    "animal feed"
  ],
  "featured": [
    "High Energy Source",
    "Improves Milk Quality",
    "Boosts Overall Health",
    "Rich in Protein & Fiber",
    "Enhances Weight Gain"
  ],
  "active": true
},
  {
  id: "p2",
  slug: "mustard-gold",
  name: "Mustard Gold",
  category: "Cattle Feed",
  price: 1250,
  unit: "50 kg bag",
  emoji: "🌾",
  image: "/images/products/Mustard-Gold.webp",
  tag: "Popular",
  description:
    "Mustard Gold cattle feed by Khaate Peete Pashu (KPP), marketed by Shree Shyam Agro Cattle Feed.",
  details: [
    "50 kg cattle feed bag",
    "Marketed by Shree Shyam Agro Cattle Feed",
    "Packaging highlights milk production, vitamins, and protein content",
  ],
  keywords: [
    "mustard gold",
    "mustard gold cattle feed",
    "mustard gold price",
    "kpp cattle feed",
    "cattle feed 50 kg",
    "shree shyam agro cattle feed",
  ],
  featured: [
    "Vitamins Rich",
    "High Protein Content",
    "Promoted for Milk Production",
  ],
  active: true,
},
  {
  id: "p3",
  slug: "cattle-gold-plus",
  name: "Cattle Gold+",
  category: "Cattle Feed",
  price: 1470,
  unit: "45 kg bag",
  emoji: "🐄",
  image: "/images/products/cattle-gold-plus.webp",
  tag: "Popular",
  description:
    "KPP Cattle Gold+ by Shree Shyam Agro Cattle Feed, designed for balanced cattle nutrition.",
  details: [
    "50 kg bag",
    "Marketed by Shree Shyam Agro Cattle Feed",
    "Packaging highlights vitamins and minerals",
    "Promoted for milk production and body condition",
    "Provide clean drinking water and follow appropriate feeding guidance",
  ],
  keywords: [
    "cattle gold plus",
    "cattle gold+",
    "cattle gold plus price",
    "KPP cattle feed",
    "cattle feed 50 kg",
    "dairy cattle nutrition",
    "Shree Shyam Agro Cattle Feed",
  ],
  featured: [
    "Complete Nutrition",
    "Vitamins & Minerals",
    "For Cattle Health",
  ],
  active: true,
},
  {
  id: "p4",
  slug: "calf-starter-feed",
  name: "Calf Starter Feed",
  category: "Calf Care",
  price: 1350,
  unit: "25 kg bag",
  emoji: "🐮",
  image: "/images/products/calf-starter-feed.webp",
  tag: "For young stock",
  description:
    "KPP Calf Starter Feed by Shree Shyam Agro Cattle Feed, designed for growing calves.",
  details: [
    "Convenient 25 kg bag",
    "Use as part of a balanced diet",
    "Provide clean drinking water",
    "Follow age-appropriate feeding guidance",
  ],
  keywords: [
    "calf starter feed",
    "calf starter feed price",
    "calf feed 25 kg",
    "young cattle feed",
    "calf nutrition",
    "KPP calf starter",
    "Shree Shyam Agro Cattle Feed",
  ],
  featured: [
    "Complete Nutrition",
    "Vitamins & Minerals",
    "For Healthy Growth",
  ],
  active: true,
},
  {
  id: "p5",
  slug: "cattle-gold-premium",
  name: "Cattle Gold Premium",
  category: "Cattle Feed",
  price: 1530,
  unit: "45 kg bag",
  emoji: "🐄",
  image: "/images/products/cattle-gold-premium.webp",
  tag: "Premium",
  description:
    "KPP Cattle Gold Premium by Shree Shyam Agro Cattle Feed, designed for balanced cattle nutrition.",
  details: [
    "50 kg bag",
    "Marketed by Shree Shyam Agro Cattle Feed",
    "Packaging highlights natural ingredients",
    "Promoted for cattle health and milk production",
    "Store in a cool, dry place",
  ],
  keywords: [
    "cattle gold premium",
    "cattle gold premium price",
    "KPP cattle feed",
    "premium cattle feed",
    "cattle feed 50 kg",
    "dairy cattle nutrition",
    "Shree Shyam Agro Cattle Feed",
  ],
  featured: [
    "Premium Cattle Feed",
    "Complete Nutrition",
    "For Cattle Health",
  ],
  active: true,
},
  {
  id: "p6",
  slug: "cattle-gold",
  name: "Cattle Gold",
  category: "Cattle Feed",
  price: 1450, // Actual selling price set karein
  unit: "45 kg bag",
  emoji: "🐄",
  image: "/images/products/cattle-gold.webp",
  tag: "Popular",
  description:
    "KPP Cattle Gold by Shree Shyam Agro Cattle Feed, marketed for cattle nutrition.",
  details: [
    "Product by Shree Shyam Agro Cattle Feed",
    "Packaging describes the product as cattle feed",
    "Store in a cool, dry place",
    "Follow appropriate cattle feeding guidance",
  ],
  keywords: [
    "cattle gold",
    "cattle gold price",
    "KPP cattle feed",
    "Shree Shyam Agro Cattle Feed",
    "cattle feed",
    "cattle nutrition",
  ],
  featured: [
    "Cattle Feed",
    "Natural Ingredients",
    "Nutrition for Cattle",
  ],
  active: true,
},
];

export const activeProducts = products.filter(
  (product) => product.active
);

export const featuredProducts = activeProducts.filter(
  (product) => product.featured.length > 0
);

export function getProductBySlug(
  slug: string
): Product | undefined {
  return activeProducts.find(
    (product) => product.slug === slug
  );
}

export function getProductById(
  id: string
): Product | undefined {
  return activeProducts.find(
    (product) => product.id === id
  );
}

export function searchProducts(query: string): Product[] {
  const q = query.trim().toLowerCase();

  if (!q) return activeProducts;

  return activeProducts.filter((product) =>
    [
      product.name,
      product.slug,
      product.description,
      product.tag,
      ...product.details,
      ...product.keywords,
    ].some((value) => value.toLowerCase().includes(q))
  );
}

export function getProductSlugs(): string[] {
  return activeProducts.map((product) => product.slug);
}

export function getProductSEO(slug: string) {
  const product = getProductBySlug(slug);

  if (!product) return undefined;

  return {
    title: `${product.name} | Khaate Peete Pashu`,
    description: product.description,
    keywords: product.keywords,
    canonical: `/products/${product.slug}`,
  };
}

export function money(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}
