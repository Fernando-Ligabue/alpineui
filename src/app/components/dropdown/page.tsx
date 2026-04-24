"use client";

import { useState, useRef } from "react";
import DemoBlock from "@/components/DemoBlock";
import { InstallCommand } from "@/components/InstallCommand";

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
    const iconStyle = { width: 16, height: 16, flexShrink: 0 };
    switch (iconName) {
      case "eye":
        return <svg style={iconStyle} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>;
      case "pencil":
        return <svg style={iconStyle} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>;
      case "trash":
        return <svg style={iconStyle} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1.128 9.395A2 2 0 0112 15h4a2 2 0 012 2v1M5 7h14" /></svg>;
      default:
        return null;
    }
  };

  return (
    <div ref={containerRef} style={{ position: 'relative', display: 'inline-block' }}>
      <button 
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '8px 16px',
          backgroundColor: '#0a0a0a',
          color: 'white',
          borderRadius: '6px',
          fontSize: '14px',
          fontWeight: 500,
          border: 'none',
          cursor: 'pointer'
        }}
      >
        {label}
        <svg style={{ width: 16, height: 16, transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.15s' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <>
          <div 
            onClick={() => setIsOpen(false)}
            style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 40 }}
          />
          <ul style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            marginTop: '4px',
            minWidth: '180px',
            backgroundColor: 'white',
            border: '1px solid #e5e5e5',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            zIndex: 50,
            padding: '4px',
            listStyle: 'none',
            margin: 0
          }}>
            {defaultItems.map((item, i) => (
              item.type === "divider" ? (
                <li key={i} style={{ height: '1px', backgroundColor: '#e5e5e5', margin: '4px 0' }} />
              ) : (
                <li key={i}>
                  <button 
                    type="button"
                    disabled={item.disabled}
                    onClick={() => !item.disabled && setIsOpen(false)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      width: '100%',
                      padding: '8px 12px',
                      textAlign: 'left',
                      fontSize: '14px',
                      backgroundColor: 'transparent',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: item.disabled ? 'not-allowed' : 'pointer',
                      color: item.disabled ? '#9ca3af' : '#0a0a0a'
                    }}
                    onMouseOver={(e) => !item.disabled && (e.currentTarget.style.backgroundColor = '#f5f5f5')}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
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
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Installation</h2>
        <InstallCommand command="npx alpineui add dropdown" />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Basic Dropdown</h2>
        <DemoBlock
          preview={
            <InteractiveDropdown />
          }
          code={`const [open, setOpen] = useState(false);

return (
  <div className="relative">
    <button onClick={() => setOpen(!open)}>
      Actions
    </button>
    {open && (
      <div className="dropdown-menu">
        <button>Edit</button>
        <button>Duplicate</button>
        <button>Archive</button>
      </div>
    )}
  </div>
);`}
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
          code={`<div class="au-dropdown-menu">
  <button class="au-dropdown-item">Profile</button>
  <button class="au-dropdown-item">Settings</button>
  <div class="h-px bg-gray-200 my-1"></div>
  <button class="au-dropdown-item">Team</button>
  <button class="au-dropdown-item">Logout</button>
</div>`}
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
          code={`<div class="au-dropdown-menu">
  <button class="au-dropdown-item">
    <svg>...</svg>
    View
  </button>
</div>`}
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
          code={`<button class="au-dropdown-item" disabled>Disabled Item</button>`}
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
              <tr><td className="px-4 py-2 font-mono text-xs">au-dropdown</td><td className="px-4 py-2">Dropdown container</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-dropdown-trigger</td><td className="px-4 py-2">Trigger button</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-dropdown-menu</td><td className="px-4 py-2">Dropdown content</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-dropdown-item</td><td className="px-4 py-2">Menu item</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-dropdown-divider</td><td className="px-4 py-2">Item divider</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-dropdown-sm|md|lg</td><td className="px-4 py-2">Dropdown size</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}