"use client";

import type { ActionResult } from "@/app/get-involved/actions";
import { Button } from "@/components/ui";

export function FormField({
  label,
  name,
  type = "text",
  required = false,
  placeholder,
  error,
  defaultValue,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  error?: string;
  defaultValue?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-semibold text-ps-navy">
        {label}
        {required && <span className="text-ps-gold-dark"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        defaultValue={defaultValue}
        className={`w-full rounded-xl border bg-white px-4 py-3 text-ps-navy outline-none transition-all focus:ring-2 focus:ring-ps-gold/20 ${
          error ? "border-red-400 focus:border-red-400" : "border-ps-border focus:border-ps-gold"
        }`}
      />
      {error && <p className="mt-1.5 text-sm text-red-600">{error}</p>}
    </div>
  );
}

export function FormSelect({
  label,
  name,
  options,
  required = false,
  error,
  defaultValue,
  placeholder = "Select an option",
}: {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
  error?: string;
  defaultValue?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-semibold text-ps-navy">
        {label}
        {required && <span className="text-ps-gold-dark"> *</span>}
      </label>
      <select
        id={name}
        name={name}
        required={required}
        defaultValue={defaultValue ?? ""}
        className={`w-full rounded-xl border bg-white px-4 py-3 text-ps-navy outline-none transition-all focus:ring-2 focus:ring-ps-gold/20 ${
          error ? "border-red-400 focus:border-red-400" : "border-ps-border focus:border-ps-gold"
        }`}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      {error && <p className="mt-1.5 text-sm text-red-600">{error}</p>}
    </div>
  );
}

export function FormTextarea({
  label,
  name,
  required = false,
  placeholder,
  error,
  rows = 4,
}: {
  label: string;
  name: string;
  required?: boolean;
  placeholder?: string;
  error?: string;
  rows?: number;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-semibold text-ps-navy">
        {label}
        {required && <span className="text-ps-gold-dark"> *</span>}
      </label>
      <textarea
        id={name}
        name={name}
        required={required}
        placeholder={placeholder}
        rows={rows}
        className={`w-full resize-y rounded-xl border bg-white px-4 py-3 text-ps-navy outline-none transition-all focus:ring-2 focus:ring-ps-gold/20 ${
          error ? "border-red-400 focus:border-red-400" : "border-ps-border focus:border-ps-gold"
        }`}
      />
      {error && <p className="mt-1.5 text-sm text-red-600">{error}</p>}
    </div>
  );
}

export function SubmitButton({
  pending,
  label,
  pendingLabel = "Submitting…",
}: {
  pending: boolean;
  label: string;
  pendingLabel?: string;
}) {
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto">
      {pending ? pendingLabel : label}
    </Button>
  );
}

export function FormSuccess({ result }: { result: ActionResult }) {
  return (
    <div className="rounded-2xl border border-ps-green/30 bg-ps-cream p-8">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gold-gradient text-xl font-bold text-ps-navy">
        ✓
      </div>
      <p className="mt-4 text-lg font-bold text-ps-navy">Submission received</p>
      <p className="mt-2 text-ps-muted">{result.message}</p>
      {result.referenceId && (
        <p className="mt-4 inline-block rounded-lg bg-white px-3 py-1.5 text-sm font-mono text-ps-navy">
          Ref: {result.referenceId}
        </p>
      )}
    </div>
  );
}

export function FormErrorBanner({ message }: { message: string }) {
  return (
    <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
      {message}
    </div>
  );
}
