
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  CheckCircle2,
  Package,
  ShieldCheck,
  Truck,
} from "lucide-react";

import AddToCart from "@/components/AddToCart";
import { getProductBySlug, money } from "@/config/products";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white text-slate-800">
      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Product Visual Panel */}
          <div className="relative overflow-hidden rounded-3xl border border-emerald-900/5 bg-[#f3f7eb] p-6 sm:p-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-lime-300/30 blur-3xl"
            />

            <div className="relative flex min-h-72 flex-col items-center justify-center rounded-2xl border border-white bg-white/70 p-8 text-center sm:min-h-96">
              <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-[#e8f2d9] text-emerald-800 shadow-sm">
                <Package size={48} strokeWidth={1.5} />
              </div>

              <h2 className="mt-4 max-w-md text-2xl font-bold text-[#173b28] sm:text-3xl">
                {product.name}
              </h2>

              <p className="mt-3 max-w-sm text-sm leading-6 text-slate-500">
                {product.description}
              </p>

              <p className="mt-5 text-3xl font-extrabold text-[#173b28]">
                {money(product.price)}
              </p>

              <span className="mt-1 text-sm text-slate-500">
                {product.unit}
              </span>
            </div>

            <div className="relative mt-4 flex items-center justify-center gap-2 text-sm font-medium text-emerald-900">
              <ShieldCheck size={18} />
              Contact us to confirm availability
            </div>
          </div>

          {/* Product Information */}
          <div className="pt-1">
            <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-emerald-800">
              <span className="h-0.5 w-7 bg-lime-500" />
              Product Details
            </span>

            <h1 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#173b28] sm:text-4xl lg:text-5xl">
              {product.name}
            </h1>

            <p className="mt-5 text-base leading-8 text-slate-600">
              {product.description}
            </p>

            {/* Price and Pack Size */}
            <div className="mt-6 flex flex-wrap gap-3">
              <div className="rounded-xl border border-emerald-100 bg-[#f7f9f3] px-5 py-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Price
                </p>
                <p className="mt-1 text-2xl font-bold text-[#173b28]">
                  {money(product.price)}
                </p>
              </div>

              <div className="rounded-xl border border-emerald-100 bg-[#f7f9f3] px-5 py-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Pack Size
                </p>
                <p className="mt-1 text-lg font-bold text-[#173b28]">
                  {product.unit}
                </p>
              </div>
            </div>

            {/* Product Information Card */}
            <div className="mt-7 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
              <h2 className="text-lg font-bold text-[#173b28]">
                Product Information
              </h2>

              <p className="mt-2 text-sm leading-7 text-slate-600">
                Please contact our team to confirm product specifications,
                ingredients, pack sizes, current pricing and availability
                before placing your order.
              </p>

              <div className="mt-5 grid gap-3">
                {product.details.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      size={19}
                      className="mt-0.5 shrink-0 text-emerald-700"
                    />
                    <span className="text-sm leading-6 text-slate-600">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Add to Cart */}
            <AddToCart product={product} />

            {/* Contact Button */}
            <div className="mt-4">
              <Link
                href="/contact"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-slate-300 px-6 py-3 font-semibold text-[#173b28] transition hover:bg-[#f7f9f3] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 sm:w-auto"
              >
                Contact Us
              </Link>
            </div>

            {/* Delivery Information */}
            <div className="mt-5 flex items-start gap-3 rounded-xl bg-[#f7f9f3] p-4">
              <Truck
                size={20}
                className="mt-0.5 shrink-0 text-emerald-800"
              />
              <p className="text-sm leading-6 text-slate-600">
                Please confirm delivery availability, shipping charges and
                estimated dispatch time with our team before placing an order.
              </p>
            </div>
          </div>
        </div>

        {/* Back to Products */}
        <div className="mt-12 border-t border-slate-100 pt-6">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 font-semibold text-emerald-800 transition hover:gap-3"
          >
            <ArrowLeft size={18} />
            Back to All Products
          </Link>
        </div>
      </section>
    </main>
  );
}
