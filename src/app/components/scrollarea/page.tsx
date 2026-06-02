"use client";

import DemoBlock from "@/components/DemoBlock";

const longContent = Array.from({ length: 20 }, (_, i) => `Item ${i + 1}: Lorem ipsum dolor sit amet, consectetur adipiscing elit.`);

export default function ScrollAreaPage() {
  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-au-foreground mb-2">Scroll Area</h1>
      <p className="text-au-muted-foreground mb-8">A styled scrollable container for overflow content.</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Interactive Demo</h2>
        <DemoBlock
          preview={
            <div className="w-full max-w-md">
              <div className="h-48 overflow-y-auto border border-au-border rounded-lg p-4 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-au-secondary [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full">
                <div className="space-y-2">
                  {longContent.map((text, i) => (
                    <p key={i} className="text-sm text-au-muted-foreground">{text}</p>
                  ))}
                </div>
              </div>
            </div>
          }
          code={`<div class="h-48 overflow-y-auto border border-gray-200 rounded-lg p-4"
  style="scrollbar-width: thin; scrollbar-color: #d1d5db #f3f4f6;">
  <div class="space-y-2">
    <p class="text-sm text-gray-600">Scrollable content here...</p>
  </div>
</div>

<!-- With custom scrollbar (WebKit) -->
<div class="h-48 overflow-y-auto border border-gray-200 rounded-lg p-4
  [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  [&::-webkit-scrollbar-thumb]:rounded-full">
  <!-- content -->
</div>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Horizontal Scroll</h2>
        <DemoBlock
          preview={
            <div className="w-full max-w-md overflow-x-auto border border-au-border rounded-lg p-4 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-au-secondary [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full">
              <div className="flex gap-4 w-max">
                {Array.from({ length: 12 }, (_, i) => (
                  <div key={i} className="w-32 h-24 bg-au-secondary rounded-lg flex items-center justify-center text-sm text-au-muted-foreground shrink-0">
                    Card {i + 1}
                  </div>
                ))}
              </div>
            </div>
          }
          code={`<div class="overflow-x-auto border border-gray-200 rounded-lg p-4">
  <div class="flex gap-4 w-max">
    <div class="w-32 h-24 bg-gray-100 rounded-lg flex items-center justify-center text-sm text-gray-500 shrink-0">Card</div>
    <!-- Repeat cards -->
  </div>
</div>`}
        />
      </section>
    </div>
  );
}
