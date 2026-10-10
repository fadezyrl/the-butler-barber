"use client";

import type { CSSProperties, JSX } from "react";

import { useLanguage } from "@/context/LanguageContext";
import { SITE_CONFIG } from "@/data/site-config";

type BrandMarkProps = {
  className?: string;
  style?: CSSProperties;
};

export const BrandMark = ({
  className,
  style,
}: BrandMarkProps): JSX.Element => {
  const { dictionary } = useLanguage();

  if (SITE_CONFIG.logoSrc) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={SITE_CONFIG.logoSrc}
        alt={dictionary.brand.name}
        className={className}
        style={style}
      />
    );
  }

  return (
    <span
      className={className ? `wordmark ${className}` : "wordmark"}
      style={style}
    >
      <b>{dictionary.brand.wordmarkLead}</b>
      {dictionary.brand.wordmarkTrail}
    </span>
  );
};
