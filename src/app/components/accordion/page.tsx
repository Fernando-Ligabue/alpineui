"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import DemoBlock from "@/components/DemoBlock";

function InteractiveAccordionDefault() {
  const [openItem, setOpenItem] = useState<string | null>("faq-1");

  const items = [
    { id: "faq-1", title: "What is AlpineUI?", content: "AlpineUI is a collection of beautiful, copy-paste ready components built with Alpine.js and Tailwind CSS." },
    { id: "faq-2", title: "How do I install it?", content: "Just copy the component HTML from this page and paste it into your project. No CLI, no npm install needed." },
    { id: "faq-3", title: "Can I customize the styles?", content: "Yes! All components use CSS variables that you can override to match your design system. Check the Theming page for more details." },
  ];

  return (
    <div className="divide-y divide-gray-200 border border-gray-200 rounded-lg w-full max-w-md">
      {items.map((item) => (
        <div key={item.id} className="[&:first-child>div]:rounded-t-lg [&:last-child>div]:rounded-b-lg">
          <button
            className="flex w-full items-center justify-between px-4 py-4 text-sm font-medium text-left text-gray-900 hover:bg-gray-50 transition-colors"
            onClick={() => setOpenItem(openItem === item.id ? null : item.id)}
            data-state={openItem === item.id ? "open" : undefined}
          >
            {item.title}
            <ChevronDown className={`w-4 h-4 shrink-0 text-gray-500 transition-transform duration-200 ${openItem === item.id ? "rotate-180" : ""}`} />
          </button>
          {openItem === item.id && (
            <div className="px-4 pb-4 text-sm text-gray-500">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function InteractiveAccordionGhost() {
  const [openItem, setOpenItem] = useState<string | null>("item-1");

  const items = [
    { id: "item-1", title: "Getting Started", content: "Learn how to set up AlpineUI in your project." },
    { id: "item-2", title: "Components", content: "Browse our collection of ready-to-use components." },
    { id: "item-3", title: "Theming", content: "Customize colors, spacing, and more with CSS variables." },
  ];

  return (
    <div className="w-full max-w-md">
      {items.map((item) => (
        <div key={item.id}>
          <button
            className="flex w-full items-center justify-between px-4 py-4 text-sm font-medium text-left text-gray-900 hover:bg-gray-50 transition-colors rounded-lg"
            onClick={() => setOpenItem(openItem === item.id ? null : item.id)}
            data-state={openItem === item.id ? "open" : undefined}
          >
            {item.title}
            <ChevronDown className={`w-4 h-4 shrink-0 text-gray-500 transition-transform duration-200 ${openItem === item.id ? "rotate-180" : ""}`} />
          </button>
          {openItem === item.id && (
            <div className="px-4 pb-4 text-sm text-gray-500">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function InteractiveAccordionMultiple() {
  const [openItems, setOpenItems] = useState<string[]>(["item-1"]);

  const items = [
    { id: "item-1", title: "Multi-select allowed", content: "This accordion allows multiple items to be open at the same time." },
    { id: "item-2", title: "Click to toggle", content: "Click any item to open or close it independently." },
    { id: "item-3", title: "Great for FAQs", content: "Perfect for frequently asked questions sections." },
  ];

  const toggleItem = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="w-full max-w-md space-y-2">
      {items.map((item) => (
        <div key={item.id} className="border border-gray-200 rounded-lg overflow-hidden">
          <button
            className="flex w-full items-center justify-between px-4 py-4 text-sm font-medium text-left text-gray-900 hover:bg-gray-50 transition-colors"
            onClick={() => toggleItem(item.id)}
            data-state={openItems.includes(item.id) ? "open" : undefined}
          >
            {item.title}
            <ChevronDown className={`w-4 h-4 shrink-0 text-gray-500 transition-transform duration-200 ${openItems.includes(item.id) ? "rotate-180" : ""}`} />
          </button>
          {openItems.includes(item.id) && (
            <div className="px-4 pb-4 text-sm text-gray-500 border-t border-gray-200">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function AccordionPage() {
  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Accordion</h1>
      <p className="text-gray-500 mb-8">
        An expandable content component for showing and hiding sections.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Interactive Demo</h2>
        <DemoBlock
          preview={<InteractiveAccordionDefault />}
          code={`<div x-data="{ open: 'faq-1' }" class="divide-y divide-gray-200 border border-gray-200 rounded-lg">
  <div>
    <button @click="open = open === 'faq-1' ? null : 'faq-1'"
      class="flex w-full items-center justify-between px-4 py-4 text-sm font-medium text-left text-gray-900 hover:bg-gray-50 transition-colors">
      <span>What is AlpineUI?</span>
      <svg :class="open === 'faq-1' ? 'rotate-180' : ''" class="w-4 h-4 shrink-0 text-gray-500 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
      </svg>
    </button>
    <div x-show="open === 'faq-1'" class="px-4 pb-4 text-sm text-gray-500" x-transition>
      AlpineUI is a collection of beautiful, copy-paste ready components built with Alpine.js and Tailwind CSS.
    </div>
  </div>
  <div>
    <button @click="open = open === 'faq-2' ? null : 'faq-2'"
      class="flex w-full items-center justify-between px-4 py-4 text-sm font-medium text-left text-gray-900 hover:bg-gray-50 transition-colors">
      <span>How do I install it?</span>
      <svg :class="open === 'faq-2' ? 'rotate-180' : ''" class="w-4 h-4 shrink-0 text-gray-500 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
      </svg>
    </button>
    <div x-show="open === 'faq-2'" class="px-4 pb-4 text-sm text-gray-500" x-transition>
      Copy the component HTML directly from this page and paste it into your project.
    </div>
  </div>
  <div>
    <button @click="open = open === 'faq-3' ? null : 'faq-3'"
      class="flex w-full items-center justify-between px-4 py-4 text-sm font-medium text-left text-gray-900 hover:bg-gray-50 transition-colors">
      <span>Can I customize the styles?</span>
      <svg :class="open === 'faq-3' ? 'rotate-180' : ''" class="w-4 h-4 shrink-0 text-gray-500 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
      </svg>
    </button>
    <div x-show="open === 'faq-3'" class="px-4 pb-4 text-sm text-gray-500" x-transition>
      Yes! All components use Tailwind utility classes that you can override directly.
    </div>
  </div>
</div>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Variants</h2>
        <DemoBlock
          preview={
            <div className="space-y-8 w-full max-w-md">
              <div>
                <h4 className="text-sm font-medium mb-2 text-gray-500">Default</h4>
                <InteractiveAccordionDefault />
              </div>
              <div>
                <h4 className="text-sm font-medium mb-2 text-gray-500">Ghost</h4>
                <InteractiveAccordionGhost />
              </div>
              <div>
                <h4 className="text-sm font-medium mb-2 text-gray-500">Bordered (Multi-select)</h4>
                <InteractiveAccordionMultiple />
              </div>
            </div>
          }
          code={`<!-- Default -->
<div class="divide-y divide-gray-200 border border-gray-200 rounded-lg">
  <div>...</div>
</div>

<!-- Ghost -->
<div>
  <div>...</div>
</div>

<!-- Bordered -->
<div class="space-y-2">
  <div class="border border-gray-200 rounded-lg overflow-hidden">...</div>
</div>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Sizes</h2>
        <DemoBlock
          preview={
            <div className="space-y-6 w-full max-w-md">
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div>
                  <button className="flex w-full items-center justify-between px-3 py-2 text-xs font-medium text-left text-gray-900 hover:bg-gray-50 transition-colors" data-state="open">
                    Small
                    <ChevronDown className="w-3 h-3 shrink-0 text-gray-500 transition-transform duration-200" />
                  </button>
                  <div className="px-3 pb-2 text-xs text-gray-500">
                    Small accordion item.
                  </div>
                </div>
              </div>
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div>
                  <button className="flex w-full items-center justify-between px-4 py-4 text-sm font-medium text-left text-gray-900 hover:bg-gray-50 transition-colors" data-state="open">
                    Medium
                    <ChevronDown className="w-4 h-4 shrink-0 text-gray-500 transition-transform duration-200" />
                  </button>
                  <div className="px-4 pb-4 text-sm text-gray-500">
                    Medium accordion item.
                  </div>
                </div>
              </div>
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div>
                  <button className="flex w-full items-center justify-between px-5 py-5 text-base font-medium text-left text-gray-900 hover:bg-gray-50 transition-colors" data-state="open">
                    Large
                    <ChevronDown className="w-5 h-5 shrink-0 text-gray-500 transition-transform duration-200" />
                  </button>
                  <div className="px-5 pb-5 text-base text-gray-500">
                    Large accordion item.
                  </div>
                </div>
              </div>
            </div>
          }
          code={`<!-- Small -->
<div class="border border-gray-200 rounded-lg overflow-hidden">
  <button class="flex w-full items-center justify-between px-3 py-2 text-xs font-medium ...">Small</button>
  <div class="px-3 pb-2 text-xs text-gray-500">...</div>
</div>

<!-- Medium -->
<div class="border border-gray-200 rounded-lg overflow-hidden">
  <button class="flex w-full items-center justify-between px-4 py-4 text-sm font-medium ...">Medium</button>
  <div class="px-4 pb-4 text-sm text-gray-500">...</div>
</div>

<!-- Large -->
<div class="border border-gray-200 rounded-lg overflow-hidden">
  <button class="flex w-full items-center justify-between px-5 py-5 text-base font-medium ...">Large</button>
  <div class="px-5 pb-5 text-base text-gray-500">...</div>
</div>`}
        />
      </section>
    </div>
  );
}
