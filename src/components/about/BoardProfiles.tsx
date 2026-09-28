"use client";

import Image from "next/image";
import { useState } from "react";
import { SectionHeading } from "@/components/ui";
import { boardProfiles } from "@/lib/board";
import { IMAGE_QUALITY } from "@/lib/images";

export function BoardProfiles() {
  const [activeId, setActiveId] = useState(boardProfiles[0].id);
  const active = boardProfiles.find((profile) => profile.id === activeId) ?? boardProfiles[0];

  return (
    <section className="bg-ps-cream py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          label="Profiles"
          title="The People Guiding Paradigm Shift"
          description="Board leadership and partners who set the direction of our work across Ghana."
          align="center"
        />

        <div
          className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5"
          role="tablist"
          aria-label="Profiles"
        >
          {boardProfiles.map((profile) => {
            const selected = profile.id === active.id;

            return (
              <button
                key={profile.id}
                type="button"
                role="tab"
                id={`profile-tab-${profile.id}`}
                aria-selected={selected}
                aria-controls="profile-panel"
                onClick={() => setActiveId(profile.id)}
                className={`overflow-hidden rounded-2xl border bg-white text-left transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ps-gold focus-visible:ring-offset-2 ${
                  selected
                    ? "border-ps-gold shadow-lg ring-2 ring-ps-gold"
                    : "border-ps-border hover:-translate-y-0.5 hover:shadow-md"
                }`}
              >
                <div className="relative aspect-[3/4] bg-ps-navy">
                  <Image
                    src={profile.image}
                    alt=""
                    fill
                    quality={IMAGE_QUALITY}
                    sizes="(max-width: 640px) 50vw, 240px"
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-3 sm:p-4">
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-ps-green">
                    {profile.role}
                  </p>
                  <p className="mt-1 text-sm font-extrabold leading-snug text-ps-navy sm:text-base">
                    {profile.name}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        <article
          id="profile-panel"
          role="tabpanel"
          aria-labelledby={`profile-tab-${active.id}`}
          className="mt-6 overflow-hidden rounded-2xl border border-ps-border bg-white shadow-sm lg:grid lg:grid-cols-[280px_1fr]"
        >
          <div className="relative aspect-[3/4] bg-ps-navy sm:aspect-[4/3] lg:aspect-auto lg:min-h-full">
            <Image
              src={active.image}
              alt={active.name}
              fill
              quality={IMAGE_QUALITY}
              sizes="(max-width: 1024px) 100vw, 280px"
              className="object-cover object-top"
            />
          </div>
          <div className="p-6 sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-ps-green">
              {active.role}
            </p>
            <h3 className="mt-2 text-3xl font-extrabold tracking-tight text-ps-navy">
              {active.name}
              {active.knownAs ? (
                <span className="mt-1 block text-xl font-semibold text-ps-navy/70">
                  {active.knownAs}
                </span>
              ) : null}
            </h3>
            {active.quote && (
              <blockquote className="mt-5 border-l-2 border-ps-gold pl-4 text-lg font-semibold leading-relaxed text-ps-navy">
                “{active.quote}”
              </blockquote>
            )}
            <div className="mt-5 space-y-4">
              {active.paragraphs.map((paragraph) => (
                <p key={paragraph} className="leading-relaxed text-ps-muted">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
