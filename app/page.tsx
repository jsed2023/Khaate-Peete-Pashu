
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  Package,
  ShieldCheck,
  Sparkles,
  Truck,
} from "lucide-react";

import {
  featuredProducts,
  money,
} from "@/config/products";
import { siteConfig } from "@/config/site";

const benefits = [
  {
    title: "Product Information",
    description:
      "Explore product details, pack sizes and prices to make informed choices.",
    icon: ShieldCheck,
  },
  {
    title: "Quality Product Range",
    description:
      "Discover feed, nutrition and farm care products for livestock and dairy farming.",
    icon: Package,
  },
  {
    title: "Direct Enquiry",
    description:
      "Contact our team to confirm product availability and ordering details.",
    icon: MessageCircle,
  },
];

export default function HomePage() {
  const phone = (
    siteConfig.whatsappNumber ?? ""
  ).replace(/\D/g, "");

  const enquiryMessage =
    "Hello, I would like to enquire about Khaate Peete Pashu products.";

  const whatsappUrl = phone
    ? `https://wa.me/${phone}?text=${encodeURIComponent(enquiryMessage)}`
    : "/contact";

  const displayedProducts = featuredProducts
    .filter((product) => product.active)
    .slice(0, 6);

  return (
    <main className="min-h-screen bg-white text-slate-800 dark:bg-[#0d1711] dark:text-slate-100">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-[#f4f8ef] dark:bg-[#101b14]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 -z-10 size-80 rounded-full bg-green-200/50 blur-3xl dark:bg-green-900/30"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 left-1/4 -z-10 size-80 rounded-full bg-lime-200/40 blur-3xl dark:bg-lime-900/20"
        />

        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-white/80 px-4 py-2 text-sm font-semibold text-green-800 shadow-sm dark:border-green-900 dark:bg-white/5 dark:text-green-300">
              <Sparkles size={16} aria-hidden="true" />
              Welcome to {siteConfig.name}
            </div>

            <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
              Quality{" "}
              <span className="text-green-700 dark:text-green-400">
                Animal Nutrition
              </span>{" "}
              Cattale feed
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
              Explore cattle feed, animal nutrition and livestock 
              feed products from Khaate Peete Pashu, based in Sangaria,
               Hanumangarh, Rajasthan. Calf Starter, Corral feeds, Heifer Dry,
                Cattle Gold, Mustard Gold and Binola Khal. View product details, 
                compare available pack sizes and contact our team 
                for pricing, availability and delivery enquiries.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/products"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-green-700 px-6 py-3 font-semibold text-white shadow-lg shadow-green-900/15 transition hover:-translate-y-0.5 hover:bg-green-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
              >
                Explore Products
                <ArrowRight size={18} aria-hidden="true" />
              </Link>

              <a
                href={whatsappUrl}
                target={phone ? "_blank" : undefined}
                rel={phone ? "noopener noreferrer" : undefined}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-green-200 bg-white px-6 py-3 font-semibold text-green-800 transition hover:-translate-y-0.5 hover:border-green-400 dark:border-green-900 dark:bg-white/5 dark:text-green-300"
              >
                <MessageCircle size={19} aria-hidden="true" />
                {phone ? "WhatsApp Enquiry" : "Contact Us"}
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-600 dark:text-slate-300">
              <span className="inline-flex items-center gap-2">
                <CheckCircle2
                  size={17}
                  className="text-green-700 dark:text-green-400"
                  aria-hidden="true"
                />
                Product Details
              </span>

              <span className="inline-flex items-center gap-2">
                <CheckCircle2
                  size={17}
                  className="text-green-700 dark:text-green-400"
                  aria-hidden="true"
                />
                Easy Enquiries
              </span>

              <span className="inline-flex items-center gap-2">
                <CheckCircle2
                  size={17}
                  className="text-green-700 dark:text-green-400"
                  aria-hidden="true"
                />
                Livestock Products
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="border-y border-slate-100 bg-white dark:border-white/10 dark:bg-[#121d16]">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
          {benefits.map(({ title, description, icon: Icon }) => (
            <div key={title} className="flex items-start gap-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-800 dark:bg-green-900/40 dark:text-green-300">
                <Icon size={24} aria-hidden="true" />
              </div>

              <div>
                <h2 className="font-bold text-slate-900 dark:text-white">
                  {title}
                </h2>

                <p className="mt-1 text-sm leading-6 text-slate-500 dark:text-slate-400">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section
        id="featured-products"
        className="bg-slate-50 py-16 dark:bg-[#0d1711] sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-700 dark:text-green-400">
                Our Collection
              </p>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                Featured Products
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-slate-600 dark:text-slate-300">
                Explore our available products, view pack sizes
                and prices, and visit individual product pages
                for further information.
              </p>
            </div>

            <Link
              href="/products"
              className="inline-flex items-center gap-2 font-bold text-green-800 transition hover:gap-3 dark:text-green-400"
            >
              View All Products
              <ArrowRight size={19} aria-hidden="true" />
            </Link>
          </div>

          {displayedProducts.length > 0 ? (
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {displayedProducts.map((product) => (
                <article
                  key={product.id}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-xl hover:shadow-green-950/5 dark:border-white/10 dark:bg-[#17251b] dark:hover:border-green-900"
                >
                  {/* Product Image */}
                  <Link
                    href={`/products/${product.slug}`}
                    aria-label={`View ${product.name}`}
                    className="relative flex h-56 items-center justify-center overflow-hidden bg-[#f3f7eb] p-5 dark:bg-[#101b14]"
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={400}
                      height={400}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
                    />

                    {product.tag && (
                      <span className="absolute left-4 top-4 rounded-full bg-green-700 px-3 py-1 text-xs font-semibold text-white shadow-sm">
                        {product.tag}
                      </span>
                    )}
                  </Link>

                  {/* Product Information */}
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      <Link
                        href={`/products/${product.slug}`}
                        className="transition hover:text-green-700 dark:hover:text-green-400"
                      >
                        {product.name}
                      </Link>
                    </h3>

                    <p className="mt-3 flex-1 text-sm leading-7 text-slate-600 dark:text-slate-300">
                      {product.description}
                    </p>

                    {/* Price and Unit */}
                    <div className="mt-5">
                      <p className="text-2xl font-extrabold text-green-800 dark:text-green-400">
                        {money(product.price)}
                      </p>

                      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                        Pack size: {product.unit}
                      </p>
                    </div>

                    {/* Product Link */}
                    <Link
                      href={`/products/${product.slug}`}
                      className="mt-5 inline-flex items-center justify-between gap-2 border-t border-slate-100 pt-4 font-bold text-green-800 transition dark:border-white/10 dark:text-green-400"
                    >
                      View Product Details
                      <ArrowRight
                        size={18}
                        className="transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="mt-10 rounded-2xl border border-dashed border-slate-300 p-10 text-center dark:border-white/20">
              <Package
                size={36}
                className="mx-auto text-green-700 dark:text-green-400"
                aria-hidden="true"
              />

              <h3 className="mt-4 text-xl font-bold text-slate-900 dark:text-white">
                Products Coming Soon
              </h3>

              <p className="mt-2 text-slate-600 dark:text-slate-300">
                Contact our team for product enquiries.
              </p>

              <a
                href={whatsappUrl}
                target={phone ? "_blank" : undefined}
                rel={phone ? "noopener noreferrer" : undefined}
                className="mt-5 inline-flex items-center gap-2 rounded-xl bg-green-700 px-5 py-3 font-semibold text-white transition hover:bg-green-800"
              >
                <MessageCircle size={18} aria-hidden="true" />
                Enquire Now
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-16 dark:bg-[#121d16] sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-700 dark:text-green-400">
                Khaate Peete Pashu
              </p>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                Product Information Made Simple
              </h2>

              <p className="mt-5 leading-8 text-slate-600 dark:text-slate-300">
                Browse product information in one place. Check
                available pack sizes, review product details and
                contact our team to confirm pricing, availability
                and delivery options.
              </p>

              <Link
                href="/about"
                className="mt-6 inline-flex items-center gap-2 font-bold text-green-800 transition hover:gap-3 dark:text-green-400"
              >
                Learn About Us
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-green-100 bg-[#f4f8ef] p-6 dark:border-green-900/50 dark:bg-[#17251b]">
                <Package
                  size={30}
                  className="text-green-800 dark:text-green-400"
                  aria-hidden="true"
                />
                <h3 className="mt-4 text-lg font-bold text-slate-900 dark:text-white">
                  Product Range
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Explore feed, supplements and farm essentials.
                </p>
              </div>

              <div className="rounded-2xl border border-green-100 bg-[#f4f8ef] p-6 dark:border-green-900/50 dark:bg-[#17251b]">
                <Truck
                  size={30}
                  className="text-green-800 dark:text-green-400"
                  aria-hidden="true"
                />
                <h3 className="mt-4 text-lg font-bold text-slate-900 dark:text-white">
                  Delivery Enquiries
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ask our team about shipping and delivery availability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-white py-16 dark:bg-[#121d16] sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-[#14291b] p-8 text-white sm:p-12 lg:p-14">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full bg-green-500/10 blur-3xl"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 left-1/3 size-64 rounded-full bg-lime-400/10 blur-3xl"
            />

            <div className="relative max-w-3xl">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-white/10 text-green-300">
                <MessageCircle size={25} aria-hidden="true" />
              </div>

              <h2 className="mt-6 text-3xl font-extrabold sm:text-4xl">
                Need Product Information?
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-green-50/80">
                Contact {siteConfig.name} for product details,
                availability, pack sizes and delivery enquiries.
                Our team can help answer your questions.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={whatsappUrl}
                  target={phone ? "_blank" : undefined}
                  rel={phone ? "noopener noreferrer" : undefined}
                  className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-green-500 px-5 py-3 font-bold text-white transition hover:bg-green-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <MessageCircle size={18} aria-hidden="true" />
                  {phone ? "WhatsApp Us" : "Enquire Now"}
                </a>

                <Link
                  href="/contact"
                  className="inline-flex min-h-12 items-center gap-2 rounded-xl border border-white/25 px-5 py-3 font-bold text-white transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Contact Us
                  <ArrowRight size={18} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
