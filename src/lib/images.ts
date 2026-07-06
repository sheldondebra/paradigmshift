export type ImageMeta = {
  src: string;
  width: number;
  height: number;
};

/** Native dimensions — prevents upscaling tiny assets on large layouts */
export const imageCatalog: Record<string, ImageMeta> = {
  "/images/asset_1-fe1f7203-9615-443e-8300-7c2ae61e24fa.png": { src: "/images/asset_1-fe1f7203-9615-443e-8300-7c2ae61e24fa.png", width: 1024, height: 965 },
  "/images/asset_21-7771a1e8-12e7-4e71-bf80-50f42308f31e.png": { src: "/images/asset_21-7771a1e8-12e7-4e71-bf80-50f42308f31e.png", width: 1024, height: 682 },
  "/images/asset_22-d48bb2c5-25bb-44fa-b608-dc7cc28a775a.png": { src: "/images/asset_22-d48bb2c5-25bb-44fa-b608-dc7cc28a775a.png", width: 930, height: 1024 },
  "/images/asset_23-86cc186c-7798-4e16-af91-d9bd3413f2cc.png": { src: "/images/asset_23-86cc186c-7798-4e16-af91-d9bd3413f2cc.png", width: 1024, height: 796 },
  "/images/phamily-circle-building-nations-2026.png": { src: "/images/phamily-circle-building-nations-2026.png", width: 864, height: 1024 },
  "/images/gallery-paradigm-shift-speaker-isser.png": { src: "/images/gallery-paradigm-shift-speaker-isser.png", width: 1024, height: 683 },
  "/images/gallery-workshop-attendee-notes.png": { src: "/images/gallery-workshop-attendee-notes.png", width: 682, height: 1024 },
  "/images/asset_2-9be3f6b5-e828-4e42-82ed-0fbe193210a2.png": { src: "/images/asset_2-9be3f6b5-e828-4e42-82ed-0fbe193210a2.png", width: 200, height: 300 },
  "/images/asset_3-e91b9d29-bdd4-4c84-8141-540b0e5da2bc.png": { src: "/images/asset_3-e91b9d29-bdd4-4c84-8141-540b0e5da2bc.png", width: 278, height: 300 },
  "/images/asset_4-2dc2bb30-c598-436a-a38a-40954ea4dd3f.png": { src: "/images/asset_4-2dc2bb30-c598-436a-a38a-40954ea4dd3f.png", width: 288, height: 300 },
  "/images/asset_5-1dba832a-5450-4005-b993-a7da7769cb50.png": { src: "/images/asset_5-1dba832a-5450-4005-b993-a7da7769cb50.png", width: 300, height: 200 },
  "/images/asset_6-53207a55-51d4-4e06-9596-ce1f801048e0.png": { src: "/images/asset_6-53207a55-51d4-4e06-9596-ce1f801048e0.png", width: 200, height: 300 },
  "/images/asset_7-d88ff30b-f681-4318-8a22-0bfdc34f2a1e.png": { src: "/images/asset_7-d88ff30b-f681-4318-8a22-0bfdc34f2a1e.png", width: 300, height: 227 },
  "/images/asset_8-ce7d530a-1d77-40ef-a305-bfc2d863b80b.png": { src: "/images/asset_8-ce7d530a-1d77-40ef-a305-bfc2d863b80b.png", width: 200, height: 300 },
  "/images/asset_9-1f7f7ccb-ec53-42f0-a61d-90bfc22ac783.png": { src: "/images/asset_9-1f7f7ccb-ec53-42f0-a61d-90bfc22ac783.png", width: 295, height: 300 },
  "/images/asset_10-79f83b2a-f24d-4e8f-874a-49f5fd6f8272.png": { src: "/images/asset_10-79f83b2a-f24d-4e8f-874a-49f5fd6f8272.png", width: 200, height: 300 },
  "/images/asset_11-4fe8d2b8-4bfa-4e06-a846-99ef584b295c.png": { src: "/images/asset_11-4fe8d2b8-4bfa-4e06-a846-99ef584b295c.png", width: 200, height: 300 },
  "/images/asset_12-072012d1-f90b-49e6-a0cc-c1f9b83c1e12.png": { src: "/images/asset_12-072012d1-f90b-49e6-a0cc-c1f9b83c1e12.png", width: 200, height: 300 },
  "/images/asset_13-7b2f0fa0-70e0-46e1-84ea-6ab1a828ff27.png": { src: "/images/asset_13-7b2f0fa0-70e0-46e1-84ea-6ab1a828ff27.png", width: 200, height: 300 },
  "/images/asset_14-5d9bb5fa-6fff-4fee-aa6b-0234c0912713.png": { src: "/images/asset_14-5d9bb5fa-6fff-4fee-aa6b-0234c0912713.png", width: 200, height: 300 },
  "/images/asset_15-e23b4172-6369-478e-b330-fe4243dcabca.png": { src: "/images/asset_15-e23b4172-6369-478e-b330-fe4243dcabca.png", width: 200, height: 300 },
  "/images/asset_16-dbb0d3b2-b1b6-4bc3-bd83-8671753d0ce7.png": { src: "/images/asset_16-dbb0d3b2-b1b6-4bc3-bd83-8671753d0ce7.png", width: 200, height: 300 },
  "/images/asset_17-605a4d32-b01a-4853-8b12-bddaa0fac816.png": { src: "/images/asset_17-605a4d32-b01a-4853-8b12-bddaa0fac816.png", width: 200, height: 300 },
  "/images/asset_18-353d7632-7a90-4a63-83a3-f6bc0a907146.png": { src: "/images/asset_18-353d7632-7a90-4a63-83a3-f6bc0a907146.png", width: 200, height: 300 },
  "/images/asset_19-18fbe555-fb3b-4758-8801-4ee8fb6c2d9d.png": { src: "/images/asset_19-18fbe555-fb3b-4758-8801-4ee8fb6c2d9d.png", width: 200, height: 300 },
  "/images/asset_20-97dee04c-71b5-46d0-b2e8-b2ed7da279c2.png": { src: "/images/asset_20-97dee04c-71b5-46d0-b2e8-b2ed7da279c2.png", width: 200, height: 300 },
};

