"use client";

import { useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";

import { activeProducts, type Product } from "@/config/products";
import ProductCard from "./ProductCard";

type SortOption = "featured" | "low" | "high";

export default function ProductsBrowser() {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<SortOption>("featured");

  const filtered = useMemo(() => {
    const searchTerm = query.trim().toLowerCase();

    const result = activeProducts.filter((product: Product) => {
      const searchableText = [
        product.name,
        product.description,
        product.category,
        ...product.keywords,
      ]
        .join(" ")
        .toLowerCase();

      return !searchTerm || searchableText.includes(searchTerm);
    });

    return [...result].sort((a, b) => {
      if (sort === "low") return a.price - b.price;
      if (sort === "high") return b.price - a.price;

      return Number(b.featured) - Number(a.featured);
    });
  }, [query, sort]);

  function clearFilters() {
    setQuery("");
    setSort("featured");
  }

  return (
    <>
      {/* Search and Sorting */}
      <div className="filters">
        <label
          className="field search-field"
          style={{
            display: "flex",
            gap: 10,
            alignItems: "center",
          }}
        >
          <Search size={17} aria-hidden="true" />

          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search feed, supplements, farm care..."
            aria-label="Search products"
            style={{
              border: 0,
              outline: 0,
              width: "100%",
              background: "transparent",
            }}
          />
        </label>

        <select
          className="field"
          value={sort}
          onChange={(event) =>
            setSort(event.target.value as SortOption)
          }
          aria-label="Sort products"
        >
          <option value="featured">Featured products</option>
          <option value="low">Price: low to high</option>
          <option value="high">Price: high to low</option>
        </select>
      </div>

      {/* Product Count */}
      <p
        className="muted"
        style={{ fontSize: 13, marginBottom: 20 }}
        aria-live="polite"
      >
        <SlidersHorizontal
          size={14}
          style={{
            display: "inline",
            verticalAlign: "middle",
            marginRight: 6,
          }}
          aria-hidden="true"
        />
        Showing {filtered.length} products
      </p>

      {/* Product Results */}
      {filtered.length > 0 ? (
        <div className="product-grid">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <div className="empty-icon" aria-hidden="true">
            🔎
          </div>

          <h3>No products found</h3>

          <p className="muted">
            Try another search term to find available products.
          </p>

          <button
            type="button"
            className="btn"
            onClick={clearFilters}
          >
            Clear Search
          </button>
        </div>
      )}
    </>
  );
}