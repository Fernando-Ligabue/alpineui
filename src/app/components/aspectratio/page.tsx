"use client";

import DemoBlock from "@/components/DemoBlock";

export default function AspectRatioPage() {
  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Aspect Ratio</h1>
      <p className="text-gray-500 mb-8">A container that maintains a specific aspect ratio for its content.</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Interactive Demo</h2>
        <DemoBlock
          preview={
            <div className="space-y-8 w-full max-w-md">
              <div>
                <p className="text-sm font-medium text-gray-500 mb-2">16:9</p>
                <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm">16:9</div>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 mb-2">1:1 (Square)</p>
                <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden max-w-[200px]">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm">1:1</div>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 mb-2">4:3</p>
                <div className="relative aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm">4:3</div>
                </div>
              </div>
            </div>
          }
          code={`<!-- 16:9 -->
<div class="relative aspect-video bg-gray-100 rounded-lg overflow-hidden">
  <div class="absolute inset-0 flex items-center justify-center text-gray-400 text-sm">Content</div>
</div>

<!-- 1:1 Square -->
<div class="relative aspect-square bg-gray-100 rounded-lg overflow-hidden w-48">
  <div class="absolute inset-0 flex items-center justify-center text-gray-400 text-sm">Content</div>
</div>

<!-- 4:3 -->
<div class="relative aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
  <div class="absolute inset-0 flex items-center justify-center text-gray-400 text-sm">Content</div>
</div>

<!-- Custom ratio -->
<div class="relative aspect-[2/1] bg-gray-100 rounded-lg overflow-hidden">
  <div class="absolute inset-0 flex items-center justify-center text-gray-400 text-sm">2:1</div>
</div>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">With Image</h2>
        <DemoBlock
          preview={
            <div className="grid grid-cols-2 gap-6 w-full max-w-md">
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=200&h=200&fit=crop"
                  alt="Nature"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=200&h=267&fit=crop"
                  alt="Nature vertical"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          }
          code={`<!-- Square with image -->
<div class="relative aspect-square rounded-lg overflow-hidden">
  <img src="your-image.jpg" class="absolute inset-0 w-full h-full object-cover" />
</div>

<!-- 3:4 portrait with image -->
<div class="relative aspect-[3/4] rounded-lg overflow-hidden">
  <img src="your-image.jpg" class="absolute inset-0 w-full h-full object-cover" />
</div>`}
        />
      </section>
    </div>
  );
}
