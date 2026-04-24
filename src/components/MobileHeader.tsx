"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";

interface MobileHeaderProps {
  onMenuToggle: () => void;
  isOpen: boolean;
}

export default function MobileHeader({ onMenuToggle, isOpen }: MobileHeaderProps) {
  return (
    <header className="mobile-header">
      <div className="flex items-center justify-between h-16 px-4 border-b border-au-border bg-au-background">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-au-primary rounded-lg flex items-center justify-center">
            <span className="text-au-primary-foreground font-bold text-sm">A</span>
          </div>
          <span className="font-semibold text-lg text-au-foreground">AlpineUI</span>
        </Link>
        
        <button
          onClick={onMenuToggle}
          className="p-2 rounded-md hover:bg-au-accent transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-au-foreground" />
          ) : (
            <Menu className="w-6 h-6 text-au-foreground" />
          )}
        </button>
      </div>
    </header>
  );
}
