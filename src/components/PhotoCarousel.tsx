"use client";

import { useRef, useState } from "react";
import Image from "next/image";

export default function PhotoCarousel({
  photos,
}: {
  photos: { src: string; alt: string; position?: string }[];
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);

  const goTo = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const next = (index + photos.length) % photos.length;
    track.scrollTo({ left: next * track.clientWidth, behavior: "smooth" });
  };

  const onScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    setCurrent(Math.round(track.scrollLeft / track.clientWidth));
  };

  const hasMany = photos.length > 1;

  return (
    <div className="relative">
      <div
        ref={trackRef}
        onScroll={onScroll}
        className="flex snap-x snap-mandatory overflow-x-auto rounded-2xl border border-white/15 shadow-xl [scrollbar-width:none]"
      >
        {photos.map((photo) => (
          <Image
            key={photo.src}
            src={photo.src}
            alt={photo.alt}
            width={1600}
            height={1067}
            className="w-full shrink-0 snap-center aspect-[3/2] object-cover"
            style={{ objectPosition: photo.position ?? "center" }}
          />
        ))}
      </div>

      {hasMany && (
        <>
          <button
            type="button"
            onClick={() => goTo(current - 1)}
            aria-label="Previous photo"
            className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-brand-dark/60 text-xl text-white backdrop-blur-sm hover:bg-brand-dark/80 transition-colors"
          >
            &lsaquo;
          </button>
          <button
            type="button"
            onClick={() => goTo(current + 1)}
            aria-label="Next photo"
            className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-brand-dark/60 text-xl text-white backdrop-blur-sm hover:bg-brand-dark/80 transition-colors"
          >
            &rsaquo;
          </button>
          <div className="mt-4 flex justify-center gap-2">
            {photos.map((photo, index) => (
              <button
                key={photo.src}
                type="button"
                onClick={() => goTo(index)}
                aria-label={`Show photo ${index + 1}`}
                className={`h-2.5 rounded-full transition-all ${
                  index === current ? "w-6 bg-white" : "w-2.5 bg-white/40"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
