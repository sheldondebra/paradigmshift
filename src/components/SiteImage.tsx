import Image, { type ImageProps } from "next/image";
import { getImageMeta, IMAGE_QUALITY, isHighRes, sizesForWidth } from "@/lib/images";

type SiteImageProps = Omit<ImageProps, "quality"> & {
  /** Max rendered width in px — caps sizes so Next.js doesn't upscale */
  displayWidth?: number;
};

export function SiteImage({
  src,
  displayWidth,
  sizes,
  className,
  ...props
}: SiteImageProps) {
  const srcStr = typeof src === "string" ? src : "";
  const meta = getImageMeta(srcStr);
  const maxWidth = displayWidth ?? meta.width;
  const resolvedSizes = sizes ?? sizesForWidth(Math.min(meta.width, maxWidth));

  return (
    <Image
      src={src}
      quality={IMAGE_QUALITY}
      sizes={resolvedSizes}
      className={className}
      {...props}
    />
  );
}

export function SiteImageFill({
  src,
  displayWidth,
  sizes,
  className,
  ...props
}: SiteImageProps) {
  const srcStr = typeof src === "string" ? src : "";
  const meta = getImageMeta(srcStr);
  const capped = Math.min(meta.width, displayWidth ?? meta.width);

  return (
    <SiteImage
      src={src}
      fill
      displayWidth={capped}
      sizes={sizes ?? sizesForWidth(capped)}
      className={className}
      {...props}
    />
  );
}

export { isHighRes, getImageMeta };
