"use client";

import DemoBlock from "@/components/DemoBlock";

export default function NativeSelectPage() {
  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Native Select</h1>
      <p className="text-gray-500 mb-8">A styled native select element for choosing from a list of options.</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Interactive Demo</h2>
        <DemoBlock
          preview={
            <div className="w-full max-w-xs">
              <select className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer">
                <option value="">Select a fruit</option>
                <option value="apple">Apple</option>
                <option value="banana">Banana</option>
                <option value="orange">Orange</option>
                <option value="grape">Grape</option>
              </select>
            </div>
          }
          code={`<select class="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer">
  <option value="">Select a fruit</option>
  <option value="apple">Apple</option>
  <option value="banana">Banana</option>
  <option value="orange">Orange</option>
  <option value="grape">Grape</option>
</select>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Sizes</h2>
        <DemoBlock
          preview={
            <div className="flex flex-wrap items-center gap-4">
              <select className="flex h-8 w-36 rounded-md border border-gray-300 bg-white px-2 py-1 text-xs text-gray-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black cursor-pointer">
                <option>Small</option>
              </select>
              <select className="flex h-10 w-36 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black cursor-pointer">
                <option>Medium</option>
              </select>
              <select className="flex h-12 w-36 rounded-md border border-gray-300 bg-white px-4 py-3 text-base text-gray-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black cursor-pointer">
                <option>Large</option>
              </select>
            </div>
          }
          code={`<!-- Small -->
<select class="flex h-8 w-36 rounded-md border border-gray-300 bg-white px-2 py-1 text-xs cursor-pointer">...</select>

<!-- Medium -->
<select class="flex h-10 w-36 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm cursor-pointer">...</select>

<!-- Large -->
<select class="flex h-12 w-36 rounded-md border border-gray-300 bg-white px-4 py-3 text-base cursor-pointer">...</select>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">States</h2>
        <DemoBlock
          preview={
            <div className="flex flex-wrap items-center gap-4">
              <select className="flex h-10 w-36 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black cursor-pointer">
                <option>Default</option>
              </select>
              <select className="flex h-10 w-36 rounded-md border border-gray-300 bg-gray-100 px-3 py-2 text-sm text-gray-400 cursor-not-allowed" disabled>
                <option>Disabled</option>
              </select>
              <select className="flex h-10 w-36 rounded-md border border-red-500 bg-white px-3 py-2 text-sm text-gray-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500 cursor-pointer">
                <option>Error</option>
              </select>
            </div>
          }
          code={`<!-- Default -->
<select class="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm cursor-pointer">...</select>

<!-- Disabled -->
<select class="flex h-10 w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-2 text-sm text-gray-400 cursor-not-allowed" disabled>...</select>

<!-- Error -->
<select class="flex h-10 w-full rounded-md border border-red-500 bg-white px-3 py-2 text-sm cursor-pointer">...</select>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">With Grouped Options</h2>
        <DemoBlock
          preview={
            <div className="w-full max-w-xs">
              <select className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black cursor-pointer">
                <optgroup label="Frontend">
                  <option>React</option>
                  <option>Vue</option>
                  <option>Alpine.js</option>
                </optgroup>
                <optgroup label="Backend">
                  <option>Node.js</option>
                  <option>Python</option>
                  <option>Go</option>
                </optgroup>
              </select>
            </div>
          }
          code={`<select class="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm cursor-pointer">
  <optgroup label="Frontend">
    <option>React</option>
    <option>Vue</option>
    <option>Alpine.js</option>
  </optgroup>
  <optgroup label="Backend">
    <option>Node.js</option>
    <option>Python</option>
    <option>Go</option>
  </optgroup>
</select>`}
        />
      </section>
    </div>
  );
}
