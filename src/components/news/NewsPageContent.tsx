"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { SiteImageFill } from "@/components/SiteImage";
import { ButtonLink, SectionHeading } from "@/components/ui";
import {
  categoryStyles,
  impactHighlights,
  newsCategories,
  newsItems,
  type NewsCategory,
  type NewsItem,
} from "@/lib/news";
import { categoryColors, lifeImpactStories } from "@/lib/impact-stories";
import { galleryImages, getImageMeta } from "@/lib/images";

function CategoryBadge({ category }: { category: NewsItem["category"] }) {
  const styles = categoryStyles[category];
  return (
    <span className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${styles.badge}`}>
      {category}
    </span>
  );
}

function FeaturedStory({ item }: { item: NewsItem }) {
  const styles = categoryStyles[item.category];

  return (
    <Link
      href={`/news/${item.slug}`}
      className="group card-shine block overflow-hidden rounded-2xl border border-ps-border bg-white lg:grid lg:grid-cols-2"
    >
      <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[420px]">
        <SiteImageFill
          src={item.image}
          alt={item.title}
          priority
          displayWidth={getImageMeta(item.image).width}
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 1024px) 100vw, 640px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ps-navy/50 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-ps-navy/10" />
        <span className="absolute left-5 top-5 rounded-full bg-gold-gradient px-3 py-1 text-xs font-bold uppercase tracking-wider text-ps-navy">
          Featured
        </span>
      </div>

      <div className={`flex flex-col justify-center border-l-0 border-t-4 p-8 sm:p-10 lg:border-l-4 lg:border-t-0 ${styles.accent}`}>
        <CategoryBadge category={item.category} />
        <time className="mt-4 text-sm font-semibold text-ps-muted">{item.date}</time>
        <h2 className="mt-3 text-2xl font-extrabold leading-tight text-ps-navy sm:text-3xl">
          {item.title}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-ps-muted">{item.excerpt}</p>
        <p className="mt-8 text-sm font-bold text-ps-navy transition-colors group-hover:text-ps-gold-dark">
          Read full story <span aria-hidden="true">&rarr;</span>
        </p>
      </div>
    </Link>
  );
}

function NewsCard({ item }: { item: NewsItem }) {
  const styles = categoryStyles[item.category];

  return (
    <Link
      href={`/news/${item.slug}`}
      className="group card-shine flex h-full flex-col overflow-hidden rounded-2xl border border-ps-border bg-white transition-all hover:-translate-y-1 hover:border-ps-gold/40"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <SiteImageFill
          src={item.image}
          alt={item.title}
          displayWidth={getImageMeta(item.image).width}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 400px"
        />
        <div className="absolute inset-0 bg-ps-navy/0 transition-colors duration-300 group-hover:bg-ps-navy/10" />
        <div className="absolute left-4 top-4">
          <CategoryBadge category={item.category} />
        </div>
      </div>

      <div className={`flex flex-1 flex-col border-t-4 p-6 ${styles.accent}`}>
        <time className="text-xs font-bold uppercase tracking-wider text-ps-muted">
          {item.date}
        </time>
        <h3 className="mt-2 text-lg font-bold leading-snug text-ps-navy group-hover:text-ps-gold-dark">
          {item.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-ps-muted">
          {item.excerpt}
        </p>
        <span className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-ps-navy">
          Read more
          <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">
            &rarr;
          </span>
        </span>
      </div>
    </Link>
  );
}

export function NewsPageContent() {
  const [activeCategory, setActiveCategory] = useState<NewsCategory>("All");

  const featured = newsItems.find((item) => item.featured) ?? newsItems[0];

  const filtered = useMemo(() => {
    const items = newsItems.filter((item) => !item.featured || activeCategory !== "All");
    if (activeCategory === "All") {
      return items.filter((item) => item.slug !== featured.slug);
    }
    return items.filter((item) => item.category === activeCategory);
  }, [activeCategory, featured.slug]);

  const showFeatured = activeCategory === "All" || featured.category === activeCategory;

  return (
    <>
      {/* Category filter */}
      <section className="sticky top-[65px] z-40 border-b border-ps-border bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-2 px-5 py-4 sm:px-8">
          <span className="mr-2 text-sm font-semibold text-ps-muted">Filter:</span>
          {newsCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-4 py-2 text-sm font-bold transition-all ${
                activeCategory === cat
                  ? "bg-gold-gradient text-ps-navy shadow-md shadow-ps-gold/20"
                  : "bg-ps-cream text-ps-muted hover:text-ps-navy"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Stories */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl space-y-12 px-5 sm:px-8">
          {showFeatured && activeCategory === "All" && (
            <div>
              <SectionHeading
                label="Latest"
                title="Featured Story"
              />
              <div className="mt-8">
                <FeaturedStory item={featured} />
              </div>
            </div>
          )}

          {filtered.length > 0 ? (
            <div>
              <SectionHeading
                label="Impact Stories"
                title={activeCategory === "All" ? "More Updates" : `${activeCategory} Stories`}
              />
              <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {filtered.map((item) => (
                  <NewsCard key={item.slug} item={item} />
                ))}
              </div>
            </div>
          ) : (
            <div className="rounded-2xl border border-ps-border bg-ps-cream px-8 py-16 text-center">
              <p className="text-lg font-semibold text-ps-navy">No stories in this category yet.</p>
              <p className="mt-2 text-ps-muted">Try another filter or check back soon.</p>
              <button
                type="button"
                onClick={() => setActiveCategory("All")}
                className="mt-6 text-sm font-bold text-ps-gold-dark underline underline-offset-4"
              >
                View all stories
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Impact numbers */}
      <section className="bg-navy-gradient py-16 text-white sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeading
            label="By the Numbers"
            title="Lives Touched Across Ghana"
            description="Behind every number is a person — a student, a parent, a neighbour — whose daily life looks different because of this work."
            light
            align="center"
          />
          <div className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {impactHighlights.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-8 text-center backdrop-blur-sm"
              >
                <p className="text-3xl font-extrabold text-ps-gold sm:text-4xl">{stat.value}</p>
                <p className="mt-2 text-sm text-white/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Life impact stories */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeading
            label="Voices of Change"
            title="Stories That Inspire Action"
            description="Real people. Real struggles. Real transformation — connected to the programs we run every day."
            align="center"
          />

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {lifeImpactStories.map((story) => {
              const colors = categoryColors[story.category];
              return (
                <article
                  key={story.id}
                  className="card-shine overflow-hidden rounded-2xl border border-ps-border bg-white"
                >
                  <div className="relative aspect-[16/9]">
                    <SiteImageFill
                      src={story.image}
                      alt={`${story.name}, ${story.role}`}
                      displayWidth={getImageMeta(story.image).width}
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 520px"
                    />
                    <span
                      className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${colors.badge}`}
                    >
                      {story.category}
                    </span>
                  </div>
                  <div className={`border-t-4 p-7 ${colors.border}`}>
                    <p className="text-lg font-semibold leading-relaxed text-ps-navy">
                      &ldquo;{story.quote}&rdquo;
                    </p>
                    <p className="mt-4 font-bold text-ps-navy">
                      {story.name} · {story.role}
                    </p>
                    <p className="text-sm text-ps-muted">{story.location}</p>
                    <p className="mt-4 text-sm leading-relaxed text-ps-muted">
                      <span className="font-semibold text-ps-navy">Before: </span>
                      {story.before}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-ps-navy">
                      <span className="font-semibold text-ps-green">Now: </span>
                      {story.after}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <ButtonLink href="/get-involved" variant="secondary">
              Help Write the Next Story
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* Photo strip */}
      <section className="border-y border-ps-border bg-ps-cream py-12">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <p className="mb-6 text-center text-xs font-bold uppercase tracking-widest text-ps-green">
            From the Field
          </p>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
            {galleryImages.slice(0, 4).map((src) => (
              <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <SiteImageFill
                  src={src}
                  alt=""
                  displayWidth={getImageMeta(src).width}
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 280px"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
