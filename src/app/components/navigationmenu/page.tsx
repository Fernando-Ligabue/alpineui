"use client";

import { useState } from "react";
import { ChevronDown, ExternalLink } from "lucide-react";
import DemoBlock from "@/components/DemoBlock";
import { InstallCommand } from "@/components/InstallCommand";

function InteractiveNavigationMenu() {
  const [active, setActive] = useState<string | null>(null);

  const menuItems = [
    { label: "Features", href: "#", items: ["Analytics", "Automation", "Integrations"] },
    { label: "Pricing", href: "#", items: ["Standard", "Pro", "Enterprise"] },
    { label: "About", href: "#" },
    { label: "Docs", href: "#", external: true },
  ];

  return (
    <nav className="au-navigation-menu">
      <div className="flex gap-1">
        {menuItems.map((item) => (
          <div key={item.label} className="relative">
            <button
              className={`au-navigation-menu-trigger ${active === item.label ? "active" : ""}`}
              onClick={() => setActive(active === item.label ? null : item.label)}
            >
              {item.label}
              {item.items && <ChevronDown className="w-4 h-4" />}
            </button>
            
            {item.items && active === item.label && (
              <div className="au-navigation-menu-content">
                {item.items.map((sub) => (
                  <a key={sub} href="#" className="au-navigation-menu-item">
                    <div>
                      <div className="font-medium">{sub}</div>
                      <div className="text-xs text-au-muted-foreground">Description here</div>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}

export default function NavigationMenuPage() {
  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-au-foreground mb-2">Navigation Menu</h1>
      <p className="text-au-muted-foreground mb-8">
        A navigation menu component with dropdown support.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Installation</h2>
        <InstallCommand command="npx alpineui add navigationmenu" />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Interactive Demo</h2>
        <DemoBlock preview={<InteractiveNavigationMenu />} code={`<nav class="au-navigation-menu">
  <button class="au-navigation-menu-trigger">
    Features
    <ChevronDown class="w-4 h-4" />
  </button>
  <div class="au-navigation-menu-content">
    <a href="#" class="au-navigation-menu-item">
      <div>Analytics</div>
      <div class="text-muted">Description</div>
    </a>
  </div>
</nav>`} />
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
              <tr><td className="px-4 py-2 font-mono text-xs">au-navigation-menu</td><td className="px-4 py-2">Menu container</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-navigation-menu-trigger</td><td className="px-4 py-2">Menu trigger button</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-navigation-menu-content</td><td className="px-4 py-2">Dropdown content</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-navigation-menu-item</td><td className="px-4 py-2">Menu item</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}