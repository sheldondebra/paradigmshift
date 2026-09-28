import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/ui";
import { galleryAlbums, getAlbumCover } from "@/lib/gallery";
import { IMAGE_QUALITY } from "@/lib/images";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Gallery",
  description:
    "Photo albums from Paradigm Shift events, including the 2026 conference meeting and dinner meeting.",
  path: "/gallery",
  image: getAlbumCover(galleryAlbums[0]).src,
});

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Gallery"
        description="Albums from dinners, workshops, and community gatherings."
      />

      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:px-8 md:grid-cols-2">
          {galleryAlbums.map((album) => {
            const cover = getAlbumCover(album);

            return (
              <Link
                key={album.slug}
                href={`/gallery/${album.slug}`}
                className="group overflow-hidden rounded-2xl border border-ps-border bg-white shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-ps-cream">
                  <Image
                    src={cover.src}
                    alt=""
                    fill
                    quality={IMAGE_QUALITY}
                    sizes="(max-width: 768px) 100vw, 560px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-ps-green">
                    {album.dateLabel}
                  </p>
                  <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-ps-navy">
                    {album.title}
                  </h2>
                  <p className="mt-3 text-ps-muted">{album.description}</p>
                  <p className="mt-4 text-sm font-bold text-ps-gold-dark">
                    {album.photos.length} photos
                    <span aria-hidden="true"> &rarr;</span>
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
