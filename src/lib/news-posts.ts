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
      "When Phamily Circle first shared the idea for Building Nations: Nurturing Creativity, we didn't need much convincing. It sounded like the kind of room Paradigm Shift was built for — young people, big ideas, honest conversations, and people who've actually walked the path standing up to share what they learned.",
      "The symposium is happening on Saturday, 15 August 2026 at ISSER, University of Ghana. It's a full day — 9:30 AM to 3:00 PM — and the lineup reflects something we care deeply about: creativity isn't separate from entrepreneurship or leadership. It's often the thing that gets someone started.",
      "You'll hear from Chef Samuel Nii Oku Noi, who has built Gurus International Social Organisation from a vision into real community work. Andrew Bulley brings a rare mix of banking, entertainment, and business leadership. Afronita — Danita Yeboah — has moved from dance stages to co-founding Afrostar Kids Academy. And Richard Selorm Bokor speaks to personal development and youth advocacy in a way that lands with people who are still figuring out their next step.",
      "For us at Paradigm Shift, this event is a natural extension of what we already do — showing up where young Ghanaians are gathering, encouraging them to think bigger, and connecting them to mentors and peers who make the journey feel possible.",
      "If you've been to one of our workshops before, you know the energy we're talking about. If you haven't, this is a good place to start. Come ready to listen, ask questions, and meet people who might change how you see your own path.",
      "Registration details and contact numbers are in the sidebar. Share the flyer with someone who needs a push — sometimes that's all it takes.",
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

  "community-workshop-series": {
    paragraphs: [
      "Last month we wrapped the first leg of our community workshop series across Accra — and honestly, the turnout surprised even us. Over 200 young people walked through the doors of sessions on leadership, public speaking, business basics, and the kind of practical planning that turns a good idea into something you can actually run.",
      "We didn't design these workshops for people who already had everything figured out. Most attendees came in with a side hustle, a dream, or a skill they weren't sure how to package. Some had never stood in front of a room and spoken about what they wanted to build. By the end of the day, several of them had.",
      "One moment that stuck with us: a young woman who sells food from home stood up during the Q&A and said, \"I've been doing this for three years but I've never treated it like a business.\" That sentence is why we do this work. Not to hand people a formula — but to give them the encouragement and tools to take themselves seriously.",
      "The sessions were practical. Pricing. Customer conversations. How to show up online without pretending to be someone you're not. How to find a mentor and actually use the relationship. We brought in people from our network who've built real ventures in Ghana — not textbook examples from somewhere else.",
      "We're not claiming everyone left with a registered company. That would be dishonest. But people left with clearer next steps, new contacts, and — maybe most importantly — the feeling that someone in the room believed they could do it.",
      "The series continues. If you missed the first round, there's more coming. Watch our events page or reach out — we'd rather meet you in person than have you read about it after the fact.",
    ],
  },

  "entrepreneurship-bootcamp-recap": {
    paragraphs: [
      "Our entrepreneurship bootcamp brought together young people from different parts of Accra and beyond — tailors, caterers, tech-curious students, market traders, and a few who simply showed up because a friend told them, \"You need to be in this room.\"",
      "We started the day the way we start most things: by listening. Before any slides or frameworks, we asked people what they were working on and what was holding them back. The answers were familiar. No capital. No mentor. No confidence. Fear of failing publicly. Not knowing how to price their work.",
      "The bootcamp wasn't a lecture. It was working sessions — small groups, real exercises, honest feedback. Participants mapped out simple business models, practiced pitching to each other, and talked through what the first 90 days of a venture actually looks like when you're starting with little money and a lot of heart.",
      "Kwame, who went through an earlier workshop and now runs a small tailoring shop in Kumasi, came back to share his story. That mattered. Young people hearing from someone who looks like them, speaks like them, and built something real — that's encouragement you can't fake.",
      "By the end of the week, several participants had refined a business name, tested a price, or connected with a peer they'll keep checking in with. That's the win for us. Not a headline number — but people who left standing taller than they arrived.",
      "This is the core of Paradigm Shift's entrepreneurship work. We show up, we equip, we encourage. And we stay connected after the event ends.",
    ],
  },

  "creativity-meets-enterprise": {
    paragraphs: [
      "Some of our best moments happen when creativity and enterprise meet in the same room — and our recent session on that theme was no exception.",
      "We partnered with creatives, small business owners, and young professionals for an afternoon that blurred the line between \"artist\" and \"entrepreneur.\" Because in Ghana, for many people, that line doesn't really exist. The dancer runs a class. The photographer edits on the side. The designer sells on Instagram between commissions. What they often lack isn't talent — it's structure, encouragement, and a community that takes their work seriously.",
      "The session opened with a simple question: What are you making, and who is it for? From there, conversations went deep. Branding on a zero budget. How to talk about your work without underselling it. When to say yes to an opportunity and when to walk away.",
      "Afronita's journey came up more than once — not as celebrity gossip, but as a case study in discipline, reinvestment, and building something that outlasts a single viral moment. People leaned in. You could feel it.",
      "We also made space for people who weren't ready to perform or pitch. Not everyone wants a microphone. Some people just need to sit in a room where ambition isn't treated as arrogance. We try to build that room every time.",
      "If creativity is part of your path — whether you're a painter, a content creator, a caterer with an eye for presentation, or a student with ideas you haven't said out loud yet — this is the kind of space we're trying to create. Come as you are. Leave with something concrete.",
    ],
  },

  "encouragement-in-action": {
    paragraphs: [
      "Not every Paradigm Shift gathering ends with a business plan — and that's intentional.",
      "Our recent community session was built around encouragement: showing up for people who are tired, uncertain, or carrying an idea they've been sitting on for months because nobody told them it was worth trying.",
      "We heard from participants who almost didn't come. Someone said they registered at midnight, cancelled twice, and finally walked in because their sister said, \"Just go once.\" She left with two new contacts and a notebook full of notes she still reads on hard days.",
      "The programme mixed short talks with open discussion. No pressure to be impressive. No performance. Just honest stories from people who've failed, restarted, and kept going — and space for others to admit where they are without shame.",
      "Richard Selorm Bokor's work on personal development came up naturally in conversation. So did everyday struggles: family expectations, money stress, the fear of letting people down. These aren't abstract topics. They're the real reasons talented people stall.",
      "We believe encouragement is not soft work. It's often the difference between someone who tries and someone who never starts. That session reminded us why Paradigm Shift exists — not to perform charity from a distance, but to stand close enough that people feel seen.",
      "More sessions like this are coming. If you know someone who needs a room like that, send them our way. Sometimes one afternoon changes the direction of a year.",
    ],
  },
};

export function getNewsPostBody(slug: string): NewsPostBody | undefined {
  return newsPostBodies[slug];
}

export function getDefaultPostBody(excerpt: string): NewsPostBody {
  return {
    paragraphs: [
      excerpt,
      "We're working on a fuller write-up for this story. In the meantime, reach out to us if you'd like to learn more about what we're doing in communities across Ghana — or join us at an upcoming event.",
    ],
  };
}
