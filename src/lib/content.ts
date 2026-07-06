export const siteConfig = {
  name: "Paradigm Shift",
  tagline: "Unlocking Potential. Empowering Communities.",
  slogan: "Together, We Make the Shift.",
  description:
    "Paradigm Shift is a Ghana-based non-profit under Phamily Circle, empowering young people through entrepreneurship workshops, mentorship, and community encouragement across Accra and beyond.",
  email: "hello@paradigmshiftgh.com",
  phone: "059 392 4521",
  location: "Accra, Ghana",
  social: {
    facebook: "https://www.facebook.com/reel/852343104590291",
    instagram: "https://instagram.com",
    youtube: "https://youtube.com",
  },
};

export const siteFlyer = {
  src: "/images/phamily-circle-building-nations-2026.png",
  alt: "Building Nations: Nurturing Creativity — Phamily Circle event flyer",
  eyebrow: "Upcoming event",
  title: "Building Nations: Nurturing Creativity",
  date: "Saturday, 16 August 2026",
  time: "9:30 AM – 3:00 PM",
  venue: "ISSER, University of Ghana, Legon",
  href: "/news/building-nations-nurturing-creativity",
  /** Popup is hidden from 17 August 2026 onward */
  activeUntil: "2026-08-16",
};

export function isSiteFlyerActive(): boolean {
  const end = new Date(`${siteFlyer.activeUntil}T23:59:59.999`);
  return Date.now() <= end.getTime();
}

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/news", label: "News & Impact" },
  { href: "/partnership", label: "Partnership" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/contact", label: "Contact Us" },
];

export const focusAreas = [
  {
    title: "Education & Scholarships",
    description:
      "We provide scholarships, learning resources, and academic support to students in underserved communities, helping them stay in school, excel in their studies, and unlock new opportunities for a brighter future.",
    lifeImpact:
      "Keeps students in school, restores hope in families, and creates role models who lift up the next generation.",
    icon: "book",
  },
  {
    title: "Mentorship & Training",
    description:
      "We connect youth and aspiring entrepreneurs with mentors who guide them in leadership, personal growth, and business skills, equipping them with the confidence and knowledge to build sustainable livelihoods.",
    lifeImpact:
      "Turns raw potential into income, leadership, and jobs — helping young people support themselves and their communities.",
    icon: "users",
  },
  {
    title: "Infrastructure Development",
    description:
      "We partner with communities to develop essential facilities such as clean water systems, electricity, safe housing, and digital access, creating the foundation for social and economic growth.",
    lifeImpact:
      "Gives families safer, healthier daily lives — fewer sick days, more time for work and school, and dignity restored.",
    icon: "building",
  },
  {
    title: "Health & Community Outreach",
    description:
      "We bring healthcare services, sanitation education, and wellness programs directly to vulnerable areas, ensuring that everyone has access to the care and knowledge they need to live healthy lives.",
    lifeImpact:
      "Brings care to people who are often left behind — protecting health, preventing crisis, and keeping families together.",
    icon: "heart",
  },
];

export const visionStatement =
  "To create empowered, thriving communities across Ghana by bridging the gap in education, infrastructure, healthcare, and economic opportunity — ensuring every individual has the chance to reach their full potential.";

export const missionStatement =
  "To drive sustainable development in underserved communities through mentorship, skills training, infrastructure projects, health outreach, and strategic partnerships that inspire change and transform lives.";

export const involvementOptions = [
  {
    title: "Volunteer",
    description:
      "Share your time and skills at workshops, outreach events, and community projects. Every hour makes a difference.",
    cta: "Join as Volunteer",
  },
  {
    title: "Donate",
    description:
      "Your financial support funds scholarships, infrastructure, and health programs that transform lives across Ghana.",
    cta: "Make a Donation",
  },
  {
    title: "Partner",
    description:
      "Organizations and businesses can amplify impact through strategic partnerships, sponsorships, and shared resources.",
    cta: "Become a Partner",
  },
];

export const parentOrganization = {
  name: "Phamily Circle",
  description:
    "Phamily Circle is the group behind Paradigm Shift — where our volunteers, events, and community work come together.",
};

/** Organisations that collaborate with Paradigm Shift on programmes and events */
export type CollaborativePartner = {
  name: string;
  href?: string;
};

export const collaborativePartners: CollaborativePartner[] = [
  { name: "360 Marketing" },
  { name: "FBN Fab by Nice" },
  { name: "TEC UNIT", href: "https://www.tecunitgh.com" },
];

/** @deprecated Use parentOrganization + collaborativePartners */
export const partners = collaborativePartners.map((partner) => partner.name);
