import Link from "next/link";
import { FocusAreasCarousel } from "@/components/FocusAreasCarousel";
import { collaborativePartners, missionStatement, parentOrganization, siteConfig, visionStatement } from "@/lib/content";
import { lifeImpactStories } from "@/lib/impact-stories";
import { galleryImages, getImageMeta, images, isHighRes } from "@/lib/images";
import { SiteImageFill } from "@/components/SiteImage";
import { SiteVideo } from "@/components/SiteVideo";
import { ButtonLink, SectionHeading } from "./ui";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[92vh] items-end overflow-hidden">
      <SiteVideo variant="background" />
      <div className="absolute inset-0 bg-hero-gradient" />

      <div className="relative mx-auto w-full max-w-6xl px-5 pb-20 pt-36 sm:px-8 sm:pb-28">
        <p className="animate-fade-up mb-4 text-sm text-white/80 sm:text-base">
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
  return <FocusAreasCarousel />;
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
              changed — entrepreneurs who create jobs, young people who find the
              confidence to start, and communities lifted by people who believe
              in them.
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
    <section className="bg-ps-cream py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-ps-navy sm:text-4xl">
            Partner with us
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-ps-muted">
            Sponsors, venues, mentors, and local brands help us run workshops and community
            events across Accra. If you want to show up for young entrepreneurs in Ghana, we
            would like to hear from you.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href="/partnership">See the proposal</ButtonLink>
            <ButtonLink href="/contact" variant="outline-dark" showArrow={false}>
              Get in touch
            </ButtonLink>
          </div>
        </div>

        <div className="rounded-2xl border border-ps-border bg-white p-6 shadow-sm sm:p-8">
          <p className="text-sm text-ps-muted">
            {siteConfig.name} runs under{" "}
            <span className="font-semibold text-ps-navy">{parentOrganization.name}</span>.
          </p>

          {collaborativePartners.length > 0 && (
            <div className="mt-6 border-t border-ps-border pt-6">
              <p className="text-sm font-semibold text-ps-navy">People we have worked with</p>
              <ul className="mt-4 space-y-3">
                {collaborativePartners.map((partner) => (
                  <li key={partner.name} className="flex items-center gap-3 text-sm text-ps-muted">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-ps-gold" aria-hidden="true" />
                    {partner.href ? (
                      <a
                        href={partner.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-ps-navy transition-colors hover:text-ps-green"
                      >
                        {partner.name}
                      </a>
                    ) : (
                      <span className="font-medium text-ps-navy">{partner.name}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
