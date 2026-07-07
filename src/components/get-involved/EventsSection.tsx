"use client";

import { useActionState, useState } from "react";
import { registerForEvent } from "@/app/get-involved/actions";
import { pastEvents, upcomingEvents, type EventItem } from "@/lib/get-involved";
import {
  FormErrorBanner,
  FormField,
  FormSuccess,
  SubmitButton,
} from "./form-ui";

const initialState = null;

function spotsLabel(spotsLeft: number, capacity: number) {
  const pct = (spotsLeft / capacity) * 100;
  if (spotsLeft <= 5) return { text: `Only ${spotsLeft} spots left`, urgent: true };
  if (pct <= 30) return { text: `${spotsLeft} spots remaining`, urgent: false };
  return { text: `${spotsLeft} of ${capacity} spots open`, urgent: false };
}

function EventCard({
  event,
  isOpen,
  onToggleRegister,
}: {
  event: EventItem;
  isOpen: boolean;
  onToggleRegister: () => void;
}) {
  const spots =
    event.spotsLeft !== undefined && event.capacity !== undefined
      ? spotsLabel(event.spotsLeft, event.capacity)
      : null;

  return (
    <article className="card-shine overflow-hidden rounded-2xl border border-ps-border bg-white transition-all">
      <div className="p-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <span className="rounded-full bg-ps-cream px-3 py-1 text-xs font-bold uppercase tracking-wider text-ps-green">
              {event.category}
            </span>
            <h3 className="mt-3 text-lg font-bold text-ps-navy">{event.title}</h3>
            {event.theme && (
              <p className="mt-2 text-sm font-medium text-ps-gold-dark">{event.theme}</p>
            )}
            <p className="mt-1 text-sm text-ps-muted">
              {event.date} · {event.time}
            </p>
            <p className="mt-1 text-sm font-medium text-ps-navy">{event.location}</p>
          </div>
          {spots && (
            <span
              className={`rounded-full px-3 py-1 text-xs font-bold ${
                spots.urgent ? "bg-red-100 text-red-700" : "bg-ps-cream text-ps-muted"
              }`}
            >
              {spots.text}
            </span>
          )}
        </div>

        <p className="mt-4 text-sm leading-relaxed text-ps-muted">{event.description}</p>

        {event.href ? (
          <a
            href={event.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex rounded-full border border-ps-border bg-white px-5 py-2.5 text-sm font-bold text-ps-navy transition-colors hover:border-ps-navy hover:bg-ps-cream"
          >
            Read event recap
          </a>
        ) : (
          <button
            type="button"
            onClick={onToggleRegister}
            className="mt-5 rounded-full bg-ps-navy px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-ps-navy-mid"
          >
            {isOpen ? "Cancel" : "Register for this event"}
          </button>
        )}
      </div>

      {isOpen && !event.href && (
        <div className="border-t border-ps-border bg-ps-cream px-6 py-6">
          <EventRegistrationForm eventId={event.id} eventTitle={event.title} />
        </div>
      )}
    </article>
  );
}

export function EventsSection({ preselectedEventId }: { preselectedEventId?: string }) {
  const [expandedId, setExpandedId] = useState<string | null>(preselectedEventId ?? null);

  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-ps-green">
          Upcoming
        </h3>
        {upcomingEvents.map((event) => {
          const isOpen = expandedId === event.id;

          return (
            <EventCard
              key={event.id}
              event={event}
              isOpen={isOpen}
              onToggleRegister={() => setExpandedId(isOpen ? null : event.id)}
            />
          );
        })}
      </div>

      {pastEvents.length > 0 && (
        <div className="space-y-4 border-t border-ps-border pt-10">
          <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-ps-muted">
            Past events
          </h3>
          {pastEvents.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              isOpen={false}
              onToggleRegister={() => {}}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function EventRegistrationForm({
  eventId,
  eventTitle,
}: {
  eventId: string;
  eventTitle: string;
}) {
  const [state, action, pending] = useActionState(registerForEvent, initialState);

  if (state?.success) {
    return <FormSuccess result={state} />;
  }

  return (
    <form action={action} className="space-y-4">
      <p className="text-sm font-semibold text-ps-navy">Registering for: {eventTitle}</p>

      {state?.success === false && state.message && (
        <FormErrorBanner message={state.message} />
      )}

      <input type="hidden" name="eventId" value={eventId} />

      <div className="grid gap-4 sm:grid-cols-2">
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
        error={state?.errors?.phone}
      />

      <SubmitButton pending={pending} label="Confirm Registration" />
    </form>
  );
}
