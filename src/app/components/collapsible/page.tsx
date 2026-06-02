"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import DemoBlock from "@/components/DemoBlock";

function InteractiveCollapsible() {
  const [open, setOpen] = useState(true);

  return (
    <div className="w-full max-w-md border border-au-border rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-4 py-3 text-sm font-medium text-left text-au-foreground hover:bg-au-accent transition-colors"
      >
        <span>Show details</span>
        <ChevronDown className={`w-4 h-4 text-au-muted-foreground transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="px-4 pb-4 text-sm text-au-muted-foreground border-t border-au-border pt-3">
          This content can be shown or hidden by clicking the toggle above.
        </div>
      )}
    </div>
  );
}

export default function CollapsiblePage() {
  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-au-foreground mb-2">Collapsible</h1>
      <p className="text-au-muted-foreground mb-8">An expandable content container for showing and hiding sections.</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Interactive Demo</h2>
        <DemoBlock
          preview={<InteractiveCollapsible />}
          code={`<div x-data="{ open: true }" class="border border-gray-200 rounded-lg overflow-hidden">
  <button @click="open = !open"
    class="flex w-full items-center justify-between px-4 py-3 text-sm font-medium text-left text-gray-900 hover:bg-gray-50 transition-colors">
    <span>Show details</span>
    <svg :class="open ? 'rotate-180' : ''" class="w-4 h-4 text-gray-500 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
    </svg>
  </button>
  <div x-show="open" class="px-4 pb-4 text-sm text-gray-500 border-t border-gray-200 pt-3" x-transition>
    This content can be shown or hidden by clicking the toggle above.
  </div>
</div>`}
        />
      </section>
    </div>
  );
}
