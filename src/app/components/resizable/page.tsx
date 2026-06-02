"use client";

import { useState, useRef } from "react";
import DemoBlock from "@/components/DemoBlock";

function InteractiveResizable() {
  const [leftWidth, setLeftWidth] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    dragging.current = true;
    const startX = e.clientX;
    const startWidth = leftWidth;

    const handleMouseMove = (ev: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const dx = ev.clientX - startX;
      const pct = ((startWidth / 100) * rect.width + dx) / rect.width * 100;
      setLeftWidth(Math.min(Math.max(pct, 20), 80));
    };

    const handleMouseUp = () => {
      dragging.current = false;
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <div className="w-full max-w-lg">
      <div ref={containerRef} className="flex border border-gray-200 rounded-lg overflow-hidden h-48 select-none">
        <div className="flex items-center justify-center bg-gray-50 text-sm text-gray-600" style={{ width: `${leftWidth}%` }}>
          Left Panel
        </div>
        <div
          onMouseDown={handleMouseDown}
          className="w-1 bg-gray-200 hover:bg-gray-400 cursor-col-resize shrink-0 transition-colors"
        />
        <div className="flex-1 flex items-center justify-center bg-white text-sm text-gray-600">
          Right Panel
        </div>
      </div>
      <p className="text-xs text-gray-400 mt-2 text-center">Drag the divider to resize</p>
    </div>
  );
}

export default function ResizablePage() {
  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Resizable</h1>
      <p className="text-gray-500 mb-8">A container with draggable divider for resizing panels.</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Interactive Demo</h2>
        <DemoBlock
          preview={<InteractiveResizable />}
          code={`<div x-data="{ leftWidth: 50, dragging: false, startX: 0, startWidth: 0 }"
  x-init="
    $refs.container.addEventListener('mousemove', (e) => {
      if (!dragging) return;
      const rect = $refs.container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      leftWidth = Math.min(Math.max((x / rect.width) * 100, 20), 80);
    });
    $refs.container.addEventListener('mouseup', () => { dragging = false; });
    $refs.container.addEventListener('mouseleave', () => { dragging = false; });
  "
  class="flex border border-gray-200 rounded-lg overflow-hidden h-48 select-none">
  <div class="flex items-center justify-center bg-gray-50 text-sm text-gray-600"
    :style="'width: ' + leftWidth + '%'">
    Left Panel
  </div>
  <div @mousedown="dragging = true"
    class="w-1 bg-gray-200 hover:bg-gray-400 cursor-col-resize shrink-0 transition-colors">
  </div>
  <div class="flex-1 flex items-center justify-center bg-white text-sm text-gray-600">
    Right Panel
  </div>
</div>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Vertical Resizable</h2>
        <DemoBlock
          preview={
            <div className="w-full max-w-lg">
              <div className="flex flex-col border border-gray-200 rounded-lg overflow-hidden h-48 select-none">
                <div className="flex items-center justify-center bg-gray-50 text-sm text-gray-600" style={{ height: "50%" }}>
                  Top Panel
                </div>
                <div className="h-1 bg-gray-200 hover:bg-gray-400 cursor-row-resize shrink-0 transition-colors" />
                <div className="flex-1 flex items-center justify-center bg-white text-sm text-gray-600">
                  Bottom Panel
                </div>
              </div>
            </div>
          }
          code={`<div x-data="{ topHeight: 50, dragging: false }"
  class="flex flex-col border border-gray-200 rounded-lg overflow-hidden h-48 select-none">
  <div class="flex items-center justify-center bg-gray-50 text-sm text-gray-600"
    :style="'height: ' + topHeight + '%'">
    Top Panel
  </div>
  <div @mousedown="dragging = true"
    class="h-1 bg-gray-200 hover:bg-gray-400 cursor-row-resize shrink-0 transition-colors">
  </div>
  <div class="flex-1 flex items-center justify-center bg-white text-sm text-gray-600">
    Bottom Panel
  </div>
</div>`}
        />
      </section>
    </div>
  );
}
