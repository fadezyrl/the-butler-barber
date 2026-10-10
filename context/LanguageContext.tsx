"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import {
  getDictionary,
  localeDirection,
  type Dictionary,
  type Locale,
} from "@/data/dictionary";

type LanguageContextValue = {
  locale: Locale;
  dictionary: Dictionary;
  direction: "ltr" | "rtl";
  setLocale: (locale: Locale) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "bb-locale";

type LanguageProviderProps = {
  children: ReactNode;
  initialLocale?: Locale;
};

export const LanguageProvider = ({
  children,
  initialLocale = "en",
}: LanguageProviderProps): React.JSX.Element => {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "en" || stored === "ur") {
        setLocaleState(stored);
      }
    } catch {
      // ignore storage errors
    }
  }, []);

  useEffect(() => {
    const dir = localeDirection(locale);
    document.documentElement.lang = locale === "ur" ? "ur" : "en";
    document.documentElement.dir = dir;
    try {
      window.localStorage.setItem(STORAGE_KEY, locale);
    } catch {
      // ignore storage errors
    }
  }, [locale]);

  const setLocale = (next: Locale): void => {
    setLocaleState(next);
  };

  const value: LanguageContextValue = {
    locale,
    dictionary: getDictionary(locale),
    direction: localeDirection(locale),
    setLocale,
  };

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextValue => {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
};
