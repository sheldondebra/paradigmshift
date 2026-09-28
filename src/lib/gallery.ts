import conferenceMeeting from "@/lib/gallery/paradigm-shift-conference-meeting-2026.json";
import dinnerMeeting from "@/lib/gallery/paradigm-shift-dinner-meeting-2026.json";
import { conferenceTrailer } from "@/lib/videos";

export type GalleryPhoto = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export type GalleryAlbum = {
  slug: string;
  title: string;
  date: string;
  dateLabel: string;
  description: string;
  credit: string;
  photos: GalleryPhoto[];
  video?: {
    src: string;
    poster: string;
    title: string;
  };
};

export const galleryAlbums: GalleryAlbum[] = [
  {
    ...conferenceMeeting,
    credit: "Photography by Hyperview Studios",
    video: {
      src: conferenceTrailer.src,
      poster: conferenceTrailer.poster,
      title: conferenceTrailer.title,
    },
  },
  {
    ...dinnerMeeting,
    credit: "Photography by Hyperview Studios",
  },
];

export function getAlbum(slug: string): GalleryAlbum | undefined {
  return galleryAlbums.find((album) => album.slug === slug);
}

export function getAlbumCover(album: GalleryAlbum): GalleryPhoto {
  return album.photos[0];
}
