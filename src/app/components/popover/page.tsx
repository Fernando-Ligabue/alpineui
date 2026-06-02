"use client";

import DemoBlock from "@/components/DemoBlock";

function InteractivePopover() {
  return (
    <div className="flex flex-wrap gap-6 justify-center py-4">
      <div className="inline-flex items-center group relative">
        <button className="rounded-md border border-au-border bg-au-background px-4 py-2 text-sm font-medium hover:bg-au-accent">
          Hover me
        </button>
        <div className="absolute z-50 w-72 rounded-md border border-au-border bg-au-background p-4 shadow-md invisible group-hover:visible top-full left-1/2 -translate-x-1/2 mt-2">
          <div className="font-semibold mb-1">Popover Title</div>
          <div className="text-sm text-au-muted-foreground">
            This is additional content that provides more information about something.
          </div>
        </div>
      </div>

      <div className="inline-flex items-center group relative">
        <button className="rounded-md border border-au-border bg-au-background px-4 py-2 text-sm font-medium hover:bg-au-accent">
          More Info
        </button>
        <div className="absolute z-50 w-72 rounded-md border border-au-border bg-au-background p-4 shadow-md invisible group-hover:visible left-full top-1/2 -translate-y-1/2 ml-2">
          <div className="font-semibold mb-1">Details</div>
          <div className="text-sm text-au-muted-foreground">
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
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Interactive Demo</h2>
        <DemoBlock
          preview={
            <div className="py-4">
              <div className="inline-flex items-center group relative">
                <button className="rounded-md border border-au-border bg-au-background px-4 py-2 text-sm font-medium hover:bg-au-accent">
                  Hover me
                </button>
                <div className="absolute z-50 w-72 rounded-md border border-au-border bg-au-background p-4 shadow-md invisible group-hover:visible top-full left-1/2 -translate-x-1/2 mt-2">
                  <div className="font-semibold mb-1">Popover Title</div>
                  <div className="text-sm text-au-muted-foreground">
                    This is additional content that provides more information.
                  </div>
                </div>
              </div>
            </div>
          }
          code={`<div class="inline-flex items-center group relative">
  <button class="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium hover:bg-gray-50">Hover me</button>
  <div class="absolute z-50 w-72 rounded-md border border-gray-200 bg-white p-4 shadow-md invisible group-hover:visible top-full left-1/2 -translate-x-1/2 mt-2">
    <div class="font-semibold mb-1">Title</div>
    <div class="text-sm text-gray-500">Description</div>
  </div>
</div>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Positions</h2>
        <DemoBlock
          preview={<InteractivePopover />}
          code={`<!-- Bottom (default) -->
<div class="inline-flex items-center group relative">
  <button class="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium">Hover me</button>
  <div class="absolute z-50 w-72 rounded-md border border-gray-200 bg-white p-4 shadow-md invisible group-hover:visible top-full left-1/2 -translate-x-1/2 mt-2">...</div>
</div>

<!-- Right -->
<div class="inline-flex items-center group relative">
  <button class="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium">More Info</button>
  <div class="absolute z-50 w-72 rounded-md border border-gray-200 bg-white p-4 shadow-md invisible group-hover:visible left-full top-1/2 -translate-y-1/2 ml-2">...</div>
</div>

<!-- Top -->
<div class="inline-flex items-center group relative">
  <button>Trigger</button>
  <div class="absolute z-50 w-72 ... invisible group-hover:visible bottom-full left-1/2 -translate-x-1/2 mb-2">...</div>
</div>

<!-- Left -->
<div class="inline-flex items-center group relative">
  <button>Trigger</button>
  <div class="absolute z-50 w-72 ... invisible group-hover:visible right-full top-1/2 -translate-y-1/2 mr-2">...</div>
</div>`}
        />
      </section>
    </div>
  );
}
