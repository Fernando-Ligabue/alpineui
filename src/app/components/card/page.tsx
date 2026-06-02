"use client";

import { useState } from "react";
import DemoBlock from "@/components/DemoBlock";
import Image from "next/image";

function InteractiveCard() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>("pro");
  const plans = [
    { id: "free", name: "Free", price: "€0", features: ["1 project", "5 members"] },
    { id: "pro", name: "Pro", price: "€49", features: ["10 projects", "50 members", "Priority support"] },
    { id: "enterprise", name: "Enterprise", price: "Custom", features: ["Unlimited projects", "Unlimited members", "Dedicated SLA"] },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-2xl">
      {plans.map((plan) => (
        <button
          key={plan.id}
          onClick={() => setSelectedPlan(plan.id)}
          className={`rounded-lg border bg-au-background shadow-sm text-left ${
            selectedPlan === plan.id ? "ring-2 ring-au-ring border-au-border" : "border-au-border"
          }`}
        >
          <div className="flex flex-col gap-1.5 p-6">
            {plan.id === "pro" && <span className="inline-flex items-center px-2 py-0.5 text-xs font-medium rounded-md bg-au-primary text-au-primary-foreground w-fit">Popular</span>}
            <h3 className="text-base font-semibold leading-tight tracking-tight">{plan.name}</h3>
            <p className="text-sm text-au-muted-foreground">For teams</p>
          </div>
          <div className="p-6 pt-0">
            <div className="flex flex-col">
              <span className="text-2xl font-bold leading-tight text-au-foreground">{plan.price}</span>
              <span className="text-sm text-au-muted-foreground">/month</span>
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">✓ {feature}</li>
              ))}
            </ul>
          </div>
          <div className="flex items-center p-6 pt-0 *:flex-1">
            <button className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-au-ring disabled:opacity-50 disabled:pointer-events-none h-8 px-3 ${
              selectedPlan === plan.id ? "bg-au-primary text-au-primary-foreground hover:opacity-90" : "border border-au-border bg-transparent text-au-foreground hover:bg-au-accent"
            }`}>
              {selectedPlan === plan.id ? "Selected" : "Select"}
            </button>
          </div>
        </button>
      ))}
    </div>
  );
}

export default function CardPage() {
  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-au-foreground mb-2">Card</h1>
      <p className="text-au-muted-foreground mb-8">
        A versatile container for organizing and displaying content in a structured layout.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Interactive Demo</h2>
        <DemoBlock
          preview={<InteractiveCard />}
          code={`<div x-data="{ selected: 'pro' }" class="grid grid-cols-1 sm:grid-cols-3 gap-4">
  <button @click="selected = 'free'"
    :class="selected === 'free' ? 'ring-2 ring-black border-gray-200' : 'border-gray-200'"
    class="rounded-lg border bg-white shadow-sm text-left">
    <div class="flex flex-col gap-1.5 p-6">
      <h3 class="text-base font-semibold leading-tight tracking-tight">Free</h3>
      <p class="text-sm text-gray-500">For beginners</p>
    </div>
    <div class="p-6 pt-0">
      <span class="text-2xl font-bold leading-tight text-gray-900">$0</span>
      <span class="text-sm text-gray-500">/month</span>
    </div>
  </button>
  <button @click="selected = 'pro'"
    :class="selected === 'pro' ? 'ring-2 ring-black border-gray-200' : 'border-gray-200'"
    class="rounded-lg border bg-white shadow-sm text-left">
    <div class="flex flex-col gap-1.5 p-6">
      <span x-show="selected === 'pro'" class="inline-flex items-center px-2 py-0.5 text-xs font-medium rounded-md bg-black text-white w-fit">Popular</span>
      <h3 class="text-base font-semibold leading-tight tracking-tight">Pro</h3>
      <p class="text-sm text-gray-500">For teams</p>
    </div>
    <div class="p-6 pt-0">
      <span class="text-2xl font-bold leading-tight text-gray-900">$49</span>
      <span class="text-sm text-gray-500">/month</span>
    </div>
  </button>
  <button @click="selected = 'enterprise'"
    :class="selected === 'enterprise' ? 'ring-2 ring-black border-gray-200' : 'border-gray-200'"
    class="rounded-lg border bg-white shadow-sm text-left">
    <div class="flex flex-col gap-1.5 p-6">
      <h3 class="text-base font-semibold leading-tight tracking-tight">Enterprise</h3>
      <p class="text-sm text-gray-500">For big teams</p>
    </div>
    <div class="p-6 pt-0">
      <span class="text-2xl font-bold leading-tight text-gray-900">Custom</span>
    </div>
  </button>
</div>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Variants</h2>
        <DemoBlock
          preview={
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-2xl">
              <div className="rounded-lg border border-au-border bg-au-background shadow-sm">
                <div className="flex flex-col gap-1.5 p-6">
                  <h3 className="text-sm font-semibold leading-tight tracking-tight">Default</h3>
                </div>
                <div className="p-6 pt-0">Default card.</div>
              </div>
              <div className="rounded-lg bg-au-secondary border border-transparent shadow-sm">
                <div className="flex flex-col gap-1.5 p-6">
                  <h3 className="text-sm font-semibold leading-tight tracking-tight">Subtle</h3>
                </div>
                <div className="p-6 pt-0">Muted background.</div>
              </div>
              <div className="rounded-lg border-2 border-au-border bg-au-background">
                <div className="flex flex-col gap-1.5 p-6">
                  <h3 className="text-sm font-semibold leading-tight tracking-tight">Outline</h3>
                </div>
                <div className="p-6 pt-0">Solid border.</div>
              </div>
            </div>
          }
          code={`<div class="rounded-lg border border-gray-200 bg-white shadow-sm">
  <div class="flex flex-col gap-1.5 p-6">
    <h3 class="text-sm font-semibold leading-tight tracking-tight">Default</h3>
  </div>
  <div class="p-6 pt-0">Default card.</div>
</div>

<div class="rounded-lg bg-gray-100 border border-transparent shadow-sm">
  <div class="flex flex-col gap-1.5 p-6">
    <h3 class="text-sm font-semibold leading-tight tracking-tight">Subtle</h3>
  </div>
  <div class="p-6 pt-0">Muted background.</div>
</div>

<div class="rounded-lg border-2 border-gray-200 bg-white">
  <div class="flex flex-col gap-1.5 p-6">
    <h3 class="text-sm font-semibold leading-tight tracking-tight">Outline</h3>
  </div>
  <div class="p-6 pt-0">Solid border.</div>
</div>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">More Variants</h2>
        <DemoBlock
          preview={
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl">
              <div className="rounded-lg border border-au-border bg-au-background shadow-md">
                <h3 className="text-sm font-semibold leading-tight tracking-tight p-6 pb-0">Elevated</h3>
                <div className="p-6 pt-3">High shadow.</div>
              </div>
              <div className="rounded-lg bg-au-background/80 backdrop-blur-sm border border-au-border shadow-sm">
                <h3 className="text-sm font-semibold leading-tight tracking-tight p-6 pb-0">Glass</h3>
                <div className="p-6 pt-3">Blur effect.</div>
              </div>
              <div className="rounded-lg border-2 border-dashed border-au-border bg-au-background">
                <h3 className="text-sm font-semibold leading-tight tracking-tight p-6 pb-0">Dashed</h3>
                <div className="p-6 pt-3">Dashed border.</div>
              </div>
              <div className="rounded-lg border border-au-border bg-au-background">
                <h3 className="text-sm font-semibold leading-tight tracking-tight p-6 pb-0">Flat</h3>
                <div className="p-6 pt-3">Flat design.</div>
              </div>
            </div>
          }
          code={`<div class="rounded-lg border border-gray-200 bg-white shadow-md">...</div>
<div class="rounded-lg bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm">...</div>
<div class="rounded-lg border-2 border-dashed border-gray-200 bg-white">...</div>
<div class="rounded-lg border border-gray-200 bg-white">...</div>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Sizes</h2>
        <DemoBlock
          preview={
            <div className="flex flex-col gap-3 w-full max-w-sm">
              <div className="rounded-lg border border-au-border bg-au-background shadow-sm p-3">
                <div className="text-sm text-au-foreground">Small</div>
              </div>
              <div className="rounded-lg border border-au-border bg-au-background shadow-sm p-4">
                <div className="text-sm text-au-foreground">Medium</div>
              </div>
              <div className="rounded-lg border border-au-border bg-au-background shadow-sm p-6">
                <div className="text-sm text-au-foreground">Large</div>
              </div>
            </div>
          }
          code={`<div class="rounded-lg border border-gray-200 bg-white shadow-sm p-3">...</div>
<div class="rounded-lg border border-gray-200 bg-white shadow-sm p-4">...</div>
<div class="rounded-lg border border-gray-200 bg-white shadow-sm p-6">...</div>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">States</h2>
        <DemoBlock
          preview={
            <div className="grid grid-cols-2 gap-4 w-full max-w-lg">
              <div className="rounded-lg border border-au-border bg-au-background shadow-sm p-4 cursor-pointer transition-all hover:border-au-border hover:shadow-md active:scale-[0.98] select-none">
                <div className="text-sm text-au-foreground">Hover here</div>
              </div>
              <div className="rounded-lg border border-au-border bg-au-background shadow-sm p-4 animate-pulse relative overflow-hidden">
                <div className="text-sm text-au-foreground">Loading...</div>
              </div>
            </div>
          }
          code={`<div class="rounded-lg border border-gray-200 bg-white shadow-sm p-4 cursor-pointer transition-all hover:border-gray-300 hover:shadow-md active:scale-[0.98] select-none">
  <div class="text-sm text-gray-900">Hover here</div>
</div>

<div class="rounded-lg border border-gray-200 bg-white shadow-sm p-4 animate-pulse relative overflow-hidden">
  <div class="text-sm text-gray-900">Loading...</div>
</div>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Card with Footer</h2>
        <DemoBlock
          preview={
            <div className="rounded-lg border border-au-border bg-au-background shadow-sm w-full max-w-md">
              <div className="flex flex-col gap-1.5 p-6">
                <h3 className="text-lg font-semibold leading-tight tracking-tight">Confirm Action</h3>
                <p className="text-sm text-au-muted-foreground">Are you sure?</p>
              </div>
              <div className="p-6 pt-0">This action cannot be undone.</div>
              <div className="flex items-center justify-between p-6 pt-0">
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-au-ring disabled:opacity-50 disabled:pointer-events-none h-8 px-3 border border-au-border bg-transparent text-au-foreground hover:bg-au-accent">Cancel</button>
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-au-ring disabled:opacity-50 disabled:pointer-events-none h-8 px-3 bg-au-primary text-au-primary-foreground hover:opacity-90">Confirm</button>
              </div>
            </div>
          }
          code={`<div class="rounded-lg border border-gray-200 bg-white shadow-sm">
  <div class="flex flex-col gap-1.5 p-6">
    <h3 class="text-lg font-semibold leading-tight tracking-tight">Confirm Action</h3>
    <p class="text-sm text-gray-500">Are you sure?</p>
  </div>
  <div class="p-6 pt-0">This action cannot be undone.</div>
  <div class="flex items-center justify-between p-6 pt-0">
    <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:opacity-50 disabled:pointer-events-none h-8 px-3 border border-gray-300 bg-transparent text-gray-900 hover:bg-gray-100">Cancel</button>
    <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:opacity-50 disabled:pointer-events-none h-8 px-3 bg-black text-white hover:opacity-90">Confirm</button>
  </div>
</div>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Card Stats</h2>
        <DemoBlock
          preview={
            <div className="rounded-lg border border-au-border bg-au-background shadow-sm w-full max-w-lg">
              <div className="flex flex-col gap-1.5 p-6">
                <h3 className="text-lg font-semibold leading-tight tracking-tight">Statistics</h3>
              </div>
              <div className="p-6 pt-0 flex gap-12 justify-center text-center">
                <div className="flex flex-col">
                  <span className="text-2xl font-bold leading-tight text-au-foreground">10.5K</span>
                  <span className="text-sm text-au-muted-foreground">Visitors</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold leading-tight text-au-foreground">893</span>
                  <span className="text-sm text-au-muted-foreground">Sales</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold leading-tight text-au-foreground">12%</span>
                  <span className="text-sm text-au-muted-foreground">Growth</span>
                </div>
              </div>
            </div>
          }
          code={`<div class="rounded-lg border border-gray-200 bg-white shadow-sm">
  <div class="flex flex-col gap-1.5 p-6">
    <h3 class="text-lg font-semibold leading-tight tracking-tight">Statistics</h3>
  </div>
  <div class="p-6 pt-0 flex gap-12 justify-center text-center">
    <div class="flex flex-col">
      <span class="text-2xl font-bold leading-tight text-gray-900">10.5K</span>
      <span class="text-sm text-gray-500">Visitors</span>
    </div>
    <div class="flex flex-col">
      <span class="text-2xl font-bold leading-tight text-gray-900">893</span>
      <span class="text-sm text-gray-500">Sales</span>
    </div>
    <div class="flex flex-col">
      <span class="text-2xl font-bold leading-tight text-gray-900">12%</span>
      <span class="text-sm text-gray-500">Growth</span>
    </div>
  </div>
</div>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Card with Image</h2>
        <DemoBlock
          preview={
            <div className="rounded-lg border border-au-border bg-au-background shadow-sm w-full max-w-sm">
              <Image
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=225&fit=crop"
                alt="Abstract"
                className="w-full object-cover rounded-t-lg aspect-video"
                width={250}
                height={250}
              />
              <div className="flex flex-col gap-1.5 p-6 space-y-1">
                <h3 className="text-lg font-semibold leading-tight tracking-tight">Minimalist Design</h3>
                <p className="text-sm text-au-muted-foreground">Abstract art in shades of blue.</p>
              </div>
              <div className="p-6 pt-0">Explore the beauty of simplicity.</div>
              <div className="flex items-center justify-between p-6 pt-0">
                <span className="flex items-center gap-2 text-xs text-au-muted-foreground">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  12 apr
                </span>
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-au-ring disabled:opacity-50 disabled:pointer-events-none h-8 px-3 bg-au-primary text-au-primary-foreground hover:opacity-90">See more</button>
              </div>
            </div>
          }
          code={`<div class="rounded-lg border border-gray-200 bg-white shadow-sm">
  <img src="..." class="w-full object-cover rounded-t-lg aspect-video" />
  <div class="flex flex-col gap-1.5 p-6">
    <h3 class="text-lg font-semibold leading-tight tracking-tight">Title</h3>
    <p class="text-sm text-gray-500">Description</p>
  </div>
  <div class="p-6 pt-0">Content</div>
  <div class="flex items-center justify-between p-6 pt-0">
    <span class="flex items-center gap-2 text-xs text-au-muted-foreground">Meta info</span>
    <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:opacity-50 disabled:pointer-events-none h-8 px-3 bg-black text-white hover:opacity-90">Action</button>
  </div>
</div>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Card with Avatar</h2>
        <DemoBlock
          preview={
            <div className="rounded-lg border border-au-border bg-au-background shadow-sm w-full max-w-sm">
              <div className="flex flex-col gap-1.5 p-6">
                <h3 className="text-lg font-semibold leading-tight tracking-tight">Team Members</h3>
                <p className="text-sm text-au-muted-foreground">Manage your team members.</p>
              </div>
              <div className="p-6 pt-0">
                <div className="flex items-center gap-3 p-2">
                  <Image width={150} height={150} src="https://i.pravatar.cc/100?img=1" alt="Avatar" className="w-10 h-10 rounded-full object-cover flex-shrink-0" />
                  <div>
                    <p className="font-medium">John Smith</p>
                    <p className="text-sm text-au-muted-foreground">john@example.com</p>
                  </div>
                </div>
                <div className="h-px bg-au-border my-3.5" />
                <div className="flex items-center gap-3 p-2">
                  <Image width={150} height={150} src="https://i.pravatar.cc/100?img=2" alt="Avatar" className="w-10 h-10 rounded-full object-cover flex-shrink-0" />
                  <div>
                    <p className="font-medium">Jane Doe</p>
                    <p className="text-sm text-au-muted-foreground">jane@example.com</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between p-6 pt-0">
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-au-ring disabled:opacity-50 disabled:pointer-events-none h-8 px-3 border border-au-border bg-transparent text-au-foreground hover:bg-au-accent">Cancel</button>
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-au-ring disabled:opacity-50 disabled:pointer-events-none h-8 px-3 bg-au-primary text-au-primary-foreground hover:opacity-90">Invite</button>
              </div>
            </div>
          }
          code={`<div class="rounded-lg border border-gray-200 bg-white shadow-sm">
  <div class="flex flex-col gap-1.5 p-6">
    <h3 class="text-lg font-semibold leading-tight tracking-tight">Title</h3>
    <p class="text-sm text-gray-500">Description</p>
  </div>
  <div class="p-6 pt-0">
    <div class="flex items-center gap-3 p-2">
      <img src="..." class="w-10 h-10 rounded-full object-cover flex-shrink-0" />
      <div>
        <p class="font-medium">Name</p>
        <p class="text-sm text-gray-500">email</p>
      </div>
    </div>
  </div>
  <div class="flex items-center justify-between p-6 pt-0">
    <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:opacity-50 disabled:pointer-events-none h-8 px-3 border border-gray-300 bg-transparent text-gray-900 hover:bg-gray-100">Cancel</button>
    <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:opacity-50 disabled:pointer-events-none h-8 px-3 bg-black text-white hover:opacity-90">Confirm</button>
  </div>
</div>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Card with List</h2>
        <DemoBlock
          preview={
            <div className="rounded-lg border border-au-border bg-au-background shadow-sm w-full max-w-sm">
              <div className="flex flex-col gap-1.5 p-6">
                <h3 className="text-lg font-semibold leading-tight tracking-tight">Tasks</h3>
                <p className="text-sm text-au-muted-foreground">2 of 5 completed</p>
              </div>
              <div className="p-6 pt-0">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3 py-2 border-b border-au-border last:border-b-0">
                    <input type="checkbox" checked className="h-4 w-4 rounded border-au-border" />
                    <span className="line-through text-au-muted-foreground">Review documentation</span>
                  </div>
                  <div className="flex items-center gap-3 py-2 border-b border-au-border last:border-b-0">
                    <input type="checkbox" checked className="h-4 w-4 rounded border-au-border" />
                    <span className="line-through text-au-muted-foreground">Create tests</span>
                  </div>
                  <div className="flex items-center gap-3 py-2 border-b border-au-border last:border-b-0">
                    <input type="checkbox" className="h-4 w-4 rounded border-au-border" />
                    <span>Implement dark mode</span>
                  </div>
                  <div className="flex items-center gap-3 py-2 border-b border-au-border last:border-b-0">
                    <input type="checkbox" className="h-4 w-4 rounded border-au-border" />
                    <span>Optimize performance</span>
                  </div>
                  <div className="flex items-center gap-3 py-2 border-b border-au-border last:border-b-0">
                    <input type="checkbox" className="h-4 w-4 rounded border-au-border" />
                    <span>Update dependencies</span>
                  </div>
                </div>
              </div>
            </div>
          }
          code={`<div class="rounded-lg border border-gray-200 bg-white shadow-sm">
  <div class="flex flex-col gap-1.5 p-6">
    <h3 class="text-lg font-semibold leading-tight tracking-tight">Title</h3>
    <p class="text-sm text-gray-500">Description</p>
  </div>
  <div class="p-6 pt-0">
    <div class="flex flex-col gap-2">
      <div class="flex items-center gap-3 py-2 border-b border-gray-200 last:border-b-0">
        <input type="checkbox" />
        <span>Item 1</span>
      </div>
      <div class="flex items-center gap-3 py-2 border-b border-gray-200 last:border-b-0">
        <input type="checkbox" />
        <span>Item 2</span>
      </div>
    </div>
  </div>
</div>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Card Interactive</h2>
        <DemoBlock
          preview={
            <div className="grid grid-cols-2 gap-4 w-full max-w-lg">
              <button className="rounded-lg border border-au-border bg-au-background shadow-sm text-left cursor-pointer transition-all select-none hover:border-au-border hover:shadow-md active:scale-[0.98]">
                <div className="flex flex-col gap-1.5 p-6">
                  <h3 className="text-lg font-semibold leading-tight tracking-tight">Selectable</h3>
                  <p className="text-sm text-au-muted-foreground">Click to select</p>
                </div>
              </button>
              <button className="rounded-lg border border-au-border bg-au-background shadow-sm text-left cursor-pointer transition-all select-none hover:border-au-border hover:shadow-md active:scale-[0.98] ring-2 ring-au-ring">
                <div className="flex flex-col gap-1.5 p-6">
                  <h3 className="text-lg font-semibold leading-tight tracking-tight">Selected</h3>
                  <p className="text-sm text-au-muted-foreground">Selected state</p>
                </div>
              </button>
            </div>
          }
          code={`<button class="rounded-lg border border-gray-200 bg-white shadow-sm text-left cursor-pointer transition-all select-none hover:border-gray-300 hover:shadow-md active:scale-[0.98]">
  <div class="flex flex-col gap-1.5 p-6">
    <h3 class="text-lg font-semibold leading-tight tracking-tight">Title</h3>
    <p class="text-sm text-gray-500">Description</p>
  </div>
</button>

<button class="rounded-lg border border-gray-200 bg-white shadow-sm text-left cursor-pointer transition-all select-none hover:border-gray-300 hover:shadow-md active:scale-[0.98] ring-2 ring-black">
  <div class="flex flex-col gap-1.5 p-6">
    <h3 class="text-lg font-semibold leading-tight tracking-tight">Selected</h3>
    <p class="text-sm text-gray-500">Selected state</p>
  </div>
</button>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Pricing Card</h2>
        <DemoBlock
          preview={
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-2xl">
              <div className="rounded-lg border border-au-border bg-au-background shadow-sm">
                <div className="flex flex-col gap-1.5 p-6">
                  <h3 className="text-lg font-semibold leading-tight tracking-tight">Free</h3>
                  <p className="text-sm text-au-muted-foreground">For beginners</p>
                </div>
                <div className="p-6 pt-0">
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold leading-tight text-au-foreground">€ 0</span>
                    <span className="text-sm text-au-muted-foreground">/mounth</span>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li className="flex items-center gap-2">✓ 1 project</li>
                    <li className="flex items-center gap-2">✓ 5 members</li>
                  </ul>
                </div>
                <div className="flex items-center p-6 pt-0 *:flex-1">
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-au-ring disabled:opacity-50 disabled:pointer-events-none h-8 px-3 border border-au-border bg-transparent text-au-foreground hover:bg-au-accent">Get start</button>
                </div>
              </div>
              <div className="rounded-lg border border-au-border bg-au-background shadow-sm ring-2 ring-au-ring">
                <div className="flex flex-col gap-1.5 p-6">
                  <span className="inline-flex items-center px-2 py-0.5 text-xs font-medium rounded-md bg-au-primary text-au-primary-foreground w-fit">Popular</span>
                  <h3 className="text-lg font-semibold leading-tight tracking-tight mt-2">Pro</h3>
                  <p className="text-sm text-au-muted-foreground">For teams</p>
                </div>
                <div className="p-6 pt-0">
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold leading-tight text-au-foreground">€ 49</span>
                    <span className="text-sm text-au-muted-foreground">/mounth</span>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li className="flex items-center gap-2">✓ 10 projects</li>
                    <li className="flex items-center gap-2">✓ 50 members</li>
                    <li className="flex items-center gap-2">✓ Priority support</li>
                  </ul>
                </div>
                <div className="flex items-center p-6 pt-0 *:flex-1">
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-au-ring disabled:opacity-50 disabled:pointer-events-none h-8 px-3 bg-au-primary text-au-primary-foreground hover:opacity-90">Sign in</button>
                </div>
              </div>
              <div className="rounded-lg border border-au-border bg-au-background shadow-sm">
                <div className="flex flex-col gap-1.5 p-6">
                  <h3 className="text-lg font-semibold leading-tight tracking-tight">Enterprise</h3>
                  <p className="text-sm text-au-muted-foreground">For big teams</p>
                </div>
                <div className="p-6 pt-0">
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold leading-tight text-au-foreground">Custom</span>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li className="flex items-center gap-2">✓ Unlimited projects</li>
                    <li className="flex items-center gap-2">✓ Unlimited members</li>
                    <li className="flex items-center gap-2">✓ Dedicated SLA</li>
                  </ul>
                </div>
                <div className="flex items-center p-6 pt-0 *:flex-1">
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-au-ring disabled:opacity-50 disabled:pointer-events-none h-8 px-3 border border-au-border bg-transparent text-au-foreground hover:bg-au-accent">Contact us</button>
                </div>
              </div>
            </div>
          }
          code={`<div class="rounded-lg border border-gray-200 bg-white shadow-sm">
  <div class="flex flex-col gap-1.5 p-6">
    <h3 class="text-lg font-semibold leading-tight tracking-tight">Plan Name</h3>
    <p class="text-sm text-gray-500">Description</p>
  </div>
  <div class="p-6 pt-0">
    <div class="flex flex-col">
      <span class="text-2xl font-bold leading-tight text-gray-900">$Price</span>
      <span class="text-sm text-gray-500">/month</span>
    </div>
    <ul class="mt-4 space-y-2 text-sm">
      <li class="flex items-center gap-2">✓ Feature 1</li>
      <li class="flex items-center gap-2">✓ Feature 2</li>
    </ul>
  </div>
  <div class="flex items-center p-6 pt-0 *:flex-1">
    <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:opacity-50 disabled:pointer-events-none h-8 px-3 bg-black text-white hover:opacity-90">Subscribe</button>
  </div>
</div>`}
        />
      </section>
    </div>
  );
}
