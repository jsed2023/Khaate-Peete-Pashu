import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  activeProducts,
  getProductBySlug,
} from "@/config/products";
import { buildMetadata } from "@/config/seo";

type ProductLayoutProps = Readonly<{
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}>;

export function generateStaticParams(): { slug: string }[] {
  return activeProducts.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: Pick<ProductLayoutProps, "params">): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found",
      description: "The requested product could not be found.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return buildMetadata({
    title: `${product.name}`,
    description: product.description,
    path: `/products/${product.slug}`,
    keywords: product.keywords,
  });
}

export default async function ProductLayout({
  children,
  params,
}: ProductLayoutProps) {
  const { slug } = await params;

  if (!getProductBySlug(slug)) {
    notFound();
  }

  return <>{children}</>;
}