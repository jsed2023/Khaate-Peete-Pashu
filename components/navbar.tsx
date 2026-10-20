"use client";

import Link from "next/link";
import Image from "next/image";
import { siteConfig, type SiteNavItem } from "@/config/site";

export const Navbar = () => {
  const navItems: SiteNavItem[] = siteConfig.navItems;

  return (
    <nav
      aria-label="Main navigation"
      className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white text-black shadow-md"
    >
      <div className="flex h-16 w-full items-center gap-3 px-3 sm:gap-4 sm:px-4 lg:gap-5 lg:px-5">
        {/* Website Logo */}
        <Link
          href="/"
          aria-label="Khaate Peete Pashu homepage"
          className="flex shrink-0 items-center"
        >
          <Image
            src="/images/logo.png"
            alt="Khaate Peete Pashu"
            width={50}
            height={50}
            sizes="50px"
            priority
            className="size-12 object-contain"
          />
        </Link>

        {/* Desktop and Mobile Navigation */}
        <div
          className="min-w-0 flex-1 overflow-x-auto overscroll-x-contain"
          style={{ scrollbarWidth: "none" }}
        >
          <ul className="flex w-max min-w-full items-center justify-start gap-4 whitespace-nowrap py-2 sm:gap-5 lg:justify-between lg:gap-4">
            {navItems.map((item: SiteNavItem) => (
              <li key={item.href} className="shrink-0">
                <Link
                  href={item.href}
                  className="block rounded-md p-1 text-sm font-semibold text-black transition-colors hover:bg-gray-100 hover:text-gray-700 focus-visible:outline-2 focus-visible:outline-black sm:text-base"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;