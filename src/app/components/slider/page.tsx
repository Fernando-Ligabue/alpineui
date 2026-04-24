"use client";

import React, { useState } from "react";
import DemoBlock from "@/components/DemoBlock";
import { InstallCommand } from "@/components/InstallCommand";

function InteractiveSlider() {
  const [value, setValue] = useState(50);
  const sliderRef = React.useRef<HTMLDivElement>(null);

  const startDrag = (e: React.MouseEvent) => {
    e.preventDefault();
    const slider = sliderRef.current;
    if (!slider) return;
    
    const rect = slider.getBoundingClientRect();
    const updateValue = (clientX: number) => {
      const percent = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
      setValue(Math.round(percent));
    };
    
    updateValue(e.clientX);
    
    const handleMove = (moveEvent: MouseEvent) => updateValue(moveEvent.clientX);
    const handleUp = () => {
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseup', handleUp);
    };
    
    document.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseup', handleUp);
  };

  return (
    <div className="space-y-4 w-full max-w-sm">
      <div 
        ref={sliderRef}
        className="au-slider"
        onMouseDown={startDrag}
      >
        <div className="au-slider-range" style={{ width: `${value}%` }} />
        <div 
          className="au-slider-thumb" 
          style={{ left: `${value}%` }}
        />
      </div>
      <div className="flex justify-between text-sm text-au-muted-foreground">
        <span>0</span>
        <span className="font-medium text-au-foreground">{value}</span>
        <span>100</span>
      </div>
    </div>
  );
}

export default function SliderPage() {
  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-au-foreground mb-2">Slider</h1>
      <p className="text-au-muted-foreground mb-8">
        A component that allows the user to select a value by sliding.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Installation</h2>
        <InstallCommand command="npx alpineui add slider" />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Interactive Demo</h2>
        <DemoBlock preview={<InteractiveSlider />} code={`<div class="au-slider">
  <div class="au-slider-range" style={{ width: "\${value}%" }} />
  <div 
    class="au-slider-thumb" 
    style={{ left: "\${value}%" }}
  />
</div>`} />
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
              <tr><td className="px-4 py-2 font-mono text-xs">au-slider</td><td className="px-4 py-2">Slider container</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-slider-range</td><td className="px-4 py-2">Filled portion</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-slider-thumb</td><td className="px-4 py-2">Handle/thumb</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}