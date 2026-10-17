"use client";

import { useEffect, useRef } from "react";

/**
 * Background hero video.
 *
 * IMPORTANT: only a direct, authorised video file (MP4) may be rendered here.
 * The TikTok *page* URL supplied by the client is not a video file and cannot be
 * used as a <video> source — linking to it is handled in the hero copy instead.
 *
 * The element is muted, looping and `playsInline`, and playback is paused for
 * visitors who prefer reduced motion.
 */
export function HeroVideo({
  src,
  poster,
  className,
}: {
  src: string;
  poster?: string;
  className?: string;
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      if (media.matches) {
        video.pause();
      } else {
        void video.play().catch(() => {
          // Autoplay may be blocked; the poster remains visible.
        });
      }
    };

    apply();
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, []);

  return (
    <video
      ref={videoRef}
      className={className}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden
      tabIndex={-1}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
