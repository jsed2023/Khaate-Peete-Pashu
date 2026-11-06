
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
  const {
    items,
    subtotal,
    hasEnquiryItems,
    remove,
    change,
    clear,
    hydrated,
  } = useCart();

  const [customer, setCustomer] =
    useState<CustomerDetails>({ ...initialCustomer });

  const [customerError, setCustomerError] = useState("");

  const itemCount = items.reduce(
    (sum, item) => sum + item.qty,
    0
  );

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
      setCustomerError(
        "Your cart is empty. Please add a product first."
      );
      return;
    }

    const whatsappNumber = String(
      siteConfig.whatsappNumber || ""
    ).replace(/\D/g, "");

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
      setCustomerError(
        "Please enter a valid 6-digit PIN code."
      );
      return;
    }

    if (!/^[1-9]\d{7,14}$/.test(whatsappNumber)) {
      setCustomerError(
        "The WhatsApp number in config/site.ts does not look valid."
      );
      return;
    }

    // Build product details safely for nullable prices.
    const productLines = items.map((item, index) => {
      const price = item.product.price;
      const isEnquiry = price === null;

      const productPrice = isEnquiry
        ? item.product.priceLabel || "Price on Enquiry"
        : money(price);

      const itemAmount = isEnquiry
        ? "To be confirmed"
        : money(price * item.qty);

      return (
        `${index + 1}. ${item.product.name}\n` +
        `Category: ${item.product.category}\n` +
        `Pack size: ${item.product.unit}\n` +
        `Quantity: ${item.qty}\n` +
        `Price: ${productPrice} each\n` +
        `Amount: ${itemAmount}`
      );
    });

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
      `Known-price subtotal: ${money(subtotal)}`,
      `Enquiry products included: ${hasEnquiryItems ? "Yes" : "No"}`,
      "Shipping charges: To be confirmed",
      hasEnquiryItems
        ? "Final product price and total: To be confirmed by seller"
        : `Estimated total before shipping: ${money(subtotal)}`,
      "",
      "Please confirm product availability, enquiry product prices, final order amount, delivery charges and payment details.",
      "",
      "Thank you!",
    ].join("\n");

    const whatsappUrl =
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    setCustomerError("");

    // Keep the cart intact until the order is confirmed.
    window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer"
    );
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
      {/* Hero Section */}
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
                    {itemCount === 1
                      ? "Item in your cart"
                      : "Items in your cart"}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Cart Content */}
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
                      <p className="text-sm font-bold text-stone-800">
                        {title}
                      </p>
                      <p className="mt-0.5 text-xs text-stone-500">
                        {text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_390px] xl:gap-8">
              {/* Product List */}
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
                      if (
                        window.confirm(
                          "Are you sure you want to clear your cart?"
                        )
                      ) {
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
                  {items.map((item) => {
                    const price = item.product.price;
                    const isEnquiry = price === null;

                    const displayPrice = isEnquiry
                      ? item.product.priceLabel || "Price on Enquiry"
                      : money(price);

                    const itemTotal = isEnquiry
                      ? "To be confirmed"
                      : money(price * item.qty);

                    return (
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
                              <span
                                className={`text-sm font-bold ${
                                  isEnquiry
                                    ? "text-amber-700"
                                    : "text-green-800"
                                }`}
                              >
                                {displayPrice}

                                {!isEnquiry && (
                                  <span className="ml-1 font-normal text-stone-400">
                                    / unit
                                  </span>
                                )}
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

                        {/* Item Total and Quantity */}
                        <div className="mt-5 flex items-center justify-between gap-3 rounded-xl bg-stone-50 px-3 py-3 sm:ml-[132px] sm:mt-4 sm:px-4">
                          <div>
                            <p className="text-[11px] font-medium uppercase tracking-wider text-stone-400">
                              Item total
                            </p>

                            <p
                              className={`mt-0.5 text-lg font-extrabold ${
                                isEnquiry
                                  ? "text-amber-700"
                                  : "text-stone-900"
                              }`}
                            >
                              {itemTotal}
                            </p>
                          </div>

                          <div className="flex items-center gap-3 rounded-xl border border-stone-200 bg-white p-1">
                            <button
                              type="button"
                              onClick={() =>
                                change(item.product.id, item.qty - 1)
                              }
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
                              onClick={() =>
                                change(item.product.id, item.qty + 1)
                              }
                              aria-label={`Increase quantity of ${item.product.name}`}
                              className="flex size-9 items-center justify-center rounded-lg text-stone-700 transition hover:bg-green-50 hover:text-green-800"
                            >
                              <Plus size={15} />
                            </button>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>

                <Link
                  href="/products"
                  className="mt-5 inline-flex items-center gap-2 rounded-lg py-2 text-sm font-bold text-green-800 transition hover:text-green-950"
                >
                  <ArrowLeft size={17} />
                  Continue shopping
                </Link>

                {/* Delivery Information */}
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <div className="flex gap-3 rounded-2xl border border-stone-200 bg-white p-4">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-800">
                      <Truck size={20} />
                    </div>

                    <div>
                      <p className="text-sm font-bold text-stone-800">
                        Delivery details
                      </p>

                      <p className="mt-1 text-xs leading-5 text-stone-500">
                        Shipping charges and delivery availability will be
                        confirmed by the seller.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 rounded-2xl border border-stone-200 bg-white p-4">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
                      <PackageCheck size={20} />
                    </div>

                    <div>
                      <p className="text-sm font-bold text-stone-800">
                        Order confirmation
                      </p>

                      <p className="mt-1 text-xs leading-5 text-stone-500">
                        Confirm stock, final price and payment details before
                        purchase.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Customer Details and Order Summary */}
              <aside className="lg:sticky lg:top-24">
                {/* Customer Form */}
                <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm sm:p-6">
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex size-11 items-center justify-center rounded-xl bg-green-50 text-green-800">
                      <UserRound size={21} />
                    </div>

                    <div>
                      <h2 className="text-lg font-extrabold text-stone-900">
                        Delivery details
                      </h2>
                      <p className="text-xs text-stone-500">
                        Where should we deliver your order?
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label
                        htmlFor="customer-name"
                        className="mb-1.5 block text-xs font-bold text-stone-700"
                      >
                        Full name *
                      </label>

                      <input
                        id="customer-name"
                        type="text"
                        autoComplete="name"
                        value={customer.name}
                        onChange={(event) =>
                          updateCustomer("name", event.target.value)
                        }
                        placeholder="Enter your full name"
                        className="w-full rounded-xl border border-stone-200 bg-stone-50 px-3.5 py-3 text-sm text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-green-700 focus:bg-white focus:ring-2 focus:ring-green-700/10"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="customer-phone"
                        className="mb-1.5 block text-xs font-bold text-stone-700"
                      >
                        Mobile number *
                      </label>

                      <input
                        id="customer-phone"
                        type="tel"
                        inputMode="numeric"
                        autoComplete="tel"
                        maxLength={10}
                        value={customer.phone}
                        onChange={(event) =>
                          updateCustomer(
                            "phone",
                            event.target.value.replace(/\D/g, "").slice(0, 10)
                          )
                        }
                        placeholder="10-digit mobile number"
                        className="w-full rounded-xl border border-stone-200 bg-stone-50 px-3.5 py-3 text-sm text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-green-700 focus:bg-white focus:ring-2 focus:ring-green-700/10"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="customer-address"
                        className="mb-1.5 block text-xs font-bold text-stone-700"
                      >
                        Complete address *
                      </label>

                      <textarea
                        id="customer-address"
                        rows={3}
                        autoComplete="street-address"
                        value={customer.address}
                        onChange={(event) =>
                          updateCustomer("address", event.target.value)
                        }
                        placeholder="House number, street, village or locality"
                        className="w-full resize-none rounded-xl border border-stone-200 bg-stone-50 px-3.5 py-3 text-sm text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-green-700 focus:bg-white focus:ring-2 focus:ring-green-700/10"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label
                          htmlFor="customer-city"
                          className="mb-1.5 block text-xs font-bold text-stone-700"
                        >
                          City / Village *
                        </label>

                        <input
                          id="customer-city"
                          type="text"
                          autoComplete="address-level2"
                          value={customer.city}
                          onChange={(event) =>
                            updateCustomer("city", event.target.value)
                          }
                          placeholder="City"
                          className="w-full min-w-0 rounded-xl border border-stone-200 bg-stone-50 px-3 py-3 text-sm text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-green-700 focus:bg-white focus:ring-2 focus:ring-green-700/10"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="customer-pincode"
                          className="mb-1.5 block text-xs font-bold text-stone-700"
                        >
                          PIN code *
                        </label>

                        <input
                          id="customer-pincode"
                          type="text"
                          inputMode="numeric"
                          autoComplete="postal-code"
                          maxLength={6}
                          value={customer.pincode}
                          onChange={(event) =>
                            updateCustomer(
                              "pincode",
                              event.target.value.replace(/\D/g, "").slice(0, 6)
                            )
                          }
                          placeholder="6 digits"
                          className="w-full min-w-0 rounded-xl border border-stone-200 bg-stone-50 px-3 py-3 text-sm text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-green-700 focus:bg-white focus:ring-2 focus:ring-green-700/10"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="customer-state"
                        className="mb-1.5 block text-xs font-bold text-stone-700"
                      >
                        State *
                      </label>

                      <input
                        id="customer-state"
                        type="text"
                        autoComplete="address-level1"
                        value={customer.state}
                        onChange={(event) =>
                          updateCustomer("state", event.target.value)
                        }
                        placeholder="State"
                        className="w-full rounded-xl border border-stone-200 bg-stone-50 px-3.5 py-3 text-sm text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-green-700 focus:bg-white focus:ring-2 focus:ring-green-700/10"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="customer-notes"
                        className="mb-1.5 block text-xs font-bold text-stone-700"
                      >
                        Additional notes (optional)
                      </label>

                      <textarea
                        id="customer-notes"
                        rows={2}
                        value={customer.notes}
                        onChange={(event) =>
                          updateCustomer("notes", event.target.value)
                        }
                        placeholder="Landmark, delivery instructions, etc."
                        className="w-full resize-none rounded-xl border border-stone-200 bg-stone-50 px-3.5 py-3 text-sm text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-green-700 focus:bg-white focus:ring-2 focus:ring-green-700/10"
                      />
                    </div>
                  </div>
                </div>

                {/* Order Summary */}
                <div className="mt-5 overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
                  <div className="bg-[#143d2b] px-5 py-5 text-white">
                    <div className="flex items-center gap-3">
                      <div className="flex size-10 items-center justify-center rounded-xl bg-white/10">
                        <ShoppingBag size={20} />
                      </div>

                      <div>
                        <h2 className="font-extrabold">
                          Order summary
                        </h2>
                        <p className="text-xs text-green-100">
                          {itemCount} {itemCount === 1 ? "item" : "items"} in
                          your order
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 p-5">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-stone-500">
                        Total quantity
                      </span>
                      <span className="font-bold text-stone-900">
                        {itemCount}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <span className="text-stone-500">
                        Known-price subtotal
                      </span>
                      <span className="font-bold text-stone-900">
                        {money(subtotal)}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <span className="text-stone-500">
                        Shipping charges
                      </span>
                      <span className="font-semibold text-amber-700">
                        To be confirmed
                      </span>
                    </div>

                    <div className="border-t border-dashed border-stone-200 pt-4">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="font-extrabold text-stone-900">
                            {hasEnquiryItems
                              ? "Estimated amount"
                              : "Estimated total"}
                          </p>

                          <p className="mt-1 max-w-[210px] text-[11px] leading-5 text-stone-500">
                            {hasEnquiryItems
                              ? "Enquiry product prices and shipping are not included."
                              : "Shipping charges are not included."}
                          </p>
                        </div>

                        <p className="text-xl font-black text-green-800">
                          {hasEnquiryItems
                            ? "To confirm"
                            : money(subtotal)}
                        </p>
                      </div>
                    </div>

                    {hasEnquiryItems && (
                      <div className="flex gap-2 rounded-xl border border-amber-200 bg-amber-50 p-3">
                        <MessageCircle
                          size={17}
                          className="mt-0.5 shrink-0 text-amber-700"
                        />

                        <p className="text-xs leading-5 text-amber-800">
                          Your cart contains products with enquiry pricing.
                          The seller will confirm their prices on WhatsApp.
                        </p>
                      </div>
                    )}

                    {customerError && (
                      <div
                        role="alert"
                        className="rounded-xl border border-red-200 bg-red-50 px-3.5 py-3 text-xs font-medium leading-5 text-red-700"
                      >
                        {customerError}
                      </div>
                    )}

                    <button
                      type="button"
                      onClick={orderOnWhatsApp}
                      className="flex min-h-14 w-full items-center justify-center gap-2 rounded-xl bg-green-700 px-5 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-green-900/15 transition hover:-translate-y-0.5 hover:bg-green-800 active:translate-y-0"
                    >
                      <MessageCircle size={19} />
                      Send order on WhatsApp
                      <ArrowRight size={17} />
                    </button>

                    <div className="flex items-start gap-2 text-[11px] leading-5 text-stone-500">
                      <ShieldCheck
                        size={15}
                        className="mt-0.5 shrink-0 text-green-700"
                      />
                      Your order request will be shared with the seller.
                      Final prices, availability, shipping and payment will
                      be confirmed directly.
                    </div>
                  </div>
                </div>

                {/* Support Note */}
                <div className="mt-4 flex items-center gap-3 rounded-2xl border border-green-100 bg-green-50 p-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white text-green-800">
                    <MapPin size={19} />
                  </div>

                  <div>
                    <p className="text-xs font-bold text-green-900">
                      Need help with your order?
                    </p>
                    <p className="mt-0.5 text-[11px] leading-5 text-green-800">
                      Contact us on WhatsApp for product and delivery
                      assistance.
                    </p>
                  </div>
                </div>
              </aside>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
