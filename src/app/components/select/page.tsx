"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";
import DemoBlock from "@/components/DemoBlock";
import { InstallCommand } from "@/components/InstallCommand";

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
    <div className="au-select au-select-md w-full max-w-sm" ref={ref}>
      <button
        className="au-select-trigger"
        onClick={() => setIsOpen(!isOpen)}
        data-placeholder={!selected ? "true" : undefined}
      >
        <span>{selected ? options.find((o) => o.value === selected)?.label : "Select a framework"}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && (
        <div className="au-select-dropdown" data-state="open">
          {options.map((option) => (
            <div
              key={option.value}
              className="au-select-option"
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
    <div className="au-select au-select-md w-full max-w-sm" ref={ref}>
      <button
        className="au-select-trigger"
        onClick={() => setIsOpen(!isOpen)}
        data-placeholder={!selected ? "true" : undefined}
      >
        <span>{selected ? options.find((o) => o.value === selected)?.label : "Search frameworks..."}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && (
        <div className="au-select-dropdown" data-state="open">
          <div className="au-select-search">
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              autoFocus
            />
          </div>
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option) => (
              <div
                key={option.value}
                className="au-select-option"
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
            <div className="au-select-empty">No results found</div>
          )}
        </div>
      )}
    </div>
  );
}

function InteractiveSelectVariants() {
  const [selected, setSelected] = useState<string | null>(null);
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

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="space-y-6 w-full max-w-sm">
      <div>
        <h4 className="text-sm font-medium mb-2 text-au-muted-foreground">Default</h4>
        <div className="au-select au-select-default">
          <div ref={ref}>
            <button
              className="au-select-trigger"
              onClick={() => setIsOpen(!isOpen)}
              data-placeholder={!selected ? "true" : undefined}
            >
              <span>{selected ? options.find((o) => o.value === selected)?.label : "Select..."}</span>
              <ChevronDown className={`w-4 h-4 ${isOpen ? "rotate-180" : ""}`} />
            </button>
            {isOpen && (
              <div className="au-select-dropdown">
                {options.map((option) => (
                  <div
                    key={option.value}
                    className="au-select-option"
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
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Installation</h2>
        <InstallCommand command="npx alpineui add select" />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Interactive Demo</h2>
        <DemoBlock
          preview={<InteractiveSelect />}
          code={`function App() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const options = [
    { value: "react", label: "React" },
    { value: "vue", label: "Vue" },
    { value: "angular", label: "Angular" },
  ];

  return (
    <div class="au-select au-select-md">
      <button
        class="au-select-trigger"
        onClick={() => setOpen(!open)}
      >
        {selected ? options.find(o => o.value === selected)?.label : "Select..."}
        <ChevronDown className={\`w-4 h-4 \${open ? "rotate-180" : ""}\`} />
      </button>
      {open && (
        <div class="au-select-dropdown" data-state="open">
          {options.map(option => (
            <div
              key={option.value}
              class="au-select-option"
              onClick={() => { setSelected(option.value); setOpen(false); }}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Searchable</h2>
        <DemoBlock
          preview={<InteractiveSelectSearchable />}
          code={`<div class="au-select au-select-md">
  <button class="au-select-trigger">Search...</button>
  <div class="au-select-dropdown">
    <div class="au-select-search">
      <input type="text" placeholder="Search..." />
    </div>
    <div class="au-select-option">Option 1</div>
    <div class="au-select-option">Option 2</div>
  </div>
</div>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Sizes</h2>
        <DemoBlock
          preview={
            <div className="space-y-4 w-full max-w-sm">
              <div className="au-select au-select-sm">
                <button className="au-select-trigger" data-placeholder="true">
                  Small
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
              <div className="au-select au-select-md">
                <button className="au-select-trigger" data-placeholder="true">
                  Medium
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
              <div className="au-select au-select-lg">
                <button className="au-select-trigger" data-placeholder="true">
                  Large
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>
          }
          code={`<div class="au-select au-select-sm">...</div>
<div class="au-select au-select-md">...</div>
<div class="au-select au-select-lg">...</div>`}
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
              <tr><td className="px-4 py-2 font-mono text-xs">au-select</td><td className="px-4 py-2">Container</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-select-trigger</td><td className="px-4 py-2">Dropdown button</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-select-dropdown</td><td className="px-4 py-2">Options container</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-select-option</td><td className="px-4 py-2">Option item</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-select-search</td><td className="px-4 py-2">Search input wrapper</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-select-empty</td><td className="px-4 py-2">No results message</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-select-sm|md|lg</td><td className="px-4 py-2">Sizes</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}