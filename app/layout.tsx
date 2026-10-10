import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";

import { JsClass } from "@/components/JsClass";
import { LanguageProvider } from "@/context/LanguageContext";
import { en } from "@/data/dictionary/en";
import { SITE_CONFIG } from "@/data/site-config";

import "./globals.css";
import "./styles/site.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: en.meta.title,
  description: en.meta.description,
  openGraph: {
    type: "website",
    title: en.meta.ogTitle,
    description: en.meta.ogDescription,
    locale: "en_BH",
  },
  other: {
    "theme-color": "#1C1C1B",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: "The Butler Barber",
  description: en.meta.description,
  telephone: "+97335482131",
  address: {
    "@type": "PostalAddress",
    streetAddress: `${SITE_CONFIG.address.street}, ${SITE_CONFIG.address.shop}`,
    addressLocality: SITE_CONFIG.address.locality,
    postalCode: SITE_CONFIG.address.postalCode,
    addressCountry: SITE_CONFIG.address.countryCode,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Saturday",
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: SITE_CONFIG.hours.opens,
      closes: SITE_CONFIG.hours.closes,
    },
  ],
  sameAs: [SITE_CONFIG.instagramUrl],
};

export default function RootLayout({
  children,
}: LayoutProps<"/">): React.JSX.Element {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <JsClass />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
