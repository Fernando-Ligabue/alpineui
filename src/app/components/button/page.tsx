"use client";

import { useState } from "react";
import DemoBlock from "@/components/DemoBlock";

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
            className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:opacity-50 disabled:pointer-events-none ${
              size === "xs" ? "h-6 px-2 text-[10px]" : size === "sm" ? "h-8 px-3 text-xs" : size === "lg" ? "h-12 px-6 text-base" : "h-10 px-4 py-2"
          } ${
            variant === "default" ? "bg-black text-white hover:opacity-90" :
            variant === "destructive" ? "bg-red-600 text-white hover:opacity-90" :
            variant === "outline" ? "border border-gray-300 bg-transparent text-gray-900 hover:bg-gray-100" :
            variant === "secondary" ? "bg-gray-100 text-gray-900 hover:bg-gray-200" :
            variant === "ghost" ? "bg-transparent text-gray-900 hover:bg-gray-100" :
            variant === "link" ? "bg-transparent text-black underline hover:opacity-80" :
            "bg-black text-white hover:opacity-90"
          } ${loading ? "opacity-70 pointer-events-none" : ""}`}
        >
          {loading ? "Processing..." : "Click me"}
        </button>
      </div>
      <div className="flex gap-2 justify-center text-sm">
        <select
          value={variant}
          onChange={(e) => setVariant(e.target.value)}
          className="flex h-8 w-auto rounded-md border border-gray-300 bg-white px-2 text-xs placeholder:text-gray-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:cursor-not-allowed disabled:opacity-50"
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
          className="flex h-8 w-auto rounded-md border border-gray-300 bg-white px-2 text-xs placeholder:text-gray-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:cursor-not-allowed disabled:opacity-50"
        >
          <option value="xs">XS</option>
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
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Button</h1>
      <p className="text-gray-500 mb-8">
        A clickable button component with multiple variants and sizes.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Variants</h2>
        <DemoBlock
          preview={
            <div className="flex flex-wrap gap-3 items-center justify-center">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:opacity-50 disabled:pointer-events-none h-10 px-4 py-2 bg-black text-white hover:opacity-90">Default</button>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:opacity-50 disabled:pointer-events-none h-10 px-4 py-2 bg-red-600 text-white hover:opacity-90">Destructive</button>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:opacity-50 disabled:pointer-events-none h-10 px-4 py-2 border border-gray-300 bg-transparent text-gray-900 hover:bg-gray-100">Outline</button>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:opacity-50 disabled:pointer-events-none h-10 px-4 py-2 bg-gray-100 text-gray-900 hover:bg-gray-200">Secondary</button>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:opacity-50 disabled:pointer-events-none h-10 px-4 py-2 bg-transparent text-gray-900 hover:bg-gray-100">Ghost</button>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:opacity-50 disabled:pointer-events-none h-10 px-4 py-2 bg-transparent text-black underline hover:opacity-80">Link</button>
            </div>
          }
          code={`<button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:opacity-50 disabled:pointer-events-none h-10 px-4 py-2 bg-black text-white hover:opacity-90">Default</button>
