import type { Metadata } from "next";
import { NewsPageContent } from "@/components/news/NewsPageContent";
import { PageHero, CtaBand } from "@/components/ui";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "News & Impact",
  description:
    "Read impact stories, event updates, and community news from Paradigm Shift — entrepreneurship workshops and encouragement programmes across Ghana.",
  path: "/news",
});

export default function NewsPage() {
  return (
    <>
      <PageHero
        title="News & Impact"
        description="Stories of resilience, hope, and transformation from the communities we serve."
      />
      <NewsPageContent />
      <CtaBand />
    </>
  );
}
