import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/content";
import { CookieSettingsLink } from "./CookieSettingsLink";
import { ButtonLink, Logo } from "./ui";

const socialLinks = [
  {
    name: "Facebook",
    href: siteConfig.social.facebook,
    icon: (
      <path
        fill="currentColor"
        d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
      />
    ),
  },
  {
    name: "Instagram",
    href: siteConfig.social.instagram,
    icon: (
      <path
        fill="currentColor"
        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
      />
    ),
  },
  {
    name: "YouTube",
    href: siteConfig.social.youtube,
    icon: (
      <path
        fill="currentColor"
        d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
      />
    ),
  },
];

const getInvolvedLinks = [
  { href: "/partnership", label: "Sponsor & Partner" },
  { href: "/get-involved?tab=volunteer", label: "Volunteer" },
  { href: "/get-involved?tab=donate", label: "Donate" },
  { href: "/get-involved?tab=partner", label: "Partner With Us" },
  { href: "/get-involved?tab=events", label: "Upcoming Events" },
];

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-ps-gold">
        {title}
      </h3>
      {children}
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
    >
      <span className="h-px w-0 bg-ps-gold transition-all group-hover:w-3" />
      {children}
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ps-navy text-white">
      <div className="gold-bar" />

      <div className="pointer-events-none absolute -left-40 top-0 h-80 w-80 rounded-full bg-ps-gold/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-ps-green/5 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {/* Column 1 — About */}
          <FooterColumn title="About">
            <Logo />
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.15em] text-ps-gold/90">
              {siteConfig.slogan}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              {siteConfig.description}
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/70 transition-all hover:border-ps-gold hover:bg-ps-gold hover:text-ps-navy"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" aria-hidden="true">
                    {social.icon}
                  </svg>
                </a>
              ))}
            </div>
          </FooterColumn>

          {/* Column 2 — Navigate */}
          <FooterColumn title="Navigate">
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </FooterColumn>

          {/* Column 3 — Contact */}
          <FooterColumn title="Contact">
            <ul className="space-y-4">
              <li>
                <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
                  Phone
                </p>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="mt-1 block text-sm font-medium text-white/80 transition-colors hover:text-ps-gold"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
                  Email
                </p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="mt-1 block text-sm font-medium text-white/80 transition-colors hover:text-ps-gold"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
                  Location
                </p>
                <p className="mt-1 text-sm font-medium text-white/80">
                  {siteConfig.location}
                </p>
              </li>
            </ul>
          </FooterColumn>

          {/* Column 4 — Get Involved */}
          <FooterColumn title="Get Involved">
            <p className="mb-4 text-sm leading-relaxed text-white/60">
              Join us in unlocking potential and empowering communities across Ghana.
            </p>
            <ul className="space-y-3">
              {getInvolvedLinks.map((link) => (
                <li key={link.href}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
            <ButtonLink href="/partnership" className="mt-6">
              Partner With Us
            </ButtonLink>
          </FooterColumn>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <div className="flex flex-col items-center gap-2 sm:items-start">
            <p className="text-sm text-white/45">
              &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:justify-start">
              <Link
                href="/privacy"
                className="text-sm text-white/45 transition-colors hover:text-white/70"
              >
                Privacy policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-white/45 transition-colors hover:text-white/70"
              >
                Terms of use
              </Link>
              <Link
                href="/cookies"
                className="text-sm text-white/45 transition-colors hover:text-white/70"
              >
                Cookie policy
              </Link>
              <CookieSettingsLink className="text-white/45 hover:text-white/70" />
            </div>
          </div>
          <p className="text-sm text-white/45">{siteConfig.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