<button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:opacity-50 disabled:pointer-events-none h-10 px-4 py-2 bg-red-600 text-white hover:opacity-90">Destructive</button>
<button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:opacity-50 disabled:pointer-events-none h-10 px-4 py-2 border border-gray-300 bg-transparent text-gray-900 hover:bg-gray-100">Outline</button>
<button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:opacity-50 disabled:pointer-events-none h-10 px-4 py-2 bg-gray-100 text-gray-900 hover:bg-gray-200">Secondary</button>
<button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:opacity-50 disabled:pointer-events-none h-10 px-4 py-2 bg-transparent text-gray-900 hover:bg-gray-100">Ghost</button>
<button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:opacity-50 disabled:pointer-events-none h-10 px-4 py-2 bg-transparent text-black underline hover:opacity-80">Link</button>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Sizes</h2>
        <DemoBlock
          preview={
            <div className="flex flex-wrap gap-3 items-center justify-center">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:opacity-50 disabled:pointer-events-none h-6 px-2 text-[10px] bg-black text-white hover:opacity-90">XS</button>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:opacity-50 disabled:pointer-events-none h-8 px-3 text-xs bg-black text-white hover:opacity-90">Small</button>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:opacity-50 disabled:pointer-events-none h-10 px-4 py-2 bg-black text-white hover:opacity-90">Medium</button>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:opacity-50 disabled:pointer-events-none h-12 px-6 text-base bg-black text-white hover:opacity-90">Large</button>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:opacity-50 disabled:pointer-events-none h-10 w-10 p-0 bg-black text-white hover:opacity-90">+</button>
            </div>
          }
          code={`<!-- XS -->
<button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:opacity-50 disabled:pointer-events-none h-6 px-2 text-[10px] bg-black text-white hover:opacity-90">XS</button>
<!-- Small -->
<button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:opacity-50 disabled:pointer-events-none h-8 px-3 text-xs bg-black text-white hover:opacity-90">Small</button>
<!-- Medium -->
<button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:opacity-50 disabled:pointer-events-none h-10 px-4 py-2 bg-black text-white hover:opacity-90">Medium</button>
<!-- Large -->
<button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:opacity-50 disabled:pointer-events-none h-12 px-6 text-base bg-black text-white hover:opacity-90">Large</button>
<!-- Icon -->
<button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:opacity-50 disabled:pointer-events-none h-10 w-10 p-0 bg-black text-white hover:opacity-90">+</button>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Interactive Demo</h2>
        <DemoBlock
          preview={<InteractiveButton />}
          code={`<div x-data="{ loading: false, variant: 'default', size: 'md' }">
  <div class="flex flex-wrap gap-3 justify-center">
    <button
      @click="loading = true; setTimeout(() => loading = false, 2000)"
      :class="'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:opacity-50 disabled:pointer-events-none ' + (
        size === 'xs' ? 'h-6 px-2 text-[10px]' : size === 'sm' ? 'h-8 px-3 text-xs' : size === 'lg' ? 'h-12 px-6 text-base' : 'h-10 px-4 py-2'
      ) + ' ' + (
        variant === 'default' ? 'bg-black text-white hover:opacity-90' :
        variant === 'destructive' ? 'bg-red-600 text-white hover:opacity-90' :
        variant === 'outline' ? 'border border-gray-300 bg-transparent text-gray-900 hover:bg-gray-100' :
        variant === 'secondary' ? 'bg-gray-100 text-gray-900 hover:bg-gray-200' :
        variant === 'ghost' ? 'bg-transparent text-gray-900 hover:bg-gray-100' :
        variant === 'link' ? 'bg-transparent text-black underline hover:opacity-80' :
        'bg-black text-white hover:opacity-90'
      ) + (loading ? ' opacity-70 pointer-events-none' : '')"
      x-text="loading ? 'Processing...' : 'Click me'"
    ></button>
  </div>
  <div class="flex gap-2 justify-center mt-4 text-sm">
    <select x-model="variant" class="flex h-8 w-auto rounded-md border border-gray-300 bg-white px-2 text-xs">
      <option value="default">Default</option>
      <option value="destructive">Destructive</option>
      <option value="outline">Outline</option>
      <option value="secondary">Secondary</option>
      <option value="ghost">Ghost</option>
      <option value="link">Link</option>
    </select>
    <select x-model="size" class="flex h-8 w-auto rounded-md border border-gray-300 bg-white px-2 text-xs">
      <option value="xs">XS</option>
      <option value="sm">Small</option>
      <option value="md">Medium</option>
      <option value="lg">Large</option>
    </select>
  </div>
