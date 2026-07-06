import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { NewsArticle } from "@/components/news/NewsArticle";
import { CtaBand } from "@/components/ui";
import { getAllNewsSlugs, getNewsBySlug } from "@/lib/news";
import { articleJsonLd, createPageMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllNewsSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getNewsBySlug(slug);

  if (!item) {
    return createPageMetadata({
      title: "Story Not Found",
      description: "This news story could not be found.",
      path: `/news/${slug}`,
      noIndex: true,
    });
  }

  return createPageMetadata({
    title: item.title,
    description: item.excerpt,
    path: `/news/${item.slug}`,
    image: item.image,
    type: "article",
    publishedTime: item.publishedAt,
  });
}

export default async function NewsArticlePage({ params }: Props) {
  const { slug } = await params;
  const item = getNewsBySlug(slug);

  if (!item) {
    notFound();
  }

  return (
    <>
      <JsonLd
        data={articleJsonLd({
          title: item.title,
          description: item.excerpt,
          path: `/news/${item.slug}`,
          image: item.image,
          datePublished: item.publishedAt,
        })}
      />
      <NewsArticle item={item} />
      <CtaBand />
    </>
  );
}
