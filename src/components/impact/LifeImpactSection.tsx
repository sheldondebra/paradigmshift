"use client";

import { useState } from "react";
import Link from "next/link";
import { SiteImageFill } from "@/components/SiteImage";
import { SectionHeading, ButtonLink } from "@/components/ui";
import { getImageMeta } from "@/lib/images";
import {
  categoryColors,
  lifeImpactIntro,
  lifeImpactStories,
  type LifeImpactStory,
} from "@/lib/impact-stories";

function StoryCard({
  story,
  featured = false,
}: {
  story: LifeImpactStory;
  featured?: boolean;
}) {
  const colors = categoryColors[story.category];

  if (featured) {
    return (
      <article className="card-shine overflow-hidden rounded-2xl border border-ps-border bg-white lg:grid lg:grid-cols-5">
        <div className="relative aspect-[4/3] lg:col-span-2 lg:aspect-auto lg:min-h-[400px]">
          <SiteImageFill
            src={story.image}
            alt={`${story.name}, ${story.role}`}
            displayWidth={getImageMeta(story.image).width}
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 480px"
          />
        </div>
        <div className={`flex flex-col justify-center border-t-4 p-8 sm:p-10 lg:col-span-3 lg:border-l-4 lg:border-t-0 ${colors.border}`}>
          <span className={`self-start rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${colors.badge}`}>
            {story.category}
          </span>
          <p className="mt-4 text-2xl font-extrabold leading-snug text-ps-navy sm:text-3xl">
            &ldquo;{story.quote}&rdquo;
          </p>
          <p className="mt-4 font-semibold text-ps-navy">
            {story.name} · {story.role}
          </p>
          <p className="text-sm text-ps-muted">{story.location}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl bg-red-50 p-4">
              <p className="text-xs font-bold uppercase tracking-wider text-red-600">Before</p>
              <p className="mt-2 text-sm leading-relaxed text-ps-navy">{story.before}</p>
            </div>
            <div className="rounded-xl bg-ps-cream p-4">
              <p className="text-xs font-bold uppercase tracking-wider text-ps-green">After</p>
              <p className="mt-2 text-sm leading-relaxed text-ps-navy">{story.after}</p>
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="card-shine flex h-full flex-col overflow-hidden rounded-2xl border border-ps-border bg-white">
      <div className="relative aspect-[16/10]">
        <SiteImageFill
          src={story.image}
          alt={`${story.name}, ${story.role}`}
          displayWidth={getImageMeta(story.image).width}
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 400px"
        />
        <span className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${colors.badge}`}>
          {story.category}
        </span>
      </div>
      <div className={`flex flex-1 flex-col border-t-4 p-6 ${colors.border}`}>
        <p className="flex-1 text-base font-semibold leading-relaxed text-ps-navy">
          &ldquo;{story.quote}&rdquo;
        </p>
        <div className="mt-5 border-t border-ps-border pt-5">
          <p className="font-bold text-ps-navy">{story.name}</p>
          <p className="text-sm text-ps-muted">
            {story.role} · {story.location}
          </p>
        </div>
      </div>
    </article>
  );
}

export function LifeImpactSection({
  showFeatured = true,
  showAllLink = true,
  limit,
}: {
  showFeatured?: boolean;
  showAllLink?: boolean;
  limit?: number;
}) {
  const [activeStory, setActiveStory] = useState(0);
  const stories = limit ? lifeImpactStories.slice(0, limit) : lifeImpactStories;
  const featured = lifeImpactStories[activeStory];

  return (
    <section className="bg-ps-cream py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          label="Real Lives, Real Change"
          title={lifeImpactIntro.title}
          description={lifeImpactIntro.description}
          align="center"
        />

        {showFeatured && (
          <div className="mt-14">
            <StoryCard story={featured} featured />

            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {lifeImpactStories.map((story, index) => (
                <button
                  key={story.id}
                  type="button"
                  onClick={() => setActiveStory(index)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                    activeStory === index
                      ? "bg-gold-gradient text-ps-navy shadow-md"
                      : "bg-white text-ps-muted hover:text-ps-navy"
                  }`}
                >
                  {story.name}
                </button>
              ))}
            </div>
          </div>
        )}

        {!showFeatured && (
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {stories.map((story) => (
              <StoryCard key={story.id} story={story} />
            ))}
          </div>
        )}

        {showAllLink && (
          <div className="mt-12 text-center">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-sm font-bold text-ps-navy hover:text-ps-gold-dark"
            >
              Read more impact stories
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

export function LifeChangeOutcomesSection() {
  return (
    <section className="py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          label="Why It Matters"
          title="How Our Work Touches Everyday Life"
          description="Every program we run connects to something deeply personal — a child's future, a family's health, a community's hope."
          align="center"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {lifeImpactStories.map((story) => {
            const colors = categoryColors[story.category];
            return (
              <div
                key={story.id}
                className={`card-shine rounded-2xl border border-ps-border bg-white p-7 border-l-4 ${colors.border}`}
              >
                <span className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${colors.badge}`}>
                  {story.category}
                </span>
                <h3 className="mt-4 text-lg font-bold text-ps-navy">
                  {story.name}&apos;s story
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ps-muted">{story.before}</p>
                <p className="mt-3 text-sm font-medium leading-relaxed text-ps-navy">
                  → {story.after}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <ButtonLink href="/get-involved">Help Create More Stories</ButtonLink>
        </div>
      </div>
    </section>
  );
}
