import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NewsArticle } from "@/components/news/NewsArticle";
import { CtaBand } from "@/components/ui";
import { getAllNewsSlugs, getNewsBySlug } from "@/lib/news";

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
    return { title: "Story Not Found" };
  }

  return {
    title: item.title,
    description: item.excerpt,
  };
}

export default async function NewsArticlePage({ params }: Props) {
  const { slug } = await params;
  const item = getNewsBySlug(slug);

  if (!item) {
    notFound();
  }

  return (
    <>
      <NewsArticle item={item} />
      <CtaBand />
    </>
  );
}
