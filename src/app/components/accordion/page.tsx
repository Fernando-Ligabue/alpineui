"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import DemoBlock from "@/components/DemoBlock";
import { InstallCommand } from "@/components/InstallCommand";

function InteractiveAccordionDefault() {
  const [openItem, setOpenItem] = useState<string | null>("faq-1");

  const items = [
    { id: "faq-1", title: "What is AlpineUI?", content: "AlpineUI is a collection of beautiful, copy-paste ready components built with Alpine.js and Tailwind CSS." },
    { id: "faq-2", title: "How do I install it?", content: "You can install individual components using our CLI: npx alpineui add button, or copy the CSS directly from our docs." },
    { id: "faq-3", title: "Can I customize the styles?", content: "Yes! All components use CSS variables that you can override to match your design system. Check the Theming page for more details." },
  ];

  return (
    <div className="au-accordion au-accordion-default w-full max-w-md">
      {items.map((item) => (
        <div key={item.id} className="au-accordion-item">
          <button
            className="au-accordion-trigger"
            onClick={() => setOpenItem(openItem === item.id ? null : item.id)}
            data-state={openItem === item.id ? "open" : undefined}
          >
            <span className="au-accordion-title">{item.title}</span>
            <ChevronDown className="au-accordion-icon" />
          </button>
          {openItem === item.id && (
            <div className="au-accordion-content">
              <p className="text-sm text-au-muted-foreground">{item.content}</p>
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
    <div className="au-accordion au-accordion-ghost w-full max-w-md">
      {items.map((item) => (
        <div key={item.id} className="au-accordion-item">
          <button
            className="au-accordion-trigger"
            onClick={() => setOpenItem(openItem === item.id ? null : item.id)}
            data-state={openItem === item.id ? "open" : undefined}
          >
            <span className="au-accordion-title">{item.title}</span>
            <ChevronDown className="au-accordion-icon" />
          </button>
          {openItem === item.id && (
            <div className="au-accordion-content">
              <p className="text-sm text-au-muted-foreground">{item.content}</p>
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
    <div className="au-accordion au-accordion-bordered w-full max-w-md">
      {items.map((item) => (
        <div key={item.id} className="au-accordion-item">
          <button
            className="au-accordion-trigger"
            onClick={() => toggleItem(item.id)}
            data-state={openItems.includes(item.id) ? "open" : undefined}
          >
            <span className="au-accordion-title">{item.title}</span>
            <ChevronDown className="au-accordion-icon" />
          </button>
          {openItems.includes(item.id) && (
            <div className="au-accordion-content">
              <p className="text-sm text-au-muted-foreground">{item.content}</p>
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
      <h1 className="text-3xl font-bold text-au-foreground mb-2">Accordion</h1>
      <p className="text-au-muted-foreground mb-8">
        An expandable content component for showing and hiding sections.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Installation</h2>
        <InstallCommand command="npx alpineui add accordion" />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Interactive Demo</h2>
        <DemoBlock
          preview={<InteractiveAccordionDefault />}
          code={`function App() {
  const [openItem, setOpenItem] = useState(null);

  const items = [
    { id: "faq-1", title: "Question 1", content: "Answer 1" },
    { id: "faq-2", title: "Question 2", content: "Answer 2" },
  ];

  return (
    <div class="au-accordion au-accordion-default">
      {items.map((item) => (
        <div key={item.id} class="au-accordion-item">
          <button
            class="au-accordion-trigger"
            onClick={() => setOpenItem(openItem === item.id ? null : item.id)}
            data-state={openItem === item.id ? "open" : undefined}
          >
            <span class="au-accordion-title">{item.title}</span>
            <ChevronDown class="au-accordion-icon" />
          </button>
          {openItem === item.id && (
            <div class="au-accordion-content">
              <p>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Variants</h2>
        <DemoBlock
          preview={
            <div className="space-y-8 w-full max-w-md">
              <div>
                <h4 className="text-sm font-medium mb-2 text-au-muted-foreground">Default</h4>
                <InteractiveAccordionDefault />
              </div>
              <div>
                <h4 className="text-sm font-medium mb-2 text-au-muted-foreground">Ghost</h4>
                <InteractiveAccordionGhost />
              </div>
              <div>
                <h4 className="text-sm font-medium mb-2 text-au-muted-foreground">Bordered (Multi-select)</h4>
                <InteractiveAccordionMultiple />
              </div>
            </div>
          }
          code={`<!-- Default -->
<div class="au-accordion au-accordion-default">
  <div class="au-accordion-item">...</div>
</div>

<!-- Ghost -->
<div class="au-accordion au-accordion-ghost">
  <div class="au-accordion-item">...</div>
</div>

<!-- Bordered -->
<div class="au-accordion au-accordion-bordered">
  <div class="au-accordion-item">...</div>
</div>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Sizes</h2>
        <DemoBlock
          preview={
            <div className="space-y-6 w-full max-w-md">
              <div className="au-accordion au-accordion-default au-accordion-sm">
                <div className="au-accordion-item">
                  <button className="au-accordion-trigger" data-state="open">
                    <span className="au-accordion-title">Small</span>
                    <ChevronDown className="au-accordion-icon" />
                  </button>
                  <div className="au-accordion-content">
                    <p className="text-sm text-au-muted-foreground">Small accordion item.</p>
                  </div>
                </div>
              </div>
              <div className="au-accordion au-accordion-default au-accordion-md">
                <div className="au-accordion-item">
                  <button className="au-accordion-trigger" data-state="open">
                    <span className="au-accordion-title">Medium</span>
                    <ChevronDown className="au-accordion-icon" />
                  </button>
                  <div className="au-accordion-content">
                    <p className="text-sm text-au-muted-foreground">Medium accordion item.</p>
                  </div>
                </div>
              </div>
              <div className="au-accordion au-accordion-default au-accordion-lg">
                <div className="au-accordion-item">
                  <button className="au-accordion-trigger" data-state="open">
                    <span className="au-accordion-title">Large</span>
                    <ChevronDown className="au-accordion-icon" />
                  </button>
                  <div className="au-accordion-content">
                    <p className="text-sm text-au-muted-foreground">Large accordion item.</p>
                  </div>
                </div>
              </div>
            </div>
          }
          code={`<div class="au-accordion au-accordion-default au-accordion-sm">...</div>
<div class="au-accordion au-accordion-default au-accordion-md">...</div>
<div class="au-accordion au-accordion-default au-accordion-lg">...</div>`}
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
              <tr><td className="px-4 py-2 font-mono text-xs">au-accordion</td><td className="px-4 py-2">Container base</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-accordion-item</td><td className="px-4 py-2">Accordion item wrapper</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-accordion-trigger</td><td className="px-4 py-2">Trigger button</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-accordion-title</td><td className="px-4 py-2">Title text</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-accordion-icon</td><td className="px-4 py-2">Chevron icon</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-accordion-content</td><td className="px-4 py-2">Content area</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-accordion-default</td><td className="px-4 py-2">Default variant</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-accordion-ghost</td><td className="px-4 py-2">Ghost variant</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-accordion-bordered</td><td className="px-4 py-2">Bordered variant</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-accordion-sm|md|lg</td><td className="px-4 py-2">Sizes</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}