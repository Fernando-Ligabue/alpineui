"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";

import en from "./en.json";
import pt from "./pt.json";

export type Locale = "pt" | "en";
type Translations = Record<string, string>;

const translations: Record<Locale, Translations> = {
  en,
  pt,
};

interface I18nContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [locale, setLocaleState] = useState<Locale>("pt");

  useEffect(() => {
    const stored = localStorage.getItem("alpineui-locale");

    if (stored === "en" || stored === "pt") {
      setLocaleState(stored);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang =
      locale === "pt" ? "pt-PT" : "en";
  }, [locale]);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("alpineui-locale", newLocale);
  }, []);

  const t = useCallback(
    (key: string): string => {
      return translations[locale]?.[key] ?? key;
    },
    [locale]
  );

  return (
    <I18nContext.Provider
      value={{
        locale,
        setLocale,
        t,
      }}
    >
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);

  if (!ctx) {
    throw new Error(
      "useI18n must be used within I18nProvider"
    );
  }

  return ctx;
}