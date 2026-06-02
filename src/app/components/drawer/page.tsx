"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import DemoBlock from "@/components/DemoBlock";

function DrawerContent({ open, onClose, direction, children }: { open: boolean; onClose: () => void; direction: "top" | "bottom" | "left" | "right"; children: React.ReactNode }) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;

  const positionClasses: Record<string, string> = {
    bottom: "bottom-0 left-0 right-0 mt-24 rounded-t-lg border border-gray-200 bg-white max-h-[80vh]",
    top: "top-0 left-0 right-0 mb-24 rounded-b-lg border border-gray-200 bg-white max-h-[80vh]",
    left: "left-0 top-0 bottom-0 border-r border-gray-200 bg-white w-[75%] sm:max-w-96",
    right: "right-0 top-0 bottom-0 border-l border-gray-200 bg-white w-[75%] sm:max-w-96",
  };

  return (
    <>
      <div className="fixed inset-0 z-40 bg-black/50" onClick={onClose} />
      <div className={`fixed z-50 flex flex-col ${positionClasses[direction]}`}>
        <div className="flex justify-end p-2">
          <button onClick={onClose}>
            <X className="h-4 w-4 text-gray-500" />
          </button>
        </div>
        {children}
      </div>
    </>
  );
}

function DrawerDemo() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)} className="inline-flex items-center justify-center rounded-lg bg-black px-4 py-2 text-sm font-medium text-white hover:opacity-90">
        Open Drawer
      </button>
      <DrawerContent open={open} onClose={() => setOpen(false)} direction="bottom">
        <div className="flex flex-col gap-1.5 p-4 text-center sm:text-left">
          <h3 className="text-lg font-semibold leading-none tracking-tight">Are you absolutely sure?</h3>
          <p className="text-sm text-gray-500">This action cannot be undone. This will permanently delete your account and remove your data from our servers.</p>
        </div>
        <div className="px-4 py-2">
          <p className="text-sm text-gray-900">Are you sure you want to continue? Once you delete your account, there will be no way to recover it.</p>
        </div>
        <div className="flex flex-col gap-2 p-4 mt-auto">
          <button onClick={() => setOpen(false)} className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium bg-gray-900 text-white hover:bg-gray-800">Continue</button>
          <button onClick={() => setOpen(false)} className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium border border-gray-300 text-gray-700 hover:bg-gray-50">Cancel</button>
        </div>
      </DrawerContent>
    </>
  );
}

function DrawerDirectionsDemo() {
  const [open, setOpen] = useState(false);
  const [direction, setDirection] = useState<"top" | "bottom" | "left" | "right">("bottom");

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      <button onClick={() => { setDirection("top"); setOpen(true); }} className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium border border-gray-300 text-gray-700 hover:bg-gray-50">Top</button>
      <button onClick={() => { setDirection("bottom"); setOpen(true); }} className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium border border-gray-300 text-gray-700 hover:bg-gray-50">Bottom</button>
      <button onClick={() => { setDirection("left"); setOpen(true); }} className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium border border-gray-300 text-gray-700 hover:bg-gray-50">Left</button>
      <button onClick={() => { setDirection("right"); setOpen(true); }} className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium border border-gray-300 text-gray-700 hover:bg-gray-50">Right</button>

      <DrawerContent open={open} onClose={() => setOpen(false)} direction={direction}>
        <div className="flex flex-col gap-1.5 p-4 text-center sm:text-left">
          <h3 className="text-lg font-semibold leading-none tracking-tight capitalize">{direction} Drawer</h3>
          <p className="text-sm text-gray-500">Drawer sliding from {direction}</p>
        </div>
        <div className="px-4">
          <p className="text-sm text-gray-900">This is a drawer that slides from the {direction} side of the screen.</p>
        </div>
        <div className="flex flex-col gap-2 p-4 mt-auto">
          <button onClick={() => setOpen(false)} className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium bg-gray-900 text-white hover:bg-gray-800">Confirm</button>
          <button onClick={() => setOpen(false)} className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium border border-gray-300 text-gray-700 hover:bg-gray-50">Cancel</button>
        </div>
      </DrawerContent>
    </div>
  );
}

