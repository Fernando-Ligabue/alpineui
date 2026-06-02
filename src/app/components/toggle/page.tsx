"use client";

import { useState } from "react";
import DemoBlock from "@/components/DemoBlock";

function InteractiveToggle() {
  const [pressed, setPressed] = useState(false);

  return (
    <button
      onClick={() => setPressed(!pressed)}
      className={`inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-md border transition-colors ${
        pressed
          ? "bg-au-primary text-au-primary-foreground border-au-primary"
          : "bg-au-background text-au-foreground border-au-border hover:bg-au-accent"
      }`}
      aria-pressed={pressed}
    >
      <svg className={`w-4 h-4 ${pressed ? "text-au-primary-foreground" : "text-au-muted-foreground"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
      {pressed ? "Active" : "Inactive"}
    </button>
  );
}

function InteractiveToggleGroup() {
  const [selected, setSelected] = useState("bold");

  const options = [
    { value: "bold", label: "Bold" },
    { value: "italic", label: "Italic" },
    { value: "underline", label: "Underline" },
  ];

  return (
    <div className="inline-flex rounded-md border border-au-border overflow-hidden">
      {options.map((opt) => (
        <button
          key={opt.value}
          onClick={() => setSelected(opt.value)}
          className={`px-4 py-2 text-sm font-medium transition-colors ${
            selected === opt.value
              ? "bg-au-primary text-au-primary-foreground"
              : "bg-au-background text-au-foreground hover:bg-au-accent"
          } ${opt !== options[options.length - 1] ? "border-r border-au-border" : ""}`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}

export default function TogglePage() {
  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-au-foreground mb-2">Toggle</h1>
      <p className="text-au-muted-foreground mb-8">A button that toggles between pressed and unpressed states.</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Interactive Demo</h2>
        <DemoBlock
          preview={<InteractiveToggle />}
          code={`<div x-data="{ pressed: false }">
  <button @click="pressed = !pressed" :class="pressed ? 'bg-gray-900 text-white border-gray-900' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'"
    class="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-md border transition-colors"
    :aria-pressed="pressed">
    <svg x-show="pressed" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
    </svg>
    <span x-text="pressed ? 'Active' : 'Inactive'"></span>
  </button>
</div>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Toggle Group</h2>
        <DemoBlock
          preview={<InteractiveToggleGroup />}
          code={`<div x-data="{ selected: 'bold' }" class="inline-flex rounded-md border border-gray-300 overflow-hidden">
  <button @click="selected = 'bold'" :class="selected === 'bold' ? 'bg-gray-900 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'"
    class="px-4 py-2 text-sm font-medium transition-colors border-r border-gray-300">Bold</button>
  <button @click="selected = 'italic'" :class="selected === 'italic' ? 'bg-gray-900 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'"
    class="px-4 py-2 text-sm font-medium transition-colors border-r border-gray-300">Italic</button>
  <button @click="selected = 'underline'" :class="selected === 'underline' ? 'bg-gray-900 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'"
    class="px-4 py-2 text-sm font-medium transition-colors">Underline</button>
</div>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Sizes</h2>
        <DemoBlock
          preview={
            <div className="flex items-center gap-4">
              <button className="inline-flex items-center justify-center gap-2 px-3 py-1.5 text-xs font-medium rounded-md bg-au-primary text-au-primary-foreground border border-au-primary" aria-pressed>
                Small
              </button>
              <button className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-md bg-au-primary text-au-primary-foreground border border-au-primary" aria-pressed>
                Medium
              </button>
              <button className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-base font-medium rounded-md bg-au-primary text-au-primary-foreground border border-au-primary" aria-pressed>
                Large
              </button>
            </div>
          }
          code={`<!-- Small -->
<button class="inline-flex items-center justify-center gap-2 px-3 py-1.5 text-xs font-medium rounded-md bg-gray-900 text-white border border-gray-900">Small</button>

<!-- Medium -->
<button class="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-md bg-gray-900 text-white border border-gray-900">Medium</button>

<!-- Large -->
<button class="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-base font-medium rounded-md bg-gray-900 text-white border border-gray-900">Large</button>`}
        />
      </section>
    </div>
  );
}
