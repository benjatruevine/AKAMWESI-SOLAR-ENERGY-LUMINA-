"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronDown, X } from "lucide-react";
import type { AssetImage } from "@/data/assets";
import { cn } from "@/lib/utils";

/**
 * "Solar Inspiration" gallery.
 *
 * These are photographs supplied by the client. Their exact provenance was not
 * confirmed, so the section is deliberately not presented as a portfolio of
 * completed projects. Captions repeat the conservative alt descriptions.
 */
export function InspirationGallery({ images }: { images: AssetImage[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);

  useEffect(() => {
    if (activeIndex === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeIndex, close]);

  const active = activeIndex === null ? null : images[activeIndex];

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
        {images.map((image, index) => (
          <button
            key={image.file}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="group relative block w-full overflow-hidden rounded-3xl border border-navy-100 bg-navy-50 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-solar-500"
            aria-label={`Enlarge image: ${image.alt}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              loading="lazy"
              className={cn(
                "h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]",
                index % 3 === 1 ? "aspect-[4/5]" : "aspect-[4/3]",
              )}
            />
            <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950/80 to-transparent p-4 text-left text-xs font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {image.alt}
            </span>
          </button>
        ))}
      </div>

      {active ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-navy-950/90 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged image"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close enlarged image"
            className="absolute top-4 right-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <X className="h-5 w-5" aria-hidden />
          </button>
          <figure
            className="max-h-[88vh] w-full max-w-4xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative overflow-hidden rounded-3xl">
              <Image
                src={active.src}
                alt={active.alt}
                width={active.width}
                height={active.height}
                sizes="90vw"
                className="h-auto max-h-[78vh] w-full object-contain"
              />
            </div>
            <figcaption className="mt-4 text-center text-xs text-navy-300">
              {active.alt}
            </figcaption>
          </figure>
        </div>
      ) : null}

      <p className="mt-6 inline-flex items-center gap-2 text-xs text-navy-500">
        <ChevronDown className="h-3.5 w-3.5" aria-hidden />
        Tap any image to enlarge it. Photographs supplied by Akamwesi Solar
        Energy.
      </p>
    </>
  );
}
