import type { Metadata } from "next";
import { NewsPageContent } from "@/components/news/NewsPageContent";
import { PageHero, CtaBand } from "@/components/ui";

export const metadata: Metadata = {
  title: "News & Impact",
  description: "Updates and impact stories from Paradigm Shift programs across Ghana.",
};

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
