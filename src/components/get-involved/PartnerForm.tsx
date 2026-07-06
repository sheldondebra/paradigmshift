"use client";

import { useActionState } from "react";
import { submitPartnershipInquiry } from "@/app/get-involved/actions";
import { partnershipTypes } from "@/lib/get-involved";
import {
  FormErrorBanner,
  FormField,
  FormSelect,
  FormSuccess,
  FormTextarea,
  SubmitButton,
} from "./form-ui";

const initialState = null;

export function PartnerForm() {
  const [state, action, pending] = useActionState(submitPartnershipInquiry, initialState);

  if (state?.success) {
    return <FormSuccess result={state} />;
  }

  return (
    <form action={action} className="space-y-5">
      {state?.success === false && state.message && (
        <FormErrorBanner message={state.message} />
      )}

      <FormField
        label="Organization name"
        name="organization"
        required
        error={state?.errors?.organization}
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <FormField
          label="Contact person"
          name="contactName"
          required
          error={state?.errors?.contactName}
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
          error={state?.errors?.phone}
        />
        <FormSelect
          label="Partnership type"
          name="partnershipType"
          options={partnershipTypes}
          required
          error={state?.errors?.partnershipType}
        />
      </div>

      <FormField
        label="Website"
        name="website"
        type="url"
        placeholder="https://"
      />

      <FormTextarea
        label="Tell us about your partnership goals"
        name="message"
        required
        placeholder="How would you like to collaborate with Paradigm Shift?"
        error={state?.errors?.message}
        rows={4}
      />

      <SubmitButton pending={pending} label="Submit Partnership Inquiry" />
    </form>
  );
}
