import type { Metadata } from "next";
import { siteConfig } from "./content";

export const siteUrl = "https://paradigmshiftgh.com";

export const defaultOgImage = "/images/gallery-paradigm-shift-speaker-isser.png";

export const defaultKeywords = [
  "Paradigm Shift Ghana",
  "Paradigm Shift NGO",
  "youth entrepreneurship Ghana",
  "community workshops Accra",
  "Phamily Circle",
  "non-profit Ghana",
  "mentorship Ghana",
  "volunteer Ghana",
  "sponsor community events Ghana",
];

type PageMetadataOptions = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  noIndex?: boolean;
};

export function createPageMetadata({
  title,
  description,
  path = "",
  image = defaultOgImage,
  type = "website",
  publishedTime,
  noIndex = false,
}: PageMetadataOptions): Metadata {
  const url = `${siteUrl}${path}`;

  return {
    title,
    description,
    keywords: defaultKeywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_GH",
      type,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} — ${title}`,
        },
      ],
      ...(publishedTime && type === "article"
        ? { publishedTime }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: siteConfig.name,
    url: siteUrl,
    logo: `${siteUrl}/images/paradigm-shift-logo.png`,
    description: siteConfig.description,
    slogan: siteConfig.slogan,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Accra",
      addressCountry: "GH",
    },
    parentOrganization: {
      "@type": "Organization",
      name: "Phamily Circle",
    },
    sameAs: [
      siteConfig.social.facebook,
      siteConfig.social.instagram,
      siteConfig.social.youtube,
    ].filter(Boolean),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteUrl,
    description: siteConfig.description,
    inLanguage: "en-GH",
    publisher: {
      "@type": "NGO",
      name: siteConfig.name,
      url: siteUrl,
    },
  };
}

export function articleJsonLd({
  title,
  description,
  path,
  image,
  datePublished,
}: {
  title: string;
  description: string;
  path: string;
  image: string;
  datePublished: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: `${siteUrl}${image}`,
    datePublished,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/images/paradigm-shift-logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}${path}`,
    },
  };
}
