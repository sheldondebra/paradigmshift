"use client";

import { openCookieSettings } from "@/lib/cookies";

export function CookieSettingsLink({
  className = "",
  light = false,
}: {
  className?: string;
  light?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={openCookieSettings}
      className={
        light
          ? `font-semibold text-ps-green hover:underline ${className}`
          : `group inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white ${className}`
      }
    >
      {!light && <span className="h-px w-0 bg-ps-gold transition-all group-hover:w-3" />}
      Cookie settings
    </button>
  );
}
