"use client";

import DemoBlock from "@/components/DemoBlock";
import { InstallCommand } from "@/components/InstallCommand";

function InteractivePopover() {
  return (
    <div className="flex flex-wrap gap-6 justify-center py-4">
      <div className="au-popover-trigger au-popover-bottom">
        <button className="au-button au-button-md au-button-default">
          Hover me
        </button>
        <div className="au-popover-content">
          <div className="au-popover-title">Popover Title</div>
          <div className="au-popover-description">
            This is additional content that provides more information about something.
          </div>
        </div>
      </div>

      <div className="au-popover-trigger au-popover-right">
        <button className="au-button au-button-md au-button-default">
          More Info
        </button>
        <div className="au-popover-content">
          <div className="au-popover-title">Details</div>
          <div className="au-popover-description">
            Additional details appear here on hover.
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PopoverPage() {
  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-au-foreground mb-2">Popover</h1>
      <p className="text-au-muted-foreground mb-8">
        A floating content container that appears on hover.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Installation</h2>
        <InstallCommand command="npx alpineui add popover" />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Interactive Demo</h2>
        <DemoBlock
          preview={
            <div className="py-4">
              <div className="au-popover-trigger au-popover-bottom">
                <button className="au-button au-button-md au-button-default">
                  Hover me
                </button>
                <div className="au-popover-content">
                  <div className="au-popover-title">Popover Title</div>
                  <div className="au-popover-description">
                    This is additional content that provides more information.
                  </div>
                </div>
              </div>
            </div>
          }
          code={`<div class="au-popover-trigger au-popover-bottom">
  <button>Hover me</button>
  <div class="au-popover-content">
    <div class="au-popover-title">Title</div>
    <div class="au-popover-description">Description</div>
  </div>
</div>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Positions</h2>
        <DemoBlock preview={<InteractivePopover />} code={`.au-popover-top .au-popover-content { bottom: 100%; }
.au-popover-bottom .au-popover-content { top: 100%; }
.au-popover-left .au-popover-content { right: 100%; }
.au-popover-right .au-popover-content { left: 100%; }`} />
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
              <tr><td className="px-4 py-2 font-mono text-xs">au-popover-trigger</td><td className="px-4 py-2">Container wrapper</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-popover-content</td><td className="px-4 py-2">Popover content</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-popover-title</td><td className="px-4 py-2">Title text</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-popover-description</td><td className="px-4 py-2">Description text</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-popover-top|bottom|left|right</td><td className="px-4 py-2">Position</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}