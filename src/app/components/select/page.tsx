"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";
import DemoBlock from "@/components/DemoBlock";

interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

function InteractiveSelect() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  const options = [
    { value: "react", label: "React" },
    { value: "vue", label: "Vue" },
    { value: "angular", label: "Angular" },
    { value: "svelte", label: "Svelte" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full max-w-sm" ref={ref}>
      <button
        className="flex h-10 w-full items-center justify-between rounded-md border border-au-border bg-au-background px-3 py-2 text-sm placeholder:text-au-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-au-ring disabled:cursor-not-allowed disabled:opacity-50"
        onClick={() => setIsOpen(!isOpen)}
        data-placeholder={!selected ? "true" : undefined}
      >
        <span>{selected ? options.find((o) => o.value === selected)?.label : "Select a framework"}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && (
        <div className="absolute z-50 w-full mt-1 rounded-md border border-au-border bg-au-background shadow-md" data-state="open">
          {options.map((option) => (
            <div
              key={option.value}
              className="relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 px-2 text-sm outline-none hover:bg-au-accent focus:bg-au-accent"
              onClick={() => {
                setSelected(option.value);
                setIsOpen(false);
              }}
              data-selected={selected === option.value ? "true" : undefined}
            >
              <span>{option.label}</span>
              {selected === option.value && <Check className="w-4 h-4 ml-auto" />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function InteractiveSelectSearchable() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  const options = [
    { value: "react", label: "React" },
    { value: "vue", label: "Vue" },
    { value: "angular", label: "Angular" },
    { value: "svelte", label: "Svelte" },
    { value: "nextjs", label: "Next.js" },
    { value: "nuxt", label: "Nuxt" },
  ];

  const filteredOptions = options.filter((o) =>
    o.label.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full max-w-sm" ref={ref}>
      <button
        className="flex h-10 w-full items-center justify-between rounded-md border border-au-border bg-au-background px-3 py-2 text-sm placeholder:text-au-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-au-ring disabled:cursor-not-allowed disabled:opacity-50"
        onClick={() => setIsOpen(!isOpen)}
        data-placeholder={!selected ? "true" : undefined}
      >
        <span>{selected ? options.find((o) => o.value === selected)?.label : "Search frameworks..."}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && (
        <div className="absolute z-50 w-full mt-1 rounded-md border border-au-border bg-au-background shadow-md" data-state="open">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            autoFocus
            className="flex h-10 w-full rounded-md border-0 bg-transparent px-3 py-2 text-sm outline-none placeholder:text-au-muted-foreground"
          />
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option) => (
              <div
                key={option.value}
                className="relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 px-2 text-sm outline-none hover:bg-au-accent focus:bg-au-accent"
                onClick={() => {
                  setSelected(option.value);
                  setIsOpen(false);
                  setSearch("");
                }}
                data-selected={selected === option.value ? "true" : undefined}
              >
                <span>{option.label}</span>
                {selected === option.value && <Check className="w-4 h-4 ml-auto" />}
              </div>
            ))
          ) : (
            <div className="px-2 py-1.5 text-sm text-au-muted-foreground text-center">No results found</div>
          )}
        </div>
      )}
    </div>
  );
}

function InteractiveSelectVariants() {
  const [selected, setSelected] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="space-y-6 w-full max-w-sm">
      <div>
        <h3 className="text-sm font-medium mb-2 text-au-muted-foreground">Default</h3>
        <div className="w-full">
          <div ref={ref}>
            <button
              className="flex h-10 w-full items-center justify-between rounded-md border border-au-border bg-au-background px-3 py-2 text-sm placeholder:text-au-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-au-ring disabled:cursor-not-allowed disabled:opacity-50"
              onClick={() => setIsOpen(!isOpen)}
              data-placeholder={!selected ? "true" : undefined}
            >
              <span>{selected ? options.find((o) => o.value === selected)?.label : "Select..."}</span>
              <ChevronDown className={`w-4 h-4 ${isOpen ? "rotate-180" : ""}`} />
            </button>
            {isOpen && (
              <div className="absolute z-50 w-full mt-1 rounded-md border border-au-border bg-au-background shadow-md">
                {options.map((option) => (
                  <div
                    key={option.value}
                    className="relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 px-2 text-sm outline-none hover:bg-au-accent focus:bg-au-accent"
                    onClick={() => { setSelected(option.value); setIsOpen(false); }}
                    data-selected={selected === option.value ? "true" : undefined}
                  >
                    {option.label}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SelectPage() {
  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-au-foreground mb-2">Select</h1>
      <p className="text-au-muted-foreground mb-8">
        A dropdown select component with search functionality.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Interactive Demo</h2>
        <DemoBlock
          preview={<InteractiveSelect />}
          code={`<div x-data="{ open: false, selected: null }" @click.outside="open = false" class="relative w-full max-w-sm">
  <button @click="open = !open"
    class="flex h-10 w-full items-center justify-between rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
    <span x-text="selected ? selected : 'Select a framework...'">Select a framework...</span>
    <svg :class="open ? 'rotate-180' : ''" class="w-4 h-4 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
    </svg>
  </button>
  <div x-show="open" class="absolute z-50 w-full mt-1 rounded-md border border-gray-200 bg-white shadow-md">
    <div @click="selected = 'react'; open = false"
      :data-selected="selected === 'react'"
      class="relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 px-2 text-sm outline-none hover:bg-gray-100">
      <span>React</span>
      <template x-if="selected === 'react'">
        <svg class="w-4 h-4 ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
        </svg>
      </template>
    </div>
    <div @click="selected = 'vue'; open = false"
      :data-selected="selected === 'vue'"
      class="relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 px-2 text-sm outline-none hover:bg-gray-100">
      <span>Vue</span>
      <template x-if="selected === 'vue'">
        <svg class="w-4 h-4 ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
        </svg>
      </template>
    </div>
    <div @click="selected = 'angular'; open = false"
      :data-selected="selected === 'angular'"
      class="relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 px-2 text-sm outline-none hover:bg-gray-100">
      <span>Angular</span>
      <template x-if="selected === 'angular'">
        <svg class="w-4 h-4 ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
        </svg>
      </template>
    </div>
  </div>
</div>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Searchable</h2>
        <DemoBlock
          preview={<InteractiveSelectSearchable />}
          code={`<div class="relative w-full max-w-sm">
  <button class="flex h-10 w-full items-center justify-between rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
    Search...
    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
    </svg>
  </button>
  <div class="absolute z-50 w-full mt-1 rounded-md border border-gray-200 bg-white shadow-md">
    <input type="text" placeholder="Search..."
      class="flex h-10 w-full rounded-md border-0 bg-transparent px-3 py-2 text-sm outline-none placeholder:text-gray-400" />
    <div class="relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 px-2 text-sm outline-none hover:bg-gray-100">
      Option 1
    </div>
  </div>
</div>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Sizes</h2>
        <DemoBlock
          preview={
            <div className="space-y-4 w-full max-w-sm">
              <button className="flex h-10 w-full items-center justify-between rounded-md border border-au-border bg-au-background px-3 py-2 text-sm placeholder:text-au-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-au-ring disabled:cursor-not-allowed disabled:opacity-50" data-placeholder="true">
                Small
                <ChevronDown className="w-4 h-4" />
              </button>
              <button className="flex h-10 w-full items-center justify-between rounded-md border border-au-border bg-au-background px-3 py-2 text-sm placeholder:text-au-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-au-ring disabled:cursor-not-allowed disabled:opacity-50" data-placeholder="true">
                Medium
                <ChevronDown className="w-4 h-4" />
              </button>
              <button className="flex h-10 w-full items-center justify-between rounded-md border border-au-border bg-au-background px-3 py-2 text-sm placeholder:text-au-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-au-ring disabled:cursor-not-allowed disabled:opacity-50" data-placeholder="true">
                Large
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          }
          code={`<button class="flex h-10 w-full items-center justify-between rounded-md border border-gray-300 bg-white px-3 py-2 text-sm">Small</button>
<button class="flex h-10 w-full items-center justify-between rounded-md border border-gray-300 bg-white px-3 py-2 text-sm">Medium</button>
<button class="flex h-10 w-full items-center justify-between rounded-md border border-gray-300 bg-white px-3 py-2 text-sm">Large</button>`}
        />
      </section>
    </div>
  );
}
