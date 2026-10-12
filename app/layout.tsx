import type { Metadata } from "next";
import { Noto_Naskh_Arabic, Noto_Sans_Arabic, Poppins } from "next/font/google";
import Script from "next/script";

import { JsClass } from "@/components/JsClass";
import { LanguageProvider } from "@/context/LanguageContext";
import { en } from "@/data/dictionary/en";
import { SITE_CONFIG } from "@/data/site-config";

import "./globals.css";
import "./styles/site.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

const notoNaskh = Noto_Naskh_Arabic({
  variable: "--font-noto-naskh",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
});

const notoSansArabic = Noto_Sans_Arabic({
  variable: "--font-noto-sans-arabic",
  subsets: ["arabic"],
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
      suppressHydrationWarning
      className={`${poppins.variable} ${notoNaskh.variable} ${notoSansArabic.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <Script id="butler-locale-init" strategy="beforeInteractive">
          {`(function(){try{var k='butler-locale';var l=localStorage.getItem(k);if(l!=='ar'&&l!=='en')return;var d=document.documentElement;d.lang=l;d.dir=l==='ar'?'rtl':'ltr';d.dataset.locale=l;d.scrollLeft=0;if(document.body)document.body.scrollLeft=0;window.scrollTo(0,0);}catch(e){}})();`}
        </Script>
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
