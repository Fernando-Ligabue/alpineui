"use client";

import { useState } from "react";
import DemoBlock from "@/components/DemoBlock";

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
        className="px-4 py-2 bg-au-primary text-au-primary-foreground text-sm font-medium rounded-md hover:bg-gray-800 transition-colors"
      >
        Open Dialog
      </button>
      
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-50 bg-black/50"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed left-[50%] top-[50%] z-50 translate-x-[-50%] translate-y-[-50%] w-full max-w-lg bg-au-background rounded-lg shadow-lg border border-au-border p-6">
            <div className="flex flex-col gap-1.5 text-center sm:text-left mb-4">
              <div>
                <h3 className="text-lg font-semibold leading-none tracking-tight">{title}</h3>
                {description && <p className="text-sm text-au-muted-foreground">{description}</p>}
              </div>
              <button 
                className="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100 transition-opacity"
                onClick={() => setIsOpen(false)}
              >
                ×
              </button>
            </div>
            {children && <div>{children}</div>}
            {showFooter && (
              <div className="flex flex-col-reverse sm:flex-row justify-end gap-2 mt-6">
                <button 
                  className="px-3 py-1.5 border border-au-border text-sm font-medium rounded-md hover:bg-au-accent transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Cancel
                </button>
                <button 
                  className="px-3 py-1.5 bg-au-primary text-au-primary-foreground text-sm font-medium rounded-md hover:bg-gray-800 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Confirm
                </button>
              </div>
            )}
          </div>
        </>
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
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Basic Dialog</h2>
        <DemoBlock
          preview={
            <InteractiveDialog title="Confirm Action" description="Are you sure you want to proceed?">
              <p>This is a basic dialog example. Click outside or use the buttons to close.</p>
            </InteractiveDialog>
          }
          code={`<div x-data="{ open: false }">
  <button @click="open = true" class="px-4 py-2 bg-black text-white text-sm font-medium rounded-md hover:bg-gray-800 transition-colors">
    Open Dialog
  </button>
  <div x-show="open" class="fixed inset-0 z-50 bg-black/50" @click="open = false"></div>
  <div x-show="open"
    class="fixed left-[50%] top-[50%] z-50 translate-x-[-50%] translate-y-[-50%] w-full max-w-lg bg-white rounded-lg shadow-lg border border-gray-200 p-6">
    <div class="flex flex-col gap-1.5 text-center sm:text-left mb-4">
      <div>
        <h3 class="text-lg font-semibold leading-none tracking-tight">Confirm Action</h3>
        <p class="text-sm text-gray-500">Are you sure you want to proceed?</p>
      </div>
      <button @click="open = false" class="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100 transition-opacity">×</button>
    </div>
    <div>
      <p>Are you sure you want to proceed?</p>
    </div>
    <div class="flex flex-col-reverse sm:flex-row justify-end gap-2 mt-6">
      <button @click="open = false" class="px-3 py-1.5 border border-gray-300 text-sm font-medium rounded-md hover:bg-gray-50 transition-colors">Cancel</button>
      <button @click="open = false" class="px-3 py-1.5 bg-black text-white text-sm font-medium rounded-md hover:bg-gray-800 transition-colors">Confirm</button>
    </div>
  </div>
</div>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Sizes</h2>
        <DemoBlock
          preview={
            <div className="flex flex-wrap gap-4 items-start justify-center py-4">
              <div className="w-full max-w-xs bg-au-background rounded-lg shadow-lg border border-au-border p-4 text-center">
                <span className="text-sm">Small</span>
              </div>
              <div className="w-full max-w-md bg-au-background rounded-lg shadow-lg border border-au-border p-4 text-center">
                <span className="text-sm">Medium</span>
              </div>
              <div className="w-full max-w-xl bg-au-background rounded-lg shadow-lg border border-au-border p-4 text-center">
                <span className="text-sm">Large</span>
              </div>
            </div>
          }
          code={`<div class="w-full max-w-xs bg-white rounded-lg shadow-lg border border-gray-200 p-4 text-center">Small</div>
<div class="w-full max-w-md bg-white rounded-lg shadow-lg border border-gray-200 p-4 text-center">Medium</div>
<div class="w-full max-w-xl bg-white rounded-lg shadow-lg border border-gray-200 p-4 text-center">Large</div>`}
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
          code={`<div class="fixed inset-0 z-50 bg-black/50"></div>
<div class="fixed left-[50%] top-[50%] z-50 translate-x-[-50%] translate-y-[-50%] w-full max-w-sm bg-white rounded-lg shadow-lg border border-gray-200 p-6">
  <div class="flex flex-col gap-1.5 text-center sm:text-left mb-4">
    <h3 class="text-lg font-semibold leading-none tracking-tight">Delete Item</h3>
    <p class="text-sm text-gray-500">This action cannot be undone.</p>
  </div>
  <div class="flex flex-col-reverse sm:flex-row justify-end gap-2 mt-6">
    <button class="px-3 py-1.5 bg-black text-white text-sm font-medium rounded-md">Delete</button>
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
                <div>
                  <label className="block text-sm font-medium text-au-foreground mb-1">Name</label>
                  <input type="text" className="w-full px-3 py-2 border border-au-border rounded-md text-sm" defaultValue="John Smith" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-au-foreground mb-1">Email</label>
                  <input type="email" className="w-full px-3 py-2 border border-au-border rounded-md text-sm" defaultValue="john@example.com" />
                </div>
              </div>
            </InteractiveDialog>
          }
          code={`<div class="fixed inset-0 z-50 bg-black/50"></div>
<div class="fixed left-[50%] top-[50%] z-50 translate-x-[-50%] translate-y-[-50%] w-full max-w-lg bg-white rounded-lg shadow-lg border border-gray-200 p-6">
  <div class="flex flex-col gap-1.5 text-center sm:text-left mb-4">
    <h3 class="text-lg font-semibold leading-none tracking-tight">Edit Profile</h3>
    <button class="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100 transition-opacity">×</button>
  </div>
  <div>
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-1">Name</label>
      <input type="text" class="w-full px-3 py-2 border border-gray-300 rounded-md text-sm" />
    </div>
  </div>
  <div class="flex flex-col-reverse sm:flex-row justify-end gap-2 mt-6">
    <button class="px-3 py-1.5 border border-gray-300 text-sm font-medium rounded-md hover:bg-gray-50">Cancel</button>
    <button class="px-3 py-1.5 bg-black text-white text-sm font-medium rounded-md hover:bg-gray-800">Save</button>
  </div>
</div>`}
        />
      </section>
    </div>
  );
}
