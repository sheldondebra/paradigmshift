import { SiteImageFill } from "@/components/SiteImage";
import { ButtonLink } from "@/components/ui";
import { facebookReel, getFacebookEmbedUrl } from "@/lib/videos";
import { getImageMeta, images } from "@/lib/images";

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
  const embedUrl = getFacebookEmbedUrl(360);

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
            {facebookReel.title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ps-muted">
            {facebookReel.description}
          </p>
        </div>

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_360px_minmax(0,1fr)] lg:gap-10 xl:gap-16">
          <div className="hidden space-y-5 lg:block">
            {highlights.slice(0, 2).map((item, index) => (
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

          <div className="mx-auto w-full max-w-[360px]">
            <div className="relative overflow-hidden rounded-[1.75rem] bg-ps-navy shadow-2xl ring-1 ring-ps-navy/10">
              <div className="absolute inset-0">
                <SiteImageFill
                  src={images.youthSpeaker}
                  alt=""
                  displayWidth={getImageMeta(images.youthSpeaker).width}
                  className="object-cover opacity-40"
                  sizes="360px"
                />
              </div>

              <iframe
                src={embedUrl}
                title={facebookReel.title}
                width="360"
                height="640"
                className="relative z-10 block w-full"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            <p className="mt-4 text-center text-xs font-medium text-ps-muted">
              Tap to play · Opens in Facebook
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border border-ps-border bg-white p-6 card-shine">
              <p className="text-xs font-bold uppercase tracking-wider text-ps-gold-dark">
                03
              </p>
              <p className="mt-2 font-bold text-ps-navy">{highlights[2].title}</p>
              <p className="mt-2 text-sm leading-relaxed text-ps-muted">
                {highlights[2].text}
              </p>
            </div>

            <div className="rounded-2xl border border-ps-gold/30 bg-gold-gradient/10 p-6">
              <p className="font-bold text-ps-navy">Follow the movement</p>
              <p className="mt-2 text-sm leading-relaxed text-ps-muted">
                Catch workshops, outreach days, and community stories as they happen
                across Ghana.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:flex-col">
                <ButtonLink
                  href={facebookReel.url}
                  className="w-full sm:w-auto lg:w-full"
                >
                  Watch on Facebook
                </ButtonLink>
                <ButtonLink
                  href="/news"
                  variant="outline-dark"
                  showArrow={false}
                  className="w-full sm:w-auto lg:w-full"
                >
                  More Stories
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3 lg:hidden">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className="rounded-xl border border-ps-border bg-white px-4 py-5 text-center"
            >
              <p className="text-xs font-bold uppercase tracking-wider text-ps-gold-dark">
                0{index + 1}
              </p>
              <p className="mt-2 text-sm font-bold text-ps-navy">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
