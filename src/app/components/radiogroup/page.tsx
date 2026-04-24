"use client";

import { useState } from "react";
import DemoBlock from "@/components/DemoBlock";
import { InstallCommand } from "@/components/InstallCommand";

function InteractiveRadioGroup() {
  const [value, setValue] = useState("option1");

  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  return (
    <div className="au-radio-group">
      {options.map((option) => (
        <label key={option.value} className="au-radio-item">
          <input
            type="radio"
            name="radio-group"
            className="au-radio"
            value={option.value}
            checked={value === option.value}
            onChange={(e) => setValue(e.target.value)}
          />
          <span className="au-radio-label">{option.label}</span>
        </label>
      ))}
    </div>
  );
}

export default function RadioGroupPage() {
  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-au-foreground mb-2">Radio Group</h1>
      <p className="text-au-muted-foreground mb-8">
        A component that allows the user to select one option from a set.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Installation</h2>
        <InstallCommand command="npx alpineui add radiogroup" />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Interactive Demo</h2>
        <DemoBlock
          preview={<InteractiveRadioGroup />}
          code={`const [value, setValue] = useState("option1");

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

return (
  <div class="au-radio-group">
    {options.map((option) => (
      <label key={option.value} class="au-radio-item">
        <input
          type="radio"
          name="radio-group"
          class="au-radio"
          value={option.value}
          checked={value === option.value}
          onChange={(e) => setValue(e.target.value)}
        />
        <span class="au-radio-label">{option.label}</span>
      </label>
    ))}
  </div>
);`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">States</h2>
        <DemoBlock
          preview={
            <div className="space-y-4">
              <div className="au-radio-group">
                <label className="au-radio-item">
                  <input type="radio" name="state1" className="au-radio" defaultChecked />
                  <span className="au-radio-label">Checked</span>
                </label>
                <label className="au-radio-item">
                  <input type="radio" name="state1" className="au-radio" />
                  <span className="au-radio-label">Unchecked</span>
                </label>
                <label className="au-radio-item">
                  <input type="radio" name="state2" className="au-radio" disabled />
                  <span className="au-radio-label">Disabled</span>
                </label>
              </div>
            </div>
          }
          code={`<input type="radio" class="au-radio" defaultChecked />
<input type="radio" class="au-radio" />
<input type="radio" class="au-radio" disabled />`}
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
              <tr><td className="px-4 py-2 font-mono text-xs">au-radio-group</td><td className="px-4 py-2">Radio group container</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-radio-item</td><td className="px-4 py-2">Radio item wrapper</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-radio</td><td className="px-4 py-2">Radio input</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-radio-label</td><td className="px-4 py-2">Label text</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}