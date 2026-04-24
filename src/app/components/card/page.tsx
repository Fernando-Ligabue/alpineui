"use client";

import { useState } from "react";
import DemoBlock from "@/components/DemoBlock";
import { InstallCommand } from "@/components/InstallCommand";
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
          className={`au-card au-card-default au-card-md text-left ${selectedPlan === plan.id ? "au-card-selected" : ""}`}
        >
          <div className="au-card-header">
            {plan.id === "pro" && <span className="au-card-badge au-card-badge-primary w-fit">Popular</span>}
            <h3 className="au-card-title au-card-title-md">{plan.name}</h3>
            <p className="au-card-description">For teams</p>
          </div>
          <div className="au-card-content">
            <div className="au-card-stat">
              <span className="au-card-stat-value">{plan.price}</span>
              <span className="au-card-stat-label">/month</span>
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">✓ {feature}</li>
              ))}
            </ul>
          </div>
          <div className="au-card-footer au-card-footer-stretch">
            <button className={`au-button au-button-sm ${selectedPlan === plan.id ? "au-button-default" : "au-button-outline"}`}>
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
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Installation</h2>
        <InstallCommand command="npx alpineui add card" />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Interactive Demo</h2>
        <DemoBlock
          preview={<InteractiveCard />}
          code={`function App() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const plans = [
    { id: "free", name: "Free", price: "$0", features: ["1 project"] },
    { id: "pro", name: "Pro", price: "$49", features: ["10 projects"] },
    { id: "enterprise", name: "Enterprise", price: "Custom", features: ["Unlimited"] },
  ];

  return (
    <div class="grid grid-cols-3 gap-4">
      {plans.map((plan) => (
        <button
          key={plan.id}
          onClick={() => setSelectedPlan(plan.id)}
          className={\`au-card au-card-default au-card-md \${selectedPlan === plan.id ? "au-card-selected" : ""}\`}
        >
          <div class="au-card-header">
            <h3 class="au-card-title">{plan.name}</h3>
          </div>
          <div class="au-card-content">
            <div class="au-card-stat">
              <span class="au-card-stat-value">{plan.price}</span>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Variants</h2>
        <DemoBlock
          preview={
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-2xl">
              <div className="au-card au-card-default au-card-md">
                <div className="au-card-header">
                  <h3 className="au-card-title au-card-title-sm">Default</h3>
                </div>
                <div className="au-card-content">Default card.</div>
              </div>
              <div className="au-card au-card-subtle au-card-md">
                <div className="au-card-header">
                  <h3 className="au-card-title au-card-title-sm">Subtle</h3>
                </div>
                <div className="au-card-content">Muted background.</div>
              </div>
              <div className="au-card au-card-outline au-card-md">
                <div className="au-card-header">
                  <h3 className="au-card-title au-card-title-sm">Outline</h3>
                </div>
                <div className="au-card-content">Solid border.</div>
              </div>
            </div>
          }
          code={`<div class="au-card au-card-default au-card-md">
  <div class="au-card-header">
    <h3 class="au-card-title au-card-title-sm">Default</h3>
  </div>
  <div class="au-card-content">Default card.</div>
</div>

<div class="au-card au-card-subtle au-card-md">
  <div class="au-card-header">
    <h3 class="au-card-title au-card-title-sm">Subtle</h3>
  </div>
  <div class="au-card-content">Muted background.</div>
</div>

<div class="au-card au-card-outline au-card-md">
  <div class="au-card-header">
    <h3 class="au-card-title au-card-title-sm">Outline</h3>
  </div>
  <div class="au-card-content">Solid border.</div>
</div>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">More Variants</h2>
        <DemoBlock
          preview={
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl">
              <div className="au-card au-card-elevated au-card-md">
                <h3 className="au-card-title au-card-title-sm">Elevated</h3>
                <div className="au-card-content">High shadow.</div>
              </div>
              <div className="au-card au-card-glass au-card-md">
                <h3 className="au-card-title au-card-title-sm">Glass</h3>
                <div className="au-card-content">Blur effect.</div>
              </div>
              <div className="au-card au-card-dashed au-card-md">
                <h3 className="au-card-title au-card-title-sm">Dashed</h3>
                <div className="au-card-content">Dashed border.</div>
              </div>
              <div className="au-card au-card-flat au-card-md">
                <h3 className="au-card-title au-card-title-sm">Flat</h3>
                <div className="au-card-content">Flat design.</div>
              </div>
            </div>
          }
          code={`<div class="au-card au-card-elevated au-card-md">...</div>
<div class="au-card au-card-glass au-card-md">...</div>
<div class="au-card au-card-dashed au-card-md">...</div>
<div class="au-card au-card-flat au-card-md">...</div>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Sizes</h2>
        <DemoBlock
          preview={
            <div className="flex flex-col gap-3 w-full max-w-sm">
              <div className="au-card au-card-default au-card-sm">
                <div className="au-card-content">Small</div>
              </div>
              <div className="au-card au-card-default au-card-md">
                <div className="au-card-content">Medium</div>
              </div>
              <div className="au-card au-card-default au-card-lg">
                <div className="au-card-content">Large</div>
              </div>
            </div>
          }
          code={`<div class="au-card au-card-default au-card-sm">...</div>
<div class="au-card au-card-default au-card-md">...</div>
<div class="au-card au-card-default au-card-lg">...</div>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">States</h2>
        <DemoBlock
          preview={
            <div className="grid grid-cols-2 gap-4 w-full max-w-lg">
              <div className="au-card au-card-default au-card-md au-card-hoverable">
                <div className="au-card-content">Hover here</div>
              </div>
              <div className="au-card au-card-default au-card-md au-card-loading">
                <div className="au-card-content">Loading...</div>
              </div>
            </div>
          }
          code={`<div class="au-card au-card-default au-card-md au-card-hoverable">
  <div class="au-card-content">Hover here</div>
</div>

<div class="au-card au-card-default au-card-md au-card-loading">
  <div class="au-card-content">Loading...</div>
</div>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Card with Footer</h2>
        <DemoBlock
          preview={
            <div className="au-card au-card-default au-card-lg w-full max-w-md">
              <div className="au-card-header">
                <h3 className="au-card-title au-card-title-md">Confirm Action</h3>
                <p className="au-card-description">Are you sure?</p>
              </div>
              <div className="au-card-content">This action cannot be undone.</div>
              <div className="au-card-footer au-card-footer-between">
                <button className="au-button au-button-outline au-button-sm">Cancel</button>
                <button className="au-button au-button-default au-button-sm">Confirm</button>
              </div>
            </div>
          }
          code={`<div class="au-card au-card-default au-card-lg">
  <div class="au-card-header">
    <h3 class="au-card-title au-card-title-md">Confirm Action</h3>
    <p class="au-card-description">Are you sure?</p>
  </div>
  <div class="au-card-content">This action cannot be undone.</div>
  <div class="au-card-footer au-card-footer-between">
    <button class="au-button au-button-outline au-button-sm">Cancel</button>
    <button class="au-button au-button-default au-button-sm">Confirm</button>
  </div>
</div>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Card Stats</h2>
        <DemoBlock
          preview={
            <div className="au-card au-card-default au-card-md w-full max-w-lg">
              <div className="au-card-header">
                <h3 className="au-card-title au-card-title-md">Statistics</h3>
              </div>
              <div className="au-card-content flex gap-12 justify-center text-center">
                <div className="au-card-stat">
                  <span className="au-card-stat-value">10.5K</span>
                  <span className="au-card-stat-label">Visitors</span>
                </div>
                <div className="au-card-stat">
                  <span className="au-card-stat-value">893</span>
                  <span className="au-card-stat-label">Sales</span>
                </div>
                <div className="au-card-stat">
                  <span className="au-card-stat-value">12%</span>
                  <span className="au-card-stat-label">Growth</span>
                </div>
              </div>
            </div>
          }
          code={`<div class="au-card au-card-default au-card-md">
  <div class="au-card-header">
    <h3 class="au-card-title au-card-title-md">Statistics</h3>
  </div>
  <div class="au-card-content" style="display:flex;gap:3rem;text-align:center;justify-content:center">
    <div class="au-card-stat">
      <span class="au-card-stat-value">10.5K</span>
      <span class="au-card-stat-label">Visitors</span>
    </div>
    <div class="au-card-stat">
      <span class="au-card-stat-value">893</span>
      <span class="au-card-stat-label">Sales</span>
    </div>
    <div class="au-card-stat">
      <span class="au-card-stat-value">12%</span>
      <span class="au-card-stat-label">Growth</span>
    </div>
  </div>
</div>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Card with Image</h2>
        <DemoBlock
          preview={
            <div className="au-card au-card-default au-card-md w-full max-w-sm">
              <Image
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=225&fit=crop"
                alt="Abstract"
                className="au-card-image au-card-image-ratio-video"
                width={250}
                height={250}
              />
              <div className="au-card-header space-y-1 mt-1">
                <h3 className="au-card-title au-card-title-md">Minimalist Design</h3>
                <p className="au-card-description">Abstract art in shades of blue.</p>
              </div>
              <div className="au-card-content">Explore the beauty of simplicity.</div>
              <div className="au-card-footer au-card-footer-between">
                <span className="au-card-meta">
                  <svg className="au-card-meta-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  12 apr
                </span>
                <button className="au-button au-button-default au-button-sm">See more</button>
              </div>
            </div>
          }
          code={`<div class="au-card au-card-default au-card-md">
  <img src="..." class="au-card-image au-card-image-ratio-video" />
  <div class="au-card-header">
    <h3 class="au-card-title au-card-title-md">Title</h3>
    <p class="au-card-description">Description</p>
  </div>
  <div class="au-card-content">Content</div>
  <div class="au-card-footer au-card-footer-between">
    <span class="au-card-meta">Meta info</span>
    <button class="au-button au-button-default au-button-sm">Action</button>
  </div>
</div>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Card with Avatar</h2>
        <DemoBlock
          preview={
            <div className="au-card au-card-default au-card-md w-full max-w-sm">
              <div className="au-card-header">
                <h3 className="au-card-title au-card-title-md">Team Members</h3>
                <p className="au-card-description">Manage your team members.</p>
              </div>
              <div className="au-card-content">
                <div className="flex items-center gap-3 p-2">
                  <Image width={150} height={150} src="https://i.pravatar.cc/100?img=1" alt="Avatar" className="au-card-avatar" />
                  <div>
                    <p className="font-medium">John Smith</p>
                    <p className="text-sm text-au-muted-foreground">john@example.com</p>
                  </div>
                </div>
                <div className="au-card-divider" />
                <div className="flex items-center gap-3 p-2">
                  <Image width={150} height={150} src="https://i.pravatar.cc/100?img=2" alt="Avatar" className="au-card-avatar" />
                  <div>
                    <p className="font-medium">Jane Doe</p>
                    <p className="text-sm text-au-muted-foreground">jane@example.com</p>
                  </div>
                </div>
              </div>
              <div className="au-card-footer au-card-footer-between">
                <button className="au-button au-button-outline au-button-sm">Cancel</button>
                <button className="au-button au-button-default au-button-sm">Invite</button>
              </div>
            </div>
          }
          code={`<div class="au-card au-card-default au-card-md">
  <div class="au-card-header">
    <h3 class="au-card-title au-card-title-md">Title</h3>
    <p class="au-card-description">Description</p>
  </div>
  <div class="au-card-content">
    <div class="flex items-center gap-3 p-2">
      <img src="..." class="au-card-avatar" />
      <div>
        <p class="font-medium">Name</p>
        <p class="text-sm text-au-muted-foreground">email</p>
      </div>
    </div>
  </div>
  <div class="au-card-footer au-card-footer-between">
    <button class="au-button au-button-outline au-button-sm">Cancel</button>
    <button class="au-button au-button-default au-button-sm">Confirm</button>
  </div>
</div>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Card with List</h2>
        <DemoBlock
          preview={
            <div className="au-card au-card-default au-card-md w-full max-w-sm">
              <div className="au-card-header">
                <h3 className="au-card-title au-card-title-md">Tasks</h3>
                <p className="au-card-description">2 of 5 completed</p>
              </div>
              <div className="au-card-content">
                <div className="au-card-list">
                  <div className="au-card-list-item">
                    <input type="checkbox" checked className="au-checkbox" />
                    <span className="line-through text-au-muted-foreground">Review documentation</span>
                  </div>
                  <div className="au-card-list-item">
                    <input type="checkbox" checked className="au-checkbox" />
                    <span className="line-through text-au-muted-foreground">Create tests</span>
                  </div>
                  <div className="au-card-list-item">
                    <input type="checkbox" className="au-checkbox" />
                    <span>Implement dark mode</span>
                  </div>
                  <div className="au-card-list-item">
                    <input type="checkbox" className="au-checkbox" />
                    <span>Optimize performance</span>
                  </div>
                  <div className="au-card-list-item">
                    <input type="checkbox" className="au-checkbox" />
                    <span>Update dependencies</span>
                  </div>
                </div>
              </div>
            </div>
          }
          code={`<div class="au-card au-card-default au-card-md">
  <div class="au-card-header">
    <h3 class="au-card-title au-card-title-md">Title</h3>
    <p class="au-card-description">Description</p>
  </div>
  <div class="au-card-content">
    <div class="au-card-list">
      <div class="au-card-list-item">
        <input type="checkbox" />
        <span>Item 1</span>
      </div>
      <div class="au-card-list-item">
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
              <button className="au-card au-card-default au-card-md au-card-interactive text-left">
                <div className="au-card-header">
                  <h3 className="au-card-title au-card-title-md">Selectable</h3>
                  <p className="au-card-description">Click to select</p>
                </div>
              </button>
              <button className="au-card au-card-default au-card-md au-card-interactive au-card-selected text-left">
                <div className="au-card-header">
                  <h3 className="au-card-title au-card-title-md">Selected</h3>
                  <p className="au-card-description">Selected state</p>
                </div>
              </button>
            </div>
          }
          code={`<button class="au-card au-card-default au-card-md au-card-interactive">
  <div class="au-card-header">
    <h3 class="au-card-title au-card-title-md">Title</h3>
    <p class="au-card-description">Description</p>
  </div>
</button>

<button class="au-card au-card-default au-card-md au-card-interactive au-card-selected">
  <div class="au-card-header">
    <h3 class="au-card-title au-card-title-md">Selected</h3>
    <p class="au-card-description">Selected state</p>
  </div>
</button>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Pricing Card</h2>
        <DemoBlock
          preview={
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-2xl">
              <div className="au-card au-card-default au-card-md">
                <div className="au-card-header">
                  <h3 className="au-card-title au-card-title-md">Free</h3>
                  <p className="au-card-description">For beginners</p>
                </div>
                <div className="au-card-content">
                  <div className="au-card-stat">
                    <span className="au-card-stat-value">€ 0</span>
                    <span className="au-card-stat-label">/mounth</span>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li className="flex items-center gap-2">✓ 1 project</li>
                    <li className="flex items-center gap-2">✓ 5 members</li>
                  </ul>
                </div>
                <div className="au-card-footer au-card-footer-stretch">
                  <button className="au-button au-button-outline au-button-sm">Get start</button>
                </div>
              </div>
              <div className="au-card au-card-default au-card-md au-card-selected">
                <div className="au-card-header">
                  <span className="au-card-badge au-card-badge-primary w-fit">Popular</span>
                  <h3 className="au-card-title au-card-title-md mt-2">Pro</h3>
                  <p className="au-card-description">For teams</p>
                </div>
                <div className="au-card-content">
                  <div className="au-card-stat">
                    <span className="au-card-stat-value">€ 49</span>
                    <span className="au-card-stat-label">/mounth</span>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li className="flex items-center gap-2">✓ 10 projects</li>
                    <li className="flex items-center gap-2">✓ 50 members</li>
                    <li className="flex items-center gap-2">✓ Priority support</li>
                  </ul>
                </div>
                <div className="au-card-footer au-card-footer-stretch">
                  <button className="au-button au-button-default au-button-sm">Sign in</button>
                </div>
              </div>
              <div className="au-card au-card-default au-card-md">
                <div className="au-card-header">
                  <h3 className="au-card-title au-card-title-md">Enterprise</h3>
                  <p className="au-card-description">For big teams</p>
                </div>
                <div className="au-card-content">
                  <div className="au-card-stat">
                    <span className="au-card-stat-value">Custom</span>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li className="flex items-center gap-2">✓ Unlimited projects</li>
                    <li className="flex items-center gap-2">✓ Unlimited members</li>
                    <li className="flex items-center gap-2">✓ Dedicated SLA</li>
                  </ul>
                </div>
                <div className="au-card-footer au-card-footer-stretch">
                  <button className="au-button au-button-outline au-button-sm">Contact us</button>
                </div>
              </div>
            </div>
          }
          code={`<div class="au-card au-card-default au-card-md">
  <div class="au-card-header">
    <h3 class="au-card-title au-card-title-md">Plan Name</h3>
    <p class="au-card-description">Description</p>
  </div>
  <div class="au-card-content">
    <div class="au-card-stat">
      <span class="au-card-stat-value">$Price</span>
      <span class="au-card-stat-label">/month</span>
    </div>
    <ul class="mt-4 space-y-2 text-sm">
      <li class="flex items-center gap-2">✓ Feature 1</li>
      <li class="flex items-center gap-2">✓ Feature 2</li>
    </ul>
  </div>
  <div class="au-card-footer au-card-footer-stretch">
    <button class="au-button au-button-default au-button-sm">Subscribe</button>
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
              <tr><td className="px-4 py-2 font-mono text-xs">au-card</td><td className="px-4 py-2">Base container</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-card-default</td><td className="px-4 py-2">Default card</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-card-subtle</td><td className="px-4 py-2">Muted background</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-card-outline</td><td className="px-4 py-2">Solid border</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-card-elevated</td><td className="px-4 py-2">Elevated shadow</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-card-glass</td><td className="px-4 py-2">Glass effect</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-card-dashed</td><td className="px-4 py-2">Dashed border</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-card-flat</td><td className="px-4 py-2">Flat design</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-card-sm|md|lg|xl</td><td className="px-4 py-2">Sizes</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-card-hoverable</td><td className="px-4 py-2">Hover effect</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-card-loading</td><td className="px-4 py-2">Loading state</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-card-header</td><td className="px-4 py-2">Header</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-card-title</td><td className="px-4 py-2">Title</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-card-description</td><td className="px-4 py-2">Description</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-card-content</td><td className="px-4 py-2">Content</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-card-footer</td><td className="px-4 py-2">Footer</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-card-stat</td><td className="px-4 py-2">Stat</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
