export const CONSENT_COOKIE_NAME = "ps_cookie_consent";
export const CONSENT_COOKIE_MAX_AGE = 60 * 60 * 24 * 365;
export const COOKIE_SETTINGS_EVENT = "ps:open-cookie-settings";

export type CookieCategory = "essential" | "analytics" | "marketing";

export type CookieConsent = {
  essential: true;
  analytics: boolean;
  marketing: boolean;
  updatedAt: string;
};

export const defaultConsent: CookieConsent = {
  essential: true,
  analytics: false,
  marketing: false,
  updatedAt: new Date(0).toISOString(),
};

export const cookieCategories: {
  id: CookieCategory;
  title: string;
  description: string;
  required?: boolean;
}[] = [
  {
    id: "essential",
    title: "Essential",
    description:
      "Required for the site to work — for example, remembering your cookie choices.",
    required: true,
  },
  {
    id: "analytics",
    title: "Analytics",
    description:
      "Help us understand how visitors use the site so we can improve workshops and content.",
  },
  {
    id: "marketing",
    title: "Marketing",
    description:
      "Used to measure outreach from social campaigns and show relevant content elsewhere.",
  },
];

export function parseConsent(value: string | undefined): CookieConsent | null {
  if (!value) return null;

  try {
    const parsed = JSON.parse(decodeURIComponent(value)) as Partial<CookieConsent>;
    if (typeof parsed.analytics !== "boolean" || typeof parsed.marketing !== "boolean") {
      return null;
    }

    return {
      essential: true,
      analytics: parsed.analytics,
      marketing: parsed.marketing,
      updatedAt: parsed.updatedAt ?? new Date().toISOString(),
    };
  } catch {
    return null;
  }
}

export function getConsentFromDocument(): CookieConsent | null {
  if (typeof document === "undefined") return null;

  const match = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${CONSENT_COOKIE_NAME}=`));

  if (!match) return null;

  return parseConsent(match.split("=").slice(1).join("="));
}

export function saveConsent(consent: Omit<CookieConsent, "essential" | "updatedAt">) {
  const nextConsent: CookieConsent = {
    essential: true,
    analytics: consent.analytics,
    marketing: consent.marketing,
    updatedAt: new Date().toISOString(),
  };

  document.cookie = [
    `${CONSENT_COOKIE_NAME}=${encodeURIComponent(JSON.stringify(nextConsent))}`,
    "Path=/",
    `Max-Age=${CONSENT_COOKIE_MAX_AGE}`,
    "SameSite=Lax",
  ].join("; ");

  applyConsent(nextConsent);
  return nextConsent;
}

export function applyConsent(consent: CookieConsent) {
  if (typeof window === "undefined") return;

  if (consent.analytics) {
    // Hook for future analytics scripts (e.g. Google Analytics).
    window.dispatchEvent(new CustomEvent("ps:analytics-consent-granted"));
  }

  if (consent.marketing) {
    window.dispatchEvent(new CustomEvent("ps:marketing-consent-granted"));
  }
}

export function openCookieSettings() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(COOKIE_SETTINGS_EVENT));
}
