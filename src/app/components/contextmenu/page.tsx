"use client";

import { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import DemoBlock from "@/components/DemoBlock";

function ContextMenuItem({ children, shortcut }: { children: React.ReactNode; shortcut?: string }) {
  return (
    <div className="flex items-center gap-2 w-full px-3 py-2 text-sm text-gray-900 hover:bg-gray-100 cursor-pointer">
      <span>{children}</span>
      {shortcut && <span className="ml-auto text-xs tracking-widest text-gray-500">{shortcut}</span>}
    </div>
  );
}

function InteractiveContextMenu() {
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
      className="w-72 h-48 border border-gray-200 rounded-lg flex items-center justify-center cursor-context-menu"
      onContextMenu={handleContextMenu}
    >
      <span className="text-gray-500 text-sm">Right-click here</span>

      {isOpen && (
        <div
          className="fixed z-50 min-w-48 rounded-md border border-gray-200 bg-white py-1 shadow-md"
          style={{ top: position.y, left: position.x }}
        >
          <ContextMenuItem shortcut="⌘C">Copy</ContextMenuItem>
          <ContextMenuItem shortcut="⌘V">Paste</ContextMenuItem>
          <div className="h-px my-1 bg-gray-200" />
          <div className="flex items-center gap-2 w-full px-3 py-2 text-sm text-gray-900 hover:bg-gray-100 cursor-pointer">
            <span>Share</span>
            <ChevronRight className="w-4 h-4" />
          </div>
          <div className="h-px my-1 bg-gray-200" />
          <ContextMenuItem shortcut="⌘⌫">Delete</ContextMenuItem>
        </div>
      )}
    </div>
  );
}

export default function ContextMenuPage() {
  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Context Menu</h1>
      <p className="text-gray-500 mb-8">
        A menu that appears on right-click.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Interactive Demo</h2>
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
