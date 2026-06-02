"use client";

import DemoBlock from "@/components/DemoBlock";

const positionClasses: Record<string, string> = {
  top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
  bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
  left: "right-full top-1/2 -translate-y-1/2 mr-2",
  right: "left-full top-1/2 -translate-y-1/2 ml-2",
};

function TooltipWrapper({ children, content, position = "top" }: { children: React.ReactNode; content: string; position?: string }) {
  return (
    <div className="relative inline-flex group">
      <div className="inline-flex items-center">
        {children}
      </div>
      <div className={`absolute z-50 px-3 py-1.5 text-xs font-medium text-white bg-gray-900 rounded-md shadow-sm pointer-events-none whitespace-nowrap invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-150 ${positionClasses[position] || positionClasses.top}`}>
        {content}
      </div>
    </div>
  );
}

function InteractiveTooltip() {
  return (
    <div className="flex flex-wrap gap-6 justify-center py-4">
      <TooltipWrapper content="Tooltip on top" position="top">
        <button className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 bg-gray-900 text-white hover:bg-gray-800">Top</button>
      </TooltipWrapper>
      <TooltipWrapper content="Tooltip on bottom" position="bottom">
        <button className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 bg-gray-900 text-white hover:bg-gray-800">Bottom</button>
      </TooltipWrapper>
      <TooltipWrapper content="Tooltip on left" position="left">
        <button className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 bg-gray-900 text-white hover:bg-gray-800">Left</button>
      </TooltipWrapper>
      <TooltipWrapper content="Tooltip on right" position="right">
        <button className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 bg-gray-900 text-white hover:bg-gray-800">Right</button>
      </TooltipWrapper>
    </div>
  );
}

export default function TooltipPage() {
  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Tooltip</h1>
      <p className="text-gray-500 mb-8">
        A contextual tooltip for displaying additional information on hover.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Interactive Demo</h2>
        <DemoBlock
          preview={
            <div className="py-4">
              <TooltipWrapper content="This is a tooltip!" position="top">
                <button className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 bg-gray-900 text-white hover:bg-gray-800">Hover me</button>
              </TooltipWrapper>
            </div>
          }
          code={`<div class="relative inline-flex group">
  <button class="...">Hover me</button>
  <div class="absolute z-50 px-3 py-1.5 text-xs font-medium text-white bg-gray-900 rounded-md shadow-sm pointer-events-none whitespace-nowrap invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-150 bottom-full left-1/2 -translate-x-1/2 mb-2">
    This is a tooltip!
  </div>
</div>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Positions</h2>
        <DemoBlock
          preview={<InteractiveTooltip />}
          code={`<!-- Top -->
<div class="relative inline-flex group">
  <div class="absolute z-50 px-3 py-1.5 text-xs font-medium text-white bg-gray-900 rounded-md shadow-sm ... bottom-full left-1/2 -translate-x-1/2 mb-2">
    Tooltip on top
  </div>
</div>

<!-- Bottom -->
<div class="relative inline-flex group">
  <div class="absolute ... top-full left-1/2 -translate-x-1/2 mt-2">
    Tooltip on bottom
  </div>
</div>

<!-- Left -->
<div class="relative inline-flex group">
  <div class="absolute ... right-full top-1/2 -translate-y-1/2 mr-2">
    Tooltip on left
  </div>
</div>

<!-- Right -->
<div class="relative inline-flex group">
  <div class="absolute ... left-full top-1/2 -translate-y-1/2 ml-2">
    Tooltip on right
  </div>
</div>`}
        />
      </section>
    </div>
  );
}
