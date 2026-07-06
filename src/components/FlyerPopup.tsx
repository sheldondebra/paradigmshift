"use client";

import Image from "next/image";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

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
  src,
  alt,
  autoOpen = false,
  children,
}: {
  src: string;
  alt: string;
  autoOpen?: boolean;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(autoOpen);

  const openFlyer = useCallback(() => setOpen(true), []);
  const closeFlyer = useCallback(() => setOpen(false), []);

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

  return (
    <FlyerPopupContext.Provider value={{ open: openFlyer }}>
      {children}

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          role="presentation"
        >
          <button
            type="button"
            aria-label="Close flyer"
            className="absolute inset-0 bg-black/75"
            onClick={closeFlyer}
          />

          <div
            role="dialog"
            aria-modal="true"
            aria-label={alt}
            className="relative z-10 w-full max-w-xs sm:max-w-sm"
          >
            <button
              type="button"
              onClick={closeFlyer}
              aria-label="Close"
              className="absolute -right-2 -top-2 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-white text-lg leading-none text-ps-navy shadow-md transition-transform hover:scale-105"
            >
              <span aria-hidden="true">&times;</span>
            </button>

            <Image
              src={src}
              alt={alt}
              width={864}
              height={1024}
              className="h-auto max-h-[85vh] w-full rounded-lg shadow-2xl"
              priority
            />
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
