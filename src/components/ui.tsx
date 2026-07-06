import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/content";

export function Logo() {
  return (
    <Link href="/" className="inline-block">
      <Image
        src="/images/paradigm-shift-logo.png"
        alt={siteConfig.name}
        width={1000}
        height={300}
        className="h-10 w-auto sm:h-11"
        priority
      />
    </Link>
  );
}

export function SectionLabel({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <span
      className={`mb-4 inline-block text-xs font-bold uppercase tracking-[0.2em] ${
        light ? "text-ps-gold" : "text-ps-green"
      }`}
    >
      {children}
    </span>
  );
}

export function SectionHeading({
  label,
  title,
  description,
  light = false,
  align = "left",
}: {
  label?: string;
  title: string;
  description?: string;
  light?: boolean;
  align?: "left" | "center";
}) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {label && <SectionLabel light={light}>{label}</SectionLabel>}
      <h2
        className={`text-3xl font-extrabold tracking-tight sm:text-4xl ${
          light ? "text-white" : "text-ps-navy"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-lg ${light ? "text-white/75" : "text-ps-muted"}`}>
          {description}
        </p>
      )}
    </div>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  className?: string;
}) {
  const styles = {
    primary:
      "bg-gold-gradient text-ps-navy shadow-lg shadow-ps-gold/25 hover:brightness-105 hover:shadow-xl hover:shadow-ps-gold/30",
    secondary:
      "bg-ps-navy text-white shadow-lg shadow-ps-navy/20 hover:bg-ps-navy-mid",
    outline:
      "border-2 border-white/40 text-white backdrop-blur-sm hover:border-ps-gold hover:bg-white/10",
    ghost: "text-ps-navy hover:text-ps-gold-dark",
  };

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-bold transition-all duration-200 ${styles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}

export function PageHero({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-gradient pt-32 pb-20">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-ps-gold blur-3xl" />
      </div>
      <div className="gold-bar absolute inset-x-0 top-0" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionLabel light>{siteConfig.name}</SectionLabel>
        <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-lg text-white/75">{description}</p>
        )}
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-gold-gradient py-20">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwYTAxNjI4IiBmaWxsLW9wYWNpdHk9IjAuMDMiPjxwYXRoIGQ9Ik0zNiAzNGg0djRoLTR6bTAgMThoNHY0aC00ek0wIDM0aDR2NEgwek0wIDU0aDR2NEgwek0wIDE0aDR2NEgwek0wIC00aDR2NEgwek00IDBoNHY0aC00ek00NCAwaDR2NGgtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-60" />
      <div className="relative mx-auto max-w-6xl px-5 text-center sm:px-8">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-ps-navy/60">
          {siteConfig.slogan}
        </p>
        <h2 className="mt-3 text-3xl font-extrabold text-ps-navy sm:text-4xl">
          Your Support Creates Impact
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-ps-navy/75">
          Volunteer, donate, or partner with us to empower communities and build a
          brighter future for Ghana.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <ButtonLink href="/get-involved" variant="secondary">
            Get Involved
          </ButtonLink>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border-2 border-ps-navy/30 px-6 py-3 text-sm font-bold text-ps-navy transition-all hover:border-ps-navy hover:bg-ps-navy hover:text-white"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
