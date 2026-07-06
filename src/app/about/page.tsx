import type { Metadata } from "next";
import Link from "next/link";
import { LifeChangeOutcomesSection } from "@/components/impact/LifeImpactSection";
import { SiteImageFill } from "@/components/SiteImage";
import { PageHero, SectionHeading, CtaBand } from "@/components/ui";
import { getFacebookEmbedUrl, facebookReel } from "@/lib/videos";
import { focusAreas, missionStatement, partners, visionStatement } from "@/lib/content";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Paradigm Shift is a Ghana-based non-profit empowering communities through education, mentorship, infrastructure, and health programs.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Who We Are"
        description="A non-profit based in Accra, Ghana, working to create lasting change in vulnerable communities."
      />

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <SectionHeading label="Our Story" title="Building Bridges of Hope" />
              <p className="mt-6 text-lg leading-relaxed text-ps-muted">
                Paradigm Shift was founded on the belief that every individual
                deserves the chance to reach their full potential. We work across
                underserved communities to bridge gaps in education,
                infrastructure, healthcare, and economic opportunity.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-ps-muted">
                From scholarship programs and mentorship workshops to clean water
                initiatives and mobile health clinics, our work is rooted in
                compassion and the conviction that sustainable change happens
                when people come together — one life at a time.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -right-3 -top-3 h-full w-full rounded-2xl bg-gold-gradient opacity-70" />
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
                <SiteImageFill
                  src={images.handshake}
                  alt="Partnership at a Paradigm Shift event"
                  displayWidth={1024}
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 520px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ps-cream py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card-shine rounded-2xl bg-navy-gradient p-8 text-white">
              <h2 className="text-xs font-bold uppercase tracking-widest text-ps-gold">Vision</h2>
              <p className="mt-4 leading-relaxed text-white/85">{visionStatement}</p>
            </div>
            <div className="card-shine rounded-2xl border border-ps-border bg-white p-8">
              <h2 className="text-xs font-bold uppercase tracking-widest text-ps-green">Mission</h2>
              <p className="mt-4 leading-relaxed text-ps-muted">{missionStatement}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeading label="Programs" title="What We Do" align="center" />
          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {focusAreas.map((area, i) => (
              <div
                key={area.title}
                className="card-shine rounded-2xl border border-ps-border bg-white p-7 transition-all hover:-translate-y-0.5"
              >
                <span className="text-sm font-extrabold text-ps-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-lg font-bold text-ps-navy">{area.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ps-muted">{area.description}</p>
                <p className="mt-3 text-sm font-semibold text-ps-green">
                  Life impact: {area.lifeImpact}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-ps-border bg-ps-cream py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeading
            label="Video"
            title="See Us in Action"
            description="A glimpse of Paradigm Shift events, community, and the people driving change across Ghana."
            align="center"
          />
          <div className="mx-auto mt-10 flex max-w-[350px] justify-center overflow-hidden rounded-2xl border border-ps-border bg-black shadow-xl">
            <iframe
              src={getFacebookEmbedUrl(350)}
              title={facebookReel.title}
              width="350"
              height="620"
              className="block w-full"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <p className="mt-6 text-center">
            <Link
              href={facebookReel.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-ps-navy underline decoration-ps-gold decoration-2 underline-offset-4"
            >
              Open reel on Facebook
            </Link>
          </p>
        </div>
      </section>

      <LifeChangeOutcomesSection />

      <section className="border-t border-ps-border py-16">
        <div className="mx-auto max-w-6xl px-5 text-center sm:px-8">
          <p className="text-sm font-bold uppercase tracking-widest text-ps-green">Partners</p>
          <p className="mt-4 text-lg font-semibold text-ps-navy">{partners.join(" · ")}</p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
