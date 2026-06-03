"use client";

import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import { useI18n } from "@/i18n/I18nProvider";

interface MobileHeaderProps {
  onMenuToggle: () => void;
  isOpen: boolean;
}

export default function MobileHeader({ onMenuToggle, isOpen }: MobileHeaderProps) {
  const { t } = useI18n();
  return (
    <header className="mobile-header">
      <div className="flex items-center justify-between h-16 px-4 border-b border-au-border bg-au-background">
        <Logo size="md" />
        
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
          <button
            onClick={onMenuToggle}
            className="p-2 rounded-md hover:bg-au-accent transition-colors"
            aria-label={t("mobileHeader.toggleMenu")}
          >
          {isOpen ? (
            <X className="w-6 h-6 text-au-foreground" />
          ) : (
            <Menu className="w-6 h-6 text-au-foreground" />
          )}
        </button>
        </div>
      </div>
    </header>
  );
}
