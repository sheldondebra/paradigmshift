import type { CollaborativePartner } from "@/lib/content";
import { collaborativePartners, parentOrganization, siteConfig } from "@/lib/content";

function joinPartnerList(partners: CollaborativePartner[]) {
  if (partners.length === 0) return null;
  if (partners.length === 1) return partners[0].name;

  const names = partners.map((partner) => partner.name);
  return `${names.slice(0, -1).join(", ")}, and ${names[names.length - 1]}`;
}

function PartnerNames({
  linkClassName = "font-medium text-ps-green hover:underline",
}: {
  linkClassName?: string;
}) {
  return (
    <>
      {collaborativePartners.map((partner, index) => {
        const isLast = index === collaborativePartners.length - 1;
        const isSecondLast = index === collaborativePartners.length - 2;
        const separator = isLast ? "" : isSecondLast ? ", and " : ", ";

        const name = partner.href ? (
          <a
            key={partner.name}
            href={partner.href}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClassName}
          >
            {partner.name}
          </a>
        ) : (
          <span key={partner.name} className="font-medium">
            {partner.name}
          </span>
        );

        return (
          <span key={partner.name}>
            {name}
            {separator}
          </span>
        );
      })}
    </>
  );
}

type PartnersNetworkProps = {
  variant?: "light" | "dark" | "cream";
  showDescription?: boolean;
};

export function PartnersNetwork({
  variant = "light",
  showDescription = true,
}: PartnersNetworkProps) {
  const isDark = variant === "dark";
  const textClass = isDark ? "text-white/70" : "text-ps-muted";
  const nameClass = isDark ? "text-white" : "text-ps-navy";

  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className={`text-base leading-relaxed ${textClass}`}>
        {siteConfig.name} is part of{" "}
        <span className={`font-semibold ${nameClass}`}>{parentOrganization.name}</span>.
      </p>
      {showDescription && (
        <p className={`mt-3 text-sm leading-relaxed ${textClass}`}>
          {parentOrganization.description}
        </p>
      )}
      {collaborativePartners.length > 0 && (
        <p className={`mt-5 text-sm leading-relaxed ${textClass}`}>
          We run programmes and events with <PartnerNames />.
        </p>
      )}
    </div>
  );
}

export function FooterNetwork() {
  return (
    <div className="max-w-2xl">
      <p className="text-sm leading-relaxed text-white/55">
        {siteConfig.name} is part of{" "}
        <span className="font-medium text-white/80">{parentOrganization.name}</span>.
      </p>
      {collaborativePartners.length > 0 && (
        <p className="mt-2 text-sm leading-relaxed text-white/55">
          Programmes and events with{" "}
          <PartnerNames linkClassName="font-medium text-white/80 underline-offset-2 hover:text-ps-gold hover:underline" />
          .
        </p>
      )}
    </div>
  );
}

/** @deprecated Use FooterNetwork or PartnerNames inline instead */
export function CollaborativePartnerList({ dark = false }: { dark?: boolean }) {
  const badgeClass = dark
    ? "rounded-lg border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold text-white/70 transition-colors hover:border-ps-gold hover:text-ps-gold"
    : "rounded-lg border border-ps-border bg-ps-cream px-5 py-2.5 text-sm font-semibold text-ps-navy";

  return (
    <>
      {collaborativePartners.map((partner) =>
        partner.href ? (
          <a
            key={partner.name}
            href={partner.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${badgeClass} transition-colors hover:border-ps-gold hover:text-ps-gold-dark`}
          >
            {partner.name}
          </a>
        ) : (
          <span key={partner.name} className={badgeClass}>
            {partner.name}
          </span>
        ),
      )}
    </>
  );
}

export { joinPartnerList };
