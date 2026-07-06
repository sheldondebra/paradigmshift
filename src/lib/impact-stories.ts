export type ImpactCategory = "Entrepreneurship" | "Encouragement";

export type LifeImpactStory = {
  id: string;
  name: string;
  role: string;
  location: string;
  category: ImpactCategory;
  quote: string;
  before: string;
  after: string;
  image: string;
};

export const lifeImpactIntro = {
  title: "Entrepreneurship & Encouragement",
  description:
    "This is where our work shows up most clearly — equipping young entrepreneurs with skills, mentorship, and practical support to build something real, and showing up with the encouragement people need to take that first step.",
};

export const lifeImpactStories: LifeImpactStory[] = [
  {
    id: "kwame-entrepreneur",
    name: "Kwame",
    role: "Workshop Graduate & Small Business Owner",
    location: "Kumasi",
    category: "Entrepreneurship",
    quote:
      "The workshop didn't just teach business skills — it taught me I could actually do this. Today I employ two people from my community.",
    before:
      "Kwame had talent and ideas but no training, no mentor, and no clear path from hustle to a real business.",
    after:
      "After our entrepreneurship bootcamp, he launched a tailoring venture that supports his family and creates jobs for others.",
    image: "/images/asset_21-7771a1e8-12e7-4e71-bf80-50f42308f31e.png",
  },
  {
    id: "esi-encouragement",
    name: "Esi",
    role: "Youth Programme Participant",
    location: "Accra",
    category: "Encouragement",
    quote:
      "Before Paradigm Shift, I kept my ideas quiet. The encouragement I got in that room made me speak up — and that changed everything.",
    before:
      "Esi had creative ideas and leadership potential but lacked confidence and a support network to help her take the next step.",
    after:
      "Through our mentorship sessions and community events, she found her voice, joined a leadership cohort, and is now building a social enterprise with peers she met through the programme.",
    image: "/images/gallery-workshop-attendee-notes.png",
  },
  {
    id: "abena-catering",
    name: "Abena",
    role: "Aspiring Entrepreneur",
    location: "Accra",
    category: "Entrepreneurship",
    quote:
      "I had been selling food informally for years. The encouragement and business guidance I got helped me treat it like a real venture — not just survival.",
    before:
      "Abena ran a small catering side hustle with no branding, pricing strategy, or plan to grow beyond daily sales.",
    after:
      "After connecting with Paradigm Shift at a community workshop, she registered her business, improved her packaging, and started taking event orders she never would have pursued before.",
    image: "/images/asset_22-d48bb2c5-25bb-44fa-b608-dc7cc28a775a.png",
  },
];

export const lifeChangeOutcomes = [
  {
    title: "Entrepreneurship builds livelihoods",
    description:
      "Young people turn ideas into income — starting businesses, creating jobs, and building economic momentum in their communities.",
    category: "Entrepreneurship" as const,
  },
  {
    title: "Encouragement changes minds",
    description:
      "Sometimes the most powerful thing we offer is belief — the push someone needs to start a venture, speak up, or step into leadership.",
    category: "Encouragement" as const,
  },
];

export const categoryColors: Record<
  ImpactCategory,
  { badge: string; border: string }
> = {
  Entrepreneurship: { badge: "bg-ps-green/15 text-ps-green", border: "border-ps-green" },
  Encouragement: { badge: "bg-ps-gold/20 text-ps-gold-dark", border: "border-ps-gold" },
};
