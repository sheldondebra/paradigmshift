import Link from "next/link";
import { FlyerPopupTrigger } from "@/components/FlyerPopup";
import { ButtonLink, SectionLabel, buttonClassName } from "@/components/ui";
import { isSiteFlyerActive } from "@/lib/content";
import { categoryStyles, type NewsItem } from "@/lib/news";
import {
  getDefaultPostBody,
  getNewsPostBody,
  type NewsEventDetails,
  type NewsSpeaker,
} from "@/lib/news-posts";

function EventDetailsCard({ details }: { details: NewsEventDetails }) {
  return (
    <aside className="rounded-2xl border border-ps-border bg-ps-cream p-8">
      <SectionLabel>Event Details</SectionLabel>
      <dl className="mt-4 space-y-5">
        <div>
          <dt className="text-xs font-bold uppercase tracking-wider text-ps-muted">Organizer</dt>
          <dd className="mt-1 font-semibold text-ps-navy">{details.organizer}</dd>
        </div>
        <div>
          <dt className="text-xs font-bold uppercase tracking-wider text-ps-muted">Theme</dt>
          <dd className="mt-1 font-semibold text-ps-navy">{details.theme}</dd>
        </div>
        <div>
          <dt className="text-xs font-bold uppercase tracking-wider text-ps-muted">Topic</dt>
          <dd className="mt-1 font-semibold text-ps-navy">{details.topic}</dd>
        </div>
        <div>
          <dt className="text-xs font-bold uppercase tracking-wider text-ps-muted">Date</dt>
          <dd className="mt-1 font-semibold text-ps-navy">{details.date}</dd>
        </div>
        <div>
          <dt className="text-xs font-bold uppercase tracking-wider text-ps-muted">Time</dt>
          <dd className="mt-1 font-semibold text-ps-navy">{details.time}</dd>
        </div>
        <div>
          <dt className="text-xs font-bold uppercase tracking-wider text-ps-muted">Venue</dt>
          <dd className="mt-1 font-semibold leading-relaxed text-ps-navy">{details.venue}</dd>
        </div>
        <div>
          <dt className="text-xs font-bold uppercase tracking-wider text-ps-muted">
            Enquiries &amp; Registration
          </dt>
          <dd className="mt-2 flex flex-wrap gap-2">
            {details.phones.map((phone) => (
              <a
                key={phone}
                href={`tel:${phone}`}
                className="rounded-full border border-ps-border bg-white px-4 py-2 text-sm font-bold text-ps-navy transition-colors hover:border-ps-gold hover:text-ps-gold-dark"
              >
                {phone}
              </a>
            ))}
          </dd>
        </div>
      </dl>
      <div className="mt-8 flex flex-col gap-3">
        {isSiteFlyerActive() && (
          <FlyerPopupTrigger
            className={buttonClassName({
              variant: "outline-dark",
              className: "w-full sm:w-auto",
            })}
          >
            View Event Flyer
          </FlyerPopupTrigger>
        )}
        <ButtonLink href="/get-involved?tab=events" variant="primary" className="w-full sm:w-auto">
          Register for Events
        </ButtonLink>
      </div>
    </aside>
  );
}

function SpeakersSection({ speakers }: { speakers: NewsSpeaker[] }) {
  const featured = speakers.find((s) => s.featured);
  const others = speakers.filter((s) => !s.featured);

  return (
    <section className="mt-14">
      <SectionLabel>Featured Speakers</SectionLabel>
      <h2 className="text-2xl font-extrabold text-ps-navy sm:text-3xl">Meet the Voices</h2>

      {featured && (
        <div className="mt-8 rounded-2xl border border-ps-gold/30 bg-gold-gradient/10 p-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-ps-gold-dark">
            Keynote Speaker
          </p>
          <p className="mt-3 text-xl font-extrabold text-ps-navy">{featured.name}</p>
          <p className="mt-2 text-ps-muted">{featured.role}</p>
        </div>
      )}

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {others.map((speaker) => (
          <div
            key={speaker.name}
            className="rounded-2xl border border-ps-border bg-white p-6 transition-shadow hover:shadow-md"
          >
            <p className="font-bold text-ps-navy">{speaker.name}</p>
            <p className="mt-2 text-sm leading-relaxed text-ps-muted">{speaker.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ArticleHero({ item }: { item: NewsItem }) {
  const styles = categoryStyles[item.category];

  return (
    <section className="relative overflow-hidden bg-navy-gradient pt-32 pb-20">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-ps-gold blur-3xl" />
      </div>
      <div className="gold-bar absolute inset-x-0 top-0" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <span
          className={`mb-4 inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${styles.badge}`}
        >
          {item.category}
        </span>
        <time className="block text-sm font-semibold text-white/70">{item.date}</time>
        <h1 className="mt-3 max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          {item.title}
        </h1>
      </div>
    </section>
  );
}

export function NewsArticle({ item }: { item: NewsItem }) {
  const styles = categoryStyles[item.category];
  const body = getNewsPostBody(item.slug) ?? getDefaultPostBody(item.excerpt);
  const showFlyerPopup = Boolean(body.eventDetails);

  return (
    <article>
      <ArticleHero item={item} />

      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <Link
          href="/news"
          className="inline-flex items-center gap-2 text-sm font-bold text-ps-muted transition-colors hover:text-ps-gold-dark"
        >
          <span aria-hidden="true">&larr;</span>
          Back to News
        </Link>

        {showFlyerPopup && isSiteFlyerActive() && (
          <FlyerPopupTrigger className={buttonClassName({ size: "sm", className: "mt-6" })}>
            View Event Flyer
          </FlyerPopupTrigger>
        )}

        <div
          className={`mt-10 grid gap-12 ${body.eventDetails ? "lg:grid-cols-[1fr_340px] lg:items-start" : ""}`}
        >
          <div className={`border-t-4 pt-10 ${styles.accent}`}>
            <div className="prose-spacing space-y-6">
              {body.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="text-lg leading-relaxed text-ps-muted">
                  {paragraph}
                </p>
              ))}
            </div>

            {body.speakers && body.speakers.length > 0 && (
              <SpeakersSection speakers={body.speakers} />
            )}
          </div>

          {body.eventDetails && (
            <div className="lg:sticky lg:top-24">
              <EventDetailsCard details={body.eventDetails} />
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
