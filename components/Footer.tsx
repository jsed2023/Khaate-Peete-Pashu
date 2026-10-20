
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Mail,
  Facebook,
  Instagram,
  Phone,
} from "lucide-react";

import { siteConfig } from "@/config/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-main">
        {/* Brand and Logo */}
        <div className="footer-about">
          <Link
            href="/"
            className="footer-brand"
            aria-label={`${siteConfig.name} - Home`}
          >
            <Image
              src="/images/logo.png"
              alt={`${siteConfig.name} logo`}
              width={48}
              height={48}
              sizes="48px"
              className="footer-logo"
            />

            <span>{siteConfig.name}</span>
          </Link>

          <p>
            Animal nutrition, cattle feed and farm essentials
            to support healthier livestock and better farming.
          </p>

          {/* Social Links */}
          <div className="footer-socials">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Facebook size={18} aria-hidden="true" />
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram size={18} aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>

          <Link href="/">Home</Link>
          <Link href="/products">All Products</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact Us</Link>
        </div>

        {/* Contact Information */}
        <div className="footer-column footer-contact">
          <h3>Contact Us</h3>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Sangaria%2C+Hanumangarh%2C+Rajasthan%2C+India"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Sangaria, Hanumangarh address on Google Maps"
          >
            <MapPin size={17} aria-hidden="true" />
            <span>
              Sangaria, Hanumangarh
              <br />
              Rajasthan, India
            </span>
          </a>

          <a href="tel:+919783002446">
            <Phone size={17} aria-hidden="true" />
            <span>+91 97830 02446</span>
          </a>

          <a href="mailto:info@khaatepeetepashu.com">
            <Mail size={17} aria-hidden="true" />
            <span>info@khaatepeetepashu.com</span>
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>
          © {year} {siteConfig.name}. All rights reserved.
        </p>

        <p>
          Better nutrition. Healthier livestock. Better farming.
        </p>
      </div>
    </footer>
  );
}
