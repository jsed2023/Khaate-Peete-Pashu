"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ShoppingCart,
  Check,
  ArrowRight,
} from "lucide-react";

import type { Product } from "@/config/products";
import { useCart } from "@/context/CartContext";

export default function AddToCart({
  product,
}: {
  product: Product;
}) {
  const { add, items, hydrated } = useCart();
  const [added, setAdded] = useState(false);

  const inCart = items.some(
    (item) => item.product.id === product.id
  );
 

  function handleAddToCart() {
    add(product);
    setAdded(true);
  }

  return (
    <div className="mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap">

      {/* Add to Cart */}
      <button
        type="button"
        onClick={handleAddToCart}
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-emerald-800 px-6 py-3 font-semibold text-white transition hover:bg-emerald-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
      >
        {added ? <Check size={18} /> : <ShoppingCart size={18} />}
        {added
          ? "Added to Cart ✓"
          : inCart
            ? "Add Another"
            : "Add to Cart"}
      </button>

      {hydrated && (added || inCart) && (
        <Link
          href="/cart"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-emerald-200 px-5 py-3 font-semibold text-emerald-900 transition hover:bg-emerald-50"
        >
          View Cart
          <ArrowRight size={17} />
        </Link>
      )}
    </div>
  );
}