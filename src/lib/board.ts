export type BoardProfile = {
  id: string;
  name: string;
  knownAs?: string;
  role: string;
  image: string;
  width: number;
  height: number;
  quote?: string;
  paragraphs: string[];
};

export const boardProfiles: BoardProfile[] = [
  {
    id: "benjamin-essien",
    name: "Benjamin Essien",
    role: "Board Chairman",
    image: "/images/board/benjamin-essien.png",
    width: 682,
    height: 1024,
    quote:
      "As far as it depends on you, humanity is not and should not be a lost cause.",
    paragraphs: [
      "Benjamin Essien is the Founder and Board Chairman of Paradigm Shift, bringing a blend of strategic vision, legal training, and deep commitment to community-centered development. With experience in policy analysis and organizational leadership, he guides the Board in setting mission-aligned priorities, strengthening accountability, and ensuring that the organization’s work delivers measurable impact across Ghana.",
      "Benjamin’s leadership is rooted in a belief that sustainable change comes from empowering people and building institutions that reflect integrity, transparency, and compassion. He works closely with fellow board members and executive leadership to expand partnerships, steward resources responsibly, and champion initiatives that advance education, opportunity, and social equity.",
      "Beyond his role as Chair, Benjamin is recognized for his thoughtful approach to problem-solving, his advocacy for ethical leadership, and his dedication to strengthening nonprofit systems that uplift communities. His commitment to service continues to shape the organization’s direction and inspires its mission.",
      "He holds a BA in Business Administration, an MBA in Finance, and a JD, and is a Licensed Investment Advisor. He likes watching and playing football and is a die-hard Chelsea Football Club fan.",
    ],
  },
  {
    id: "maame-adofoah-yamoah",
    name: "Maame Adofoah Yamoah",
    role: "Board Secretary",
    image: "/images/board/maame-adofoah-yamoah.jpg",
    width: 734,
    height: 1024,
    paragraphs: [
      "Maame Adofoah Yamoah is currently pursuing a Ph.D. in Hispanic Linguistics. She is genuinely passionate about languages, human excellence, and the application of knowledge for effective development.",
      "Her journey began in a modest home, where she watched her parents make an honest living through small-scale commerce. From them, she learned that hard work is not always glamorous, but it is deeply valuable. She saw the importance of perseverance, resourcefulness, integrity, and treating people with respect. Their example taught her to appreciate every opportunity, make the most of what is available, and remain resilient when circumstances change. Most importantly, it shaped her belief that no matter where we begin, there is always room to learn, grow, adapt, and become better.",
      "Professionally, her experiences have exposed her to diverse environments, responsibilities, and people, including experiences in education, business, and professional settings. Each chapter has broadened her perspective and strengthened her ability to communicate, collaborate, adapt, and take on new challenges. She believes that meaningful professional growth is not defined by a single role or achievement, but by the willingness to remain curious and continually develop. These experiences have reinforced her belief in lifelong learning and her commitment to acquiring the knowledge, skills, and perspectives needed to contribute meaningfully and embrace new opportunities.",
      "Today, she is focused on continuing to grow as a professional and as a person, while remaining open to the opportunities and lessons that each new experience brings. She is intentional about expanding her knowledge, developing relevant skills, and staying adaptable in a world that is constantly changing. Maame’s goal extends beyond simply achieving personal success. She aims to use what she has learned, and continues to learn, to contribute meaningfully to the lives of others. She hopes to create value, share knowledge, support growth, and make a positive difference wherever her abilities and opportunities allow.",
      "Maame enjoys knitting, cross-stitching, discovering practical household and lifestyle ideas, and, more recently, gardening. She finds joy in learning things simply because they are useful, interesting, or creative. Gardening has taught her to appreciate patience, consistency, and the quiet satisfaction of watching something grow with care. These interests have given her space to slow down, be present, and enjoy the simple things in life. They also remind her that learning does not only happen in classrooms or workplaces. It is part of everyday life and an ongoing part of who she is.",
    ],
  },
  {
    id: "rev-patrick-duah",
    name: "Rev. Patrick Duah",
    knownAs: "Rev. Pato",
    role: "Minister of the Gospel",
    image: "/images/board/rev-patrick-duah.jpg",
    width: 726,
    height: 1024,
    paragraphs: [
      "Rev. Patrick Duah (Rev. Pato) is a Minister of the Gospel in the Presbyterian Church of Ghana, based in Accra. A dedicated pastor and communicator, Rev. Duah is widely recognized for his engaging preaching style, his heart for young people, and his commitment to building a Christ-centered, purpose-driven generation. His ministry focuses on faith formation, youth empowerment, leadership development, and holistic Christian living.",
      "He is the founder and host of Bigger Agenda, a flagship youth and young adults’ movement under the Nantomah Memorial Congregation that has become a platform for spiritual revival, mentorship, and social impact. Through Bigger Agenda, he has impacted hundreds of young professionals and students, equipping them to live out their faith boldly in their spheres of influence.",
      "Rev. Pato is passionate about bridging tradition and relevance — upholding the rich heritage of the Presbyterian Church of Ghana while making the gospel accessible and applicable to contemporary culture. His leadership is marked by excellence, integrity, compassion, and a strong sense of mission.",
      "Beyond the pulpit, he is a Sales and Marketing Executive, Counsellor, Mentor, and Convener who believes in raising leaders who will influence the church and society for Christ. He holds a BA in Business Studies, an MA in Ministry, and an MSc in Communication and International Marketing.",
    ],
  },
  {
    id: "adizatu-sulley",
    name: "Adizatu Sulley",
    role: "Board Member",
    image: "/images/board/adizatu-sulley.jpg",
    width: 1024,
    height: 969,
    paragraphs: [
      "Adizatu Sulley is a finance and business professional with over 14 years of experience in Ghana’s oil and gas industry, having served in accounting, retail, procurement, supply chain, and logistics roles. Her background spans financial management, business operations, procurement, and commercial performance.",
      "She holds a BSc and an MBA in Finance and is a certified Financial Modeling & Valuation Analyst (FMVA). She currently serves in a senior management position, with a focus on financial discipline, resource optimization, and operational efficiency.",
      "She is committed to education, youth development, and community empowerment, and supports initiatives that create opportunities for underserved communities.",
      "As a board member of Paradigm Shift, she brings financial expertise and business judgement to the organization’s work in education, skills development, healthcare, and community infrastructure.",
    ],
  },
];
