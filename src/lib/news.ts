export const newsCategories = [
  "All",
  "Programs",
  "Entrepreneurship",
  "Community",
] as const;

export type NewsCategory = (typeof newsCategories)[number];

export type NewsItem = {
  slug: string;
  title: string;
  date: string;
  publishedAt: string;
  excerpt: string;
  category: Exclude<NewsCategory, "All">;
  image: string;
  featured?: boolean;
};

export const newsItems: NewsItem[] = [
  {
    slug: "building-nations-nurturing-creativity",
    title: "Building Nations: Nurturing Creativity Symposium",
    date: "July 2026",
    publishedAt: "2026-07-01",
    excerpt:
      "Paradigm Shift joins Phamily Circle for a full-day symposium at ISSER, University of Ghana — creativity, entrepreneurship, and voices worth hearing.",
    category: "Programs",
    image: "/images/phamily-circle-building-nations-2026.png",
    featured: true,
  },
  {
    slug: "community-workshop-series",
    title: "Community Workshop Series Reaches 200+ Young Professionals",
    date: "March 2025",
    publishedAt: "2025-03-15",
    excerpt:
      "Leadership, public speaking, and business basics — our Accra workshop series brought practical skills and real encouragement to over 200 participants.",
    category: "Programs",
    image: "/images/asset_21-7771a1e8-12e7-4e71-bf80-50f42308f31e.png",
  },
  {
    slug: "entrepreneurship-bootcamp-recap",
    title: "Entrepreneurship Bootcamp: From Ideas to Action",
    date: "January 2025",
    publishedAt: "2025-01-20",
    excerpt:
      "A week of working sessions, peer feedback, and honest conversations — helping young entrepreneurs take their first real steps in Accra and beyond.",
    category: "Entrepreneurship",
    image: "/images/gallery-paradigm-shift-speaker-isser.png",
  },
  {
    slug: "creativity-meets-enterprise",
    title: "When Creativity Meets Enterprise",
    date: "December 2024",
    publishedAt: "2024-12-10",
    excerpt:
      "Creatives and small business owners came together for an afternoon on branding, pricing, and building something that lasts beyond a single moment.",
    category: "Entrepreneurship",
    image: "/images/asset_22-d48bb2c5-25bb-44fa-b608-dc7cc28a775a.png",
  },
  {
    slug: "encouragement-in-action",
    title: "Encouragement in Action: A Community Session",
    date: "November 2024",
    publishedAt: "2024-11-18",
    excerpt:
      "Not every gathering needs a pitch deck. Our latest session created space for honest stories, open conversation, and the push people needed to keep going.",
    category: "Community",
    image: "/images/gallery-workshop-attendee-notes.png",
  },
];

export const categoryStyles: Record<
  Exclude<NewsCategory, "All">,
  { badge: string; accent: string }
> = {
  Programs: {
    badge: "bg-ps-green/15 text-ps-green",
    accent: "border-ps-green",
  },
  Entrepreneurship: {
    badge: "bg-ps-gold/20 text-ps-gold-dark",
    accent: "border-ps-gold",
  },
  Community: {
    badge: "bg-ps-navy/10 text-ps-navy",
    accent: "border-ps-navy",
  },
};

export function getNewsBySlug(slug: string) {
  return newsItems.find((item) => item.slug === slug);
}

export function getAllNewsSlugs() {
  return newsItems.map((item) => item.slug);
}

export const impactHighlights = [
  { value: "200+", label: "Young people reached through workshops & mentorship" },
  { value: "4", label: "Featured speakers at our flagship symposium" },
  { value: "3", label: "Core pillars — entrepreneurship, encouragement, community" },
  { value: "Accra", label: "Home base — with impact growing across Ghana" },
];
