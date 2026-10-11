import { BookingCta } from "@/components/sections/BookingCta/BookingCta";
import { Contact } from "@/components/sections/Contact/Contact";
import { Footer } from "@/components/sections/Footer/Footer";
import { Gallery } from "@/components/sections/Gallery/Gallery";
import { Header } from "@/components/sections/Header/Header";
import { Hero } from "@/components/sections/Hero/Hero";
import { Map } from "@/components/sections/Map/Map";
import { Reviews } from "@/components/sections/Reviews/Reviews";
import { Services } from "@/components/sections/Services/Services";
import { Story } from "@/components/sections/Story/Story";
import { SkipLink } from "@/components/ui/SkipLink";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";

export default function Home(): React.JSX.Element {
  return (
    <>
      <SkipLink />
      <Header />
      <main id="main">
        <Hero />
        <Story />
        <Services />
        <Gallery />
        <Reviews />
        <Contact />
        <BookingCta />
        <Map />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
