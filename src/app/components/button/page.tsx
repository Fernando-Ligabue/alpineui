"use client";

import { useState } from "react";
import DemoBlock from "@/components/DemoBlock";
import { InstallCommand } from "@/components/InstallCommand";

function InteractiveButton() {
  const [loading, setLoading] = useState(false);
  const [variant, setVariant] = useState("default");
  const [size, setSize] = useState("md");

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-3 justify-center">
        <button
          onClick={handleClick}
          className={`au-button au-button-${size} au-button-${variant} ${loading ? "au-button-loading" : ""}`}
        >
          {loading ? "Processing..." : "Click me"}
        </button>
      </div>
      <div className="flex gap-2 justify-center text-sm">
        <select 
          value={variant} 
          onChange={(e) => setVariant(e.target.value)}
          className="au-input au-input-sm w-auto"
        >
          <option value="default">Default</option>
          <option value="destructive">Destructive</option>
          <option value="outline">Outline</option>
          <option value="secondary">Secondary</option>
          <option value="ghost">Ghost</option>
          <option value="link">Link</option>
        </select>
        <select 
          value={size} 
          onChange={(e) => setSize(e.target.value)}
          className="au-input au-input-sm w-auto"
        >
          <option value="sm">Small</option>
          <option value="md">Medium</option>
          <option value="lg">Large</option>
        </select>
      </div>
    </div>
  );
}

export default function ButtonPage() {
  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-au-foreground mb-2">Button</h1>
      <p className="text-au-muted-foreground mb-8">
        A clickable button component with multiple variants and sizes.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Installation</h2>
        <InstallCommand command="npx alpineui add button" />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Variants</h2>
        <DemoBlock
          preview={
            <div className="flex flex-wrap gap-3 items-center justify-center">
              <button className="au-button au-button-md au-button-default">Default</button>
              <button className="au-button au-button-md au-button-destructive">Destructive</button>
              <button className="au-button au-button-md au-button-outline">Outline</button>
              <button className="au-button au-button-md au-button-secondary">Secondary</button>
              <button className="au-button au-button-md au-button-ghost">Ghost</button>
              <button className="au-button au-button-md au-button-link">Link</button>
            </div>
          }
          code={`<button class="au-button au-button-md au-button-default">Default</button>
<button class="au-button au-button-md au-button-destructive">Destructive</button>
<button class="au-button au-button-md au-button-outline">Outline</button>
<button class="au-button au-button-md au-button-secondary">Secondary</button>
<button class="au-button au-button-md au-button-ghost">Ghost</button>
<button class="au-button au-button-md au-button-link">Link</button>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Sizes</h2>
        <DemoBlock
          preview={
            <div className="flex flex-wrap gap-3 items-center justify-center">
              <button className="au-button au-button-sm au-button-default">Small</button>
              <button className="au-button au-button-md au-button-default">Medium</button>
              <button className="au-button au-button-lg au-button-default">Large</button>
              <button className="au-button au-button-icon au-button-default">+</button>
            </div>
          }
          code={`<button class="au-button au-button-sm au-button-default">Small</button>
<button class="au-button au-button-md au-button-default">Medium</button>
<button class="au-button au-button-lg au-button-default">Large</button>
<button class="au-button au-button-icon au-button-default">+</button>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Interactive Demo</h2>
        <DemoBlock
          preview={<InteractiveButton />}
          code={`function App() {
  const [loading, setLoading] = useState(false);
  const [variant, setVariant] = useState("default");
  const [size, setSize] = useState("md");

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <button
      onClick={handleClick}
      className={\`au-button au-button-\${size} au-button-\${variant} \${loading ? "au-button-loading" : ""}\`}
    >
      {loading ? "Processing..." : "Click me"}
    </button>
  );
}`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">States</h2>
        <DemoBlock
          preview={
            <div className="flex flex-wrap gap-3 items-center justify-center">
              <button className="au-button au-button-md au-button-default" disabled>Disabled</button>
              <button className="au-button au-button-md au-button-default au-button-loading">Loading</button>
            </div>
          }
          code={`<button class="au-button au-button-md au-button-default" disabled>Disabled</button>
<button class="au-button au-button-md au-button-default au-button-loading">Loading</button>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">All Variants x Sizes</h2>
        <DemoBlock
          preview={
            <div className="w-full space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-16 text-xs text-au-muted-foreground">Small</span>
                <button className="au-button au-button-sm au-button-default">Default</button>
                <button className="au-button au-button-sm au-button-outline">Outline</button>
                <button className="au-button au-button-sm au-button-ghost">Ghost</button>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-16 text-xs text-au-muted-foreground">Medium</span>
                <button className="au-button au-button-md au-button-default">Default</button>
                <button className="au-button au-button-md au-button-outline">Outline</button>
                <button className="au-button au-button-md au-button-ghost">Ghost</button>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-16 text-xs text-au-muted-foreground">Large</span>
                <button className="au-button au-button-lg au-button-default">Default</button>
                <button className="au-button au-button-lg au-button-outline">Outline</button>
                <button className="au-button au-button-lg au-button-ghost">Ghost</button>
              </div>
            </div>
          }
          code={`<!-- Small -->
<button class="au-button au-button-sm au-button-default">Default</button>
<button class="au-button au-button-sm au-button-outline">Outline</button>
<button class="au-button au-button-sm au-button-ghost">Ghost</button>

<!-- Medium -->
<button class="au-button au-button-md au-button-default">Default</button>
<button class="au-button au-button-md au-button-outline">Outline</button>
<button class="au-button au-button-md au-button-ghost">Ghost</button>

<!-- Large -->
<button class="au-button au-button-lg au-button-default">Default</button>
<button class="au-button au-button-lg au-button-outline">Outline</button>
<button class="au-button au-button-lg au-button-ghost">Ghost</button>`}
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
              <tr><td className="px-4 py-2 font-mono text-xs">au-button</td><td className="px-4 py-2">Base button class</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-button-sm</td><td className="px-4 py-2">Small size (height: 2rem)</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-button-md</td><td className="px-4 py-2">Medium size (default)</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-button-lg</td><td className="px-4 py-2">Large size (height: 3rem)</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-button-icon</td><td className="px-4 py-2">Icon size (square)</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-button-default</td><td className="px-4 py-2">Default variant</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-button-destructive</td><td className="px-4 py-2">Destructive variant</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-button-outline</td><td className="px-4 py-2">Outline variant</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-button-secondary</td><td className="px-4 py-2">Secondary variant</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-button-ghost</td><td className="px-4 py-2">Ghost variant</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-button-link</td><td className="px-4 py-2">Link variant</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-button-loading</td><td className="px-4 py-2">Loading state</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
