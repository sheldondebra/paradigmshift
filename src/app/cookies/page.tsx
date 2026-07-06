import type { Metadata } from "next";
import Link from "next/link";
import { CookieSettingsLink } from "@/components/CookieSettingsLink";
import { PageHero } from "@/components/ui";
import { siteConfig } from "@/lib/content";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Cookie Policy",
  description:
    "How Paradigm Shift uses cookies on paradigmshiftgh.com — what we store, why, and how to update your preferences.",
  path: "/cookies",
});

const cookieTable = [
  {
    name: "ps_cookie_consent",
    type: "Essential",
    purpose: "Remembers your cookie preferences so we do not ask every visit.",
    duration: "12 months",
  },
];

export default function CookiesPage() {
  return (
    <>
      <PageHero
        title="Cookie Policy"
        description="Plain-language information about how we use cookies on this website."
      />

      <section className="py-24">
        <div className="mx-auto max-w-3xl space-y-10 px-5 text-ps-muted sm:px-8">
          <div>
            <h2 className="text-2xl font-extrabold text-ps-navy">What are cookies?</h2>
            <p className="mt-3 leading-relaxed">
              Cookies are small text files stored on your device when you visit a website. They
              help the site remember settings, understand usage, or support features you choose
              to enable.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-extrabold text-ps-navy">How {siteConfig.name} uses cookies</h2>
            <p className="mt-3 leading-relaxed">
              We use essential cookies so the site works properly — including remembering whether
              you have accepted or declined optional cookies. Optional analytics and marketing
              cookies are only used if you consent. We do not sell your data.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-extrabold text-ps-navy">Cookies we use</h2>
            <div className="mt-4 overflow-x-auto rounded-xl border border-ps-border">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-ps-cream text-xs font-bold uppercase tracking-wider text-ps-navy">
                  <tr>
                    <th className="px-4 py-3">Cookie</th>
                    <th className="px-4 py-3">Type</th>
                    <th className="px-4 py-3">Purpose</th>
                    <th className="px-4 py-3">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  {cookieTable.map((row) => (
                    <tr key={row.name} className="border-t border-ps-border">
                      <td className="px-4 py-3 font-medium text-ps-navy">{row.name}</td>
                      <td className="px-4 py-3">{row.type}</td>
                      <td className="px-4 py-3">{row.purpose}</td>
                      <td className="px-4 py-3">{row.duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm leading-relaxed">
              If you enable optional analytics or marketing cookies in the future, we will update
              this table before those tools are activated.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-extrabold text-ps-navy">Managing your preferences</h2>
            <p className="mt-3 leading-relaxed">
              You can change your choices at any time. Use{" "}
              <CookieSettingsLink light /> or the link in our site footer. You can also clear cookies through your browser
              settings — doing so will reset your preferences and show the banner again.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-extrabold text-ps-navy">Questions</h2>
            <p className="mt-3 leading-relaxed">
              If you have questions about this policy, contact us at{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-semibold text-ps-green hover:underline"
              >
                {siteConfig.email}
              </a>
              . For general enquiries, visit our{" "}
              <Link href="/contact" className="font-semibold text-ps-green hover:underline">
                contact page
              </Link>
              . See also our{" "}
              <Link href="/privacy" className="font-semibold text-ps-green hover:underline">
                privacy policy
              </Link>{" "}
              and{" "}
              <Link href="/terms" className="font-semibold text-ps-green hover:underline">
                terms of use
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
