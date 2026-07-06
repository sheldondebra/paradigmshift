import Link from "next/link";
import { SiteImageFill } from "@/components/SiteImage";
import { SectionHeading } from "@/components/ui";
import { facebookReel, getFacebookEmbedUrl } from "@/lib/videos";
import { images } from "@/lib/images";

export function FacebookReelSection() {
  const embedUrl = getFacebookEmbedUrl(350);

  return (
    <section className="relative overflow-hidden bg-navy-gradient py-24 sm:py-28">
      <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-ps-gold/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              label="Watch"
              title={facebookReel.title}
              description={facebookReel.description}
              light
            />
            <p className="mt-6 text-white/70">
              From leadership workshops to community gatherings — experience what a
              paradigm shift looks like when people come together across Ghana.
            </p>
            <Link
              href={facebookReel.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-2.5 text-sm font-bold text-white transition-all hover:border-ps-gold hover:text-ps-gold"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Watch on Facebook
            </Link>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[350px]">
              {/* Gold frame */}
              <div className="absolute -left-3 -top-3 h-full w-full rounded-2xl bg-gold-gradient opacity-80" />

              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl">
                <iframe
                  src={embedUrl}
                  title={facebookReel.title}
                  width="350"
                  height="620"
                  className="block w-full max-w-full"
                  style={{ border: "none", overflow: "hidden" }}
                  scrolling="no"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                />

                {/* Fallback poster — visible if iframe blocked */}
                <noscript>
                  <Link
                    href={facebookReel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative block aspect-[9/16]"
                  >
                    <SiteImageFill
                      src={images.youthSpeaker}
                      alt="Watch Paradigm Shift reel on Facebook"
                      displayWidth={1024}
                      className="object-cover"
                      sizes="350px"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-ps-navy/50">
                      <span className="rounded-full bg-gold-gradient px-6 py-3 text-sm font-bold text-ps-navy">
                        Play on Facebook
                      </span>
                    </div>
                  </Link>
                </noscript>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
