export type NewsSpeaker = {
  name: string;
  role: string;
  featured?: boolean;
};

export type NewsEventDetails = {
  organizer: string;
  theme: string;
  topic: string;
  date: string;
  time: string;
  venue: string;
  phones: string[];
};

export type NewsPostBody = {
  paragraphs: string[];
  speakers?: NewsSpeaker[];
  eventDetails?: NewsEventDetails;
};

export const newsPostBodies: Record<string, NewsPostBody> = {
  "building-nations-nurturing-creativity": {
    paragraphs: [
      "Paradigm Shift is proud to join our partner Phamily Circle for an upcoming symposium that puts creativity at the centre of nation-building. Under the theme Building Nations, this gathering explores how art, entrepreneurship, and personal development can unlock potential in Ghana's next generation.",
      "Creativity is not a luxury — it is a pathway out of poverty, a bridge to leadership, and a language communities use to tell their own stories. From dance and entertainment to social enterprise and youth coaching, the speakers at this event represent the many ways young Ghanaians are shaping their futures.",
      "Whether you are a student, creative professional, youth advocate, or community leader, this is an opportunity to learn, connect, and be inspired by voices who have turned passion into purpose.",
      "Registration and attendance details are below. We encourage everyone in our network to save the date and spread the word.",
    ],
    speakers: [
      {
        name: "Chef Samuel Nii Oku Noi",
        role: "Founder, Gurus International Social Organisation",
        featured: true,
      },
      {
        name: "Mr. Andrew Bulley",
        role: "CEO, Trinity Gold Entertainment · Banker · Actor",
      },
      {
        name: "Danita Yeboah (Afronita)",
        role: "Dance Artiste · Co-founder, Afrostar Kids Academy",
      },
      {
        name: "Richard Selorm Bokor",
        role: "Author · Personal Development Coach · Youth Advocate",
      },
    ],
    eventDetails: {
      organizer: "Phamily Circle",
      theme: "Building Nations",
      topic: "Nurturing Creativity",
      date: "Saturday, 15 August 2026",
      time: "9:30 AM – 3:00 PM",
      venue:
        "Institute of Statistical, Social and Economic Research (ISSER), University of Ghana",
      phones: ["0244934410", "0501428201", "0547000267"],
    },
  },
};

export function getNewsPostBody(slug: string): NewsPostBody | undefined {
  return newsPostBodies[slug];
}

export function getDefaultPostBody(excerpt: string): NewsPostBody {
  return { paragraphs: [excerpt] };
}
