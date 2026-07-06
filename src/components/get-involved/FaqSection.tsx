"use client";

import { useState } from "react";
import { getInvolvedFaq } from "@/lib/get-involved";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="border-t border-ps-border bg-ps-cream py-24">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <h2 className="text-center text-3xl font-extrabold text-ps-navy">
          Common Questions
        </h2>
        <p className="mt-3 text-center text-ps-muted">
          Quick answers before you get started.
        </p>

        <div className="mt-10 divide-y divide-ps-border rounded-2xl border border-ps-border bg-white">
          {getInvolvedFaq.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-ps-navy">{item.question}</span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ps-cream text-lg font-bold text-ps-navy transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-5">
                    <p className="text-sm leading-relaxed text-ps-muted">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
