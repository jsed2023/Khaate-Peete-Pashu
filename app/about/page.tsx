import Link from "next/link";
import {
  Leaf,
  HeartHandshake,
  Sprout,
  ArrowRight,
  CheckCircle2,
  Tractor,
  ShieldCheck,
  Wheat,
  Users,
} from "lucide-react";

const values = [
  {
    Icon: Leaf,
    number: "01",
    title: "Farm-Focused Products",
    description:
      "Explore cattle feed, animal nutrition and everyday essentials for livestock care.",
  },
  {
    Icon: HeartHandshake,
    number: "02",
    title: "Helpful Support",
    description:
      "Get in touch with our team to ask questions and enquire about available products.",
  },
  {
    Icon: ShieldCheck,
    number: "03",
    title: "Clear Information",
    description:
      "We aim to make product details easier to understand so you can make informed choices.",
  },
  {
    Icon: Sprout,
    number: "04",
    title: "Growing Together",
    description:
      "We want to make discovering useful dairy and livestock essentials simpler for farmers.",
  },
];

const highlights = [
  "Easy product discovery",
  "Dedicated enquiry options",
  "Livestock and dairy essentials",
  "Customer-focused experience",
];

export default function AboutPage() {
  return (
    <div className="overflow-hidden bg-white text-slate-800">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-[#102f22] text-white">
        <div
          className="pointer-events-none absolute -right-24 -top-24 -z-10 h-96 w-96 rounded-full bg-lime-400/15 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-32 left-1/4 -z-10 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl"
          aria-hidden="true"
        />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-2 lg:px-10 lg:py-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-lime-300/25 bg-white/5 px-4 py-2 text-sm font-medium text-lime-200">
              <Sprout size={16} />
              About Khaate Peete Pashu
            </div>

            <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Better Choices for
              <span className="mt-2 block text-lime-300">
                Everyday Farm Needs.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-white/75 sm:text-lg">
              Your destination for exploring cattle feed, animal nutrition
              products and dairy farm essentials. We make it easier to
              discover products and connect with our team.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-lime-300 px-6 py-3.5 font-semibold text-[#173b28] shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-lime-200"
              >
                Explore Products
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
              >
                Contact Us
              </Link>
            </div>

            <div className="mt-10 flex items-center gap-3 text-sm text-white/65">
              <CheckCircle2 className="text-lime-300" size={19} />
              <span>Explore products. Ask questions. Make informed choices.</span>
            </div>
          </div>

          {/* Decorative farm illustration */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute inset-5 rounded-[2rem] bg-lime-300/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#254b34] to-[#173426] p-6 shadow-2xl sm:p-9">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.22em] text-lime-200/80">
                    Our focus
                  </span>
                  <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                    Farm essentials,
                    <br />
                    made easier.
                  </h2>
                </div>

                <div className="rounded-2xl bg-lime-300 p-3 text-[#173b28]">
                  <Wheat size={30} />
                </div>
              </div>

              <div className="my-8 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-lime-300/15 text-lime-200">
                    <Leaf size={23} />
                  </div>
                  <h3 className="font-semibold text-white">Cattle Feed</h3>
                  <p className="mt-1 text-sm leading-6 text-white/60">
                    Explore feed options
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-lime-300/15 text-lime-200">
                    <Sprout size={23} />
                  </div>
                  <h3 className="font-semibold text-white">
                    Animal Nutrition
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-white/60">
                    Browse nutrition products
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl bg-lime-300 p-5 text-[#173b28]">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/50">
                  <Tractor size={25} />
                </div>
                <div>
                  <p className="font-bold">Built around farm life</p>
                  <p className="mt-1 text-sm text-[#173b28]/75">
                    Discover products for your needs.
                  </p>
                </div>
              </div>

              <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full border border-lime-200/15" />
              <div className="pointer-events-none absolute -bottom-12 -left-10 h-36 w-36 rounded-full border border-lime-200/10" />
            </div>
          </div>
        </div>
      </section>

      {/* Intro section */}
      <section className="bg-[#f7f9f3]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:px-10 lg:py-24">
          <div>
            <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-emerald-800">
              <span className="h-0.5 w-8 bg-lime-500" />
              Who We Are
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#173b28] sm:text-4xl">
              Helping You Find the Right Farm Essentials
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Every farm has its own needs. Finding relevant products and
              getting clear information should be straightforward. Khaate
              Peete Pashu brings product discovery and customer enquiries
              together in one convenient place.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Whether you are exploring cattle feed, mineral mixtures or
              other livestock-care products, our aim is to help you navigate
              the available options and contact us for further details.
            </p>

            <Link
              href="/products"
              className="mt-7 inline-flex items-center gap-2 font-semibold text-emerald-800 transition hover:gap-3"
            >
              Discover our collection
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="rounded-3xl border border-emerald-900/5 bg-white p-6 shadow-sm sm:p-9">
            <h3 className="text-xl font-bold text-[#173b28]">
              What you can expect
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              A simple, customer-focused way to explore our collection.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl bg-[#f7f9f3] p-4"
                >
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-emerald-700"
                  />
                  <span className="text-sm font-medium leading-6 text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-800">
              What Guides Us
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#173b28] sm:text-4xl">
              Our Approach to Better Farm Experiences
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Useful information, convenient product discovery and helpful
              customer support shape the experience we aim to provide.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ Icon, number, title, description }) => (
              <article
                key={title}
                className="group rounded-2xl border border-slate-200/80 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-emerald-700/30 hover:shadow-xl hover:shadow-emerald-950/5 sm:p-7"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#edf5df] text-emerald-800 transition group-hover:bg-[#dff0b9]">
                    <Icon size={24} />
                  </div>

                  <span className="text-sm font-semibold tracking-widest text-slate-300">
                    {number}
                  </span>
                </div>

                <h3 className="mt-6 text-lg font-bold text-[#173b28]">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-[#f7f9f3] px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#173b28] px-6 py-10 text-white sm:px-10 sm:py-14 lg:px-14">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <div className="flex items-center gap-2 text-sm font-semibold text-lime-300">
                <Users size={18} />
                Let’s Connect
              </div>

              <h2 className="mt-4 max-w-2xl text-3xl font-bold leading-tight sm:text-4xl">
                Looking for farm essentials?
                <span className="block text-lime-300">
                  Start exploring today.
                </span>
              </h2>

              <p className="mt-4 max-w-xl leading-7 text-white/70">
                Browse our products or contact our team for product details,
                availability and enquiries.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-lime-300 px-5 py-3.5 font-semibold text-[#173b28] transition hover:bg-lime-200"
              >
                View Products
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-white/25 px-5 py-3.5 font-semibold text-white transition hover:bg-white/10"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}