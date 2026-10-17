import { en } from "@/data/dictionary/en";
import { SEO, SITE_URL } from "@/data/seo";
import { SITE_CONFIG } from "@/data/site-config";

const dayNames = [
  "Saturday",
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
] as const;

export const buildHairSalonJsonLd = (): Record<string, unknown> => {
  const street = `${SITE_CONFIG.address.street}, ${SITE_CONFIG.address.shop}`;

  const offers = SITE_CONFIG.serviceMenu.flatMap((category) =>
    category.items.map((item) => {
      const label = en.services.items[item.id] ?? item.id;
      const priceMatch = item.price.match(/[\d.]+/);
      return {
        "@type": "Offer",
        name: label,
        price: priceMatch?.[0] ?? undefined,
        priceCurrency: "BHD",
        availability: "https://schema.org/InStock",
        url: `${SITE_URL}/#services`,
      };
    }),
  );

  return {
    "@context": "https://schema.org",
    "@type": ["HairSalon", "LocalBusiness"],
    "@id": `${SITE_URL}/#salon`,
    name: SEO.siteName,
    description: SEO.description,
    url: SITE_URL,
    telephone: "+97335482131",
    image: [
      SEO.logoUrl,
      SEO.ogImage.url,
      ...SITE_CONFIG.images.gallery
        .filter((item) => item.kind === "image")
        .map((item) => `${SITE_URL}${item.src}`),
    ],
    logo: SEO.logoUrl,
    priceRange: "BD 1–20",
    currenciesAccepted: "BHD",
    paymentAccepted: "Cash, Card",
    address: {
      "@type": "PostalAddress",
      streetAddress: street,
      addressLocality: SITE_CONFIG.address.locality,
      postalCode: SITE_CONFIG.address.postalCode,
      addressCountry: SITE_CONFIG.address.countryCode,
    },
    areaServed: [
      {
        "@type": "City",
        name: "Manama",
      },
      {
        "@type": "AdministrativeArea",
        name: "Gudaibiya",
      },
    ],
    openingHoursSpecification: dayNames.map((day) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: day,
      opens: SITE_CONFIG.hours.opens,
      closes: SITE_CONFIG.hours.closes,
    })),
    sameAs: [SITE_CONFIG.instagramUrl, SITE_CONFIG.googleReviewsUrl].filter(
      Boolean,
    ),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Barber services",
      itemListElement: offers,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+97335482131",
      contactType: "customer service",
      areaServed: "BH",
      availableLanguage: ["English", "Arabic"],
    },
  };
};

export const buildWebSiteJsonLd = (): Record<string, unknown> => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SEO.siteName,
  url: SITE_URL,
  description: SEO.description,
  inLanguage: ["en", "ar"],
  publisher: {
    "@id": `${SITE_URL}/#salon`,
  },
});
