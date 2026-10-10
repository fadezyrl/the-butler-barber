import type { ServiceId } from "@/data/site-config";

export type Locale = "en" | "ur";

export type Dictionary = {
  meta: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
  };
  brand: {
    name: string;
    wordmarkLead: string;
    wordmarkTrail: string;
    homeAria: string;
  };
  a11y: {
    skipToContent: string;
    openMenu: string;
    closeMenu: string;
    mainNav: string;
    footerNav: string;
    galleryTrack: string;
    prevImages: string;
    nextImages: string;
    prevReview: string;
    nextReview: string;
    mapTitle: string;
  };
  nav: {
    story: string;
    services: string;
    work: string;
    contact: string;
    book: string;
  };
  hero: {
    titleLead: string;
    titleEm: string;
    sub: string;
    exploreWork: string;
    meta: string;
    openStrong: string;
    openRest: string;
    addressLine: string;
    photoCaption: string;
  };
  story: {
    titleLead: string;
    titleEm: string;
    p1: string;
    p2: string;
    lineLead: string;
    lineEm: string;
    photoCaption: string;
  };
  services: {
    titleLead: string;
    titleEm: string;
    note: string;
    askPrice: string;
    openNote: string;
    items: Record<
      ServiceId,
      {
        title: string;
        description: string;
      }
    >;
  };
  gallery: {
    title: string;
    introLead: string;
    introTrail: string;
    instagram: string;
    scrollHint: string;
    captions: string[];
  };
  reviews: {
    emptyQuote: string;
    emptyBody: string;
    readOnGoogle: string;
  };
  contact: {
    title: string;
    getDirections: string;
    hoursTitle: string;
    hoursNote: string;
    days: Record<"Sat" | "Sun" | "Mon" | "Tue" | "Wed" | "Thu" | "Fri", string>;
  };
  cta: {
    title: string;
    body: string;
  };
  map: {
    eyebrow: string;
    title: string;
    openInMaps: string;
    fallback: string;
    pinLabel: string;
  };
  footer: {
    statement: string;
    explore: string;
    visit: string;
    reach: string;
    rights: string;
    openEveryDay: string;
  };
  lang: {
    en: string;
    ur: string;
    switchTo: string;
  };
};
