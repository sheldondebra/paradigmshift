export const newsCategories = [
  "All",
  "Programs",
  "Infrastructure",
  "Education",
  "Health",
] as const;

export type NewsCategory = (typeof newsCategories)[number];

export type NewsItem = {
  slug: string;
  title: string;
  date: string;
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
    excerpt:
      "Join Paradigm Shift and Phamily Circle for a full-day symposium on nurturing creativity — featuring Chef Samuel Nii Oku Noi, Andrew Bulley, Afronita, and Richard Selorm Bokor at ISSER, University of Ghana.",
    category: "Programs",
    image: "/images/phamily-circle-building-nations-2026.png",
    featured: true,
  },
  {
    slug: "community-workshop-series",
    title: "Community Workshop Series Launched",
    date: "March 2025",
    excerpt:
      "Paradigm Shift kicked off a new series of leadership and entrepreneurship workshops reaching over 200 young professionals across Accra.",
    category: "Programs",
    image: "/images/asset_21-7771a1e8-12e7-4e71-bf80-50f42308f31e.png",
  },
  {
    slug: "clean-water-initiative",
    title: "Clean Water Initiative Completed",
    date: "January 2025",
    excerpt:
      "Our latest infrastructure project brought safe drinking water to a rural community, benefiting over 300 families for the first time.",
    category: "Infrastructure",
    image: "/images/asset_23-86cc186c-7798-4e16-af91-d9bd3413f2cc.png",
  },
  {
    slug: "scholarship-recipients-excel",
    title: "Scholarship Recipients Excel",
    date: "December 2024",
    excerpt:
      "Fifteen scholarship students achieved top academic honors this year, with three now serving as peer mentors in their communities.",
    category: "Education",
    image: "/images/asset_22-d48bb2c5-25bb-44fa-b608-dc7cc28a775a.png",
  },
  {
    slug: "health-outreach-underserved",
    title: "Health Outreach in Underserved Areas",
    date: "November 2024",
    excerpt:
      "Mobile health clinics reached remote villages with free screenings, vaccinations, and wellness education for hundreds of residents.",
    category: "Health",
    image: "/images/asset_1-fe1f7203-9615-443e-8300-7c2ae61e24fa.png",
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
  Infrastructure: {
    badge: "bg-ps-navy/10 text-ps-navy",
    accent: "border-ps-navy",
  },
  Education: {
    badge: "bg-ps-gold/20 text-ps-gold-dark",
    accent: "border-ps-gold",
  },
  Health: {
    badge: "bg-red-100 text-red-700",
    accent: "border-red-400",
  },
};

export function getNewsBySlug(slug: string) {
  return newsItems.find((item) => item.slug === slug);
}

export function getAllNewsSlugs() {
  return newsItems.map((item) => item.slug);
}

export const impactHighlights = [
  { value: "200+", label: "Lives touched through workshops & mentorship" },
  { value: "300+", label: "Families with safer water and healthier homes" },
  { value: "15", label: "Students whose futures were kept alive by scholarships" },
  { value: "4", label: "Regions where communities are shifting forward" },
];
