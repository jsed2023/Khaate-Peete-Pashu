
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
  const { contact, socialLinks } = siteConfig;

  const socials = [
    {
      name: "Facebook",
      href: socialLinks.facebook,
      Icon: Facebook,
    },
    {
      name: "Instagram",
      href: socialLinks.instagram,
      Icon: Instagram,
    },
   
  ].filter((social) => social.href.trim() !== "");

  return (
    <footer className="site-footer">
      <div className="footer-main">
        {/* Brand */}
        <div className="footer-about">
          <Link
            href="/"
            className="footer-brand"
            aria-label={`${siteConfig.name} - Home`}
          >
            <Image
              src={siteConfig.logo}
              alt={`${siteConfig.name} logo`}
              width={48}
              height={48}
              sizes="48px"
              className="footer-logo"
            />

            <span>{siteConfig.name}</span>
          </Link>

          <p>{siteConfig.footerDescription}</p>

          {/* Social Media */}
          {socials.length > 0 && (
            <div className="footer-socials">
              {socials.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit us on ${name}`}
                >
                  <Icon size={18} aria-hidden="true" />
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Quick Links */}
        <nav
          className="footer-column"
          aria-label="Footer navigation"
        >
          <h3>Quick Links</h3>

          {siteConfig.footerLinks.map((item) => (
            <Link key={item.href} href={item.href}>
              <span>{item.label}</span>
              <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          ))}
        </nav>

        {/* Contact */}
        <div className="footer-column footer-contact">
          <h3>Contact Us</h3>

          <a
            href={contact.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View our address on Google Maps"
          >
            <MapPin size={18} aria-hidden="true" />
            <span>{contact.address}</span>
          </a>

          <a href={`tel:${contact.phone}`}>
            <Phone size={18} aria-hidden="true" />
            <span>{contact.phoneDisplay}</span>
          </a>

          <a href={`mailto:${contact.email}`}>
            <Mail size={18} aria-hidden="true" />
            <span>{contact.email}</span>
          </a>

          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Phone size={18} aria-hidden="true" />
            <span>Chat with us on WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>
          © {year} {siteConfig.name}. All rights reserved.
        </p>

        <p>{siteConfig.footerTagline}</p>
      </div>
    </footer>
  );
}