</div>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">States</h2>
        <DemoBlock
          preview={
            <div className="flex flex-wrap gap-3 items-center justify-center">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:opacity-50 disabled:pointer-events-none h-10 px-4 py-2 bg-black text-white hover:opacity-90" disabled>Disabled</button>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:opacity-50 disabled:pointer-events-none h-10 px-4 py-2 bg-black text-white hover:opacity-90 opacity-70 pointer-events-none">Loading</button>
            </div>
          }
          code={`<button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:opacity-50 disabled:pointer-events-none h-10 px-4 py-2 bg-black text-white hover:opacity-90" disabled>Disabled</button>
<button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:opacity-50 disabled:pointer-events-none h-10 px-4 py-2 bg-black text-white hover:opacity-90 opacity-70 pointer-events-none">Loading</button>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">All Variants x Sizes</h2>
        <DemoBlock
          preview={
            <div className="w-full space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-16 text-xs text-gray-500">XS</span>
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:opacity-50 disabled:pointer-events-none h-6 px-2 text-[10px] bg-black text-white hover:opacity-90">Default</button>
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:opacity-50 disabled:pointer-events-none h-6 px-2 text-[10px] border border-gray-300 bg-transparent text-gray-900 hover:bg-gray-100">Outline</button>
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:opacity-50 disabled:pointer-events-none h-6 px-2 text-[10px] bg-transparent text-gray-900 hover:bg-gray-100">Ghost</button>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-16 text-xs text-gray-500">Small</span>
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:opacity-50 disabled:pointer-events-none h-8 px-3 text-xs bg-black text-white hover:opacity-90">Default</button>
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:opacity-50 disabled:pointer-events-none h-8 px-3 text-xs border border-gray-300 bg-transparent text-gray-900 hover:bg-gray-100">Outline</button>
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:opacity-50 disabled:pointer-events-none h-8 px-3 text-xs bg-transparent text-gray-900 hover:bg-gray-100">Ghost</button>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-16 text-xs text-gray-500">Medium</span>
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:opacity-50 disabled:pointer-events-none h-10 px-4 py-2 bg-black text-white hover:opacity-90">Default</button>
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:opacity-50 disabled:pointer-events-none h-10 px-4 py-2 border border-gray-300 bg-transparent text-gray-900 hover:bg-gray-100">Outline</button>
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:opacity-50 disabled:pointer-events-none h-10 px-4 py-2 bg-transparent text-gray-900 hover:bg-gray-100">Ghost</button>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-16 text-xs text-gray-500">Large</span>
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:opacity-50 disabled:pointer-events-none h-12 px-6 text-base bg-black text-white hover:opacity-90">Default</button>
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:opacity-50 disabled:pointer-events-none h-12 px-6 text-base border border-gray-300 bg-transparent text-gray-900 hover:bg-gray-100">Outline</button>
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:opacity-50 disabled:pointer-events-none h-12 px-6 text-base bg-transparent text-gray-900 hover:bg-gray-100">Ghost</button>
              </div>
            </div>
          }
          code={`<!-- XS -->
<button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:opacity-50 disabled:pointer-events-none h-6 px-2 text-[10px] bg-black text-white hover:opacity-90">Default</button>
<button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:opacity-50 disabled:pointer-events-none h-6 px-2 text-[10px] border border-gray-300 bg-transparent text-gray-900 hover:bg-gray-100">Outline</button>
<button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:opacity-50 disabled:pointer-events-none h-6 px-2 text-[10px] bg-transparent text-gray-900 hover:bg-gray-100">Ghost</button>

<!-- Small -->
<button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:opacity-50 disabled:pointer-events-none h-8 px-3 text-xs bg-black text-white hover:opacity-90">Default</button>
<button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:opacity-50 disabled:pointer-events-none h-8 px-3 text-xs border border-gray-300 bg-transparent text-gray-900 hover:bg-gray-100">Outline</button>
<button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:opacity-50 disabled:pointer-events-none h-8 px-3 text-xs bg-transparent text-gray-900 hover:bg-gray-100">Ghost</button>

<!-- Medium -->
<button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:opacity-50 disabled:pointer-events-none h-10 px-4 py-2 bg-black text-white hover:opacity-90">Default</button>
<button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:opacity-50 disabled:pointer-events-none h-10 px-4 py-2 border border-gray-300 bg-transparent text-gray-900 hover:bg-gray-100">Outline</button>
<button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:opacity-50 disabled:pointer-events-none h-10 px-4 py-2 bg-transparent text-gray-900 hover:bg-gray-100">Ghost</button>

<!-- Large -->
<button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:opacity-50 disabled:pointer-events-none h-12 px-6 text-base bg-black text-white hover:opacity-90">Default</button>
<button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:opacity-50 disabled:pointer-events-none h-12 px-6 text-base border border-gray-300 bg-transparent text-gray-900 hover:bg-gray-100">Outline</button>
<button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:opacity-50 disabled:pointer-events-none h-12 px-6 text-base bg-transparent text-gray-900 hover:bg-gray-100">Ghost</button>`}
        />
      </section>
    </div>
  );
}
