export type ImpactCategory = "Education" | "Mentorship" | "Infrastructure" | "Health";

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
  title: "Lives Changed, One Shift at a Time",
  description:
    "Behind every program is a person — a student staying in school, a parent providing for their family, a community gaining dignity and opportunity. This is what our work looks like in real lives.",
};

export const lifeImpactStories: LifeImpactStory[] = [
  {
    id: "ama-scholarship",
    name: "Ama",
    role: "Scholarship Student",
    location: "Accra",
    category: "Education",
    quote:
      "I thought my education would end after JHS. The scholarship didn't just pay fees — it gave me a future I didn't think was possible.",
    before:
      "Ama's family could not afford senior high school fees. She was at risk of dropping out despite strong academic performance.",
    after:
      "She completed SHS with honours, received university guidance through our program, and now mentors younger girls in her neighbourhood.",
    image: "/images/asset_22-d48bb2c5-25bb-44fa-b608-dc7cc28a775a.png",
  },
  {
    id: "kwame-entrepreneur",
    name: "Kwame",
    role: "Workshop Graduate & Small Business Owner",
    location: "Kumasi",
    category: "Mentorship",
    quote:
      "The mentorship workshop taught me how to turn an idea into a plan. Today I employ two people from my community.",
    before:
      "Kwame had skills and drive but no access to business training, mentorship, or startup capital.",
    after:
      "After our entrepreneurship bootcamp, he launched a tailoring venture that now supports his family and creates local jobs.",
    image: "/images/asset_21-7771a1e8-12e7-4e71-bf80-50f42308f31e.png",
  },
  {
    id: "mensah-family-water",
    name: "The Mensah Family",
    role: "Community Residents",
    location: "Eastern Region",
    category: "Infrastructure",
    quote:
      "Our children used to walk hours for water before school. Now they arrive on time, healthy, and ready to learn.",
    before:
      "Over 300 families relied on an unsafe water source, leading to illness, missed school days, and lost income.",
    after:
      "A clean water system installed through our infrastructure project gave the community reliable access and improved daily life for every household.",
    image: "/images/asset_23-86cc186c-7798-4e16-af91-d9bd3413f2cc.png",
  },
  {
    id: "akosua-health",
    name: "Akosua",
    role: "Health Outreach Participant",
    location: "Northern Ghana",
    category: "Health",
    quote:
      "The mobile clinic came to our village when we had nowhere else to go. That screening changed the course of my health.",
    before:
      "Akosua had limited access to healthcare and no awareness of preventive screenings available in her area.",
    after:
      "Our outreach team connected her to follow-up care and wellness education, improving her health and her ability to care for her children.",
    image: "/images/asset_1-fe1f7203-9615-443e-8300-7c2ae61e24fa.png",
  },
];

export const lifeChangeOutcomes = [
  {
    title: "Education opens doors",
    description:
      "Students stay in school, gain confidence, and become role models — breaking cycles of limited opportunity in their families and communities.",
    category: "Education" as const,
  },
  {
    title: "Mentorship builds livelihoods",
    description:
      "Young people move from uncertainty to purpose — starting businesses, leading initiatives, and creating economic ripple effects around them.",
    category: "Mentorship" as const,
  },
  {
    title: "Infrastructure restores dignity",
    description:
      "Clean water, safe facilities, and basic infrastructure mean healthier families, more productive days, and communities positioned to grow.",
    category: "Infrastructure" as const,
  },
  {
    title: "Health outreach saves futures",
    description:
      "Preventive care and wellness education reach people who would otherwise go without — protecting lives and strengthening entire communities.",
    category: "Health" as const,
  },
];

export const categoryColors: Record<
  ImpactCategory,
  { badge: string; border: string }
> = {
  Education: { badge: "bg-ps-gold/20 text-ps-gold-dark", border: "border-ps-gold" },
  Mentorship: { badge: "bg-ps-green/15 text-ps-green", border: "border-ps-green" },
  Infrastructure: { badge: "bg-ps-navy/10 text-ps-navy", border: "border-ps-navy" },
  Health: { badge: "bg-red-100 text-red-700", border: "border-red-400" },
};
