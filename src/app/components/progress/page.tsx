"use client";

import { useState } from "react";
import DemoBlock from "@/components/DemoBlock";

function InteractiveProgress() {
  const [value, setValue] = useState(45);

  return (
    <div className="space-y-4 w-full max-w-sm">
      <div className="relative h-4 w-full overflow-hidden rounded-full bg-au-secondary">
        <div className="h-full w-full flex-1 bg-au-primary transition-all duration-500 ease-in-out" style={{ width: `${value}%` }} />
      </div>
      <div className="flex gap-2">
        <button className="inline-flex items-center justify-center rounded-md text-sm font-medium border border-au-border bg-au-background text-au-foreground hover:bg-au-accent h-8 px-3" onClick={() => setValue(Math.max(0, value - 10))}>
          -10%
        </button>
        <button className="inline-flex items-center justify-center rounded-md text-sm font-medium border border-au-border bg-au-background text-au-foreground hover:bg-au-accent h-8 px-3" onClick={() => setValue(Math.min(100, value + 10))}>
          +10%
        </button>
        <span className="ml-auto text-sm text-au-muted-foreground">{value}%</span>
      </div>
    </div>
  );
}

export default function ProgressPage() {
  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-au-foreground mb-2">Progress</h1>
      <p className="text-au-muted-foreground mb-8">
        A component that displays the progress of an action.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Interactive Demo</h2>
        <DemoBlock preview={<InteractiveProgress />} code={`<div class="relative h-4 w-full overflow-hidden rounded-full bg-gray-100">
  <div class="h-full w-full flex-1 bg-black transition-all duration-500 ease-in-out" style="width: \${value}%" />
</div>`} />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Sizes</h2>
        <DemoBlock
          preview={
            <div className="space-y-4 w-full max-w-sm">
              <div className="relative h-2 w-full overflow-hidden rounded-full bg-au-secondary">
                <div className="h-full w-full flex-1 bg-au-primary transition-all duration-500 ease-in-out" style={{ width: "60%" }} />
              </div>
              <div className="relative h-4 w-full overflow-hidden rounded-full bg-au-secondary">
                <div className="h-full w-full flex-1 bg-au-primary transition-all duration-500 ease-in-out" style={{ width: "60%" }} />
              </div>
              <div className="relative h-6 w-full overflow-hidden rounded-full bg-au-secondary">
                <div className="h-full w-full flex-1 bg-au-primary transition-all duration-500 ease-in-out" style={{ width: "60%" }} />
              </div>
            </div>
          }
          code={`<div class="relative h-2 w-full overflow-hidden rounded-full bg-gray-100">...</div>
<div class="relative h-4 w-full overflow-hidden rounded-full bg-gray-100">...</div>
<div class="relative h-6 w-full overflow-hidden rounded-full bg-gray-100">...</div>`}
        />
      </section>
    </div>
  );
}
