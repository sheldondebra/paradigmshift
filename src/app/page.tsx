import type { Metadata } from "next";
import {
  AboutPreview,
  FocusAreasSection,
  GallerySection,
  HeroSection,
  ImpactSection,
  PartnersSection,
} from "@/components/sections";
import { FacebookReelSection } from "@/components/FacebookReelSection";
import { LifeImpactSection } from "@/components/impact/LifeImpactSection";
import { CtaBand } from "@/components/ui";
import { siteConfig } from "@/lib/content";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: siteConfig.tagline,
  description: siteConfig.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FacebookReelSection />
      <AboutPreview />
      <FocusAreasSection />
      <LifeImpactSection />
      <ImpactSection />
      <GallerySection />
      <PartnersSection />
      <CtaBand />
    </>
  );
}
