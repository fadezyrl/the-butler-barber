import { en } from "./en";
import { ur } from "./ur";
import type { Dictionary, Locale } from "./types";

export type { Dictionary, Locale };

export const dictionaries: Record<Locale, Dictionary> = {
  en,
  ur,
};

export const getDictionary = (locale: Locale): Dictionary =>
  dictionaries[locale];

export const localeDirection = (locale: Locale): "ltr" | "rtl" =>
  locale === "ur" ? "rtl" : "ltr";
