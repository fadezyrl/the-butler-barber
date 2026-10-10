"use client";

import { useRef } from "react";

import { PhotoSlot } from "@/components/ui/PhotoSlot";
import { useLanguage } from "@/context/LanguageContext";
import { SITE_CONFIG } from "@/data/site-config";
import { Reveal } from "@/lib/reveal";

const SHOT_CLASSES = ["a", "b", "c", "d", "e", "f"] as const;

export const Gallery = (): React.JSX.Element => {
  const { dictionary } = useLanguage();
  const trackRef = useRef<HTMLDivElement>(null);

  const step = (dir: number): void => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({
      left: dir * Math.round(track.clientWidth * 0.6),
      behavior: "smooth",
    });
  };

  return (
    <section className="gallery" id="work">
      <div className="gallery-head">
        <Reveal as="h2">{dictionary.gallery.title}</Reveal>
        <p>
          {dictionary.gallery.introLead}
          <a
            className="link-line"
            style={{ color: "var(--white)" }}
            href={SITE_CONFIG.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {dictionary.gallery.instagram}
          </a>
          {dictionary.gallery.introTrail}
        </p>
      </div>
      <div
        className="track"
        ref={trackRef}
        tabIndex={0}
        aria-label={dictionary.a11y.galleryTrack}
      >
        {SITE_CONFIG.images.gallery.map((image, index) => (
          <div
            className={`shot ${SHOT_CLASSES[index % SHOT_CLASSES.length]}`}
            key={image.src}
          >
            <PhotoSlot
              image={image}
              caption={dictionary.gallery.captions[index] ?? image.alt}
            />
          </div>
        ))}
      </div>
      <div className="gallery-foot">
        <span style={{ fontSize: "0.85rem", color: "var(--gray)" }}>
          {dictionary.gallery.scrollHint}
        </span>
        <div className="arrows">
          <button
            type="button"
            aria-label={dictionary.a11y.prevImages}
            onClick={() => step(-1)}
          >
            ←
          </button>
          <button
            type="button"
            aria-label={dictionary.a11y.nextImages}
            onClick={() => step(1)}
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};
