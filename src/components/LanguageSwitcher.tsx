"use client";

import { useEffect, useState } from "react";
import { useI18n } from "@/i18n/I18nProvider";
import type { Locale } from "@/i18n/I18nProvider";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="inline-flex rounded-md border border-au-border overflow-hidden h-[30px]" />;
  }

  return (
    <div className="inline-flex rounded-md border border-au-border overflow-hidden">
      <button
        onClick={() => setLocale("pt" as Locale)}
        aria-pressed={locale === "pt"}
        className={`px-2.5 py-1.5 text-xs font-medium transition-colors ${
          locale === "pt"
            ? "bg-au-primary text-au-primary-foreground"
            : "bg-au-background text-au-foreground hover:bg-au-accent"
        }`}
      >
        PT
      </button>
      <button
        onClick={() => setLocale("en" as Locale)}
        aria-pressed={locale === "en"}
        className={`px-2.5 py-1.5 text-xs font-medium transition-colors ${
          locale === "en"
            ? "bg-au-primary text-au-primary-foreground"
            : "bg-au-background text-au-foreground hover:bg-au-accent"
        }`}
      >
        EN
      </button>
    </div>
  );
}
