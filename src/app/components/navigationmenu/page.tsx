"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import DemoBlock from "@/components/DemoBlock";

function InteractiveNavigationMenu() {
  const [active, setActive] = useState<string | null>(null);

  const menuItems = [
    { label: "Features", href: "#", items: ["Analytics", "Automation", "Integrations"] },
    { label: "Pricing", href: "#", items: ["Standard", "Pro", "Enterprise"] },
    { label: "About", href: "#" },
    { label: "Docs", href: "#", external: true },
  ];

  return (
    <nav className="relative z-10 flex max-w-max flex-1 items-center justify-center">
      <div className="group flex flex-1 list-none items-center justify-center space-x-1">
        {menuItems.map((item) => (
          <div key={item.label} className="relative">
            <button
              className={`group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-900 focus:outline-none ${active === item.label ? "bg-gray-100" : ""}`}
              onClick={() => setActive(active === item.label ? null : item.label)}
            >
              {item.label}
              {item.items && <ChevronDown className="w-4 h-4" />}
            </button>

            {item.items && active === item.label && (
              <div className="absolute top-full left-0 mt-1 w-48 rounded-md border border-gray-200 bg-white p-2 shadow-md">
                {item.items.map((sub) => (
                  <a key={sub} href="#" className="block select-none rounded-md p-2 text-sm leading-none text-gray-900 hover:bg-gray-100 focus:outline-none">
                    <div>
                      <div className="text-sm font-medium leading-none">{sub}</div>
                      <div className="text-xs text-gray-500">Description here</div>
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
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Navigation Menu</h1>
      <p className="text-gray-500 mb-8">
        A navigation menu component with dropdown support.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Interactive Demo</h2>
        <DemoBlock preview={<InteractiveNavigationMenu />} code={`<nav class="relative z-10 flex max-w-max flex-1 items-center justify-center">
  <div class="group flex flex-1 list-none items-center justify-center space-x-1">
    <div class="relative">
      <button class="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100">
        Features
        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
      </button>
      <div class="absolute top-full left-0 mt-1 w-48 rounded-md border border-gray-200 bg-white p-2 shadow-md">
        <a href="#" class="block select-none rounded-md p-2 text-sm leading-none text-gray-900 hover:bg-gray-100">
          <div>
            <div class="text-sm font-medium leading-none">Analytics</div>
            <div class="text-xs text-gray-500">Description</div>
          </div>
        </a>
      </div>
    </div>
  </div>
</nav>`} />
      </section>
    </div>
  );
}
