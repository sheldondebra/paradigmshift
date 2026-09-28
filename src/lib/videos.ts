export const siteVideo = {
  src: "/paradigmshift.mp4",
  title: "Paradigm Shift in Action",
  description:
    "See the energy, community, and impact of Paradigm Shift — workshops, outreach, and the people behind the movement in Ghana.",
  /** Hero background plays this segment on repeat instead of looping from 0:00 */
  heroLoop: {
    startAt: 30,
    endOffset: 0.5,
  },
};

export const conferenceTrailer = {
  src: "/conference-trailer-2026.mp4",
  poster: "/images/conference-trailer-2026-poster.jpg",
  title: "Paradigm Shift Conference 2026",
  description:
    "Watch the trailer from the Paradigm Shift conference — speakers, workshops, and the room that came together in Ghana.",
};

export const facebookReel = {
  id: "852343104590291",
  url: "https://www.facebook.com/reel/852343104590291",
  webUrl: "https://web.facebook.com/reel/852343104590291",
  title: siteVideo.title,
  description: siteVideo.description,
};

export function getFacebookEmbedUrl(width = 350) {
  const href = encodeURIComponent(facebookReel.url);
  return `https://www.facebook.com/plugins/video.php?href=${href}&show_text=false&width=${width}`;
}
