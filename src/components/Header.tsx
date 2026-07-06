"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/content";
import { Logo, ButtonLink } from "./ui";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const onHero = isHome && !scrolled && !mobileOpen;
  const solid = scrolled || mobileOpen || !isHome;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "border-b border-ps-border/60 bg-white/90 shadow-sm backdrop-blur-lg"
          : "bg-transparent"
      }`}
    >
      {!solid && <div className="gold-bar" />}

      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-semibold transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-ps-gold after:transition-all ${
                  active
                    ? onHero
                      ? "text-ps-gold after:w-full"
                      : "text-ps-navy after:w-full"
                    : onHero
                      ? "text-white/85 after:w-0 hover:text-ps-gold hover:after:w-full"
                      : "text-ps-muted after:w-0 hover:text-ps-navy hover:after:w-full"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <ButtonLink
            href="/get-involved?tab=events"
            variant={solid ? "primary" : "primary"}
            className="!px-5 !py-2.5 !text-sm"
          >
            Register Now
          </ButtonLink>
        </div>

        <button
          type="button"
          className={`rounded-lg p-2 md:hidden ${onHero ? "text-white" : "text-ps-navy"}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-ps-border bg-white px-5 py-5 md:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2.5 text-sm font-semibold text-ps-navy hover:bg-ps-cream"
              >
                {link.label}
              </Link>
            ))}
            <ButtonLink href="/get-involved?tab=events" className="mt-3 w-full">
              Register Now
            </ButtonLink>
          </nav>
        </div>
      )}
    </header>
  );
}
