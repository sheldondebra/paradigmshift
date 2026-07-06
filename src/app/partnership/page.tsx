import type { Metadata } from "next";
import Link from "next/link";
import { PartnerForm } from "@/components/get-involved/PartnerForm";
import { PartnersNetwork } from "@/components/PartnersNetwork";
import { SiteImageFill } from "@/components/SiteImage";
import { ButtonLink, PageHero, SectionHeading } from "@/components/ui";
import { parentOrganization, siteConfig } from "@/lib/content";
import { getImageMeta } from "@/lib/images";
import {
  nextSteps,
  partnerDeliverables,
  partnershipIntro,
  partnershipLetter,
  partnershipModels,
  partnershipWhy,
  sponsorshipTiers,
} from "@/lib/partnership";

import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Sponsorship & Partnership",
  description:
    "Partner with Paradigm Shift in Ghana — sponsor workshops, community events, and entrepreneurship programmes. View our partnership proposal.",
  path: "/partnership",
  image: "/images/gallery-paradigm-shift-speaker-isser.png",
});

export default function PartnershipPage() {
  return (
    <>
      <PageHero
        title={partnershipIntro.headline}
        description={partnershipIntro.subhead}
      />

      {/* Proposal meta strip */}
      <section className="border-b border-ps-border bg-ps-cream py-6">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 text-sm sm:px-8">
          <p className="font-semibold text-ps-navy">{partnershipIntro.preparedFor}</p>
          <p className="text-ps-muted">{partnershipIntro.date}</p>
        </div>
      </section>

      {/* Opening letter */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-14 lg:grid-cols-[1fr_340px] lg:items-start">
            <div className="max-w-2xl">
              <p className="text-lg font-semibold text-ps-navy">{partnershipLetter.greeting}</p>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-ps-muted">
                {partnershipLetter.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>
              <p className="mt-8 font-semibold text-ps-navy">{partnershipLetter.signOff}</p>
              <p className="mt-1 text-ps-gold-dark">{partnershipLetter.signature}</p>
            </div>

            <aside className="card-shine rounded-2xl border border-ps-border bg-white p-6 lg:sticky lg:top-28">
              <p className="text-xs font-bold uppercase tracking-widest text-ps-green">
                At a glance
              </p>
              <ul className="mt-4 space-y-3 text-sm text-ps-muted">
                <li>
                  <span className="font-semibold text-ps-navy">Based in:</span>{" "}
                  {siteConfig.location}
                </li>
                <li>
                  <span className="font-semibold text-ps-navy">Under:</span>{" "}
                  {parentOrganization.name}
                </li>
                <li>
                  <span className="font-semibold text-ps-navy">Focus:</span> Education, mentorship,
                  infrastructure, health
                </li>
              </ul>
              <ButtonLink href="#partner-form" className="mt-6 w-full" showArrow={false}>
                Start a conversation
              </ButtonLink>
            </aside>
          </div>
        </div>
      </section>

      {/* Why partner */}
      <section className="bg-ps-cream py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeading label="The case for partnership" title={partnershipWhy.title} />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {partnershipWhy.points.map((point, i) => (
              <div
                key={point.title}
                className="card-shine rounded-2xl border border-ps-border bg-white p-7"
              >
                <span className="text-sm font-extrabold text-ps-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-lg font-bold text-ps-navy">{point.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ps-muted">{point.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo proof */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
              <SiteImageFill
                src="/images/gallery-paradigm-shift-speaker-isser.png"
                alt="Paradigm Shift speaker at ISSER, University of Ghana"
                displayWidth={getImageMeta("/images/gallery-paradigm-shift-speaker-isser.png").width}
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 520px"
              />
            </div>
            <div>
              <SectionHeading
                label="Proof of work"
                title="This is what your support looks like in a room"
              />
              <p className="mt-6 text-lg leading-relaxed text-ps-muted">
                Our events bring together students, entrepreneurs, community leaders, and partners
                under one roof. When you sponsor Paradigm Shift, you&apos;re not funding a PDF — you&apos;re
                funding the person taking notes in the front row, the speaker on stage, and the
                conversations that continue long after the event ends.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-ps-muted">
                We&apos;ll share that story with you — names, photos, outcomes — so you can tell your
                team exactly what their support made possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsorship tiers */}
      <section className="border-y border-ps-border bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeading
            label="Sponsorship options"
            title="Choose a level — or tell us what you have in mind"
            description="These tiers are a starting point. We'll work with you to design something meaningful for your organisation."
            align="center"
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {sponsorshipTiers.map((tier) => (
              <div
                key={tier.name}
                className={`card-shine flex flex-col rounded-2xl border p-8 ${
                  tier.featured
                    ? "border-ps-gold bg-ps-cream ring-2 ring-ps-gold/30"
                    : "border-ps-border bg-white"
                }`}
              >
                {tier.featured && (
                  <p className="mb-3 text-xs font-bold uppercase tracking-widest text-ps-gold-dark">
                    Most popular
                  </p>
                )}
                <h3 className="text-xl font-extrabold text-ps-navy">{tier.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ps-muted">{tier.subtitle}</p>
                <ul className="mt-6 flex-1 space-y-3">
                  {tier.benefits.map((benefit) => (
                    <li key={benefit} className="flex gap-2 text-sm text-ps-muted">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ps-gold" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <ButtonLink
                  href="#partner-form"
                  variant={tier.featured ? "primary" : "outline-dark"}
                  className="mt-8 w-full"
                  showArrow={false}
                >
                  {tier.cta}
                </ButtonLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership models */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeading
            label="Ways to collaborate"
            title="More than a cheque — if that's what you prefer"
            align="center"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {partnershipModels.map((model, i) => (
              <div
                key={model.title}
                className="card-shine rounded-2xl border border-ps-border bg-white p-7"
              >
                <span className="text-sm font-extrabold text-ps-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-lg font-bold text-ps-navy">{model.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ps-muted">{model.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you receive */}
      <section className="bg-navy-gradient py-20 text-white sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeading
            label="Our commitment to you"
            title="What every partner can expect"
            light
            align="center"
          />
          <ul className="mx-auto mt-12 grid max-w-3xl gap-4">
            {partnerDeliverables.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white/85"
              >
                <svg
                  className="mt-0.5 h-5 w-5 shrink-0 text-ps-gold"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Next steps + form */}
      <section id="partner-form" className="scroll-mt-28 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-14 lg:grid-cols-2">
            <div>
              <SectionHeading label="Next steps" title="Ready when you are" />
              <p className="mt-4 text-lg text-ps-muted">
                No lengthy RFP required. Tell us a bit about yourself and we&apos;ll take it from
                there — usually within a few working days.
              </p>
              <ol className="mt-8 space-y-4">
                {nextSteps.map((step, i) => (
                  <li key={step.slice(0, 30)} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gold-gradient text-sm font-extrabold text-ps-navy">
                      {i + 1}
                    </span>
                    <p className="pt-1 text-sm leading-relaxed text-ps-muted">{step}</p>
                  </li>
                ))}
              </ol>
              <p className="mt-8 text-sm text-ps-muted">
                Prefer email?{" "}
                <Link
                  href={`mailto:${siteConfig.email}`}
                  className="font-semibold text-ps-navy underline decoration-ps-gold decoration-2 underline-offset-4"
                >
                  {siteConfig.email}
                </Link>{" "}
                or call{" "}
                <Link
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="font-semibold text-ps-navy underline decoration-ps-gold decoration-2 underline-offset-4"
                >
                  {siteConfig.phone}
                </Link>
              </p>
            </div>

            <div className="card-shine rounded-2xl border border-ps-border bg-white p-8 sm:p-10">
              <h2 className="text-xl font-extrabold text-ps-navy">Partnership inquiry</h2>
              <p className="mt-2 text-sm text-ps-muted">
                Fill this in and we&apos;ll reach out to explore a fit — no obligation.
              </p>
              <div className="mt-6">
                <PartnerForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Organisation network */}
      <section className="border-t border-ps-border bg-ps-cream py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <p className="text-center text-sm font-bold uppercase tracking-widest text-ps-green">
            Who we work with
          </p>
          <div className="mt-8">
            <PartnersNetwork variant="cream" />
          </div>
          <p className="mx-auto mt-8 max-w-xl text-center text-sm text-ps-muted">
            Join our network — or start a conversation and see if we&apos;re the right fit for
            each other.
          </p>
        </div>
      </section>
    </>
  );
}
