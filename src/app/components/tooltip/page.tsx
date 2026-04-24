"use client";

import { useState, useRef, useEffect } from "react";
import DemoBlock from "@/components/DemoBlock";
import { InstallCommand } from "@/components/InstallCommand";

function TooltipWrapper({ children, content, position = "top" }: { children: React.ReactNode; content: string; position?: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);

  return (
    <div className={`au-tooltip-trigger au-tooltip-${position}`} ref={triggerRef}>
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children}
      </div>
      <div
        className="au-tooltip-content"
        style={{
          opacity: isVisible ? 1 : 0,
          visibility: isVisible ? "visible" : "hidden",
        }}
      >
        {content}
      </div>
    </div>
  );
}

function InteractiveTooltip() {
  return (
    <div className="flex flex-wrap gap-6 justify-center py-4">
      <TooltipWrapper content="Tooltip on top" position="top">
        <button className="au-button au-button-md au-button-default">Top</button>
      </TooltipWrapper>
      <TooltipWrapper content="Tooltip on bottom" position="bottom">
        <button className="au-button au-button-md au-button-default">Bottom</button>
      </TooltipWrapper>
      <TooltipWrapper content="Tooltip on left" position="left">
        <button className="au-button au-button-md au-button-default">Left</button>
      </TooltipWrapper>
      <TooltipWrapper content="Tooltip on right" position="right">
        <button className="au-button au-button-md au-button-default">Right</button>
      </TooltipWrapper>
    </div>
  );
}

export default function TooltipPage() {
  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-au-foreground mb-2">Tooltip</h1>
      <p className="text-au-muted-foreground mb-8">
        A contextual tooltip for displaying additional information on hover.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Installation</h2>
        <InstallCommand command="npx alpineui add tooltip" />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Interactive Demo</h2>
        <DemoBlock
          preview={
            <div className="py-4">
              <TooltipWrapper content="This is a tooltip!" position="top">
                <button className="au-button au-button-md au-button-default">Hover me</button>
              </TooltipWrapper>
            </div>
          }
          code={`<div class="au-tooltip-trigger au-tooltip-top">
  <button 
    onMouseEnter={() => setVisible(true)}
    onMouseLeave={() => setVisible(false)}
  >
    Hover me
  </button>
  <div 
    class="au-tooltip-content"
    style={{ opacity: visible ? 1 : 0 }}
  >
    This is a tooltip!
  </div>
</div>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Positions</h2>
        <DemoBlock preview={<InteractiveTooltip />} code={`.au-tooltip-top .au-tooltip-content { bottom: 100%; left: 50%; }
.au-tooltip-bottom .au-tooltip-content { top: 100%; left: 50%; }
.au-tooltip-left .au-tooltip-content { right: 100%; top: 50%; }
.au-tooltip-right .au-tooltip-content { left: 100%; top: 50%; }`} />
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
              <tr><td className="px-4 py-2 font-mono text-xs">au-tooltip-trigger</td><td className="px-4 py-2">Container wrapper</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-tooltip-content</td><td className="px-4 py-2">Tooltip content</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-tooltip-top|bottom|left|right</td><td className="px-4 py-2">Position</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}