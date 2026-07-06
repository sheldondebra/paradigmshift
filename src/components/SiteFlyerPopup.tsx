"use client";

import { FlyerPopupRoot } from "@/components/FlyerPopup";
import { isSiteFlyerActive, siteFlyer } from "@/lib/content";

export function SiteFlyerPopup({ children }: { children: React.ReactNode }) {
  const active = isSiteFlyerActive();

  return (
    <FlyerPopupRoot
      flyer={{
        src: siteFlyer.src,
        alt: siteFlyer.alt,
        eyebrow: siteFlyer.eyebrow,
        title: siteFlyer.title,
        date: siteFlyer.date,
        time: siteFlyer.time,
        venue: siteFlyer.venue,
        href: siteFlyer.href,
      }}
      autoOpen
      active={active}
    >
      {children}
    </FlyerPopupRoot>
  );
}
