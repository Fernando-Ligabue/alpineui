"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronRight, Check } from "lucide-react";
import DemoBlock from "@/components/DemoBlock";
import { InstallCommand } from "@/components/InstallCommand";

function ContextMenuItem({ children, shortcut }: { children: React.ReactNode; shortcut?: string }) {
  return (
    <div className="au-context-menu-item">
      <span>{children}</span>
      {shortcut && <span className="au-context-menu-shortcut">{shortcut}</span>}
    </div>
  );
}

function InteractiveContextMenu() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

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
      <span className="text-au-muted-foreground text-sm">Right-click here</span>

      {isOpen && (
        <div
          className="au-context-menu"
          style={{ top: position.y, left: position.x }}
        >
          <ContextMenuItem shortcut="⌘C">Copy</ContextMenuItem>
          <ContextMenuItem shortcut="⌘V">Paste</ContextMenuItem>
          <div className="au-context-menu-separator" />
          <div className="au-context-menu-item">
            <span>Share</span>
            <ChevronRight className="w-4 h-4" />
          </div>
          <div className="au-context-menu-separator" />
          <ContextMenuItem shortcut="⌘⌫">Delete</ContextMenuItem>
        </div>
      )}
    </div>
  );
}

export default function ContextMenuPage() {
  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-au-foreground mb-2">Context Menu</h1>
      <p className="text-au-muted-foreground mb-8">
        A menu that appears on right-click.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Installation</h2>
        <InstallCommand command="npx alpineui add contextmenu" />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Interactive Demo</h2>
        <DemoBlock
          preview={<InteractiveContextMenu />}
          code={`return (
  <div onContextMenu={handleContextMenu}>
    Right-click here
    
    {isOpen && (
      <div class="au-context-menu" style={{ top: y, left: x }}>
        <div class="au-context-menu-item">Copy</div>
        <div class="au-context-menu-item">Paste</div>
        <div class="au-context-menu-separator" />
        <div class="au-context-menu-item">
          Share
          <ChevronRight class="w-4 h-4" />
        </div>
      </div>
    )}
  </div>
);`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">CSS Classes Reference</h2>
        <div className="border border-au-border rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-au-secondary">
              <tr>
                <th className="text-left px-4 py-3 font-medium">Class</th>
                <th className="text-left px-4 py-3 font-medium">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-au-border">
              <tr><td className="px-4 py-2 font-mono text-xs">au-context-menu</td><td className="px-4 py-2">Menu container</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-context-menu-item</td><td className="px-4 py-2">Menu item</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-context-menu-separator</td><td className="px-4 py-2">Separator</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}