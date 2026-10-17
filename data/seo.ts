import { en } from "@/data/dictionary/en";
import { SITE_CONFIG } from "@/data/site-config";

export const SITE_URL = "https://www.thebutlerbarber.com";

export const SEO = {
  siteUrl: SITE_URL,
  siteName: "The Butler Barber",
  title: en.meta.title,
  description: en.meta.description,
  ogTitle: en.meta.ogTitle,
  ogDescription: en.meta.ogDescription,
  locale: "en_BH",
  themeColor: "#1C1C1B",
  keywords: [
    "barber Manama",
    "barbershop Gudaibiya",
    "haircut Bahrain",
    "skin fade Manama",
    "beard trim Bahrain",
    "The Butler Barber",
    "men's grooming Manama",
    "fade haircut Gudaibiya",
    "barber near me Manama",
  ],
  ogImage: {
    url: `${SITE_URL}${SITE_CONFIG.images.gallery[0]?.src ?? SITE_CONFIG.logoSrc}`,
    width: 1200,
    height: 1600,
    alt: "The Butler Barber — precision cuts in Gudaibiya, Manama",
  },
  logoUrl: `${SITE_URL}${SITE_CONFIG.logoSrc}`,
  twitterHandle: "",
} as const;

export const absoluteUrl = (path = "/"): string => {
  if (path.startsWith("http")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized === "/" ? "" : normalized}` || SITE_URL;
};
