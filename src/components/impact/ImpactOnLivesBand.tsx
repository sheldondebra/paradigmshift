import { lifeImpactStories } from "@/lib/impact-stories";
import { SectionHeading } from "@/components/ui";

export function ImpactOnLivesBand() {
  return (
    <section className="border-y border-ps-border bg-ps-cream py-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          label="Your Impact on Lives"
          title="When You Get Involved, Someone's Life Changes"
          description="Every volunteer hour, every donation, and every partnership fuels stories like these — real people in Ghana whose daily lives are different because someone chose to act."
          align="center"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {lifeImpactStories.map((story) => (
            <div
              key={story.id}
              className="rounded-2xl border border-ps-border bg-white p-6 text-center"
            >
              <p className="text-3xl font-extrabold text-ps-gold">{story.name[0]}</p>
              <p className="mt-3 font-bold text-ps-navy">{story.name}</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-ps-green">
                {story.category}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-ps-muted">
                {story.after.split(".")[0]}.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
