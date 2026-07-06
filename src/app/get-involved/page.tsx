import type { Metadata } from "next";
import { PageHero, CtaBand } from "@/components/ui";
import { FaqSection } from "@/components/get-involved/FaqSection";
import { GetInvolvedHub } from "@/components/get-involved/GetInvolvedHub";
import { ImpactOnLivesBand } from "@/components/impact/ImpactOnLivesBand";
import { isValidTab } from "@/lib/get-involved";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Volunteer, donate, partner, or register for events with Paradigm Shift in Ghana.",
};

export default async function GetInvolvedPage({
  searchParams,
}: {
  searchParams: Promise<{ tab?: string }>;
}) {
  const params = await searchParams;
  const initialTab = isValidTab(params.tab) ? params.tab : undefined;

  return (
    <>
      <PageHero
        title="Get Involved"
        description="Volunteer your time, make a donation, explore partnerships, or register for an upcoming event — every action moves communities forward."
      />

      <GetInvolvedHub initialTab={initialTab} />
      <ImpactOnLivesBand />
      <FaqSection />
      <CtaBand />
    </>
  );
}
