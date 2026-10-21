"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Star } from "lucide-react";
import type { Product } from "@/config/products";
import { money } from "@/config/products";
import { useCart } from "@/context/CartContext";

export default function ProductCard({
  product,
}: {
  product: Product;
}) {
  const { add } = useCart();

  const isFeatured = product.featured?.length > 0;

  return (
    <article className="product-card">
      <Link
        href={`/products/${product.slug}`}
        aria-label={`View ${product.name} details`}
      >
        <div className="product-art relative overflow-hidden">
          {product.tag && (
            <span className="product-tag">
              {product.tag}
            </span>
          )}

          {isFeatured && (
            <span className="absolute right-2 top-2 z-10 inline-flex items-center gap-1 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800 shadow-sm">
              <Star size={13} fill="currentColor" />
              Featured
            </span>
          )}

          <Image
            src={product.image}
            alt={`${product.name} - ${product.unit}`}
            width={500}
            height={450}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="h-56 w-full object-contain transition-transform duration-300 hover:scale-105"
            placeholder="empty"
            loading="eager"
          />
        </div>
      </Link>

      <div className="product-info">
        <Link href={`/products/${product.slug}`}>
          <h3>{product.name}</h3>
        </Link>

        <p>{product.description}</p>

        {isFeatured && (
          <ul className="mt-3 flex flex-wrap gap-2">
            {product.featured.map((item) => (
              <li
                key={item}
                className="rounded-full bg-green-50 px-2 py-1 text-xs text-green-800"
              >
                {item}
              </li>
            ))}
          </ul>
        )}

        <div className="price-row">
          <div>
            <div className="price">
              {money(product.price)}
            </div>

            <span
              className="muted"
              style={{ fontSize: 11 }}
            >
              {product.unit}
            </span>
          </div>

          <button
            type="button"
            className="small-btn"
            aria-label={`Add ${product.name} to cart`}
            onClick={() => add(product)}
          >
            <ShoppingCart
              size={17}
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </article>
  );
}
