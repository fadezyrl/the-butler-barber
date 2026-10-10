"use client";

import { BookLink } from "@/components/ui/BookLink";
import { useLanguage } from "@/context/LanguageContext";
import { SITE_CONFIG } from "@/data/site-config";

export const Services = (): React.JSX.Element => {
  const { dictionary } = useLanguage();

  return (
    <section className="services" id="services">
      <div className="services-head">
        <div className="services-head-inner">
          <h2>
            {dictionary.services.titleLead}
            <span>{dictionary.services.titleEm}</span>
          </h2>
          <p className="services-note">{dictionary.services.note}</p>
        </div>
      </div>
      <div>
        <ul className="menu-list">
          {SITE_CONFIG.serviceIds.map((id) => {
            const item = dictionary.services.items[id];
            const price = SITE_CONFIG.prices[id];
            return (
              <li className="menu-item" key={id} data-id={id}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span className={price ? "price" : "price na"}>
                  {price ?? dictionary.services.askPrice}
                </span>
              </li>
            );
          })}
        </ul>
        <div className="menu-foot">
          <p>{dictionary.services.openNote}</p>
          <BookLink className="btn-dark" />
        </div>
      </div>
    </section>
  );
};
