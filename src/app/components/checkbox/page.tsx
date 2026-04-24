"use client";

import { useState } from "react";
import DemoBlock from "@/components/DemoBlock";
import { InstallCommand } from "@/components/InstallCommand";

function InteractiveCheckbox() {
  const [checked, setChecked] = useState(true);

  return (
    <div className="flex items-center gap-3">
      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="checkbox"
          className="au-checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <span>Accept terms</span>
      </label>
    </div>
  );
}

function InteractiveSwitch() {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="flex items-center gap-3">
      <div
        className="au-switch"
        data-checked={enabled ? "true" : undefined}
        onClick={() => setEnabled(!enabled)}
        role="switch"
        aria-checked={enabled}
      >
        <div className="au-switch-thumb" />
      </div>
      <span>{enabled ? "Enabled" : "Disabled"}</span>
    </div>
  );
}

export default function CheckboxPage() {
  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-au-foreground mb-2">Checkbox</h1>
      <p className="text-au-muted-foreground mb-8">
        A control that allows the user to toggle between checked and not checked.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Installation</h2>
        <InstallCommand command="npx alpineui add checkbox" />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Interactive Demo</h2>
        <DemoBlock
          preview={<InteractiveCheckbox />}
          code={`<label class="flex items-center gap-2">
  <input 
    type="checkbox" 
    class="au-checkbox" 
    checked={checked}
    onChange={(e) => setChecked(e.target.checked)}
  />
  <span>Accept terms</span>
</label>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">States</h2>
        <DemoBlock
          preview={
            <div className="flex flex-wrap gap-4">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="au-checkbox" defaultChecked />
                <span>Checked</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="au-checkbox" />
                <span>Unchecked</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="au-checkbox" disabled />
                <span>Disabled</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="au-checkbox" disabled defaultChecked />
                <span>Checked Disabled</span>
              </label>
            </div>
          }
          code={`<input type="checkbox" class="au-checkbox" />
<input type="checkbox" class="au-checkbox" defaultChecked />
<input type="checkbox" class="au-checkbox" disabled />
<input type="checkbox" class="au-checkbox" disabled defaultChecked />`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Switch (Toggle)</h2>
        <DemoBlock
          preview={<InteractiveSwitch />}
          code={`<div 
  class="au-switch" 
  data-checked={enabled ? "true" : undefined}
  onClick={() => setEnabled(!enabled)}
>
  <div class="au-switch-thumb" />
</div>`}
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
              <tr><td className="px-4 py-2 font-mono text-xs">au-checkbox</td><td className="px-4 py-2">Checkbox input</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-checkbox-sm|lg</td><td className="px-4 py-2">Sizes</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-switch</td><td className="px-4 py-2">Switch container</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-switch-thumb</td><td className="px-4 py-2">Switch thumb</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}