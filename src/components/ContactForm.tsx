"use client";

import { useState } from "react";
import { Button } from "@/components/ui";
import { siteConfig } from "@/lib/content";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-ps-green/30 bg-ps-cream p-8 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gold-gradient text-2xl font-bold text-ps-navy">
          ✓
        </div>
        <p className="font-bold text-ps-navy">Message sent!</p>
        <p className="mt-2 text-sm text-ps-muted">
          We&apos;ll reply to you at {siteConfig.email} soon.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-xl border border-ps-border bg-white px-4 py-3 text-ps-navy outline-none transition-all focus:border-ps-gold focus:ring-2 focus:ring-ps-gold/20";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="mb-2 block text-sm font-semibold text-ps-navy">
            First name
          </label>
          <input id="firstName" name="firstName" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="lastName" className="mb-2 block text-sm font-semibold text-ps-navy">
            Last name
          </label>
          <input id="lastName" name="lastName" required className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-semibold text-ps-navy">
          Email
        </label>
        <input id="email" name="email" type="email" required className={inputClass} />
      </div>

      <div>
        <label htmlFor="interest" className="mb-2 block text-sm font-semibold text-ps-navy">
          I&apos;m interested in
        </label>
        <select id="interest" name="interest" className={inputClass}>
          <option value="volunteer">Volunteering</option>
          <option value="donate">Donating</option>
          <option value="partner">Partnership</option>
          <option value="register">Event registration</option>
          <option value="general">General enquiry</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-semibold text-ps-navy">
          Message
        </label>
        <textarea id="message" name="message" rows={5} required className={`${inputClass} resize-y`} />
      </div>

      <Button type="submit" className="w-full sm:w-auto">
        Send Message
      </Button>
    </form>
  );
}
