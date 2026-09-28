import { SiteVideo } from "@/components/SiteVideo";
import { ButtonLink } from "@/components/ui";
import { conferenceTrailer } from "@/lib/videos";

const highlights = [
  {
    title: "Workshops & mentorship",
    text: "Young leaders building skills, confidence, and networks across Accra.",
  },
  {
    title: "Community outreach",
    text: "On-the-ground moments from health drives, events, and neighborhood programs.",
  },
  {
    title: "People behind the shift",
    text: "Volunteers, partners, and participants who make the movement real.",
  },
];

export function FacebookReelSection() {
  return (
    <section className="relative overflow-hidden bg-ps-cream py-20 sm:py-28">
      <div className="gold-bar absolute inset-x-0 top-0" />
      <div className="pointer-events-none absolute -right-24 top-16 h-72 w-72 rounded-full bg-ps-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-ps-green/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-ps-green">
            Watch
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-ps-navy sm:text-4xl lg:text-5xl">
            {conferenceTrailer.title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ps-muted">
            {conferenceTrailer.description}
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-2xl border border-ps-border bg-black shadow-xl">
          <SiteVideo
            variant="player"
            src={conferenceTrailer.src}
            poster={conferenceTrailer.poster}
            title={conferenceTrailer.title}
            className="aspect-video w-full bg-black object-cover"
          />
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className="rounded-2xl border border-ps-border bg-white p-6 card-shine"
            >
              <p className="text-xs font-bold uppercase tracking-wider text-ps-gold-dark">
                0{index + 1}
              </p>
              <p className="mt-2 font-bold text-ps-navy">{item.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-ps-muted">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-8 max-w-xl rounded-2xl border border-ps-gold/30 bg-gold-gradient/10 p-6 text-center">
          <p className="font-bold text-ps-navy">Follow the movement</p>
          <p className="mt-2 text-sm leading-relaxed text-ps-muted">
            Catch workshops, outreach days, and community stories as they happen
            across Ghana.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href="/get-involved">Get Involved</ButtonLink>
            <ButtonLink href="/news" variant="outline-dark" showArrow={false}>
              More Stories
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
