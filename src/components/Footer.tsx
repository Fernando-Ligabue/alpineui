"use client";

import { Github } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="footer-desktop border-t border-au-border bg-au-secondary py-6 px-8">
      <div className="max-w-4xl flex items-center justify-between">
        <div className="flex items-center gap-4 text-sm text-au-muted-foreground">
          <a
            href="https://github.com/Fernando-Ligabue/alpineui"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-au-foreground transition-colors"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
          <span className="text-au-border">|</span>
          <span>{t("footer.license")}</span>
        </div>
        <div className="flex items-center gap-1.5 text-sm text-au-muted-foreground">
          <span>{t("footer.madeBy")} <a href="https://fernandodornelles.netlify.app" target="_blank" className="hover:text-au-foreground transition-colors">FDWeb Developer</a></span>
        </div>
      </div>
    </footer>
  );
}
