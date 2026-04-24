"use client";

import { useState } from "react";
import DemoBlock from "@/components/DemoBlock";
import { InstallCommand } from "@/components/InstallCommand";

function InteractiveTextarea() {
  const [value, setValue] = useState("");

  return (
    <textarea
      className="au-textarea"
      placeholder="Type your message here..."
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

export default function TextareaPage() {
  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-au-foreground mb-2">Textarea</h1>
      <p className="text-au-muted-foreground mb-8">
        A multi-line text input component for entering longer text.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Installation</h2>
        <InstallCommand command="npx alpineui add textarea" />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Interactive Demo</h2>
        <DemoBlock
          preview={<InteractiveTextarea />}
          code={`<textarea
  class="au-textarea"
  placeholder="Type your message here..."
  value={value}
  onChange={(e) => setValue(e.target.value)}
/>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">States</h2>
        <DemoBlock
          preview={
            <div className="space-y-4 w-full max-w-md">
              <textarea className="au-textarea" placeholder="Default" />
              <textarea className="au-textarea" defaultValue="With default content" />
              <textarea className="au-textarea au-textarea-error" placeholder="Error state" />
              <textarea className="au-textarea au-textarea-disabled" placeholder="Disabled" disabled />
            </div>
          }
          code={`<textarea class="au-textarea" placeholder="Default" />
<textarea class="au-textarea au-textarea-error" placeholder="Error" />
<textarea class="au-textarea" disabled />`}
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
              <tr><td className="px-4 py-2 font-mono text-xs">au-textarea</td><td className="px-4 py-2">Textarea base</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-textarea-error</td><td className="px-4 py-2">Error state</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-textarea-disabled</td><td className="px-4 py-2">Disabled state</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}