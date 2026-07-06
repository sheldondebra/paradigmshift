"use client";

import { useActionState, useState } from "react";
import { submitDonationPledge } from "@/app/get-involved/actions";
import { donationAmounts, donationImpacts } from "@/lib/get-involved";
import {
  FormErrorBanner,
  FormField,
  FormSuccess,
  FormTextarea,
  SubmitButton,
} from "./form-ui";

const initialState = null;

export function DonateForm() {
  const [state, action, pending] = useActionState(submitDonationPledge, initialState);
  const [selectedAmount, setSelectedAmount] = useState<number>(100);
  const [customMode, setCustomMode] = useState(false);
  const [frequency, setFrequency] = useState<"one-time" | "monthly">("one-time");

  const displayAmount = customMode ? null : selectedAmount;
  const impact = displayAmount ? donationImpacts[displayAmount] : null;

  if (state?.success) {
    return <FormSuccess result={state} />;
  }

  return (
    <form action={action} className="space-y-6">
      {state?.success === false && state.message && (
        <FormErrorBanner message={state.message} />
      )}

      <div>
        <p className="mb-3 text-sm font-semibold text-ps-navy">Donation frequency</p>
        <div className="flex gap-2">
          {(["one-time", "monthly"] as const).map((freq) => (
            <button
              key={freq}
              type="button"
              onClick={() => setFrequency(freq)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                frequency === freq
                  ? "bg-ps-navy text-white"
                  : "border border-ps-border bg-white text-ps-muted hover:border-ps-gold"
              }`}
            >
              {freq === "one-time" ? "One-time" : "Monthly"}
            </button>
          ))}
        </div>
        <input type="hidden" name="frequency" value={frequency} />
      </div>

      <div>
        <p className="mb-3 text-sm font-semibold text-ps-navy">
          Select amount (GHS) <span className="text-ps-gold-dark">*</span>
        </p>
        <div className="grid grid-cols-3 gap-2 sm:grid-cols-5">
          {donationAmounts.map((amount) => (
            <button
              key={amount}
              type="button"
              onClick={() => {
                setSelectedAmount(amount);
                setCustomMode(false);
              }}
              className={`rounded-xl border py-3 text-sm font-bold transition-all ${
                !customMode && selectedAmount === amount
                  ? "border-ps-gold bg-gold-gradient text-ps-navy shadow-md shadow-ps-gold/20"
                  : "border-ps-border bg-white text-ps-navy hover:border-ps-gold"
              }`}
            >
              {amount}
            </button>
          ))}
        </div>
        {!customMode && (
          <input type="hidden" name="amount" value={selectedAmount} />
        )}
        {state?.errors?.amount && (
          <p className="mt-1.5 text-sm text-red-600">{state.errors.amount}</p>
        )}
      </div>

      <div>
        <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-ps-navy">
          <input
            type="checkbox"
            checked={customMode}
            onChange={(e) => setCustomMode(e.target.checked)}
            className="h-4 w-4 accent-ps-gold"
          />
          Enter a custom amount
        </label>
        {customMode && (
          <input
            name="customAmount"
            type="number"
            min={10}
            step={1}
            placeholder="Min. GHS 10"
            className="w-full rounded-xl border border-ps-border bg-white px-4 py-3 text-ps-navy outline-none focus:border-ps-gold focus:ring-2 focus:ring-ps-gold/20"
          />
        )}
      </div>

      {impact && (
        <div className="rounded-xl border border-ps-gold/30 bg-ps-cream px-4 py-3">
          <p className="text-xs font-bold uppercase tracking-wider text-ps-green">
            Your impact
          </p>
          <p className="mt-1 text-sm font-semibold text-ps-navy">
            GHS {selectedAmount} → {impact}
          </p>
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <FormField
          label="Full name"
          name="fullName"
          required
          error={state?.errors?.fullName}
        />
        <FormField
          label="Email"
          name="email"
          type="email"
          required
          error={state?.errors?.email}
        />
      </div>

      <FormField
        label="Phone"
        name="phone"
        type="tel"
        required
        placeholder="For mobile money / payment follow-up"
        error={state?.errors?.phone}
      />

      <FormTextarea
        label="Dedication or message"
        name="message"
        placeholder="Optional — in honour of someone, or a note to our team"
        rows={2}
      />

      <p className="text-xs text-ps-muted">
        Payment instructions will be sent to your email after you submit. We accept
        mobile money and bank transfer.
      </p>

      <SubmitButton pending={pending} label="Submit Donation Pledge" />
    </form>
  );
}