export default function DrawerPage() {
  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Drawer</h1>
      <p className="text-gray-500 mb-8">
        A drawer component for mobile-friendly slide-out panels.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Basic Example</h2>
        <DemoBlock
          preview={<DrawerDemo />}
          code={`<div x-data="{ open: false }">
  <!-- Trigger -->
  <button @click="open = true"
    class="inline-flex items-center justify-center rounded-lg bg-black px-4 py-2 text-sm font-medium text-white hover:opacity-90">
    Open Drawer
  </button>

  <!-- Overlay -->
  <div x-show="open" @click="open = false" class="fixed inset-0 z-40 bg-black/50"></div>

  <!-- Drawer Panel (bottom) -->
  <div x-show="open"
    class="fixed bottom-0 left-0 right-0 z-50 flex flex-col mt-24 rounded-t-lg border border-gray-200 bg-white max-h-[80vh]">
    <div class="flex justify-end p-2">
      <button @click="open = false">
        <svg class="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
    </div>
    <div class="flex flex-col gap-1.5 p-4 text-center sm:text-left">
      <h3 class="text-lg font-semibold leading-none tracking-tight">Are you absolutely sure?</h3>
      <p class="text-sm text-gray-500">This action cannot be undone.</p>
    </div>
    <div class="flex flex-col gap-2 p-4 mt-auto">
      <button @click="open = false"
        class="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium bg-gray-900 text-white hover:bg-gray-800">Continue</button>
      <button @click="open = false"
        class="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium border border-gray-300 text-gray-700 hover:bg-gray-50">Cancel</button>
    </div>
  </div>
</div>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Directions</h2>
        <DemoBlock
          preview={<DrawerDirectionsDemo />}
          code={`<!-- Bottom -->
<div x-data="{ open: false }">
  <button @click="open = true" class="...">Bottom</button>
  <div x-show="open" @click="open = false" class="fixed inset-0 z-40 bg-black/50"></div>
  <div x-show="open"
    class="fixed bottom-0 left-0 right-0 z-50 flex flex-col mt-24 rounded-t-lg border border-gray-200 bg-white max-h-[80vh]">
    <!-- content -->
  </div>
</div>

<!-- Top -->
<div x-data="{ open: false }">
  <div x-show="open"
    class="fixed top-0 left-0 right-0 z-50 flex flex-col mb-24 rounded-b-lg border border-gray-200 bg-white max-h-[80vh]">
    <!-- content -->
  </div>
</div>

<!-- Left -->
<div x-data="{ open: false }">
  <div x-show="open"
    class="fixed left-0 top-0 bottom-0 z-50 flex flex-col border-r border-gray-200 bg-white w-[75%] sm:max-w-96">
    <!-- content -->
  </div>
</div>

<!-- Right -->
<div x-data="{ open: false }">
  <div x-show="open"
    class="fixed right-0 top-0 bottom-0 z-50 flex flex-col border-l border-gray-200 bg-white w-[75%] sm:max-w-96">
    <!-- content -->
  </div>
</div>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Direction API</h2>
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-4 py-3 font-medium">Direction</th>
                <th className="text-left px-4 py-3 font-medium">Classes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr><td className="px-4 py-2 font-mono text-xs">bottom</td><td className="px-4 py-2 font-mono text-xs">fixed bottom-0 left-0 right-0 z-50 ... rounded-t-lg</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">top</td><td className="px-4 py-2 font-mono text-xs">fixed top-0 left-0 right-0 z-50 ... rounded-b-lg</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">left</td><td className="px-4 py-2 font-mono text-xs">fixed left-0 top-0 bottom-0 z-50 ... border-r w-[75%] sm:max-w-96</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">right</td><td className="px-4 py-2 font-mono text-xs">fixed right-0 top-0 bottom-0 z-50 ... border-l w-[75%] sm:max-w-96</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
