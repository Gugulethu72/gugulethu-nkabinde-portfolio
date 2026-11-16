
"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type ProjectGalleryProps = {
  images: string[];
  title: string;
};

export default function ProjectGallery({
  images,
  title,
}: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const hasMultipleImages = images.length > 1;

  const previousImage = useCallback(() => {
    setActiveIndex((current) =>
      current === 0 ? images.length - 1 : current - 1
    );
  }, [images.length]);

  const nextImage = useCallback(() => {
    setActiveIndex((current) =>
      current === images.length - 1 ? 0 : current + 1
    );
  }, [images.length]);

  useEffect(() => {
    if (!hasMultipleImages) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        previousImage();
      }

      if (event.key === "ArrowRight") {
        nextImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [hasMultipleImages, previousImage, nextImage]);

  if (images.length === 0) {
    return null;
  }

  return (
    <div>
      <div className="relative flex min-h-[50vh] items-center justify-center overflow-hidden bg-black/[0.03] md:min-h-[60vh]">
        <Image
          key={images[activeIndex]}
          src={images[activeIndex]}
          alt={`${title} — image ${activeIndex + 1} of ${images.length}`}
          width={1600}
          height={1600}
          sizes="(max-width: 768px) 100vw, 1152px"
          className="max-h-[80vh] w-auto max-w-full object-contain animate-in fade-in duration-300"
          priority={activeIndex === 0}
        />

        {hasMultipleImages && (
          <>
            <button
              type="button"
              onClick={previousImage}
              aria-label="Previous image"
              className="absolute left-3 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-white transition hover:bg-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black md:left-5 md:h-12 md:w-12"
            >
              <ChevronLeft size={22} aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={nextImage}
              aria-label="Next image"
              className="absolute right-3 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-white transition hover:bg-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black md:right-5 md:h-12 md:w-12"
            >
              <ChevronRight size={22} aria-hidden="true" />
            </button>
          </>
        )}
      </div>

      {hasMultipleImages && (
        <div className="mt-4 flex items-center justify-between">
          <span
            className="font-body text-[11px] uppercase tracking-[0.12em] text-black/40"
            aria-live="polite"
            aria-atomic="true"
          >
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(images.length).padStart(2, "0")}
          </span>

          <div className="flex items-center gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`View image ${index + 1}`}
                aria-current={index === activeIndex ? "true" : undefined}
                className={`h-2 w-2 rounded-full transition-colors ${
                  index === activeIndex
                    ? "bg-black"
                    : "bg-black/20 hover:bg-black/50"
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
