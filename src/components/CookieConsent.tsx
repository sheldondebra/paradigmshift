"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  COOKIE_SETTINGS_EVENT,
  cookieCategories,
  defaultConsent,
  getConsentFromDocument,
  saveConsent,
  applyConsent,
  type CookieConsent,
} from "@/lib/cookies";
import { Button, buttonClassName } from "./ui";

function Toggle({
  checked,
  disabled,
  onChange,
  label,
}: {
  checked: boolean;
  disabled?: boolean;
  onChange: (value: boolean) => void;
  label: string;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      disabled={disabled}
      onClick={() => onChange(!checked)}
      className={`relative h-7 w-12 shrink-0 rounded-full transition-colors ${
        checked ? "bg-ps-green" : "bg-ps-border"
      } ${disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer"}`}
    >
      <span
        className={`absolute top-0.5 left-0.5 h-6 w-6 rounded-full bg-white shadow transition-transform ${
          checked ? "translate-x-5" : "translate-x-0"
        }`}
      />
    </button>
  );
}

export function CookieConsent() {
  const [consent, setConsent] = useState<CookieConsent | null>(null);
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [draft, setDraft] = useState({ analytics: false, marketing: false });

  useEffect(() => {
    const stored = getConsentFromDocument();
    if (stored) {
      applyConsent(stored);
      setConsent(stored);
      setDraft({ analytics: stored.analytics, marketing: stored.marketing });
      return;
    }

    setShowBanner(true);
  }, []);

  useEffect(() => {
    function handleOpenSettings() {
      const stored = getConsentFromDocument();
      setDraft({
        analytics: stored?.analytics ?? false,
        marketing: stored?.marketing ?? false,
      });
      setShowSettings(true);
      setShowBanner(false);
    }

    window.addEventListener(COOKIE_SETTINGS_EVENT, handleOpenSettings);
    return () => window.removeEventListener(COOKIE_SETTINGS_EVENT, handleOpenSettings);
  }, []);

  function acceptAll() {
    const next = saveConsent({ analytics: true, marketing: true });
    setConsent(next);
    setDraft({ analytics: true, marketing: true });
    setShowBanner(false);
    setShowSettings(false);
  }

  function acceptEssentialOnly() {
    const next = saveConsent({ analytics: false, marketing: false });
    setConsent(next);
    setDraft({ analytics: false, marketing: false });
    setShowBanner(false);
    setShowSettings(false);
  }

  function savePreferences() {
    const next = saveConsent(draft);
    setConsent(next);
    setShowBanner(false);
    setShowSettings(false);
  }

  if (!showBanner && !showSettings) {
    return null;
  }

  return (
    <>
      {showBanner && (
        <div
          role="dialog"
          aria-labelledby="cookie-banner-title"
          aria-describedby="cookie-banner-description"
          className="fixed inset-x-0 bottom-0 z-50 border-t border-ps-border bg-white/95 px-4 py-3 shadow-lg backdrop-blur-sm sm:px-5"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
            <p
              id="cookie-banner-description"
              className="text-xs leading-relaxed text-ps-muted sm:text-sm"
            >
              <span id="cookie-banner-title" className="font-semibold text-ps-navy">
                Cookies:
              </span>{" "}
              we use essential cookies to run the site, and optional ones only if you agree.{" "}
              <Link href="/cookies" className="font-medium text-ps-green hover:underline">
                Learn more
              </Link>
            </p>

            <div className="flex shrink-0 flex-wrap items-center gap-2 sm:gap-2.5">
              <button
                type="button"
                onClick={() => {
                  setDraft({
                    analytics: consent?.analytics ?? defaultConsent.analytics,
                    marketing: consent?.marketing ?? defaultConsent.marketing,
                  });
                  setShowSettings(true);
                  setShowBanner(false);
                }}
                className="rounded-lg px-3 py-2 text-xs font-semibold text-ps-muted transition-colors hover:text-ps-navy"
              >
                Settings
              </button>
              <button
                type="button"
                onClick={acceptEssentialOnly}
                className="rounded-lg border border-ps-border px-3 py-2 text-xs font-semibold text-ps-navy transition-colors hover:border-ps-navy/30"
              >
                Reject optional
              </button>
              <Button type="button" size="sm" onClick={acceptAll} className="px-4 py-2 text-xs">
                Accept all
              </Button>
            </div>
          </div>
        </div>
      )}

      {showSettings && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-ps-navy/50 p-4 sm:items-center">
          <div
            role="dialog"
            aria-labelledby="cookie-settings-title"
            aria-modal="true"
            className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-ps-border bg-white p-6 shadow-2xl"
          >
            <h2 id="cookie-settings-title" className="text-2xl font-extrabold text-ps-navy">
              Cookie preferences
            </h2>
            <p className="mt-2 text-sm text-ps-muted">
              Choose which cookies you are happy for us to use. Essential cookies cannot be
              switched off.
            </p>

            <ul className="mt-6 space-y-4">
              {cookieCategories.map((category) => {
                const isEssential = category.id === "essential";
                const checked = isEssential
                  ? true
                  : category.id === "analytics"
                    ? draft.analytics
                    : draft.marketing;

                return (
                  <li
                    key={category.id}
                    className="rounded-xl border border-ps-border bg-ps-cream/60 p-4"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-bold text-ps-navy">
                          {category.title}
                          {category.required && (
                            <span className="ml-2 text-xs font-semibold uppercase tracking-wider text-ps-green">
                              Always on
                            </span>
                          )}
                        </p>
                        <p className="mt-1 text-sm text-ps-muted">{category.description}</p>
                      </div>
                      <Toggle
                        checked={checked}
                        disabled={isEssential}
                        label={`${category.title} cookies`}
                        onChange={(value) => {
                          if (category.id === "analytics") {
                            setDraft((current) => ({ ...current, analytics: value }));
                          }
                          if (category.id === "marketing") {
                            setDraft((current) => ({ ...current, marketing: value }));
                          }
                        }}
                      />
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button type="button" size="sm" onClick={savePreferences}>
                Save preferences
              </Button>
              <button
                type="button"
                onClick={acceptAll}
                className={buttonClassName({ variant: "outline-dark", size: "sm" })}
              >
                Accept all
              </button>
              <button
                type="button"
                onClick={() => setShowSettings(false)}
                className={buttonClassName({ variant: "ghost", size: "sm" })}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
