"use client";

import { useActionState } from "react";
import { submitVolunteerApplication } from "@/app/get-involved/actions";
import { volunteerAreas, volunteerAvailability } from "@/lib/get-involved";
import {
  FormErrorBanner,
  FormField,
  FormSelect,
  FormSuccess,
  FormTextarea,
  SubmitButton,
} from "./form-ui";

const initialState = null;

export function VolunteerForm() {
  const [state, action, pending] = useActionState(submitVolunteerApplication, initialState);

  if (state?.success) {
    return <FormSuccess result={state} />;
  }

  return (
    <form action={action} className="space-y-5">
      {state?.success === false && state.message && (
        <FormErrorBanner message={state.message} />
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

      <div className="grid gap-5 sm:grid-cols-2">
        <FormField
          label="Phone"
          name="phone"
          type="tel"
          required
          placeholder="e.g. 059 392 4521"
          error={state?.errors?.phone}
        />
        <FormSelect
          label="Availability"
          name="availability"
          options={volunteerAvailability}
          required
          error={state?.errors?.availability}
        />
      </div>

      <div>
        <p className="mb-3 text-sm font-semibold text-ps-navy">
          Areas of interest <span className="text-ps-gold-dark">*</span>
        </p>
        <div className="grid gap-2 sm:grid-cols-2">
          {volunteerAreas.map((area) => (
            <label
              key={area}
              className="flex cursor-pointer items-center gap-3 rounded-xl border border-ps-border bg-white px-4 py-3 transition-colors hover:border-ps-gold/60"
            >
              <input
                type="checkbox"
                name="areas"
                value={area}
                className="h-4 w-4 accent-ps-gold"
              />
              <span className="text-sm text-ps-navy">{area}</span>
            </label>
          ))}
        </div>
        {state?.errors?.areas && (
          <p className="mt-1.5 text-sm text-red-600">{state.errors.areas}</p>
        )}
      </div>

      <FormTextarea
        label="Tell us about your skills or experience"
        name="experience"
        placeholder="Optional — helps us match you with the right opportunities"
        rows={3}
      />

      <SubmitButton pending={pending} label="Submit Volunteer Application" />
    </form>
  );
}
