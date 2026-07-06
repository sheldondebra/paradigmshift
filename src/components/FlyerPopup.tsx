"use client";

import Image from "next/image";
import Link from "next/link";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

const DISMISS_KEY = "ps-flyer-dismissed";

export type FlyerContent = {
  src: string;
  alt: string;
  eyebrow?: string;
  title: string;
  date?: string;
  time?: string;
  venue?: string;
  href?: string;
};

type FlyerPopupContextValue = {
  open: () => void;
};

const FlyerPopupContext = createContext<FlyerPopupContextValue | null>(null);

function useFlyerPopup() {
  const context = useContext(FlyerPopupContext);
  if (!context) {
    throw new Error("FlyerPopup components must be used within FlyerPopupRoot");
  }
  return context;
}

export function FlyerPopupRoot({
  flyer,
  autoOpen = false,
  active = true,
  children,
}: {
  flyer: FlyerContent;
  autoOpen?: boolean;
  active?: boolean;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);

  const openFlyer = useCallback(() => {
    if (active) setOpen(true);
  }, [active]);

  const closeFlyer = useCallback(() => {
    sessionStorage.setItem(DISMISS_KEY, "1");
    setOpen(false);
  }, []);

  useEffect(() => {
    if (!autoOpen || !active) return;
    if (sessionStorage.getItem(DISMISS_KEY)) return;
    setOpen(true);
  }, [autoOpen, active]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeFlyer();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, closeFlyer]);

  if (!active) {
    return <>{children}</>;
  }

  return (
    <FlyerPopupContext.Provider value={{ open: openFlyer }}>
      {children}

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          role="presentation"
        >
          <button
            type="button"
            aria-label="Close flyer"
            className="absolute inset-0 bg-black/60"
            onClick={closeFlyer}
          />

          <div
            role="dialog"
            aria-modal="true"
            aria-label={flyer.title}
            className="relative z-10 w-[min(100%,21rem)] sm:w-[min(100%,24rem)]"
          >
            <button
              type="button"
              onClick={closeFlyer}
              aria-label="Close"
              className="absolute -right-2 -top-2 z-20 flex h-7 w-7 items-center justify-center rounded-full border border-ps-border bg-white text-ps-navy shadow-md transition-colors hover:bg-ps-cream"
            >
              <svg
                className="h-3.5 w-3.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                aria-hidden="true"
              >
                <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>

            {flyer.href ? (
              <Link
                href={flyer.href}
                onClick={closeFlyer}
                className="block overflow-hidden rounded-2xl border-2 border-white/90 shadow-xl"
              >
                <Image
                  src={flyer.src}
                  alt={flyer.alt}
                  width={864}
                  height={1024}
                  className="h-auto max-h-[min(80vh,36rem)] w-full"
                  priority
                />
              </Link>
            ) : (
              <div className="overflow-hidden rounded-2xl border-2 border-white/90 shadow-xl">
                <Image
                  src={flyer.src}
                  alt={flyer.alt}
                  width={864}
                  height={1024}
                  className="h-auto max-h-[min(80vh,36rem)] w-full"
                  priority
                />
              </div>
            )}
          </div>
        </div>
      )}
    </FlyerPopupContext.Provider>
  );
}

export function FlyerPopupTrigger({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const { open } = useFlyerPopup();

  return (
    <button type="button" onClick={open} className={className}>
      {children}
    </button>
  );
}
