import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AlbumGallery } from "@/components/gallery/AlbumGallery";
import { PageHero } from "@/components/ui";
import { galleryAlbums, getAlbum, getAlbumCover } from "@/lib/gallery";
import { createPageMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return galleryAlbums.map((album) => ({ slug: album.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const album = getAlbum(slug);

  if (!album) {
    return createPageMetadata({
      title: "Album Not Found",
      description: "This gallery album could not be found.",
      path: `/gallery/${slug}`,
      noIndex: true,
    });
  }

  return createPageMetadata({
    title: album.title,
    description: album.description,
    path: `/gallery/${album.slug}`,
    image: getAlbumCover(album).src,
  });
}

export default async function GalleryAlbumPage({ params }: Props) {
  const { slug } = await params;
  const album = getAlbum(slug);

  if (!album) {
    notFound();
  }

  return (
    <>
      <PageHero title={album.title} description={album.description} />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-ps-green">
                {album.dateLabel}
              </p>
              <p className="mt-2 text-ps-muted">
                {album.photos.length} photos · {album.credit}
              </p>
            </div>
            <Link
              href="/gallery"
              className="text-sm font-bold text-ps-navy transition-colors hover:text-ps-gold-dark"
            >
              All albums
            </Link>
          </div>

          <AlbumGallery photos={album.photos} />
        </div>
      </section>
    </>
  );
}
