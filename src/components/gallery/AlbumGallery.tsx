"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { GalleryPhoto } from "@/lib/gallery";
import { IMAGE_QUALITY } from "@/lib/images";

export function AlbumGallery({ photos }: { photos: GalleryPhoto[] }) {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);

  const show = useCallback(
    (index: number) => {
      if (photos.length === 0) return;
      const next = (index + photos.length) % photos.length;
      setActive(next);
    },
    [photos.length],
  );

  useEffect(() => {
    if (active === null) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") show(active + 1);
      if (event.key === "ArrowLeft") show(active - 1);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [active, close, show]);

  const current = active === null ? null : photos[active];

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
        {photos.map((photo, index) => (
          <button
            key={photo.src}
            type="button"
            onClick={() => setActive(index)}
            aria-label={photo.alt}
            className="group relative aspect-[2/3] overflow-hidden rounded-2xl bg-ps-cream text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ps-gold focus-visible:ring-offset-2"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              quality={IMAGE_QUALITY}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 280px"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {current && active !== null && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-ps-navy/90 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-white hover:bg-white/20"
          >
            Close
          </button>

          <button
            type="button"
            aria-label="Previous photo"
            onClick={(event) => {
              event.stopPropagation();
              show(active - 1);
            }}
            className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/15 px-3 py-3 text-white hover:bg-white/25"
          >
            <span aria-hidden="true">&larr;</span>
          </button>

          <figure
            className="relative max-h-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={current.src}
              alt={current.alt}
              width={current.width}
              height={current.height}
              quality={IMAGE_QUALITY}
              className="max-h-[82vh] w-auto max-w-full rounded-xl object-contain"
              sizes="100vw"
              priority
            />
            <figcaption className="mt-3 text-center text-sm text-white/80">
              {active + 1} of {photos.length}
            </figcaption>
          </figure>

          <button
            type="button"
            aria-label="Next photo"
            onClick={(event) => {
              event.stopPropagation();
              show(active + 1);
            }}
            className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/15 px-3 py-3 text-white hover:bg-white/25"
          >
            <span aria-hidden="true">&rarr;</span>
          </button>
        </div>
      )}
    </>
  );
}
