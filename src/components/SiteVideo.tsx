"use client";

import { useEffect, useRef, useState } from "react";
import { SiteImageFill } from "@/components/SiteImage";
import { images } from "@/lib/images";
import { siteVideo } from "@/lib/videos";

type SiteVideoProps = {
  variant?: "background" | "player";
  poster?: string;
  className?: string;
  title?: string;
  expandOnPlay?: boolean;
  onPlayingChange?: (playing: boolean) => void;
};

function HeroBackgroundVideo({
  poster,
  className = "",
}: {
  poster: string;
  className?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const loopEndRef = useRef<number | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const { startAt, endOffset } = siteVideo.heroLoop;

    function applyLoopBounds() {
      if (!video || !Number.isFinite(video.duration) || video.duration <= startAt) return;

      loopEndRef.current = Math.max(startAt + 1, video.duration - endOffset);
      video.currentTime = startAt;
    }

    function keepSegmentPlaying() {
      if (!video) return;
      const loopEnd = loopEndRef.current;
      if (loopEnd === null || video.currentTime < loopEnd) return;

      video.currentTime = startAt;
    }

    function restartSegment() {
      if (!video) return;
      video.currentTime = siteVideo.heroLoop.startAt;
      void video.play().catch(() => {});
    }

    video.addEventListener("loadedmetadata", applyLoopBounds);
    video.addEventListener("timeupdate", keepSegmentPlaying);
    video.addEventListener("ended", restartSegment);

    if (video.readyState >= 1) {
      applyLoopBounds();
    }

    return () => {
      video.removeEventListener("loadedmetadata", applyLoopBounds);
      video.removeEventListener("timeupdate", keepSegmentPlaying);
      video.removeEventListener("ended", restartSegment);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      playsInline
      poster={poster}
      aria-hidden="true"
      className={`absolute inset-0 h-full w-full object-cover ${className}`}
    >
      <source src={siteVideo.src} type="video/mp4" />
    </video>
  );
}

export function SiteVideo({
  variant = "player",
  poster = images.hero,
  className = "",
  title = siteVideo.title,
  expandOnPlay = false,
  onPlayingChange,
}: SiteVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  function setPlaying(playing: boolean) {
    setIsPlaying(playing);
    onPlayingChange?.(playing);
  }

  if (variant === "background" && prefersReducedMotion) {
    return (
      <SiteImageFill
        src={poster}
        alt=""
        priority
        displayWidth={1024}
        className={`object-cover ${className}`}
        sizes="100vw"
      />
    );
  }

  if (variant === "background") {
    return <HeroBackgroundVideo poster={poster} className={className} />;
  }

  const video = (
    <video
      ref={videoRef}
      controls
      playsInline
      preload="metadata"
      poster={poster}
      title={title}
      onPlay={() => setPlaying(true)}
      onPause={() => setPlaying(false)}
      onEnded={() => setPlaying(false)}
      className={
        expandOnPlay
          ? `w-full bg-black transition-all duration-500 ease-out ${
              isPlaying
                ? "aspect-video object-contain"
                : "aspect-[9/16] object-cover"
            }`
          : className
      }
    >
      <source src={siteVideo.src} type="video/mp4" />
      Your browser does not support embedded video.
    </video>
  );

  if (!expandOnPlay) {
    return video;
  }

  return (
    <div
      className={`mx-auto w-full transition-all duration-500 ease-out ${
        isPlaying ? "max-w-4xl" : "max-w-[360px]"
      }`}
    >
      <div
        className={`overflow-hidden bg-black shadow-2xl ring-1 ring-ps-navy/10 transition-all duration-500 ease-out ${
          isPlaying ? "rounded-2xl" : "rounded-[1.75rem]"
        }`}
      >
        {video}
      </div>
    </div>
  );
}
