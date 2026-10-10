"use client";

import { useState } from "react";

import { useLanguage } from "@/context/LanguageContext";
import { SITE_CONFIG } from "@/data/site-config";

export const Reviews = (): React.JSX.Element => {
  const { dictionary } = useLanguage();
  const reviews = SITE_CONFIG.reviews;
  const [index, setIndex] = useState(0);

  return (
    <section className="reviews" id="reviews">
      <div className="q-mark" aria-hidden="true">
        “
      </div>
      <div className="review-body">
        {reviews.length === 0 ? (
          <div className="review-empty">
            <p className="review-quote">{dictionary.reviews.emptyQuote}</p>
            <p className="sm">{dictionary.reviews.emptyBody}</p>
            <div className="review-nav">
              <a
                className="link-line"
                href={SITE_CONFIG.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {dictionary.reviews.readOnGoogle}
              </a>
            </div>
          </div>
        ) : (
          <>
            <blockquote style={{ margin: 0 }}>
              <p className="review-quote">{reviews[index].quote}</p>
            </blockquote>
            <div className="review-by">
              <strong>{reviews[index].name}</strong>
              <span>{reviews[index].source}</span>
            </div>
            {reviews.length > 1 ? (
              <div className="review-nav">
                <button
                  type="button"
                  onClick={() =>
                    setIndex((i) => (i - 1 + reviews.length) % reviews.length)
                  }
                >
                  {dictionary.a11y.prevReview}
                </button>
                <button
                  type="button"
                  onClick={() => setIndex((i) => (i + 1) % reviews.length)}
                >
                  {dictionary.a11y.nextReview}
                </button>
              </div>
            ) : null}
          </>
        )}
      </div>
    </section>
  );
};
