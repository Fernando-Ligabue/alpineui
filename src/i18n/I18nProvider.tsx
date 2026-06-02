"use client";

import { createContext, useContext, useState, useEffect, useCallback } from "react";
import en from "./en.json";
import pt from "./pt.json";

export type Locale = "pt" | "en";
type Translations = Record<string, string>;

const translations: Record<Locale, Translations> = { en, pt };

interface I18nContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("alpineui-locale");
      if (stored === "en" || stored === "pt") return stored;
    }
    return "pt";
  });

  useEffect(() => {
    document.documentElement.lang = locale === "pt" ? "pt-PT" : "en";
  }, [locale]);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    localStorage.setItem("alpineui-locale", l);
  }, []);

  const t = useCallback(
    (key: string): string => translations[locale]?.[key] ?? key,
    [locale]
  );

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
