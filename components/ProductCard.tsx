
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ShoppingCart,
  Star,
  MessageCircle,
} from "lucide-react";

import {
  type Product,
  money,
} from "@/config/products";

import { useCart } from "@/context/CartContext";

const WHATSAPP_NUMBER = "91XXXXXXXXXX"; // Replace with your WhatsApp number

export default function ProductCard({
  product,
}: {
  product: Product;
}) {
  const { add } = useCart();

  const isFeatured = product.featured?.length > 0;
  const isEnquiry = product.price === null;

  const displayPrice = isEnquiry
    ? product.priceLabel || "Price on Enquiry"
    : money(product.price);

  const whatsappMessage = encodeURIComponent(
    `Hello, I want to enquire about this product:

Product: ${product.name}
Category: ${product.category}
Pack Size: ${product.unit}
Quantity: 1
Price: ${displayPrice}

Please share the latest price and availability.`
  );

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

  return (
    <article className="product-card">
      {/* Product Image */}
      <Link
        href={`/products/${product.slug}`}
        aria-label={`View ${product.name} details`}
      >
        <div className="product-art group relative flex h-56 items-center justify-center overflow-hidden bg-transparent">
          {product.tag && (
            <span className="product-tag absolute left-3 top-3 z-10">
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
            className="h-full w-full object-contain bg-transparent transition-transform duration-300 group-hover:scale-105"
            placeholder="empty"
            loading="lazy"
          />
        </div>
      </Link>

      {/* Product Information */}
      <div className="product-info">
        <Link href={`/products/${product.slug}`}>
          <h3>{product.name}</h3>
        </Link>

        <p>{product.description}</p>

        {/* Featured Benefits */}
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

        {/* Price and Cart */}
        <div className="price-row">
          <div>
            <div
              className={`price ${
                isEnquiry ? "text-sm font-semibold" : ""
              }`}
            >
              {displayPrice}
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

        {/* WhatsApp Enquiry for products without fixed price */}
        {isEnquiry && (
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg bg-green-600 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-green-700"
            aria-label={`Enquire about ${product.name} on WhatsApp`}
          >
            <MessageCircle size={17} />
            Get Best Price on WhatsApp
          </a>
        )}
      </div>
    </article>
  );
}
