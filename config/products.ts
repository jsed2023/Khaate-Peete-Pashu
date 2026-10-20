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
  featured: boolean;
  active: boolean;
};

export const products: Product[] = [
  {
    id: "p1",
    slug: "premium-cattle-feed",
    name: "Premium Cattle Feed",
    category: "Cattle Feed",
    price: 1250,
    unit: "50 kg bag",
    emoji: "🌾",
    image: "/images/products/premium-cattle-feed.webp",
    tag: "Bestseller",
    description: "Balanced daily nutrition for healthy cattle.",
    details: [
      "Balanced protein and energy",
      "Supports everyday nutrition",
      "Suitable for routine feeding",
    ],
    keywords: [
      "premium cattle feed",
      "cattle feed price",
      "cattle feed 50 kg bag",
      "animal feed",
      "livestock nutrition",
    ],
    featured: true,
    active: true,
  },
  {
    id: "p2",
    slug: "mineral-mixture",
    name: "Mineral Mixture",
    category: "Supplements",
    price: 450,
    unit: "1 kg pack",
    emoji: "🧂",
    image: "/images/products/mineral-mixture.webp",
    tag: "Popular",
    description: "Essential minerals for a balanced animal diet.",
    details: [
      "Convenient daily supplement",
      "Easy to mix with feed",
      "Follow veterinary guidance",
    ],
    keywords: [
      "animal mineral mixture",
      "cattle mineral mixture",
      "mineral mixture price",
      "livestock supplements",
    ],
    featured: true,
    active: true,
  },
  {
    id: "p3",
    slug: "dairy-nutrition-plus",
    name: "Dairy Nutrition Plus",
    category: "Cattle Feed",
    price: 980,
    unit: "25 kg bag",
    emoji: "🥛",
    image: "/images/products/dairy-nutrition-plus.webp",
    tag: "Farm choice",
    description: "A convenient nutrition option for dairy farms.",
    details: [
      "Farm-friendly pack size",
      "Supports balanced feeding",
      "Store in a cool, dry place",
    ],
    keywords: [
      "dairy cattle feed",
      "dairy nutrition",
      "dairy farm feed",
      "cattle nutrition products",
    ],
    featured: true,
    active: true,
  },
  {
    id: "p4",
    slug: "calf-starter-feed",
    name: "Calf Starter Feed",
    category: "Calf Care",
    price: 790,
    unit: "25 kg bag",
    emoji: "🐮",
    image: "/images/products/calf-starter-feed.webp",
    tag: "For young stock",
    description: "Feed option designed for growing calves.",
    details: [
      "Convenient starter feed",
      "Use as part of a balanced diet",
      "Provide clean drinking water",
    ],
    keywords: [
      "calf starter feed",
      "calf feed price",
      "young cattle feed",
      "calf nutrition",
    ],
    featured: false,
    active: true,
  },
  {
    id: "p5",
    slug: "goat-sheep-feed",
    name: "Goat & Sheep Feed",
    category: "Small Ruminants",
    price: 860,
    unit: "25 kg bag",
    emoji: "🐐",
    image: "/images/products/goat-sheep-feed.webp",
    tag: "Farm essential",
    description: "A practical feed choice for small ruminants.",
    details: [
      "Suitable for routine farm feeding",
      "Store away from moisture",
      "Follow local nutrition advice",
    ],
    keywords: [
      "goat feed",
      "sheep feed",
      "goat feed price",
      "small ruminant feed",
    ],
    featured: false,
    active: true,
  },
  {
    id: "p6",
    slug: "organic-fodder-seeds",
    name: "Fodder Seeds",
    category: "Seeds & Fodder",
    price: 320,
    unit: "1 kg pack",
    emoji: "🌱",
    image: "/images/products/organic-fodder-seeds.webp",
    tag: "Seasonal",
    description: "Fodder seed pack for farm growing plans.",
    details: [
      "Check local sowing season",
      "Prepare soil before sowing",
      "Water according to crop needs",
    ],
    keywords: [
      "fodder seeds",
      "animal fodder seeds",
      "green fodder seeds",
      "livestock fodder",
    ],
    featured: false,
    active: true,
  },
  {
    id: "p7",
    slug: "cattle-feed-pellets",
    name: "Cattle Feed Pellets",
    category: "Cattle Feed",
    price: 1100,
    unit: "40 kg bag",
    emoji: "🫘",
    image: "/images/products/cattle-feed-pellets.webp",
    tag: "Value pack",
    description: "Easy-to-handle pellets for daily feed routines.",
    details: [
      "Convenient pellet format",
      "Keep packaging sealed",
      "Introduce dietary changes gradually",
    ],
    keywords: [
      "cattle feed pellets",
      "cattle pellets price",
      "livestock feed pellets",
      "animal feed pellets",
    ],
    featured: true,
    active: true,
  },
  {
    id: "p8",
    slug: "farm-hygiene-kit",
    name: "Farm Hygiene Kit",
    category: "Farm Supplies",
    price: 599,
    unit: "1 kit",
    emoji: "🧼",
    image: "/images/products/farm-hygiene-kit.webp",
    tag: "Farm care",
    description: "Useful essentials to support routine farm cleanliness.",
    details: [
      "For general farm hygiene",
      "Read product labels before use",
      "Keep away from children and animals",
    ],
    keywords: [
      "farm hygiene products",
      "livestock farm supplies",
      "farm cleaning kit",
      "animal farm hygiene",
    ],
    featured: false,
    active: true,
  },
];

export const activeProducts = products.filter(
  (product) => product.active
);

export const featuredProducts = activeProducts.filter(
  (product) => product.featured
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
