import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/ui";
import { siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Reach Paradigm Shift by phone, email, or the contact form below.",
};

const contactDetails = [
  {
    label: "Phone",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
  },
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  { label: "Location", value: siteConfig.location },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        description="Questions about volunteering, donations, or partnerships? We'd like to hear from you."
      />

      <section className="py-24">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-extrabold text-ps-navy">Get in touch</h2>
            <p className="mt-3 text-ps-muted">
              Reach out and we&apos;ll get back to you as soon as we can.
            </p>

            <div className="mt-8 space-y-4">
              {contactDetails.map((item) => (
                <div
                  key={item.label}
                  className="card-shine rounded-2xl border border-ps-border bg-ps-cream p-5 transition-all hover:border-ps-gold/50"
                >
                  <p className="text-xs font-bold uppercase tracking-widest text-ps-green">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="mt-1 block font-semibold text-ps-navy hover:text-ps-gold-dark"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-1 font-semibold text-ps-navy">{item.value}</p>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-navy-gradient p-6 text-white">
              <p className="text-sm font-bold text-ps-gold">{siteConfig.slogan}</p>
              <p className="mt-2 text-sm text-white/75">
                Together, we can empower communities and build a brighter future for Ghana.
              </p>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="card-shine rounded-2xl border border-ps-border bg-white p-8 sm:p-10">
              <h2 className="text-xl font-extrabold text-ps-navy">Send a message</h2>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
