import type { Metadata, Viewport } from "next";
import { Noto_Naskh_Arabic, Noto_Sans_Arabic, Poppins } from "next/font/google";
import Script from "next/script";

import { JsClass } from "@/components/JsClass";
import { LanguageProvider } from "@/context/LanguageContext";
import { SEO, SITE_URL } from "@/data/seo";
import { buildHairSalonJsonLd, buildWebSiteJsonLd } from "@/lib/json-ld";

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
  metadataBase: new URL(SITE_URL),
  title: {
    default: SEO.title,
    template: `%s | ${SEO.siteName}`,
  },
  description: SEO.description,
  applicationName: SEO.siteName,
  keywords: [...SEO.keywords],
  authors: [{ name: SEO.siteName, url: SITE_URL }],
  creator: SEO.siteName,
  publisher: SEO.siteName,
  category: "barbershop",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SEO.siteName,
    title: SEO.ogTitle,
    description: SEO.ogDescription,
    locale: SEO.locale,
    alternateLocale: ["ar_BH"],
    images: [
      {
        url: SEO.ogImage.url,
        width: SEO.ogImage.width,
        height: SEO.ogImage.height,
        alt: SEO.ogImage.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.ogTitle,
    description: SEO.ogDescription,
    images: [SEO.ogImage.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icons/icon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/icons/icon-48.png", type: "image/png", sizes: "48x48" },
      { url: "/icons/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/favicon.ico", type: "image/x-icon", sizes: "any" },
    ],
    apple: [
      {
        url: "/icons/apple-touch-icon.png",
        type: "image/png",
        sizes: "180x180",
      },
    ],
    shortcut: [{ url: "/favicon.ico" }],
  },
  other: {
    "geo.region": "BH-13",
    "geo.placename": "Gudaibiya, Manama",
  },
};

export const viewport: Viewport = {
  themeColor: SEO.themeColor,
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [buildHairSalonJsonLd(), buildWebSiteJsonLd()],
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
        />
        <JsClass />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
