"use client";

import { FlyerPopupRoot } from "@/components/FlyerPopup";
import { siteFlyer } from "@/lib/content";

export function SiteFlyerPopup({ children }: { children: React.ReactNode }) {
  return (
    <FlyerPopupRoot src={siteFlyer.src} alt={siteFlyer.alt} autoOpen>
      {children}
    </FlyerPopupRoot>
  );
}
