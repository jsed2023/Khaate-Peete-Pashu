
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Mail,
  Facebook,
  Instagram,
  Phone,
  ArrowUpRight,
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
              href="https://www.facebook.com/khaatepeetepashu's"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit us on Facebook"
            >
              <Facebook size={18} aria-hidden="true" />
            </a>

            <a
              href="https://www.instagram.com/khaatepeetepashu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Instagram"
            >
              <Instagram size={18} aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <nav className="footer-column" aria-label="Footer navigation">
          <h3>Quick Links</h3>

          <Link href="/">
            Home <ArrowUpRight size={14} aria-hidden="true" />
          </Link>
          <Link href="/products">
            All Products <ArrowUpRight size={14} aria-hidden="true" />
          </Link>
          <Link href="/about">
            About Us <ArrowUpRight size={14} aria-hidden="true" />
          </Link>
          <Link href="/contact">
            Contact Us <ArrowUpRight size={14} aria-hidden="true" />
          </Link>
        </nav>

        {/* Contact Information */}
        <div className="footer-column footer-contact">
          <h3>Contact Us</h3>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Haripura%2C+Sangaria%2C+Hanumangarh%2C+Rajasthan+335063"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View our address on Google Maps"
          >
            <MapPin size={18} aria-hidden="true" />
            <span>
              Village Haripura, Sangaria,
              <br />
              Hanumangarh, Rajasthan, India
              <br />
              335063
            </span>
          </a>

          <a href="tel:+919783002446">
            <Phone size={18} aria-hidden="true" />
            <span>+91 97830 02446</span>
          </a>

          <a href="mailto:srishayamagrocattlefeeds@gmail.com">
            <Mail size={18} aria-hidden="true" />
            <span>srishayamagrocattlefeeds@gmail.com</span>
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
