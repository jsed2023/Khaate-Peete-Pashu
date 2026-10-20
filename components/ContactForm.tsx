"use client";

import { useState, type FormEvent } from "react";
import {
  UserRound,
  Mail,
  Phone,
  MessageSquare,
  Send,
  CheckCircle2,
  LoaderCircle,
} from "lucide-react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (submitting) return;

    setSubmitting(true);

    // Demo only: connect an API to actually deliver enquiries.
    setSent(true);
    setSubmitting(false);
    e.currentTarget.reset();
  }

  return (
    <form
      onSubmit={submit}
      className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm sm:p-7"
    >
      <div className="mb-7">
        <span className="text-xs font-bold uppercase tracking-[0.18em] text-green-800">
          Contact our team
        </span>

        <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-stone-900">
          Send us a message
        </h2>

        <p className="mt-2 text-sm leading-6 text-stone-500">
          Have a question about cattle feed, animal nutrition or an order?
          Fill out the form and tell us how we can help.
        </p>
      </div>

      {sent && (
        <div
          role="status"
          aria-live="polite"
          className="mb-6 flex gap-3 rounded-xl border border-green-200 bg-green-50 p-4 text-green-900"
        >
          <CheckCircle2 className="mt-0.5 shrink-0" size={21} />

          <div>
            <p className="font-bold">Thank you for contacting us!</p>
            <p className="mt-1 text-sm leading-6 text-green-800">
              Your demo submission was validated locally. No message has been
              emailed or sent to the business yet.
            </p>
          </div>
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="contact-name"
            className="mb-2 block text-sm font-semibold text-stone-800"
          >
            Full name <span className="text-red-600">*</span>
          </label>

          <div className="relative">
            <UserRound
              size={18}
              className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400"
            />

            <input
              id="contact-name"
              required
              minLength={2}
              maxLength={100}
              name="name"
              autoComplete="name"
              placeholder="Enter your full name"
              className="min-h-12 w-full rounded-xl border border-stone-200 bg-stone-50 py-3 pl-10 pr-3 text-sm text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-green-700 focus:bg-white focus:ring-4 focus:ring-green-700/10"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="contact-email"
            className="mb-2 block text-sm font-semibold text-stone-800"
          >
            Email address <span className="text-red-600">*</span>
          </label>

          <div className="relative">
            <Mail
              size={18}
              className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400"
            />

            <input
              id="contact-email"
              required
              type="email"
              maxLength={254}
              name="email"
              autoComplete="email"
              placeholder="you@example.com"
              className="min-h-12 w-full rounded-xl border border-stone-200 bg-stone-50 py-3 pl-10 pr-3 text-sm text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-green-700 focus:bg-white focus:ring-4 focus:ring-green-700/10"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="contact-phone"
            className="mb-2 block text-sm font-semibold text-stone-800"
          >
            Phone number <span className="text-stone-400">(optional)</span>
          </label>

          <div className="relative">
            <Phone
              size={18}
              className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400"
            />

            <input
              id="contact-phone"
              type="tel"
              name="phone"
              autoComplete="tel"
              maxLength={25}
              placeholder="+91 XXXXX XXXXX"
              className="min-h-12 w-full rounded-xl border border-stone-200 bg-stone-50 py-3 pl-10 pr-3 text-sm text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-green-700 focus:bg-white focus:ring-4 focus:ring-green-700/10"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="contact-topic"
            className="mb-2 block text-sm font-semibold text-stone-800"
          >
            Enquiry topic
          </label>

          <select
            id="contact-topic"
            name="topic"
            defaultValue="Product enquiry"
            className="min-h-12 w-full rounded-xl border border-stone-200 bg-stone-50 px-3.5 py-3 text-sm text-stone-800 outline-none transition focus:border-green-700 focus:bg-white focus:ring-4 focus:ring-green-700/10"
          >
            <option>Product enquiry</option>
            <option>Price and availability</option>
            <option>Order support</option>
            <option>Delivery enquiry</option>
            <option>Business partnership</option>
            <option>Feedback</option>
            <option>Other</option>
          </select>
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="contact-message"
            className="mb-2 block text-sm font-semibold text-stone-800"
          >
            Your message <span className="text-red-600">*</span>
          </label>

          <div className="relative">
            <MessageSquare
              size={18}
              className="pointer-events-none absolute left-3.5 top-4 text-stone-400"
            />

            <textarea
              id="contact-message"
              required
              minLength={10}
              maxLength={3000}
              name="message"
              rows={5}
              placeholder="Please tell us about your product question or order enquiry..."
              className="w-full resize-y rounded-xl border border-stone-200 bg-stone-50 py-3.5 pl-10 pr-3 text-sm leading-6 text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-green-700 focus:bg-white focus:ring-4 focus:ring-green-700/10"
            />
          </div>

          <p className="mt-2 text-xs text-stone-400">
            Please do not include passwords, payment PINs or other sensitive
            information.
          </p>
        </div>

        <div className="sm:col-span-2">
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-green-800 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-green-900/10 transition hover:-translate-y-0.5 hover:bg-green-900 focus:outline-none focus:ring-4 focus:ring-green-700/20 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          >
            {submitting ? (
              <>
                <LoaderCircle size={18} className="animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                <Send size={17} />
                Submit enquiry
              </>
            )}
          </button>

          <p className="mt-3 text-xs leading-5 text-stone-400">
            Fields marked with * are required.
          </p>
        </div>
      </div>
    </form>
  );
}
