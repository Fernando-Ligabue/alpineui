"use client";

import { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import DemoBlock from "@/components/DemoBlock";
import { useI18n } from "@/i18n/I18nProvider";

function ContextMenuItem({ children, shortcut }: { children: React.ReactNode; shortcut?: string }) {
  return (
    <div className="flex items-center gap-2 w-full px-3 py-2 text-sm text-au-foreground hover:bg-au-accent cursor-pointer">
      <span>{children}</span>
      {shortcut && <span className="ml-auto text-xs tracking-widest text-au-muted-foreground">{shortcut}</span>}
    </div>
  );
}

function InteractiveContextMenu() {
  const { t } = useI18n();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isOpen, setIsOpen] = useState(false);

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setPosition({ x: e.clientX, y: e.clientY });
    setIsOpen(true);
  };


  useEffect(() => {
    const handleClick = () => setIsOpen(false);
    if (isOpen) document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [isOpen]);

  return (
    <div
      className="w-72 h-48 border border-au-border rounded-lg flex items-center justify-center cursor-context-menu"
      onContextMenu={handleContextMenu}
    >
      <span className="text-au-muted-foreground text-sm">{t("contextmenu.rightClickHere")}</span>

      {isOpen && (
        <div
          className="fixed z-50 min-w-48 rounded-md border border-au-border bg-au-background py-1 shadow-md"
          style={{ top: position.y, left: position.x }}
        >
          <ContextMenuItem shortcut="⌘C">{t("contextmenu.copy")}</ContextMenuItem>
          <ContextMenuItem shortcut="⌘V">{t("contextmenu.paste")}</ContextMenuItem>
          <div className="h-px my-1 bg-au-border" />
          <div className="flex items-center gap-2 w-full px-3 py-2 text-sm text-au-foreground hover:bg-au-accent cursor-pointer">
            <span>{t("contextmenu.share")}</span>
            <ChevronRight className="w-4 h-4" />
          </div>
          <div className="h-px my-1 bg-au-border" />
          <ContextMenuItem shortcut="⌘⌫">{t("contextmenu.delete")}</ContextMenuItem>
        </div>
      )}
    </div>
  );
}

export default function ContextMenuPage() {
  const { t } = useI18n();
  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-au-foreground mb-2">{t("contextMenu.title")}</h1>
      <p className="text-au-muted-foreground mb-8">
        {t("contextMenu.description")}
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">{t("common.interactiveDemo")}</h2>
        <DemoBlock
          preview={<InteractiveContextMenu />}
          code={`<div x-data="{ open: false, x: 0, y: 0 }"
  @contextmenu.prevent="open = true; x = $event.clientX; y = $event.clientY"
  @click.outside="open = false"
  class="w-72 h-48 border border-gray-200 rounded-lg flex items-center justify-center cursor-context-menu"
>
  <span class="text-gray-500 text-sm">Right-click here</span>

  <div x-show="open"
    :style="'top: ' + y + 'px; left: ' + x + 'px'"
    class="fixed z-50 min-w-48 rounded-md border border-gray-200 bg-white py-1 shadow-md"
  >
    <div class="flex items-center gap-2 w-full px-3 py-2 text-sm text-gray-900 hover:bg-gray-100 cursor-pointer">Copy</div>
    <div class="flex items-center gap-2 w-full px-3 py-2 text-sm text-gray-900 hover:bg-gray-100 cursor-pointer">Paste</div>
    <div class="h-px my-1 bg-gray-200" />
    <div class="flex items-center gap-2 w-full px-3 py-2 text-sm text-gray-900 hover:bg-gray-100 cursor-pointer">
      Share
      <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
      </svg>
    </div>
  </div>
</div>`}
        />
      </section>
    </div>
  );
}
