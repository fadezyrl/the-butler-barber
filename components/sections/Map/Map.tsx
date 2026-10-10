"use client";

import { useEffect, useRef, useState } from "react";

import { useLanguage } from "@/context/LanguageContext";
import { SITE_CONFIG } from "@/data/site-config";

export const Map = (): React.JSX.Element => {
  const { dictionary } = useLanguage();
  const frameRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);
  const { address, mapsSearchUrl, mapsEmbedUrl } = SITE_CONFIG;

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame || loaded) return;

    const load = (): void => setLoaded(true);

    if (!("IntersectionObserver" in window)) {
      load();
      return;
    }

    const mo = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          load();
          mo.disconnect();
        }
      },
      { rootMargin: "400px" },
    );

    mo.observe(frame);
    return () => mo.disconnect();
  }, [loaded]);

  return (
    <section className="map" id="map">
      <div className="map-label">
        <div>
          <h2>{dictionary.map.title}</h2>
          <address>
            {dictionary.brand.name}
            <br />
            {address.street}, {address.shop}
            <br />
            {address.locality} {address.postalCode}, {address.country}
          </address>
        </div>
        <a
          className="link-line"
          style={{ alignSelf: "flex-start" }}
          href={mapsSearchUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {dictionary.map.openInMaps}
        </a>
      </div>
      <div className="map-frame" ref={frameRef}>
        <div className="map-fallback">
          <span>{dictionary.map.fallback}</span>
        </div>
        {loaded ? (
          <iframe
            title={dictionary.a11y.mapTitle}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={mapsEmbedUrl}
          />
        ) : null}
      </div>
    </section>
  );
};
