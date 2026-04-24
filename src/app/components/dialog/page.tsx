"use client";

import { useState } from "react";
import DemoBlock from "@/components/DemoBlock";
import { InstallCommand } from "@/components/InstallCommand";

function InteractiveDialog({ 
  children, 
  title, 
  description,
  showFooter = true 
}: { 
  children?: React.ReactNode; 
  title: string;
  description?: string;
  showFooter?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(true)}
        className="au-button au-button-md au-button-default"
      >
        Open Dialog
      </button>
      
      {isOpen && (
        <div className="au-dialog">
          <div 
            className="au-dialog-overlay" 
            onClick={() => setIsOpen(false)}
          />
          <div className="au-dialog-content au-dialog-md">
            <div className="au-dialog-header">
              <div>
                <h3 className="au-dialog-title">{title}</h3>
                {description && <p className="au-dialog-description">{description}</p>}
              </div>
              <button 
                className="au-dialog-close"
                onClick={() => setIsOpen(false)}
              >
                ×
              </button>
            </div>
            {children && <div className="au-dialog-body">{children}</div>}
            {showFooter && (
              <div className="au-dialog-footer">
                <button 
                  className="au-button au-button-outline au-button-sm"
                  onClick={() => setIsOpen(false)}
                >
                  Cancel
                </button>
                <button 
                  className="au-button au-button-default au-button-sm"
                  onClick={() => setIsOpen(false)}
                >
                  Confirm
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default function DialogPage() {
  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-au-foreground mb-2">Dialog</h1>
      <p className="text-au-muted-foreground mb-8">
        A modal dialog component for focused interactions and confirmations.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Installation</h2>
        <InstallCommand command="npx alpineui add dialog" />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Basic Dialog</h2>
        <DemoBlock
          preview={
            <InteractiveDialog title="Confirm Action" description="Are you sure you want to proceed?">
              <p>This is a basic dialog example. Click outside or use the buttons to close.</p>
            </InteractiveDialog>
          }
          code={`const [open, setOpen] = useState(false);

return (
  <div>
    <button onClick={() => setOpen(true)}>Open Dialog</button>
    {open && (
      <div class="au-dialog">
        <div class="au-dialog-overlay" onClick={() => setOpen(false)} />
        <div class="au-dialog-content au-dialog-md">
          <div class="au-dialog-header">
            <h3 class="au-dialog-title">Confirm Action</h3>
            <button class="au-dialog-close" onClick={() => setOpen(false)}>×</button>
          </div>
          <div class="au-dialog-body">
            <p>Are you sure you want to proceed?</p>
          </div>
          <div class="au-dialog-footer">
            <button onClick={() => setOpen(false)}>Cancel</button>
            <button onClick={() => setOpen(false)}>Confirm</button>
          </div>
        </div>
      </div>
    )}
  </div>
);`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Sizes</h2>
        <DemoBlock
          preview={
            <div className="flex flex-wrap gap-4 items-start justify-center py-4">
              <div className="au-dialog-content au-dialog-sm p-4 text-center">
                <span className="text-sm">Small</span>
              </div>
              <div className="au-dialog-content au-dialog-md p-4 text-center">
                <span className="text-sm">Medium</span>
              </div>
              <div className="au-dialog-content au-dialog-lg p-4 text-center">
                <span className="text-sm">Large</span>
              </div>
            </div>
          }
          code={`<div class="au-dialog-content au-dialog-sm">Small</div>
<div class="au-dialog-content au-dialog-md">Medium</div>
<div class="au-dialog-content au-dialog-lg">Large</div>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Alert Dialog</h2>
        <DemoBlock
          preview={
            <InteractiveDialog 
              title="Delete Item" 
              description="This action cannot be undone."
              showFooter={true}
            />
          }
          code={`<div class="au-dialog">
  <div class="au-dialog-overlay"></div>
  <div class="au-dialog-content au-dialog-sm">
    <div class="au-dialog-header">
      <div>
        <h3 class="au-dialog-title">Delete Item</h3>
        <p class="au-dialog-description">This action cannot be undone.</p>
      </div>
    </div>
    <div class="au-dialog-footer">
      <button class="au-button au-button-default au-button-sm au-button-destructive">Delete</button>
    </div>
  </div>
</div>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Form Dialog</h2>
        <DemoBlock
          preview={
            <InteractiveDialog title="Edit Profile" showFooter={true}>
              <div className="space-y-4">
                <div className="au-field">
                  <label className="au-label">Name</label>
                  <input type="text" className="au-input au-input-md" defaultValue="John Smith" />
                </div>
                <div className="au-field">
                  <label className="au-label">Email</label>
                  <input type="email" className="au-input au-input-md" defaultValue="john@example.com" />
                </div>
              </div>
            </InteractiveDialog>
          }
          code={`<div class="au-dialog">
  <div class="au-dialog-overlay"></div>
  <div class="au-dialog-content au-dialog-md">
    <div class="au-dialog-header">
      <div>
        <h3 class="au-dialog-title">Edit Profile</h3>
      </div>
      <button class="au-dialog-close">×</button>
    </div>
    <div class="au-dialog-body">
      <div class="au-field">
        <label class="au-label">Name</label>
        <input type="text" class="au-input au-input-md" />
      </div>
    </div>
    <div class="au-dialog-footer">
      <button class="au-button au-button-outline au-button-sm">Cancel</button>
      <button class="au-button au-button-default au-button-sm">Save</button>
    </div>
  </div>
</div>`}
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
              <tr><td className="px-4 py-2 font-mono text-xs">au-dialog</td><td className="px-4 py-2">Dialog container</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-dialog-overlay</td><td className="px-4 py-2">Backdrop overlay</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-dialog-content</td><td className="px-4 py-2">Dialog content wrapper</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-dialog-sm|md|lg|xl|full</td><td className="px-4 py-2">Dialog size</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-dialog-header</td><td className="px-4 py-2">Header section</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-dialog-title</td><td className="px-4 py-2">Title text</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-dialog-description</td><td className="px-4 py-2">Description text</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-dialog-close</td><td className="px-4 py-2">Close button</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-dialog-body</td><td className="px-4 py-2">Main content area</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-dialog-footer</td><td className="px-4 py-2">Footer actions</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}