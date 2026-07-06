import Link from "next/link";
import {
  focusAreas,
  missionStatement,
  partners,
  siteConfig,
  visionStatement,
} from "@/lib/content";
import { lifeImpactStories } from "@/lib/impact-stories";
import { galleryImages, getImageMeta, images, isHighRes } from "@/lib/images";
import { SiteImageFill } from "@/components/SiteImage";
import { ButtonLink, SectionHeading } from "./ui";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[92vh] items-end overflow-hidden">
      <SiteImageFill
        src={images.hero}
        alt="Young adults at a Paradigm Shift event in Ghana"
        priority
        displayWidth={1024}
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-hero-gradient" />

      <div className="relative mx-auto w-full max-w-6xl px-5 pb-20 pt-36 sm:px-8 sm:pb-28">
        <p className="animate-fade-up mb-4 inline-flex items-center gap-2 rounded-full border border-ps-gold/40 bg-ps-gold/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-ps-gold backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-ps-gold" />
          {siteConfig.slogan}
        </p>

        <h1 className="animate-fade-up-delay max-w-4xl text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
          Unlocking Potential.{" "}
          <span className="text-gradient-gold">Empowering Communities.</span>
        </h1>

        <p className="animate-fade-up-delay-2 mt-6 max-w-xl text-lg text-white/80 sm:text-xl">
          {siteConfig.description}
        </p>

        <div className="animate-fade-up-delay-2 mt-10 flex flex-wrap gap-4">
          <ButtonLink href="/get-involved">Get Involved</ButtonLink>
          <ButtonLink href="/about" variant="outline">
            Learn About Us
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

export function AboutPreview() {
  return (
    <section className="relative bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="relative">
            <div className="absolute -left-4 -top-4 h-full w-full rounded-2xl bg-gold-gradient opacity-80" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl">
              <SiteImageFill
                src={images.founders}
                alt="Paradigm Shift team members"
                displayWidth={930}
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 480px"
              />
            </div>
          </div>

          <div>
            <SectionHeading
              label="Who We Are"
              title="Creating Lasting Change in Ghana"
            />
            <p className="mt-6 text-lg leading-relaxed text-ps-muted">
              Paradigm Shift (PS) is a non-profit organization based in Accra,
              Ghana, dedicated to creating lasting change in vulnerable
              communities. Through education, skills development, infrastructure
              support, and health outreach, we close the gap in social and
              economic opportunities.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="card-shine rounded-2xl border border-ps-border bg-ps-cream p-6 transition-shadow">
                <h3 className="text-xs font-bold uppercase tracking-wider text-ps-green">
                  Vision
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ps-navy">
                  {visionStatement}
                </p>
              </div>
              <div className="card-shine rounded-2xl border border-ps-border bg-white p-6 transition-shadow">
                <h3 className="text-xs font-bold uppercase tracking-wider text-ps-green">
                  Mission
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ps-navy">
                  {missionStatement}
                </p>
              </div>
            </div>

            <ButtonLink href="/about" variant="secondary" className="mt-8">
              Read Our Story
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FocusAreasSection() {
  return (
    <section className="bg-ps-cream py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          label="What We Do"
          title="Our Focus Areas"
          description="Four pillars of community development — each designed to create holistic, lasting impact."
          align="center"
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {focusAreas.map((area, index) => (
            <article
              key={area.title}
              className="group card-shine relative overflow-hidden rounded-2xl border border-ps-border bg-white p-8 transition-all duration-300 hover:-translate-y-1"
            >
              <span className="absolute -right-4 -top-4 text-8xl font-extrabold text-ps-gold/10 transition-colors group-hover:text-ps-gold/20">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="relative">
                <div className="mb-4 h-1 w-12 rounded-full bg-gold-gradient" />
                <h3 className="text-xl font-bold text-ps-navy">{area.title}</h3>
                <p className="mt-3 leading-relaxed text-ps-muted">
                  {area.description}
                </p>
                <p className="mt-4 rounded-lg bg-ps-cream px-4 py-3 text-sm font-medium leading-relaxed text-ps-navy">
                  <span className="font-bold text-ps-green">Life impact: </span>
                  {area.lifeImpact}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ImpactSection() {
  return (
    <section className="relative overflow-hidden bg-navy-gradient py-24 sm:py-28">
      <div className="absolute inset-0">
        <SiteImageFill
          src={images.community}
          alt=""
          displayWidth={1024}
          className="object-cover opacity-15"
          sizes="100vw"
        />
      </div>
      <div className="absolute -left-40 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-ps-gold/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              label="Our Impact"
              title="Transforming Lives Across Ghana"
              light
            />
            <p className="mt-6 text-lg leading-relaxed text-white/75">
              We measure success not only in projects completed, but in lives
              changed — students who stay in school, entrepreneurs who create
              jobs, families with clean water, and communities with access to
              care.
            </p>

            <div className="mt-8 space-y-4">
              {lifeImpactStories.slice(0, 2).map((story) => (
                <div
                  key={story.id}
                  className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
                >
                  <p className="text-sm font-semibold italic text-white/90">
                    &ldquo;{story.quote}&rdquo;
                  </p>
                  <p className="mt-2 text-xs font-bold text-ps-gold">
                    — {story.name}, {story.role}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/news"
              className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-ps-gold hover:text-white"
            >
              Read life impact stories
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>

          <div className="relative">
            <div className="absolute -right-3 -top-3 h-full w-full rounded-2xl border-2 border-ps-gold/50" />
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
              <SiteImageFill
                src={images.youthSpeaker}
                alt="Youth speaker at Paradigm Shift event"
                displayWidth={1024}
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 520px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function GallerySection() {
  const featured = galleryImages.slice(0, 8);

  return (
    <section className="py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          label="Gallery"
          title="From the Field"
          description="Workshops, outreach events, and community gatherings across Ghana."
          align="center"
        />

        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {featured.map((src, i) => {
            const meta = getImageMeta(src);
            const large = i === 0 && isHighRes(src);
            const displayWidth = large ? Math.min(meta.width, 640) : Math.min(meta.width, 280);

            return (
              <div
                key={src}
                className={`group relative overflow-hidden rounded-2xl bg-ps-cream ${
                  large ? "col-span-2 row-span-2 aspect-square" : "aspect-square"
                }`}
              >
                <SiteImageFill
                  src={src}
                  alt=""
                  displayWidth={displayWidth}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes={large ? "(max-width: 768px) 100vw, 640px" : "(max-width: 768px) 50vw, 280px"}
                />
                <div className="absolute inset-0 bg-ps-navy/0 transition-colors duration-300 group-hover:bg-ps-navy/20" />
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-sm font-bold text-ps-navy transition-colors hover:text-ps-gold-dark"
          >
            View news &amp; impact stories
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export function PartnersSection() {
  return (
    <section className="border-y border-ps-border bg-white py-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          label="Collaboration"
          title="Partner With Us"
          description="Real change is built together — with local leaders, businesses, and organizations across Ghana."
          align="center"
        />

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {partners.map((partner) => (
            <span
              key={partner}
              className="rounded-full border border-ps-border bg-ps-cream px-5 py-2.5 text-sm font-semibold text-ps-navy transition-all hover:border-ps-gold hover:bg-gold-gradient hover:shadow-md hover:shadow-ps-gold/20"
            >
              {partner}
            </span>
          ))}
        </div>

        <div className="mt-8 text-center">
          <ButtonLink href="/get-involved" variant="secondary">
            Become a Partner
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
