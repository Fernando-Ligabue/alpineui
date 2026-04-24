"use client";

import { useState } from "react";
import DemoBlock from "@/components/DemoBlock";
import { InstallCommand } from "@/components/InstallCommand";

function InteractiveProgress() {
  const [value, setValue] = useState(45);

  return (
    <div className="space-y-4 w-full max-w-sm">
      <div className="au-progress">
        <div className="au-progress-bar" style={{ width: `${value}%` }} />
      </div>
      <div className="flex gap-2">
        <button className="au-button au-button-sm au-button-outline" onClick={() => setValue(Math.max(0, value - 10))}>
          -10%
        </button>
        <button className="au-button au-button-sm au-button-outline" onClick={() => setValue(Math.min(100, value + 10))}>
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
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Installation</h2>
        <InstallCommand command="npx alpineui add progress" />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Interactive Demo</h2>
        <DemoBlock preview={<InteractiveProgress />} code={`<div class="au-progress">
  <div class="au-progress-bar" style={{ width: "\${value}%" }} />
</div>`} />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Sizes</h2>
        <DemoBlock
          preview={
            <div className="space-y-4 w-full max-w-sm">
              <div className="au-progress au-progress-sm">
                <div className="au-progress-bar" style={{ width: "60%" }} />
              </div>
              <div className="au-progress">
                <div className="au-progress-bar" style={{ width: "60%" }} />
              </div>
              <div className="au-progress au-progress-lg">
                <div className="au-progress-bar" style={{ width: "60%" }} />
              </div>
            </div>
          }
          code={`<div class="au-progress au-progress-sm">...</div>
<div class="au-progress">...</div>
<div class="au-progress au-progress-lg">...</div>`}
        />
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
              <tr><td className="px-4 py-2 font-mono text-xs">au-progress</td><td className="px-4 py-2">Progress container</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-progress-bar</td><td className="px-4 py-2">Progress fill</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-progress-sm|lg</td><td className="px-4 py-2">Sizes</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}