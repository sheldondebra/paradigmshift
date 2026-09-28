import conferenceMeeting from "@/lib/gallery/paradigm-shift-conference-meeting-2026.json";
import dinnerMeeting from "@/lib/gallery/paradigm-shift-dinner-meeting-2026.json";

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
};

export const galleryAlbums: GalleryAlbum[] = [
  {
    ...conferenceMeeting,
    credit: "Photography by Hyperview Studios",
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
