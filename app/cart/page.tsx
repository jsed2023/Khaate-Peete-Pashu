
"use client";

import Link from "next/link";
import {
  ShoppingBag,
  Trash2,
  Minus,
  Plus,
  ArrowLeft,
  ShieldCheck,
  MessageCircle,
  Truck,
  Leaf,
  ArrowRight,
  PackageCheck,
  Sprout,
  UserRound,
  MapPin,
} from "lucide-react";
import { useState } from "react";

import { useCart } from "@/context/CartContext";
import { money } from "@/config/products";
import { siteConfig } from "@/config/site";

type CustomerDetails = {
  name: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  notes: string;
};

const initialCustomer: CustomerDetails = {
  name: "",
  phone: "",
  address: "",
  city: "",
  state: "Rajasthan",
  pincode: "",
  notes: "",
};

export default function CartPage() {
  const { items, subtotal, remove, change, clear, hydrated } = useCart();

  const [customer, setCustomer] =
    useState<CustomerDetails>({ ...initialCustomer });
  const [customerError, setCustomerError] = useState("");

  const itemCount = items.reduce((sum, item) => sum + item.qty, 0);

  function updateCustomer<K extends keyof CustomerDetails>(
    field: K,
    value: CustomerDetails[K]
  ) {
    setCustomer((current) => ({
      ...current,
      [field]: value,
    }));

    if (customerError) {
      setCustomerError("");
    }
  }

  function orderOnWhatsApp() {
    if (!items.length) {
      setCustomerError("Your cart is empty. Please add a product first.");
      return;
    }

    const whatsappNumber = siteConfig.whatsappNumber.replace(/\D/g, "");
    const customerPhone = customer.phone.replace(/\D/g, "");

    if (!whatsappNumber) {
      setCustomerError(
        "WhatsApp number is missing. Please configure config/site.ts."
      );
      return;
    }

    if (
      !customer.name.trim() ||
      !customer.phone.trim() ||
      !customer.address.trim() ||
      !customer.city.trim() ||
      !customer.state.trim() ||
      !customer.pincode.trim()
    ) {
      setCustomerError(
        "Please fill in all required customer and delivery details."
      );
      return;
    }

    if (!/^[6-9]\d{9}$/.test(customerPhone)) {
      setCustomerError(
        "Please enter a valid 10-digit Indian mobile number."
      );
      return;
    }

    if (!/^\d{6}$/.test(customer.pincode.trim())) {
      setCustomerError("Please enter a valid 6-digit PIN code.");
      return;
    }

    if (!/^[1-9]\d{7,14}$/.test(whatsappNumber)) {
      setCustomerError(
        "The WhatsApp number in config/site.ts does not look valid."
      );
      return;
    }

    const productLines = items.map(
      (item, index) =>
        `${index + 1}. ${item.product.name}\n` +
        `Category: ${item.product.category}\n` +
        `Pack size: ${item.product.unit}\n` +
        `Quantity: ${item.qty}\n` +
        `Price: ${money(item.product.price)} each\n` +
        `Amount: ${money(item.product.price * item.qty)}`
    );

    const message = [
      `Namaste ${siteConfig.name}!`,
      "",
      "NEW ORDER REQUEST",
      "",
      "CUSTOMER DETAILS",
      `Name: ${customer.name.trim()}`,
      `Mobile: ${customerPhone}`,
      `Delivery address: ${customer.address.trim()}`,
      `City: ${customer.city.trim()}`,
      `State: ${customer.state.trim()}`,
      `PIN Code: ${customer.pincode.trim()}`,
      ...(customer.notes.trim()
        ? [`Additional notes: ${customer.notes.trim()}`]
        : []),
      "",
      "ORDER DETAILS",
      ...productLines,
      "",
      `Total quantity: ${itemCount}`,
      `Subtotal: ${money(subtotal)}`,
      "Shipping charges: To be confirmed",
      `Estimated total before shipping: ${money(subtotal)}`,
      "",
      "Please confirm product availability, final price, delivery charges and payment details.",
      "",
      "Thank you!",
    ].join("\n");

    const whatsappUrl =
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    setCustomerError("");

    try {
      // WhatsApp open karne ki request user ke button click se hoti hai.
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");

      // Order message banne ke baad cart aur form clear karein.
      clear();
      setCustomer({ ...initialCustomer });
      setCustomerError("");
    } catch {
      setCustomerError(
        "WhatsApp open nahi ho saka. Please dobara try karein."
      );
    }
  }

  if (!hydrated) {
    return (
      <main className="min-h-screen bg-stone-50 px-4 py-16">
        <div className="mx-auto max-w-6xl animate-pulse">
          <div className="h-8 w-48 rounded-lg bg-stone-200" />
          <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_380px]">
            <div className="h-80 rounded-3xl bg-white" />
            <div className="h-96 rounded-3xl bg-white" />
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f7f8f2]">
      <section className="relative isolate overflow-hidden bg-[#143d2b] text-white">
        <div className="absolute -right-16 -top-28 -z-10 size-80 rounded-full bg-lime-400/10 blur-3xl" />
        <div className="absolute -bottom-28 left-1/3 -z-10 size-72 rounded-full bg-emerald-300/10 blur-3xl" />

        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-lime-200">
                <Leaf size={14} />
                Your farm essentials
              </div>

              <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
                Shopping <span className="text-lime-300">Cart.</span>
              </h1>

              <p className="mt-4 max-w-xl text-sm leading-7 text-green-100 sm:text-base">
                Review your products, add delivery details and send your
                order directly through WhatsApp.
              </p>
            </div>

            {items.length > 0 && (
              <div className="flex w-fit items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-5 py-4 backdrop-blur-sm">
                <div className="flex size-11 items-center justify-center rounded-xl bg-lime-300 text-green-950">
                  <ShoppingBag size={22} />
                </div>
                <div>
                  <p className="text-2xl font-bold">{itemCount}</p>
                  <p className="text-xs text-green-100">
                    {itemCount === 1 ? "Item in your cart" : "Items in your cart"}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {!items.length ? (
            <div className="overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm">
              <div className="mx-auto max-w-xl px-5 py-14 text-center sm:py-20">
                <div className="mx-auto flex size-24 items-center justify-center rounded-[2rem] bg-green-50 text-green-800 ring-8 ring-green-50/60">
                  <ShoppingBag size={40} strokeWidth={1.5} />
                </div>

                <span className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-green-700">
                  <Sprout size={15} />
                  Your next order starts here
                </span>

                <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-stone-900 sm:text-3xl">
                  Your cart is ready for something good.
                </h2>

                <p className="mt-4 text-sm leading-7 text-stone-500">
                  Discover cattle feed, animal nutrition and farm supplies
                  for your everyday farming needs.
                </p>

                <Link
                  href="/products"
                  className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-green-800 px-6 py-3 font-bold text-white shadow-lg shadow-green-900/15 transition hover:-translate-y-0.5 hover:bg-green-900"
                >
                  Explore products
                  <ArrowRight size={18} />
                </Link>
              </div>

              <div className="grid border-t border-stone-100 bg-stone-50/70 sm:grid-cols-3">
                {[
                  {
                    icon: Leaf,
                    title: "Farm essentials",
                    text: "Products for daily needs",
                  },
                  {
                    icon: MessageCircle,
                    title: "Easy ordering",
                    text: "Order through WhatsApp",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Order assistance",
                    text: "Confirm details with the seller",
                  },
                ].map(({ icon: Icon, title, text }) => (
                  <div
                    key={title}
                    className="flex items-center gap-3 border-b border-stone-100 px-5 py-4 last:border-0 sm:justify-center sm:border-b-0 sm:border-r sm:last:border-r-0"
                  >
                    <Icon size={20} className="shrink-0 text-green-800" />
                    <div>
                      <p className="text-sm font-bold text-stone-800">{title}</p>
                      <p className="mt-0.5 text-xs text-stone-500">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_390px] xl:gap-8">
              <div className="min-w-0">
                <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h2 className="text-xl font-extrabold text-stone-900 sm:text-2xl">
                      Your selected products
                    </h2>
                    <p className="mt-1 text-sm text-stone-500">
                      Check quantities before placing your order.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      if (window.confirm("Are you sure you want to clear your cart?")) {
                        clear();
                      }
                    }}
                    className="inline-flex items-center gap-2 rounded-xl border border-red-200 bg-white px-3.5 py-2.5 text-sm font-semibold text-red-600 transition hover:border-red-300 hover:bg-red-50"
                  >
                    <Trash2 size={15} />
                    Clear cart
                  </button>
                </div>

                <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
                  {items.map((item) => (
                    <article
                      key={item.product.id}
                      className="group border-b border-stone-100 p-4 last:border-b-0 sm:p-6"
                    >
                      <div className="flex gap-4 sm:gap-5">
                        <Link
                          href={`/products/${item.product.slug}`}
                          aria-label={`View ${item.product.name}`}
                          className="flex size-24 shrink-0 items-center justify-center rounded-2xl border border-green-100 bg-gradient-to-br from-green-50 to-lime-50 text-4xl transition group-hover:border-green-200 sm:size-28 sm:text-5xl"
                        >
                          {item.product.emoji}
                        </Link>

                        <div className="min-w-0 flex-1">
                          <span className="inline-flex rounded-full bg-green-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-green-800">
                            {item.product.category}
                          </span>

                          <Link
                            href={`/products/${item.product.slug}`}
                            className="mt-2 block text-base font-extrabold leading-snug text-stone-900 transition hover:text-green-800 sm:text-lg"
                          >
                            {item.product.name}
                          </Link>

                          <p className="mt-1 text-xs text-stone-500 sm:text-sm">
                            Pack size: {item.product.unit}
                          </p>

                          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
                            <span className="text-sm font-bold text-green-800">
                              {money(item.product.price)}
                              <span className="ml-1 font-normal text-stone-400">/ unit</span>
                            </span>

                            <button
                              type="button"
                              onClick={() => remove(item.product.id)}
                              className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-400 transition hover:text-red-600"
                            >
                              <Trash2 size={13} />
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="mt-5 flex items-center justify-between gap-3 rounded-xl bg-stone-50 px-3 py-3 sm:ml-[132px] sm:mt-4 sm:px-4">
                        <div>
                          <p className="text-[11px] font-medium uppercase tracking-wider text-stone-400">
                            Item total
                          </p>
                          <p className="mt-0.5 text-lg font-extrabold text-stone-900">
                            {money(item.product.price * item.qty)}
                          </p>
                        </div>

                        <div className="flex items-center gap-3 rounded-xl border border-stone-200 bg-white p-1">
                          <button
                            type="button"
                            onClick={() => change(item.product.id, item.qty - 1)}
                            disabled={item.qty <= 1}
                            aria-label={`Decrease quantity of ${item.product.name}`}
                            className="flex size-9 items-center justify-center rounded-lg text-stone-700 transition hover:bg-green-50 hover:text-green-800 disabled:cursor-not-allowed disabled:opacity-35"
                          >
                            <Minus size={15} />
                          </button>

                          <span className="min-w-5 text-center text-sm font-extrabold tabular-nums">
                            {item.qty}
                          </span>

                          <button
                            type="button"
                            onClick={() => change(item.product.id, item.qty + 1)}
                            aria-label={`Increase quantity of ${item.product.name}`}
                            className="flex size-9 items-center justify-center rounded-lg text-stone-700 transition hover:bg-green-50 hover:text-green-800"
                          >
                            <Plus size={15} />
                          </button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>

                <Link
                  href="/products"
                  className="mt-5 inline-flex items-center gap-2 rounded-lg py-2 text-sm font-bold text-green-800 transition hover:text-green-950"
                >
                  <ArrowLeft size={17} />
                  Continue shopping
                </Link>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <div className="flex gap-3 rounded-2xl border border-stone-200 bg-white p-4">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-800">
                      <Truck size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-stone-800">Delivery details</p>
                      <p className="mt-1 text-xs leading-5 text-stone-500">
                        Shipping charges and delivery availability will be confirmed by the seller.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 rounded-2xl border border-stone-200 bg-white p-4">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
                      <PackageCheck size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-stone-800">Order confirmation</p>
                      <p className="mt-1 text-xs leading-5 text-stone-500">
                        Confirm stock, final price and payment details before purchase.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <aside className="lg:sticky lg:top-24">
                <div className="mb-5 overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
                  <div className="bg-[#173f2d] px-5 py-4 text-white">
                    <div className="flex items-center gap-3">
                      <div className="flex size-10 items-center justify-center rounded-xl bg-white/10">
                        <UserRound size={21} />
                      </div>
                      <div>
                        <h2 className="text-lg font-extrabold">Customer Details</h2>
                        <p className="mt-1 text-xs text-green-100">Enter your delivery information</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 p-5">
                    <div>
                      <label htmlFor="customer-name" className="mb-1.5 block text-sm font-semibold text-stone-700">
                        Full Name *
                      </label>
                      <input
                        id="customer-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        maxLength={100}
                        value={customer.name}
                        onChange={(e) => updateCustomer("name", e.target.value)}
                        placeholder="Enter your full name"
                        className="w-full rounded-xl border border-stone-200 px-3.5 py-3 text-sm outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-100"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="customer-phone" className="mb-1.5 block text-sm font-semibold text-stone-700">
                        Mobile Number *
                      </label>
                      <input
                        id="customer-phone"
                        name="phone"
                        type="tel"
                        inputMode="numeric"
                        autoComplete="tel-national"
                        maxLength={10}
                        value={customer.phone}
                        onChange={(e) => updateCustomer("phone", e.target.value.replace(/\D/g, "").slice(0, 10))}
                        placeholder="10-digit mobile number"
                        className="w-full rounded-xl border border-stone-200 px-3.5 py-3 text-sm outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-100"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="customer-address" className="mb-1.5 block text-sm font-semibold text-stone-700">
                        Complete Address *
                      </label>
                      <textarea
                        id="customer-address"
                        name="address"
                        autoComplete="street-address"
                        maxLength={500}
                        value={customer.address}
                        onChange={(e) => updateCustomer("address", e.target.value)}
                        placeholder="House number, street, village or area"
                        rows={3}
                        className="w-full resize-y rounded-xl border border-stone-200 px-3.5 py-3 text-sm outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-100"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="customer-city" className="mb-1.5 block text-sm font-semibold text-stone-700">
                        City / Village *
                      </label>
                      <input
                        id="customer-city"
                        name="city"
                        type="text"
                        autoComplete="address-level2"
                        maxLength={100}
                        value={customer.city}
                        onChange={(e) => updateCustomer("city", e.target.value)}
                        placeholder="Enter city or village"
                        className="w-full rounded-xl border border-stone-200 px-3.5 py-3 text-sm outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-100"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="customer-state" className="mb-1.5 block text-sm font-semibold text-stone-700">
                        State *
                      </label>
                      <input
                        id="customer-state"
                        name="state"
                        type="text"
                        autoComplete="address-level1"
                        maxLength={100}
                        value={customer.state}
                        onChange={(e) => updateCustomer("state", e.target.value)}
                        placeholder="Enter state"
                        className="w-full rounded-xl border border-stone-200 px-3.5 py-3 text-sm outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-100"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="customer-pincode" className="mb-1.5 block text-sm font-semibold text-stone-700">
                        PIN Code *
                      </label>
                      <input
                        id="customer-pincode"
                        name="pincode"
                        type="text"
                        inputMode="numeric"
                        autoComplete="postal-code"
                        maxLength={6}
                        value={customer.pincode}
                        onChange={(e) => updateCustomer("pincode", e.target.value.replace(/\D/g, "").slice(0, 6))}
                        placeholder="6-digit PIN code"
                        className="w-full rounded-xl border border-stone-200 px-3.5 py-3 text-sm outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-100"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="customer-notes" className="mb-1.5 block text-sm font-semibold text-stone-700">
                        Additional Notes <span className="ml-1 font-normal text-stone-400">(Optional)</span>
                      </label>
                      <textarea
                        id="customer-notes"
                        name="notes"
                        maxLength={500}
                        value={customer.notes}
                        onChange={(e) => updateCustomer("notes", e.target.value)}
                        placeholder="Landmark or delivery instructions"
                        rows={2}
                        className="w-full resize-y rounded-xl border border-stone-200 px-3.5 py-3 text-sm outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-100"
                      />
                    </div>

                    <p className="flex items-start gap-2 text-xs leading-5 text-stone-500">
                      <MapPin size={16} className="mt-0.5 shrink-0 text-green-700" />
                      Your delivery details will be included in the WhatsApp order message.
                    </p>

                    {customerError && (
                      <p role="alert" aria-live="polite" className="rounded-xl border border-red-200 bg-red-50 p-3 text-sm leading-6 text-red-700">
                        {customerError}
                      </p>
                    )}
                  </div>
                </div>

                <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
                  <div className="bg-[#173f2d] px-5 py-5 text-white sm:px-6">
                    <div className="flex items-center gap-3">
                      <div className="flex size-11 items-center justify-center rounded-xl bg-white/10">
                        <ShoppingBag size={22} />
                      </div>
                      <div>
                        <h2 className="text-lg font-extrabold">Order Summary</h2>
                        <p className="mt-0.5 text-xs text-green-100">
                          {itemCount} {itemCount === 1 ? "item" : "items"} selected
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6">
                    <div className="space-y-4">
                      <div className="flex justify-between gap-4 text-sm">
                        <span className="text-stone-500">Subtotal</span>
                        <span className="font-bold text-stone-900">{money(subtotal)}</span>
                      </div>

                      <div className="flex justify-between gap-4 text-sm">
                        <span className="text-stone-500">Shipping</span>
                        <span className="text-right font-medium text-stone-600">To be confirmed</span>
                      </div>
                    </div>

                    <div className="my-5 border-t border-dashed border-stone-200" />

                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-extrabold text-stone-900">Estimated Total</p>
                        <p className="mt-1 text-xs leading-5 text-stone-400">Shipping not included</p>
                      </div>
                      <p className="text-xl font-black tracking-tight text-green-800 sm:text-2xl">
                        {money(subtotal)}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={orderOnWhatsApp}
                      className="mt-6 flex min-h-13 w-full items-center justify-center gap-2 rounded-xl bg-[#168447] px-4 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-green-900/15 transition hover:-translate-y-0.5 hover:bg-[#116b39] focus:outline-none focus:ring-4 focus:ring-green-200"
                    >
                      <MessageCircle size={20} />
                      Order on WhatsApp
                      <ArrowRight size={17} />
                    </button>

                    <p className="mt-4 text-center text-[11px] leading-5 text-stone-400">
                      Direct seller communication · Order enquiry
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-3 rounded-2xl border border-green-100 bg-green-50/80 p-4">
                  <Leaf size={22} className="shrink-0 text-green-800" />
                  <p className="text-xs leading-5 text-green-900">
                    Need help choosing a product? Contact the seller before confirming your order.
                  </p>
                </div>
              </aside>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
