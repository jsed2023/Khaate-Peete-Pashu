import Link from "next/link";
import {
  ArrowRight,
  Leaf,
  Search,
  ShieldCheck,
} from "lucide-react";

import ProductsBrowser from "@/components/ProductsBrowser";

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-[#123526] text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-24 -z-10 h-80 w-80 rounded-full bg-lime-400/15 blur-3xl"
        />

        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-lime-300/25 bg-white/5 px-4 py-2 text-sm font-medium text-lime-200">
              <Leaf size={16} aria-hidden="true" />
              Our Product Collection
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Find the Right
              <span className="block text-lime-300">
                Farm Essentials
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              Explore cattle feed, animal nutrition, mineral mixtures
              and livestock-care products in one convenient place.
              Search our catalogue and find product information for your farm.
            </p>

            <Link
              href="#browse-products"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-lime-300 px-6 py-3.5 font-semibold text-[#173b28] transition hover:-translate-y-0.5 hover:bg-lime-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300"
            >
              Browse Products
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-10 grid gap-5 border-t border-white/10 pt-8 sm:grid-cols-2">
            <div className="flex items-start gap-3">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-lime-300 text-[#173b28]">
                <Search size={23} aria-hidden="true" />
              </div>

              <div>
                <h2 className="font-bold">Find Farm Products</h2>
                <p className="mt-1 text-sm leading-6 text-white/70">
                  Search the catalogue and explore available product options.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-lime-300 text-[#173b28]">
                <ShieldCheck size={23} aria-hidden="true" />
              </div>

              <div>
                <h2 className="font-bold">Product Information</h2>
                <p className="mt-1 text-sm leading-6 text-white/70">
                  Contact our team to confirm product details and availability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Browser */}
      <section
        id="browse-products"
        className="scroll-mt-24 bg-white px-5 py-14 sm:px-8 sm:py-20 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-800">
              Product Catalogue
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#173b28] sm:text-4xl">
              Browse All Products
            </h2>

            <p className="mt-3 max-w-2xl leading-7 text-slate-600">
              Search the collection and explore available products
              using the filters below.
            </p>
          </div>

          <ProductsBrowser />
        </div>
      </section>

      {/* Enquiry CTA */}
      <section className="bg-[#f7f9f3] px-5 py-14 sm:px-8 sm:py-16 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-3xl bg-[#173b28] p-7 text-white sm:p-10 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">
              Need help choosing a product?
            </h2>

            <p className="mt-3 max-w-2xl leading-7 text-white/70">
              Contact our team to enquire about product specifications,
              pack sizes, pricing and availability.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-lime-300 px-6 py-3.5 font-semibold text-[#173b28] transition hover:bg-lime-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300"
          >
            Make an Enquiry
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
