export type MediaKind = "image" | "video";

export type MediaSlot = {
  src: string;
  alt: string;
  kind: MediaKind;
};

export type Review = {
  quote: string;
  name: string;
  source: string;
};

export type ServiceId = "cuts" | "fades" | "beard" | "combo" | "full";

export type SiteConfig = {
  logoSrc: string;
  bookingUrl: string;
  phoneTel: string;
  phoneDisplay: string;
  instagramUrl: string;
  googleReviewsUrl: string;
  mapsSearchUrl: string;
  mapsEmbedUrl: string;
  address: {
    street: string;
    shop: string;
    locality: string;
    postalCode: string;
    country: string;
    countryCode: string;
  };
  hours: {
    opens: string;
    closes: string;
    display: string;
  };
  images: {
    hero: MediaSlot;
    story: MediaSlot;
    cta: MediaSlot;
    gallery: MediaSlot[];
  };
  reviews: Review[];
  prices: Partial<Record<ServiceId, string>>;
  serviceIds: ServiceId[];
};

export const SITE_CONFIG: SiteConfig = {
  logoSrc: "",
  bookingUrl: "",
  phoneTel: "tel:+97335482131",
  phoneDisplay: "+973 3548 2131",
  instagramUrl: "https://www.instagram.com/thebutlerbarber/",
  googleReviewsUrl: "https://share.google/fu5eYccUNoOqsL8TA",
  mapsSearchUrl:
    "https://www.google.com/maps/search/?api=1&query=Gudaibiya+Road+2153+Block+321+Manama+Bahrain",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=Gudaibiya+Road+2153+Block+321+Manama+Bahrain&hl=en&z=16&output=embed",
  address: {
    street: "Road 2153, Block 321",
    shop: "Shop 3550, Gudaibiya",
    locality: "Manama",
    postalCode: "321",
    country: "Bahrain",
    countryCode: "BH",
  },
  hours: {
    opens: "09:00",
    closes: "23:00",
    display: "9:00 AM – 11:00 PM",
  },
  images: {
    hero: {
      src: "/assets/mens-haircut.mp4",
      alt: "Barber finishing a men's haircut at The Butler Barber",
      kind: "video",
    },
    story: {
      src: "/assets/classic-fade.jpg",
      alt: "Classic fade finished at The Butler Barber",
      kind: "image",
    },
    cta: {
      src: "/assets/fade-cut.mp4",
      alt: "Fade cut being finished at The Butler Barber",
      kind: "video",
    },
    gallery: [
      {
        src: "/assets/high-fade.jpg",
        alt: "High fade haircut",
        kind: "image",
      },
      {
        src: "/assets/transformation.mp4",
        alt: "Haircut transformation in progress",
        kind: "video",
      },
      {
        src: "/assets/skin-fade.jpg",
        alt: "Clean skin fade",
        kind: "image",
      },
      {
        src: "/assets/burst-fade.mp4",
        alt: "Burst fade being cut",
        kind: "video",
      },
      {
        src: "/assets/textured-fade.jpg",
        alt: "Textured fade finish",
        kind: "image",
      },
      {
        src: "/assets/spartan-cut.mp4",
        alt: "Spartan cut styling",
        kind: "video",
      },
      {
        src: "/assets/curly-burst-fade.jpg",
        alt: "Curly hair with burst fade",
        kind: "image",
      },
      {
        src: "/assets/fade-cut.mp4",
        alt: "Fade cut from the chair",
        kind: "video",
      },
      {
        src: "/assets/blonde-mullet.jpg",
        alt: "Blonde mullet style",
        kind: "image",
      },
      {
        src: "/assets/buzz-cut-blonde.mp4",
        alt: "Blonde buzz cut",
        kind: "video",
      },
      {
        src: "/assets/orange-fade.jpg",
        alt: "Orange-toned fade",
        kind: "image",
      },
      {
        src: "/assets/short-fade.jpg",
        alt: "Short fade haircut",
        kind: "image",
      },
      {
        src: "/assets/textured-cut.jpg",
        alt: "Textured crop cut",
        kind: "image",
      },
    ],
  },
  reviews: [
    {
      quote:
        "Best fade I have had in Manama. Clean, precise, and they actually listen to what you want.",
      name: "Omar A.",
      source: "Google Review",
    },
    {
      quote:
        "Walked in for a trim and walked out sharper than I have looked in years. Proper craft.",
      name: "Hassan R.",
      source: "Google Review",
    },
    {
      quote:
        "Calm shop, skilled hands, and a skin fade that stays clean through the week.",
      name: "Yusuf M.",
      source: "Google Review",
    },
    {
      quote:
        "Consistent every visit. The detail in the finish is what keeps me coming back.",
      name: "Khalid S.",
      source: "Google Review",
    },
  ],
  prices: {
    cuts: "BHD 4",
    fades: "BHD 5",
    beard: "BHD 3",
    combo: "BHD 6",
    full: "BHD 10",
  },
  serviceIds: ["cuts", "fades", "beard", "combo", "full"],
};

export const getBookingHref = (config: SiteConfig): string =>
  config.bookingUrl || config.phoneTel;

export const isExternalBooking = (config: SiteConfig): boolean =>
  Boolean(config.bookingUrl);
