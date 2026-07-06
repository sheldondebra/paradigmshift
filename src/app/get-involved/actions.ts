"use server";

import { generateReferenceId } from "@/lib/get-involved";
import { siteConfig } from "@/lib/content";

export type ActionResult = {
  success: boolean;
  message: string;
  referenceId?: string;
  errors?: Record<string, string>;
};

function required(value: FormDataEntryValue | null, field: string, errors: Record<string, string>) {
  const str = String(value ?? "").trim();
  if (!str) errors[field] = "This field is required.";
  return str;
}

function email(value: FormDataEntryValue | null, field: string, errors: Record<string, string>) {
  const str = required(value, field, errors);
  if (str && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str)) {
    errors[field] = "Enter a valid email address.";
  }
  return str;
}

function phone(value: FormDataEntryValue | null, field: string, errors: Record<string, string>) {
  const str = required(value, field, errors);
  if (str && str.replace(/\D/g, "").length < 9) {
    errors[field] = "Enter a valid phone number.";
  }
  return str;
}

export async function submitVolunteerApplication(
  _prev: ActionResult | null,
  formData: FormData
): Promise<ActionResult> {
  const errors: Record<string, string> = {};

  const fullName = required(formData.get("fullName"), "fullName", errors);
  email(formData.get("email"), "email", errors);
  phone(formData.get("phone"), "phone", errors);
  const areas = formData.getAll("areas");
  if (areas.length === 0) errors.areas = "Select at least one area of interest.";
  required(formData.get("availability"), "availability", errors);

  if (Object.keys(errors).length > 0) {
    return { success: false, message: "Please fix the errors below.", errors };
  }

  const referenceId = generateReferenceId("VOL");

  console.info("[Paradigm Shift] Volunteer application", {
    referenceId,
    fullName,
    email: formData.get("email"),
    areas,
    submittedAt: new Date().toISOString(),
  });

  return {
    success: true,
    referenceId,
    message: `Thanks, ${fullName.split(" ")[0]}! Your volunteer application was received. We'll contact you at ${formData.get("email")} within 3 business days.`,
  };
}

export async function submitDonationPledge(
  _prev: ActionResult | null,
  formData: FormData
): Promise<ActionResult> {
  const errors: Record<string, string> = {};

  const fullName = required(formData.get("fullName"), "fullName", errors);
  email(formData.get("email"), "email", errors);
  phone(formData.get("phone"), "phone", errors);

  const amount = Number(formData.get("amount"));
  const customAmount = Number(formData.get("customAmount"));
  const finalAmount = amount || customAmount;

  if (!finalAmount || finalAmount < 10) {
    errors.amount = "Select or enter an amount of at least GHS 10.";
  }

  if (Object.keys(errors).length > 0) {
    return { success: false, message: "Please fix the errors below.", errors };
  }

  const referenceId = generateReferenceId("DON");
  const frequency = formData.get("frequency") === "monthly" ? "monthly" : "one-time";

  console.info("[Paradigm Shift] Donation pledge", {
    referenceId,
    fullName,
    amount: finalAmount,
    frequency,
    submittedAt: new Date().toISOString(),
  });

  return {
    success: true,
    referenceId,
    message: `Thank you, ${fullName.split(" ")[0]}! Your ${frequency} pledge of GHS ${finalAmount.toLocaleString()} was recorded. Our team will email payment instructions to ${formData.get("email")}.`,
  };
}

export async function submitPartnershipInquiry(
  _prev: ActionResult | null,
  formData: FormData
): Promise<ActionResult> {
  const errors: Record<string, string> = {};

  const organization = required(formData.get("organization"), "organization", errors);
  const contactName = required(formData.get("contactName"), "contactName", errors);
  email(formData.get("email"), "email", errors);
  phone(formData.get("phone"), "phone", errors);
  required(formData.get("partnershipType"), "partnershipType", errors);
  required(formData.get("message"), "message", errors);

  if (Object.keys(errors).length > 0) {
    return { success: false, message: "Please fix the errors below.", errors };
  }

  const referenceId = generateReferenceId("PTR");

  console.info("[Paradigm Shift] Partnership inquiry", {
    referenceId,
    organization,
    contactName,
    submittedAt: new Date().toISOString(),
  });

  return {
    success: true,
    referenceId,
    message: `Thank you! Your partnership inquiry from ${organization} was received. We'll reach out to ${formData.get("email")} shortly.`,
  };
}

export async function registerForEvent(
  _prev: ActionResult | null,
  formData: FormData
): Promise<ActionResult> {
  const errors: Record<string, string> = {};

  const eventId = required(formData.get("eventId"), "eventId", errors);
  const fullName = required(formData.get("fullName"), "fullName", errors);
  email(formData.get("email"), "email", errors);
  phone(formData.get("phone"), "phone", errors);

  if (Object.keys(errors).length > 0) {
    return { success: false, message: "Please fix the errors below.", errors };
  }

  const referenceId = generateReferenceId("EVT");

  console.info("[Paradigm Shift] Event registration", {
    referenceId,
    eventId,
    fullName,
    email: formData.get("email"),
    submittedAt: new Date().toISOString(),
  });

  return {
    success: true,
    referenceId,
    message: `You're registered, ${fullName.split(" ")[0]}! Check ${formData.get("email")} for confirmation details. Reference: ${referenceId}. Questions? Call ${siteConfig.phone}.`,
  };
}
