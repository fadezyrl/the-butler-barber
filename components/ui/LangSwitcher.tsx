"use client";

import type { JSX } from "react";

import { useLanguage } from "@/context/LanguageContext";
import type { Locale } from "@/data/dictionary";

export const LangSwitcher = (): JSX.Element => {
  const { locale, dictionary, setLocale } = useLanguage();

  const select = (next: Locale): void => {
    if (next !== locale) setLocale(next);
  };

  return (
    <div className="lang-switch" role="group" aria-label={dictionary.lang.switchTo}>
      <button
        type="button"
        aria-pressed={locale === "en"}
        onClick={() => select("en")}
      >
        {dictionary.lang.en}
      </button>
      <span aria-hidden="true">/</span>
      <button
        type="button"
        aria-pressed={locale === "ar"}
        onClick={() => select("ar")}
      >
        {dictionary.lang.ar}
      </button>
    </div>
  );
};
