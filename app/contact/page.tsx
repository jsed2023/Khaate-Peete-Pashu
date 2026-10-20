import Link from "next/link";
import {
  Mail,
  MessageCircle,
  Clock,
  ArrowRight,
  Leaf,
  ShieldCheck,
} from "lucide-react";

import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/config/site";

export default function ContactPage() {
  const whatsappNumber = (
    siteConfig.whatsappNumber ?? ""
  ).replace(/\D/g, "");

  const whatsappUrl = whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        `Namaste ${siteConfig.name}! I have a question about your products.`,
      )}`
    : null;

  return (
    <>
      <section className="relative overflow-hidden bg-green-950 px-4 py-16 text-white sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-green-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
      
          <h1 className="max-w-3xl text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            Let&apos;s talk about{" "}
            <span className="text-lime-300">your farm.</span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-8 text-green-100 sm:text-lg">
            Have a product question, order enquiry or feedback? Get in touch
            with our team. We&apos;re here to help you find the right farm
            essentials.
          </p>

          <div className="mt-7 flex flex-wrap gap-4 text-sm text-green-100">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck size={17} />
              Order assistance
            </span>
            <span className="inline-flex items-center gap-2">
              <MessageCircle size={17} />
              WhatsApp enquiries
            </span>
          </div>
        </div>
      </section>

      <section className="bg-stone-50 px-4 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-green-800">
              Contact information
            </span>

            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-stone-900 sm:text-3xl">
              How can we help you?
            </h2>

            <p className="mt-4 max-w-lg text-sm leading-7 text-stone-600 sm:text-base">
              Reach out for product details, availability, pricing and order
              support. Share your enquiry so we can better understand your
              requirements.
            </p>

            <div className="mt-8 space-y-4">
              <article className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm sm:p-6">
                <div className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-800">
                    <Mail size={23} />
                  </div>

                  <div className="min-w-0">
                    <h3 className="font-bold text-stone-900">
                      Email support
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-stone-500">
                      For product questions, business enquiries and feedback,
                      contact us using your official support email.
                    </p>
                    <p className="mt-3 text-xs text-stone-400">
                      Add your verified email address before launch.
                    </p>
                  </div>
                </div>
              </article>

              <article className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm sm:p-6">
                <div className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-800">
                    <MessageCircle size={23} />
                  </div>

                  <div className="min-w-0">
                    <h3 className="font-bold text-stone-900">
                      Phone / WhatsApp
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-stone-500">
                      Message us about products, order quantities and delivery
                      details.
                    </p>

                    {whatsappUrl ? (
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-2 rounded-lg bg-green-700 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-green-800"
                      >
                        Chat on WhatsApp
                        <ArrowRight size={16} />
                      </a>
                    ) : (
                      <p className="mt-3 text-xs font-medium text-amber-700">
                        Configure your WhatsApp number in config/site.ts.
                      </p>
                    )}
                  </div>
                </div>
              </article>

              <article className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm sm:p-6">
                <div className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-800">
                    <Clock size={23} />
                  </div>

                  <div>
                    <h3 className="font-bold text-stone-900">
                      Support hours
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-stone-500">
                      Send us your enquiry. Our team can confirm availability
                      and response time.
                    </p>
                    <p className="mt-3 text-xs text-stone-400">
                      Publish your actual business hours before launch.
                    </p>
                  </div>
                </div>
              </article>
            </div>

            <div className="mt-6 rounded-2xl bg-green-900 p-5 text-white sm:p-6">
              <Leaf size={25} className="text-lime-300" />

              <h3 className="mt-3 text-lg font-bold">
                Looking for farm essentials?
              </h3>

              <p className="mt-2 text-sm leading-6 text-green-100">
                Explore our products and contact us if you need help selecting
                a product.
              </p>

              <Link
                href="/products"
                className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-lime-300 transition hover:text-white"
              >
                Explore products
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div>
            <div className="rounded-3xl border border-stone-200 bg-white p-5 shadow-sm sm:p-8 lg:p-10">
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-green-800">
                Send an enquiry
              </span>

              <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-stone-900 sm:text-3xl">
                Send us a message
              </h2>

              <p className="mt-3 text-sm leading-7 text-stone-500">
                Fill in the form below with your contact details and enquiry.
              </p>

              <div className="mt-7">
                <ContactForm />
              </div>

              <div className="mt-6 flex items-start gap-3 rounded-xl bg-stone-50 p-4">
                <ShieldCheck
                  size={19}
                  className="mt-0.5 shrink-0 text-green-800"
                />
                <p className="text-xs leading-5 text-stone-500">
                  Please avoid sharing passwords, payment PINs or other
                  sensitive information in your message.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}