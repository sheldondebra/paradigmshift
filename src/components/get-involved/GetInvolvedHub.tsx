"use client";

import { useCallback, useEffect, useState } from "react";
import {
  type InvolvementTab,
  involvementTabs,
  isValidTab,
} from "@/lib/get-involved";
import { DonateForm } from "./DonateForm";
import { EventsSection } from "./EventsSection";
import { PartnerForm } from "./PartnerForm";
import { VolunteerForm } from "./VolunteerForm";

const tabForms: Record<InvolvementTab, React.ComponentType> = {
  volunteer: VolunteerForm,
  donate: DonateForm,
  partner: PartnerForm,
  events: () => <EventsSection />,
};

export function GetInvolvedHub({ initialTab }: { initialTab?: string }) {
  const [activeTab, setActiveTab] = useState<InvolvementTab>(
    isValidTab(initialTab) ? initialTab : "volunteer"
  );

  const setTab = useCallback((tab: InvolvementTab) => {
    setActiveTab(tab);
    window.history.replaceState(null, "", `#${tab}`);
    document.getElementById("get-involved-forms")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (isValidTab(hash)) setActiveTab(hash);
  }, []);

  const ActiveForm = tabForms[activeTab];

  return (
    <>
      {/* Quick action cards */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {involvementTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setTab(tab.id)}
                className={`card-shine rounded-2xl border p-6 text-left transition-all hover:-translate-y-0.5 ${
                  activeTab === tab.id
                    ? "border-ps-gold bg-ps-cream ring-2 ring-ps-gold/30"
                    : "border-ps-border bg-white hover:border-ps-gold/50"
                }`}
              >
                <span className="text-2xl font-extrabold text-ps-gold">
                  {tab.label[0]}
                </span>
                <h3 className="mt-3 font-bold text-ps-navy">{tab.label}</h3>
                <p className="mt-2 text-sm text-ps-muted">{tab.description}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tabbed forms */}
      <section id="get-involved-forms" className="scroll-mt-24 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="flex flex-wrap gap-2 border-b border-ps-border pb-4">
            {involvementTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-full px-5 py-2.5 text-sm font-bold transition-all ${
                  activeTab === tab.id
                    ? "bg-gold-gradient text-ps-navy shadow-md shadow-ps-gold/20"
                    : "text-ps-muted hover:bg-ps-cream hover:text-ps-navy"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div
            className={`mt-10 grid gap-10 ${
              activeTab === "events" ? "grid-cols-1" : "lg:grid-cols-5"
            }`}
          >
            {activeTab !== "events" && (
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-extrabold text-ps-navy">
                  {involvementTabs.find((t) => t.id === activeTab)?.label}
                </h2>
                <p className="mt-3 text-ps-muted">
                  {involvementTabs.find((t) => t.id === activeTab)?.description}
                </p>

                {activeTab === "volunteer" && (
                  <ul className="mt-6 space-y-2 text-sm text-ps-muted">
                    <li className="flex gap-2">
                      <span className="text-ps-gold">✓</span> No experience required
                    </li>
                    <li className="flex gap-2">
                      <span className="text-ps-gold">✓</span> Matched to your skills & schedule
                    </li>
                    <li className="flex gap-2">
                      <span className="text-ps-gold">✓</span> Response within 3 business days
                    </li>
                  </ul>
                )}

                {activeTab === "donate" && (
                  <ul className="mt-6 space-y-2 text-sm text-ps-muted">
                    <li className="flex gap-2">
                      <span className="text-ps-gold">✓</span> Mobile money & bank transfer
                    </li>
                    <li className="flex gap-2">
                      <span className="text-ps-gold">✓</span> One-time or monthly giving
                    </li>
                    <li className="flex gap-2">
                      <span className="text-ps-gold">✓</span> 100% directed to programs
                    </li>
                  </ul>
                )}

                {activeTab === "partner" && (
                  <ul className="mt-6 space-y-2 text-sm text-ps-muted">
                    <li className="flex gap-2">
                      <span className="text-ps-gold">✓</span> Local & international partners welcome
                    </li>
                    <li className="flex gap-2">
                      <span className="text-ps-gold">✓</span> Sponsorship & in-kind options
                    </li>
                    <li className="flex gap-2">
                      <span className="text-ps-gold">✓</span> Dedicated follow-up from our team
                    </li>
                  </ul>
                )}
              </div>
            )}

            <div
              className={`card-shine rounded-2xl border border-ps-border bg-ps-cream p-6 sm:p-8 ${
                activeTab === "events" ? "" : "lg:col-span-3"
              }`}
            >
              <ActiveForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
