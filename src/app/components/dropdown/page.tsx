"use client";

import { useState, useRef } from "react";
import DemoBlock from "@/components/DemoBlock";

type DropdownItem = {
  label?: string;
  disabled?: boolean;
  type?: "divider";
  icon?: string;
};

function InteractiveDropdown({ 
  label = "Actions",
  items
}: { 
  label?: string;
  items?: DropdownItem[];
}) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const defaultItems: DropdownItem[] = items || [
    { label: "Edit" },
    { label: "Duplicate" },
    { label: "Archive" },
  ];

  const renderIcon = (iconName?: string) => {
    const iconClass = "w-4 h-4 shrink-0";
    switch (iconName) {
      case "eye":
        return <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>;
      case "pencil":
        return <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>;
      case "trash":
        return <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1.128 9.395A2 2 0 0112 15h4a2 2 0 012 2v1M5 7h14" /></svg>;
      default:
        return null;
    }
  };

  return (
    <div ref={containerRef} className="relative inline-block">
      <button 
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center justify-between gap-2 px-4 py-2 bg-au-primary text-au-primary-foreground text-sm font-medium rounded-md border-none cursor-pointer"
      >
        {label}
        <svg className={`w-4 h-4 transition-transform duration-150 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <>
          <div 
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-40"
          />
          <ul className={`absolute top-full left-0 mt-1 min-w-[12rem] bg-au-background border border-au-border rounded-lg shadow-md z-50 overflow-hidden py-1 list-none m-0 transition-all duration-150 ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
            {defaultItems.map((item, i) => (
              item.type === "divider" ? (
                <li key={i} className="h-px my-1 bg-au-border" />
              ) : (
                <li key={i}>
                  <button 
                    type="button"
                    disabled={item.disabled}
                    onClick={() => !item.disabled && setIsOpen(false)}
                    className={`flex items-center gap-2 w-full px-3 py-2 text-sm text-au-foreground bg-transparent border-none cursor-pointer text-left transition-colors ${item.disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : 'hover:bg-au-accent'}`}
                  >
                    {item.icon && renderIcon(item.icon)}
                    {item.label}
                  </button>
                </li>
              )
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default function DropdownPage() {
  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-au-foreground mb-2">Dropdown</h1>
      <p className="text-au-muted-foreground mb-8">
        A collapsible menu for navigation, actions, and more.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Basic Dropdown</h2>
        <DemoBlock
          preview={
            <InteractiveDropdown />
          }
          code={`<div x-data="{ open: false }" class="relative inline-block">
  <button @click="open = !open"
    class="inline-flex items-center justify-between gap-2 px-4 py-2 bg-black text-white text-sm font-medium rounded-md border-none cursor-pointer">
    Actions
    <svg :class="open ? 'rotate-180' : ''" class="w-4 h-4 transition-transform duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
    </svg>
  </button>
  <div x-show="open" class="fixed inset-0 z-40" @click="open = false"></div>
  <ul x-show="open"
    class="absolute top-full left-0 mt-1 min-w-[12rem] bg-white border border-gray-200 rounded-lg shadow-md z-50 overflow-hidden py-1 list-none m-0">
    <li><button @click="open = false" class="flex items-center gap-2 w-full px-3 py-2 text-sm text-gray-900 hover:bg-gray-100 bg-transparent border-none cursor-pointer text-left">Edit</button></li>
    <li><button @click="open = false" class="flex items-center gap-2 w-full px-3 py-2 text-sm text-gray-900 hover:bg-gray-100 bg-transparent border-none cursor-pointer text-left">Duplicate</button></li>
    <li><button @click="open = false" class="flex items-center gap-2 w-full px-3 py-2 text-sm text-gray-900 hover:bg-gray-100 bg-transparent border-none cursor-pointer text-left">Archive</button></li>
  </ul>
</div>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">With Dividers</h2>
        <DemoBlock
          preview={
            <InteractiveDropdown 
              label="Menu"
              items={[
                { label: "Profile" },
                { label: "Settings" },
                { type: "divider" },
                { label: "Team" },
                { label: "Logout" },
              ]}
            />
          }
          code={`<ul class="absolute top-full left-0 mt-1 min-w-[12rem] bg-white border border-gray-200 rounded-lg shadow-md z-50 overflow-hidden py-1">
  <li><button class="flex items-center gap-2 w-full px-3 py-2 text-sm text-gray-900 hover:bg-gray-100">Profile</button></li>
  <li><button class="flex items-center gap-2 w-full px-3 py-2 text-sm text-gray-900 hover:bg-gray-100">Settings</button></li>
  <li class="h-px my-1 bg-gray-200"></li>
  <li><button class="flex items-center gap-2 w-full px-3 py-2 text-sm text-gray-900 hover:bg-gray-100">Team</button></li>
  <li><button class="flex items-center gap-2 w-full px-3 py-2 text-sm text-gray-900 hover:bg-gray-100">Logout</button></li>
</ul>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">With Icons</h2>
        <DemoBlock
          preview={
            <InteractiveDropdown 
              label="Options"
              items={[
                { label: "View", icon: "eye" },
                { label: "Edit", icon: "pencil" },
                { label: "Delete", icon: "trash" },
              ]}
            />
          }
          code={`<ul class="absolute top-full left-0 mt-1 min-w-[12rem] bg-white border border-gray-200 rounded-lg shadow-md z-50 overflow-hidden py-1">
  <li>
    <button class="flex items-center gap-2 w-full px-3 py-2 text-sm text-gray-900 hover:bg-gray-100">
      <svg class="w-4 h-4 shrink-0">...</svg>
      View
    </button>
  </li>
</ul>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Disabled Items</h2>
        <DemoBlock
          preview={
            <InteractiveDropdown 
              label="Items"
              items={[
                { label: "Active Item" },
                { label: "Disabled Item", disabled: true },
                { label: "Another Item" },
              ]}
            />
          }
          code={`<button class="flex items-center gap-2 w-full px-3 py-2 text-sm text-gray-900 opacity-50 cursor-not-allowed pointer-events-none hover:bg-gray-100" disabled>
  Disabled Item
</button>`}
        />
      </section>
    </div>
  );
}
