"use client";

import { useState, useRef } from "react";
import DemoBlock from "@/components/DemoBlock";
import { useI18n } from "@/i18n/I18nProvider";

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
      <div ref={containerRef} className="flex border border-au-border rounded-lg overflow-hidden h-48 select-none">
        <div className="flex items-center justify-center bg-au-accent text-sm text-au-muted-foreground" style={{ width: `${leftWidth}%` }}>
          Left Panel
        </div>
        <div
          onMouseDown={handleMouseDown}
          className="w-1 bg-au-border hover:bg-au-muted-foreground cursor-col-resize shrink-0 transition-colors"
        />
        <div className="flex-1 flex items-center justify-center bg-au-background text-sm text-au-muted-foreground">
          Right Panel
        </div>
      </div>
      <p className="text-xs text-au-muted-foreground mt-2 text-center">Drag the divider to resize</p>
    </div>
  );
}

function InteractiveResizableVertical() {
  const [topHeight, setTopHeight] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    dragging.current = true;
    const startY = e.clientY;
    const startHeight = topHeight;

    const handleMouseMove = (ev: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const dy = ev.clientY - startY;
      const pct = ((startHeight / 100) * rect.height + dy) / rect.height * 100;
      setTopHeight(Math.min(Math.max(pct, 20), 80));
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
      <div ref={containerRef} className="flex flex-col border border-au-border rounded-lg overflow-hidden h-48 select-none">
        <div className="flex items-center justify-center bg-au-accent text-sm text-au-muted-foreground" style={{ height: `${topHeight}%` }}>
          Top Panel
        </div>
        <div
          onMouseDown={handleMouseDown}
          className="h-1 bg-au-border hover:bg-au-muted-foreground cursor-row-resize shrink-0 transition-colors"
        />
        <div className="flex-1 flex items-center justify-center bg-au-background text-sm text-au-muted-foreground">
          Bottom Panel
        </div>
      </div>
      <p className="text-xs text-au-muted-foreground mt-2 text-center">Drag the divider to resize</p>
    </div>
  );
}

export default function ResizablePage() {
  const { t } = useI18n();
  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-au-foreground mb-2">{t("resizable.title")}</h1>
      <p className="text-au-muted-foreground mb-8">{t("resizable.description")}</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">{t("common.interactiveDemo")}</h2>
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
        <h2 className="text-xl font-semibold text-au-foreground mb-4">{t("common.vertical")} Resizable</h2>
        <DemoBlock
          preview={<InteractiveResizableVertical />}
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
