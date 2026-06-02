"use client";

import { useState } from "react";
import DemoBlock from "@/components/DemoBlock";

function InteractiveRadioGroup() {
  const [value, setValue] = useState("option1");

  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  return (
    <div className="grid gap-2">
      {options.map((option) => (
        <label key={option.value} className="flex items-center gap-2">
          <input
            type="radio"
            name="radio-group"
            className="peer sr-only"
            value={option.value}
            checked={value === option.value}
            onChange={(e) => setValue(e.target.value)}
          />
          <div className="aspect-square h-4 w-4 rounded-full border border-au-border peer-checked:border-au-primary peer-checked:bg-au-primary flex items-center justify-center after:content-[''] after:block after:w-2 after:h-2 after:rounded-full after:bg-au-background after:invisible peer-checked:after:visible" />
          <span className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">{option.label}</span>
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
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Interactive Demo</h2>
        <DemoBlock
          preview={<InteractiveRadioGroup />}
          code={`<div x-data="{ value: 'option1' }" class="grid gap-2">
  <label class="flex items-center gap-2 cursor-pointer">
    <input type="radio" name="radio-group" class="peer sr-only" value="option1" x-model="value" />
    <div class="aspect-square h-4 w-4 rounded-full border border-gray-300 peer-checked:border-black peer-checked:bg-black flex items-center justify-center after:content-[''] after:block after:w-2 after:h-2 after:rounded-full after:bg-white after:invisible peer-checked:after:visible"></div>
    <span class="text-sm font-medium leading-none">Option 1</span>
  </label>
  <label class="flex items-center gap-2 cursor-pointer">
    <input type="radio" name="radio-group" class="peer sr-only" value="option2" x-model="value" />
    <div class="aspect-square h-4 w-4 rounded-full border border-gray-300 peer-checked:border-black peer-checked:bg-black flex items-center justify-center after:content-[''] after:block after:w-2 after:h-2 after:rounded-full after:bg-white after:invisible peer-checked:after:visible"></div>
    <span class="text-sm font-medium leading-none">Option 2</span>
  </label>
  <label class="flex items-center gap-2 cursor-pointer">
    <input type="radio" name="radio-group" class="peer sr-only" value="option3" x-model="value" />
    <div class="aspect-square h-4 w-4 rounded-full border border-gray-300 peer-checked:border-black peer-checked:bg-black flex items-center justify-center after:content-[''] after:block after:w-2 after:h-2 after:rounded-full after:bg-white after:invisible peer-checked:after:visible"></div>
    <span class="text-sm font-medium leading-none">Option 3</span>
  </label>
</div>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">States</h2>
        <DemoBlock
          preview={
            <div className="space-y-4">
              <div className="grid gap-2">
                <label className="flex items-center gap-2">
                  <input type="radio" name="state-demo" className="peer sr-only" defaultChecked />
                  <div className="aspect-square h-4 w-4 rounded-full border border-au-border peer-checked:border-au-primary peer-checked:bg-au-primary flex items-center justify-center after:content-[''] after:block after:w-2 after:h-2 after:rounded-full after:bg-au-background after:invisible peer-checked:after:visible" />
                  <span className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Checked</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="state-demo" className="peer sr-only" />
                  <div className="aspect-square h-4 w-4 rounded-full border border-au-border peer-checked:border-au-primary peer-checked:bg-au-primary flex items-center justify-center after:content-[''] after:block after:w-2 after:h-2 after:rounded-full after:bg-au-background after:invisible peer-checked:after:visible" />
                  <span className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Unchecked</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="state-disabled" className="peer sr-only" disabled />
                  <div className="aspect-square h-4 w-4 rounded-full border border-au-border peer-checked:border-au-primary peer-checked:bg-au-primary disabled:cursor-not-allowed disabled:opacity-50 flex items-center justify-center after:content-[''] after:block after:w-2 after:h-2 after:rounded-full after:bg-au-background after:invisible peer-checked:after:visible peer-disabled:opacity-50 peer-disabled:cursor-not-allowed" />
                  <span className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Disabled</span>
                </label>
              </div>
            </div>
          }
          code={`<label class="flex items-center gap-2">
  <input type="radio" class="peer sr-only" checked />
  <div class="aspect-square h-4 w-4 rounded-full border border-gray-300 peer-checked:border-black peer-checked:bg-black flex items-center justify-center after:content-[''] after:block after:w-2 after:h-2 after:rounded-full after:bg-white after:invisible peer-checked:after:visible" />
  <span class="text-sm font-medium leading-none">Checked</span>
</label>

<label class="flex items-center gap-2">
  <input type="radio" class="peer sr-only" />
  <div class="aspect-square h-4 w-4 rounded-full border border-gray-300 ..." />
  <span class="text-sm font-medium leading-none">Unchecked</span>
</label>

<label class="flex items-center gap-2">
  <input type="radio" class="peer sr-only" disabled />
  <div class="aspect-square h-4 w-4 rounded-full border border-gray-300 peer-disabled:opacity-50 peer-disabled:cursor-not-allowed ..." />
  <span class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Disabled</span>
</label>`}
        />
      </section>
    </div>
  );
}
