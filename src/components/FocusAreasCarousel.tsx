"use client";

import { useCallback, useEffect, useState } from "react";
import { focusAreas } from "@/lib/content";
import { SectionHeading } from "./ui";

function FocusAreaCard({ area, index }: { area: (typeof focusAreas)[number]; index: number }) {
  return (
    <article className="group card-shine relative h-full overflow-hidden rounded-2xl border border-ps-border bg-white p-8">
      <span className="absolute -right-4 -top-4 text-8xl font-extrabold text-ps-gold/10 transition-colors group-hover:text-ps-gold/20">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="relative">
        <div className="mb-4 h-1 w-12 rounded-full bg-gold-gradient" />
        <h3 className="text-xl font-bold text-ps-navy">{area.title}</h3>
        <p className="mt-3 leading-relaxed text-ps-muted">{area.description}</p>
        <p className="mt-4 rounded-lg bg-ps-cream px-4 py-3 text-sm font-medium leading-relaxed text-ps-navy">
          <span className="font-bold text-ps-green">Life impact: </span>
          {area.lifeImpact}
        </p>
      </div>
    </article>
  );
}

function chunkFocusAreas<T>(items: T[], size: number): T[][] {
  const slides: T[][] = [];
  for (let i = 0; i < items.length; i += size) {
    slides.push(items.slice(i, i + size));
  }
  return slides;
}

const SLIDES_PER_VIEW = 2;
const focusAreaSlides = chunkFocusAreas(focusAreas, SLIDES_PER_VIEW);

export function FocusAreasCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const slideCount = focusAreaSlides.length;

  const goTo = useCallback(
    (index: number) => {
      setActive((index + slideCount) % slideCount);
    },
    [slideCount]
  );

  const goPrev = useCallback(() => goTo(active - 1), [active, goTo]);
  const goNext = useCallback(() => goTo(active + 1), [active, goTo]);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slideCount);
    }, 7000);
    return () => window.clearInterval(timer);
  }, [paused, slideCount]);

  return (
    <section
      className="bg-ps-cream py-24 sm:py-28"
      aria-roledescription="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          label="What We Do"
          title="Our Focus Areas"
          description="Four pillars of community development — each designed to create holistic, lasting impact."
          align="center"
        />

        <div className="relative mt-16">
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous focus areas"
            className="absolute -left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-lg border border-ps-border bg-white text-ps-navy shadow-md transition-all hover:border-ps-gold hover:text-ps-gold-dark sm:-left-5"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${active * 100}%)` }}
            >
              {focusAreaSlides.map((slide, slideIndex) => (
                <div
                  key={slide.map((area) => area.title).join("-")}
                  className="w-full shrink-0 px-1"
                  aria-hidden={slideIndex !== active}
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    {slide.map((area) => {
                      const index = focusAreas.findIndex((item) => item.title === area.title);
                      return (
                        <FocusAreaCard key={area.title} area={area} index={index} />
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={goNext}
            aria-label="Next focus areas"
            className="absolute -right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-lg border border-ps-border bg-white text-ps-navy shadow-md transition-all hover:border-ps-gold hover:text-ps-gold-dark sm:-right-5"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
