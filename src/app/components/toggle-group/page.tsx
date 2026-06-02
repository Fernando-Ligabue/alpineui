"use client";

import { useState } from "react";
import DemoBlock from "@/components/DemoBlock";

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

function InteractiveMultiple() {
  const [selected, setSelected] = useState<string[]>(["bold", "italic"]);

  const toggle = (value: string) => {
    setSelected((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const options = [
    { value: "bold", label: "B" },
    { value: "italic", label: "I" },
    { value: "underline", label: "U" },
    { value: "strike", label: "S" },
  ];

  return (
    <div className="inline-flex rounded-md border border-au-border overflow-hidden">
      {options.map((opt) => (
        <button
          key={opt.value}
          onClick={() => toggle(opt.value)}
          className={`w-9 h-9 text-sm font-medium transition-colors ${
            selected.includes(opt.value)
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

export default function ToggleGroupPage() {
  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-au-foreground mb-2">Toggle Group</h1>
      <p className="text-au-muted-foreground mb-8">A group of toggle buttons for selecting one or multiple options.</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Single Select</h2>
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
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Multiple Select</h2>
        <DemoBlock
          preview={<InteractiveMultiple />}
          code={`<div x-data="{ selected: ['bold', 'italic'] }" class="inline-flex rounded-md border border-gray-300 overflow-hidden">
  <template x-for="opt in [{v:'bold',l:'B'},{v:'italic',l:'I'},{v:'underline',l:'U'},{v:'strike',l:'S'}]" :key="opt.v">
    <button @click="selected.includes(opt.v) ? selected = selected.filter(s => s !== opt.v) : selected = [...selected, opt.v]"
      :class="selected.includes(opt.v) ? 'bg-gray-900 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'"
      class="w-9 h-9 text-sm font-medium transition-colors border-r border-gray-300 last:border-r-0"
      x-text="opt.l">
    </button>
  </template>
</div>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Sizes</h2>
        <DemoBlock
          preview={
            <div className="flex flex-wrap items-center gap-6">
              <div className="inline-flex rounded-md border border-au-border overflow-hidden">
                <button className="px-2 py-1 text-xs font-medium bg-au-primary text-au-primary-foreground border-r border-au-border">XS</button>
                <button className="px-2 py-1 text-xs font-medium bg-au-background text-au-foreground hover:bg-au-accent">S</button>
              </div>
              <div className="inline-flex rounded-md border border-au-border overflow-hidden">
                <button className="px-3 py-1.5 text-sm font-medium bg-au-primary text-au-primary-foreground border-r border-au-border">S</button>
                <button className="px-3 py-1.5 text-sm font-medium bg-au-background text-au-foreground hover:bg-au-accent">M</button>
              </div>
              <div className="inline-flex rounded-md border border-au-border overflow-hidden">
                <button className="px-4 py-2 text-sm font-medium bg-au-primary text-au-primary-foreground border-r border-au-border">M</button>
                <button className="px-4 py-2 text-sm font-medium bg-au-background text-au-foreground hover:bg-au-accent">L</button>
              </div>
              <div className="inline-flex rounded-md border border-au-border overflow-hidden">
                <button className="px-5 py-2.5 text-base font-medium bg-au-primary text-au-primary-foreground border-r border-au-border">L</button>
                <button className="px-5 py-2.5 text-base font-medium bg-au-background text-au-foreground hover:bg-au-accent">XL</button>
              </div>
            </div>
          }
          code={`<div class="inline-flex rounded-md border border-gray-300 overflow-hidden">
  <button class="px-2 py-1 text-xs font-medium bg-gray-900 text-white border-r border-gray-700">XS</button>
  <button class="px-2 py-1 text-xs font-medium bg-white text-gray-700 hover:bg-gray-50">S</button>
</div>

<div class="inline-flex rounded-md border border-gray-300 overflow-hidden">
  <button class="px-3 py-1.5 text-sm font-medium bg-gray-900 text-white border-r border-gray-700">S</button>
  <button class="px-3 py-1.5 text-sm font-medium bg-white text-gray-700 hover:bg-gray-50">M</button>
</div>

<div class="inline-flex rounded-md border border-gray-300 overflow-hidden">
  <button class="px-4 py-2 text-sm font-medium bg-gray-900 text-white border-r border-gray-700">M</button>
  <button class="px-4 py-2 text-sm font-medium bg-white text-gray-700 hover:bg-gray-50">L</button>
</div>

<div class="inline-flex rounded-md border border-gray-300 overflow-hidden">
  <button class="px-5 py-2.5 text-base font-medium bg-gray-900 text-white border-r border-gray-700">L</button>
  <button class="px-5 py-2.5 text-base font-medium bg-white text-gray-700 hover:bg-gray-50">XL</button>
</div>`}
        />
      </section>
    </div>
  );
}
