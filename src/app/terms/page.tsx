import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui";
import { parentOrganization, siteConfig } from "@/lib/content";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Terms of Use",
  description:
    "Terms for using the Paradigm Shift website — acceptable use, content, donations, partnerships, and limitations of liability.",
  path: "/terms",
});

const lastUpdated = "July 2026";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-2xl font-extrabold text-ps-navy">{title}</h2>
      <div className="mt-3 space-y-3 leading-relaxed">{children}</div>
    </div>
  );
}

export default function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms of Use"
        description="The rules for using our website and the information we share here."
      />

      <section className="py-24">
        <div className="mx-auto max-w-3xl space-y-10 px-5 text-ps-muted sm:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-ps-green">
            Last updated: {lastUpdated}
          </p>

          <Section title="Agreement">
            <p>
              By accessing or using the {siteConfig.name} website at{" "}
              <strong className="font-semibold text-ps-navy">paradigmshiftgh.com</strong>, you agree
              to these terms. If you do not agree, please do not use the site.
            </p>
            <p>
              {siteConfig.name} is a non-profit initiative operating under{" "}
              {parentOrganization.name}, based in {siteConfig.location}.
            </p>
          </Section>

          <Section title="About this website">
            <p>
              This site provides information about our programmes, events, impact stories,
              partnership opportunities, and ways to get involved. Content is offered for general
              information — it is not professional, legal, financial, or medical advice.
            </p>
            <p>
              We try to keep information accurate and up to date, but we do not guarantee that
              every detail on the site is complete or current at all times.
            </p>
          </Section>

          <Section title="Acceptable use">
            <p>When using this site, you agree not to:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Use the site for unlawful, harmful, or misleading purposes</li>
              <li>Attempt to gain unauthorised access to our systems or data</li>
              <li>Submit false information through our forms</li>
              <li>Scrape, overload, or disrupt the site or its infrastructure</li>
              <li>Use our content or branding in a way that suggests official endorsement without permission</li>
            </ul>
            <p>
              We may restrict access if we believe these terms have been violated.
            </p>
          </Section>

          <Section title="Forms, volunteering, and partnerships">
            <p>
              Submitting a contact, volunteer, donation, or partnership form does not create a
              binding contract on its own. We will follow up separately to confirm details,
              availability, and any formal arrangements.
            </p>
            <p>
              Programme participation may involve additional terms, waivers, or agreements shared
              directly with you before an event or activity.
            </p>
          </Section>

          <Section title="Donations">
            <p>
              Information about donating on this site is provided in good faith. Where online
              donations are not yet processed through the website, any gift arrangements will be
              confirmed directly with our team.
            </p>
            <p>
              Donations support our non-profit work, including entrepreneurship workshops and
              community programmes. Refund or receipt policies, where applicable, will be
              communicated at the time of donation.
            </p>
          </Section>

          <Section title="Intellectual property">
            <p>
              Unless stated otherwise, content on this site — including text, images, logos, and
              design — belongs to {siteConfig.name} or is used with permission. You may share links
              to our pages and quote brief excerpts with credit, but you may not copy, republish, or
              commercially exploit our content without written permission.
            </p>
          </Section>

          <Section title="Third-party content">
            <p>
              The site may include links to social media, partner organisations, or embedded media
              (such as Facebook reels). We are not responsible for third-party websites, services,
              or content outside our control.
            </p>
          </Section>

          <Section title="Disclaimer">
            <p>
              The site and its content are provided &quot;as is&quot; and &quot;as available&quot;
              without warranties of any kind, to the fullest extent permitted by law. We do not
              warrant uninterrupted or error-free access.
            </p>
          </Section>

          <Section title="Limitation of liability">
            <p>
              To the fullest extent permitted by applicable law, {siteConfig.name} and{" "}
              {parentOrganization.name} will not be liable for any indirect, incidental, or
              consequential loss arising from your use of this website or reliance on its content.
            </p>
            <p>
              Nothing in these terms limits liability where it cannot be excluded under Ghanaian
              law.
            </p>
          </Section>

          <Section title="Privacy and cookies">
            <p>
              Our use of personal information is described in our{" "}
              <Link href="/privacy" className="font-semibold text-ps-green hover:underline">
                privacy policy
              </Link>
              . Our use of cookies is described in our{" "}
              <Link href="/cookies" className="font-semibold text-ps-green hover:underline">
                cookie policy
              </Link>
              .
            </p>
          </Section>

          <Section title="Changes to these terms">
            <p>
              We may update these terms from time to time. The &quot;Last updated&quot; date will
              change when we do. Your continued use of the site after changes are posted constitutes
              acceptance of the updated terms.
            </p>
          </Section>

          <Section title="Governing law">
            <p>
              These terms are governed by the laws of Ghana. Any disputes shall be subject to the
              jurisdiction of the courts of Ghana, unless otherwise required by applicable law.
            </p>
          </Section>

          <Section title="Contact">
            <p>
              Questions about these terms? Email{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-semibold text-ps-green hover:underline"
              >
                {siteConfig.email}
              </a>
              , call{" "}
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="font-semibold text-ps-green hover:underline"
              >
                {siteConfig.phone}
              </a>
              , or visit our{" "}
              <Link href="/contact" className="font-semibold text-ps-green hover:underline">
                contact page
              </Link>
              .
            </p>
          </Section>
        </div>
      </section>
    </>
  );
}
