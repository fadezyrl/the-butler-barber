"use client";

import { BookLink } from "@/components/ui/BookLink";
import { useLanguage } from "@/context/LanguageContext";

export const BookingCta = (): React.JSX.Element => {
  const { dictionary } = useLanguage();

  return (
    <section className="cta" id="book">
      <h2>{dictionary.cta.title}</h2>
      <div className="cta-side">
        <p>{dictionary.cta.body}</p>
        <BookLink className="btn-dark" />
      </div>
    </section>
  );
};
