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

export const metadata: Metadata = {
  title: siteConfig.tagline,
  description: siteConfig.description,
};

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
