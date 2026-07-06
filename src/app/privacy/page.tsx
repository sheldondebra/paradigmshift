import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui";
import { parentOrganization, siteConfig } from "@/lib/content";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Privacy Policy",
  description:
    "How Paradigm Shift collects, uses, and protects personal information when you visit our website or get in touch about volunteering, partnerships, and events.",
  path: "/privacy",
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

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        description="How we handle your personal information when you visit our site or reach out to us."
      />

      <section className="py-24">
        <div className="mx-auto max-w-3xl space-y-10 px-5 text-ps-muted sm:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-ps-green">
            Last updated: {lastUpdated}
          </p>

          <Section title="Overview">
            <p>
              {siteConfig.name} (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is a
              Ghana-based non-profit operating under {parentOrganization.name}. We run
              entrepreneurship workshops, mentorship, and community encouragement programmes.
            </p>
            <p>
              This policy explains what personal information we collect through{" "}
              <strong className="font-semibold text-ps-navy">paradigmshiftgh.com</strong>, why we
              collect it, and the choices you have. We aim to be straightforward — if anything here
              is unclear, please contact us.
            </p>
          </Section>

          <Section title="Information we collect">
            <p>Depending on how you use the site, we may collect:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong className="font-semibold text-ps-navy">Contact details</strong> — such as
                your name, email address, phone number, and message content when you submit our
                contact form or get-involved forms (volunteer, donate, partner, or event interest).
              </li>
              <li>
                <strong className="font-semibold text-ps-navy">Technical information</strong> —
                such as browser type, device type, and general usage data if you accept optional
                analytics cookies.
              </li>
              <li>
                <strong className="font-semibold text-ps-navy">Cookie preferences</strong> — stored
                so we remember whether you accepted or declined optional cookies. See our{" "}
                <Link href="/cookies" className="font-semibold text-ps-green hover:underline">
                  cookie policy
                </Link>
                .
              </li>
            </ul>
            <p>
              We do not knowingly collect payment card details through this website. If we add
              online donation processing in future, we will update this policy before doing so.
            </p>
          </Section>

          <Section title="How we use your information">
            <p>We use personal information to:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Respond to enquiries about volunteering, partnerships, donations, and events</li>
              <li>Coordinate programmes and follow up after workshops or outreach</li>
              <li>Improve our website and understand what content is useful to visitors</li>
              <li>Meet legal or safeguarding obligations where applicable</li>
            </ul>
            <p>
              We do not sell your personal information. We do not use your details for unrelated
              marketing without your consent.
            </p>
          </Section>

          <Section title="Legal basis">
            <p>
              We process personal information where it is necessary to respond to your request,
              where you have given consent (for example, optional cookies), or where we have a
              legitimate interest in operating and improving our non-profit work — always balanced
              against your rights.
            </p>
          </Section>

          <Section title="Sharing with others">
            <p>
              We may share information with trusted service providers who help us run the website,
              send email, or analyse site usage — only when needed and under appropriate safeguards.
            </p>
            <p>
              We may also share information with {parentOrganization.name} and programme partners
              when you ask to volunteer, partner, or take part in an event we run together.
            </p>
            <p>
              We may disclose information if required by law or to protect the rights, safety, or
              integrity of our community and programmes.
            </p>
          </Section>

          <Section title="How long we keep information">
            <p>
              We keep enquiry and form submissions only as long as needed to respond, coordinate
              programmes, and maintain reasonable records. Cookie preference data is kept for up to
              12 months unless you change or clear it sooner.
            </p>
          </Section>

          <Section title="Your choices and rights">
            <p>You can:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Ask what personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Ask us to delete information where we no longer need it</li>
              <li>Withdraw consent for optional cookies at any time via cookie settings</li>
              <li>Object to certain processing where applicable under Ghanaian law</li>
            </ul>
            <p>
              To make a request, email{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-semibold text-ps-green hover:underline"
              >
                {siteConfig.email}
              </a>
              . We will respond within a reasonable timeframe.
            </p>
          </Section>

          <Section title="Children">
            <p>
              Our programmes may involve young people, but this website is not directed at children
              to submit personal data on their own. If you believe a child has provided us
              information without appropriate consent, please contact us and we will take steps to
              remove it.
            </p>
          </Section>

          <Section title="Third-party links and embeds">
            <p>
              Our site may link to social platforms (such as Facebook, Instagram, or YouTube) or
              embed third-party content. Those services have their own privacy practices, which we
              do not control.
            </p>
          </Section>

          <Section title="Security">
            <p>
              We take reasonable steps to protect personal information, but no website or email
              system can guarantee complete security. Please avoid sending sensitive information
              unless necessary.
            </p>
          </Section>

          <Section title="Changes to this policy">
            <p>
              We may update this policy from time to time. The &quot;Last updated&quot; date at the
              top will change when we do. Continued use of the site after updates means you accept
              the revised policy.
            </p>
          </Section>

          <Section title="Contact us">
            <p>
              Questions about privacy? Email{" "}
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
            <p>
              See also our{" "}
              <Link href="/terms" className="font-semibold text-ps-green hover:underline">
                terms of use
              </Link>{" "}
              and{" "}
              <Link href="/cookies" className="font-semibold text-ps-green hover:underline">
                cookie policy
              </Link>
              .
            </p>
          </Section>
        </div>
      </section>
    </>
  );
}
