"use client";

import { createContext, useContext, type ReactNode } from "react";

import { getDictionary, type Dictionary } from "@/data/dictionary";

type LanguageContextValue = {
  dictionary: Dictionary;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

type LanguageProviderProps = {
  children: ReactNode;
};

export const LanguageProvider = ({
  children,
}: LanguageProviderProps): React.JSX.Element => {
  const value: LanguageContextValue = {
    dictionary: getDictionary("en"),
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