const HR = "/images/asset_21-7771a1e8-12e7-4e71-bf80-50f42308f31e.png";
const HR2 = "/images/asset_23-86cc186c-7798-4e16-af91-d9bd3413f2cc.png";
const HR3 = "/images/asset_1-fe1f7203-9615-443e-8300-7c2ae61e24fa.png";
const HR4 = "/images/asset_22-d48bb2c5-25bb-44fa-b608-dc7cc28a775a.png";

/** Large layout slots — only use images ≥930px wide */
export const images = {
  hero: HR,
  aboutTeam: HR4,
  speaker: HR2,
  workshop: HR,
  community: HR3,
  audience: HR,
  handshake: HR2,
  founders: HR4,
  eventGroup: HR,
  youthSpeaker: HR2,
};

/** Gallery: high-res first, then smaller thumbs */
export const galleryImages = [
  "/images/gallery-paradigm-shift-speaker-isser.png",
  "/images/gallery-workshop-attendee-notes.png",
  HR3,
  HR,
  HR4,
  HR2,
  "/images/asset_5-1dba832a-5450-4005-b993-a7da7769cb50.png",
  "/images/asset_9-1f7f7ccb-ec53-42f0-a61d-90bfc22ac783.png",
  "/images/asset_4-2dc2bb30-c598-436a-a38a-40954ea4dd3f.png",
  "/images/asset_3-e91b9d29-bdd4-4c84-8141-540b0e5da2bc.png",
  "/images/asset_7-d88ff30b-f681-4318-8a22-0bfdc34f2a1e.png",
];

export const IMAGE_QUALITY = 92;

export function getImageMeta(src: string): ImageMeta {
  return (
    imageCatalog[src] ?? {
      src,
      width: 1024,
      height: 768,
    }
  );
}

export function isHighRes(src: string, minWidth = 800): boolean {
  return getImageMeta(src).width >= minWidth;
}

export function sizesForWidth(maxPx: number): string {
  return `(max-width: 768px) 100vw, ${maxPx}px`;
}
