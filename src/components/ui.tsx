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

type ButtonVariant = "primary" | "secondary" | "outline" | "outline-dark" | "ghost";
type ButtonSize = "sm" | "md";

const buttonSizes: Record<ButtonSize, string> = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-6 py-3 text-sm",
};

const buttonVariants: Record<ButtonVariant, string> = {
  primary:
    "bg-gold-gradient text-ps-navy shadow-md shadow-ps-gold/20 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-ps-gold/30",
  secondary:
    "bg-ps-navy text-white shadow-md shadow-ps-navy/15 hover:-translate-y-0.5 hover:bg-ps-navy-mid hover:shadow-lg",
  outline:
    "border-2 border-white/50 bg-white/5 text-white backdrop-blur-sm hover:border-ps-gold hover:bg-white/10",
  "outline-dark":
    "border-2 border-ps-navy/20 bg-white text-ps-navy hover:-translate-y-0.5 hover:border-ps-navy hover:bg-ps-navy hover:text-white hover:shadow-md",
  ghost:
    "text-ps-navy underline-offset-4 hover:text-ps-gold-dark hover:underline",
};

export function buttonClassName({
  variant = "primary",
  size = "md",
  className = "",
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
} = {}) {
  return [
    "group inline-flex items-center justify-center gap-2 rounded-lg font-bold tracking-wide transition-all duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ps-gold focus-visible:ring-offset-2",
    "active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0",
    buttonSizes[size],
    buttonVariants[variant],
    className,
  ]
    .filter(Boolean)
    .join(" ");
}

function ButtonArrow() {
  return (
    <svg
      className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  showArrow = variant === "primary" || variant === "secondary",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  showArrow?: boolean;
  className?: string;
}) {
  const classes = buttonClassName({ variant, size, className });
  const isExternal = href.startsWith("http");

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
        {showArrow && <ButtonArrow />}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
      {showArrow && <ButtonArrow />}
    </Link>
  );
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  showArrow = false,
  className = "",
  type = "button",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  showArrow?: boolean;
}) {
  return (
    <button type={type} className={buttonClassName({ variant, size, className })} {...props}>
      {children}
      {showArrow && <ButtonArrow />}
    </button>
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
          <ButtonLink href="/contact" variant="outline-dark">
            Contact Us
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
