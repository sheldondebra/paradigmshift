export type InvolvementTab = "volunteer" | "donate" | "partner" | "events";

export const involvementTabs: { id: InvolvementTab; label: string; description: string }[] = [
  {
    id: "volunteer",
    label: "Volunteer",
    description: "Share your time and skills at workshops, outreach events, and community projects.",
  },
  {
    id: "donate",
    label: "Donate",
    description: "Fund scholarships, infrastructure, and health programs across Ghana.",
  },
  {
    id: "partner",
    label: "Partner",
    description: "Collaborate as an organization, business, or institutional sponsor.",
  },
  {
    id: "events",
    label: "Events",
    description: "Register for upcoming workshops, mentorship sessions, and outreach.",
  },
];

export const upcomingEvents = [
  {
    id: "building-nations-nurturing-creativity",
    title: "Building Nations: Nurturing Creativity",
    date: "Saturday, 15 August 2026",
    time: "9:30 AM – 3:00 PM",
    location: "ISSER, University of Ghana, Accra",
    category: "Programs",
    spotsLeft: 80,
    capacity: 150,
    description:
      "A Phamily Circle symposium in partnership with Paradigm Shift — exploring creativity, entrepreneurship, and youth development with leading voices from Ghana's arts and social impact sectors.",
  },
  {
    id: "leadership-workshop-accra",
    title: "Youth Leadership Workshop",
    date: "Saturday, 15 March 2025",
    time: "10:00 AM – 3:00 PM",
    location: "Accra, Ghana",
    category: "Mentorship",
    spotsLeft: 24,
    capacity: 40,
    description:
      "A hands-on session on leadership, public speaking, and personal development for young professionals.",
  },
  {
    id: "health-outreach-kumasi",
    title: "Community Health Outreach",
    date: "Saturday, 29 March 2025",
    time: "8:00 AM – 2:00 PM",
    location: "Kumasi, Ghana",
    category: "Health",
    spotsLeft: 12,
    capacity: 30,
    description:
      "Volunteer at mobile health screenings, wellness education, and sanitation awareness activities.",
  },
  {
    id: "entrepreneurship-bootcamp",
    title: "Entrepreneurship Bootcamp",
    date: "Saturday, 12 April 2025",
    time: "9:00 AM – 4:00 PM",
    location: "Accra, Ghana",
    category: "Education",
    spotsLeft: 18,
    capacity: 35,
    description:
      "Learn business fundamentals, pitch skills, and connect with mentors building sustainable livelihoods.",
  },
  {
    id: "scholarship-info-session",
    title: "Scholarship Info Session",
    date: "Saturday, 26 April 2025",
    time: "2:00 PM – 5:00 PM",
    location: "Online (Zoom)",
    category: "Education",
    spotsLeft: 50,
    capacity: 100,
    description:
      "Learn about eligibility, application deadlines, and support available for students in underserved communities.",
  },
];

export const donationAmounts = [50, 100, 250, 500, 1000] as const;

export const donationImpacts: Record<number, string> = {
  50: "School supplies for 2 students",
  100: "One month of mentorship for a youth participant",
  250: "Health screening supplies for a community clinic day",
  500: "Partial scholarship support for one student",
  1000: "Clean water access materials for a rural community",
};

export const volunteerAreas = [
  "Workshops & Training",
  "Health Outreach",
  "Infrastructure Projects",
  "Scholarship Programs",
  "Event Support",
  "Administrative Support",
];

export const volunteerAvailability = [
  "Weekday mornings",
  "Weekday evenings",
  "Weekends",
  "Flexible / as needed",
];

export const partnershipTypes = [
  "Corporate sponsorship",
  "In-kind donation",
  "Program collaboration",
  "Media & communications",
  "Technical / pro-bono services",
  "Other",
];

export const getInvolvedFaq = [
  {
    question: "Do I need prior experience to volunteer?",
    answer:
      "No. We welcome volunteers of all backgrounds. We'll match you with opportunities based on your skills, interests, and availability.",
  },
  {
    question: "How do donations reach communities?",
    answer:
      "Funds go directly toward scholarships, infrastructure projects, health outreach, and mentorship programs. We provide updates on how your contribution is used.",
  },
  {
    question: "Can organizations outside Ghana partner with you?",
    answer:
      "Yes. We collaborate with local and international partners who share our mission. Submit a partnership inquiry and our team will follow up.",
  },
  {
    question: "What happens after I register for an event?",
    answer:
      "You'll receive a confirmation email with event details, location or link, and what to bring. Our team may contact you with additional information.",
  },
  {
    question: "Is online payment available?",
    answer:
      "After you submit a donation pledge, our team will contact you with secure payment options including mobile money and bank transfer.",
  },
];

export function isValidTab(tab: string | undefined): tab is InvolvementTab {
  return tab === "volunteer" || tab === "donate" || tab === "partner" || tab === "events";
}

export function generateReferenceId(prefix: string) {
  const stamp = Date.now().toString(36).toUpperCase();
  const rand = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `${prefix}-${stamp}-${rand}`;
}
