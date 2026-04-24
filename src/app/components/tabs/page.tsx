"use client";

import { useState } from "react";
import DemoBlock from "@/components/DemoBlock";
import { InstallCommand } from "@/components/InstallCommand";

function InteractiveTabs() {
  const [activeTab, setActiveTab] = useState("account");

  return (
    <div className="w-full max-w-md">
      <div className="au-tabs-list">
        <button
          className={`au-tabs-trigger au-tabs-trigger-md ${activeTab === "account" ? "active" : ""}`}
          onClick={() => setActiveTab("account")}
        >
          Account
        </button>
        <button
          className={`au-tabs-trigger au-tabs-trigger-md ${activeTab === "password" ? "active" : ""}`}
          onClick={() => setActiveTab("password")}
        >
          Password
        </button>
        <button
          className={`au-tabs-trigger au-tabs-trigger-md ${activeTab === "notifications" ? "active" : ""}`}
          onClick={() => setActiveTab("notifications")}
        >
          Notifications
        </button>
      </div>
      <div className="au-tabs-content">
        {activeTab === "account" && (
          <div className="space-y-4">
            <div className="au-field">
              <label className="au-label">Username</label>
              <input type="text" className="au-input au-input-md" defaultValue="johndoe" />
            </div>
            <div className="au-field">
              <label className="au-label au-label-required">Email</label>
              <input type="email" className="au-input au-input-md" defaultValue="john@example.com" />
            </div>
          </div>
        )}
        {activeTab === "password" && (
          <div className="space-y-4">
            <div className="au-field">
              <label className="au-label">Current Password</label>
              <input type="password" className="au-input au-input-md" placeholder="Enter current password" />
            </div>
            <div className="au-field">
              <label className="au-label">New Password</label>
              <input type="password" className="au-input au-input-md" placeholder="Enter new password" />
            </div>
          </div>
        )}
        {activeTab === "notifications" && (
          <div className="space-y-3">
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" className="au-checkbox" defaultChecked />
              <span>Email notifications</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" className="au-checkbox" defaultChecked />
              <span>Push notifications</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" className="au-checkbox" />
              <span>SMS notifications</span>
            </label>
          </div>
        )}
      </div>
    </div>
  );
}

function InteractiveTabsPill() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="au-tabs-pill w-full max-w-md">
      <div className="au-tabs-list">
        <button
          className={`au-tabs-trigger au-tabs-trigger-md ${activeTab === "overview" ? "active" : ""}`}
          onClick={() => setActiveTab("overview")}
        >
          Overview
        </button>
        <button
          className={`au-tabs-trigger au-tabs-trigger-md ${activeTab === "analytics" ? "active" : ""}`}
          onClick={() => setActiveTab("analytics")}
        >
          Analytics
        </button>
        <button
          className={`au-tabs-trigger au-tabs-trigger-md ${activeTab === "reports" ? "active" : ""}`}
          onClick={() => setActiveTab("reports")}
        >
          Reports
        </button>
      </div>
      <div className="au-tabs-content">
        {activeTab === "overview" && <p>This is the overview content.</p>}
        {activeTab === "analytics" && <p>This is the analytics content.</p>}
        {activeTab === "reports" && <p>This is the reports content.</p>}
      </div>
    </div>
  );
}

function InteractiveTabsUnderline() {
  const [activeTab, setActiveTab] = useState("first");

  return (
    <div className="au-tabs-underline w-full max-w-md">
      <div className="au-tabs-list">
        <button
          className={`au-tabs-trigger au-tabs-trigger-md ${activeTab === "first" ? "active" : ""}`}
          onClick={() => setActiveTab("first")}
        >
          First
        </button>
        <button
          className={`au-tabs-trigger au-tabs-trigger-md ${activeTab === "second" ? "active" : ""}`}
          onClick={() => setActiveTab("second")}
        >
          Second
        </button>
        <button
          className={`au-tabs-trigger au-tabs-trigger-md ${activeTab === "third" ? "active" : ""}`}
          onClick={() => setActiveTab("third")}
        >
          Third
        </button>
      </div>
      <div className="au-tabs-content">
        {activeTab === "first" && <p>First tab content.</p>}
        {activeTab === "second" && <p>Second tab content.</p>}
        {activeTab === "third" && <p>Third tab content.</p>}
      </div>
    </div>
  );
}

export default function TabsPage() {
  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-au-foreground mb-2">Tabs</h1>
      <p className="text-au-muted-foreground mb-8">
        A navigable tab component for organizing content into switchable sections.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Installation</h2>
        <InstallCommand command="npx alpineui add tabs" />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Interactive Demo</h2>
        <DemoBlock
          preview={<InteractiveTabs />}
          code={`function App() {
  const [activeTab, setActiveTab] = useState("account");

  return (
    <div class="au-tabs">
      <div class="au-tabs-list">
        <button
          className={\`au-tabs-trigger au-tabs-trigger-md \${activeTab === "account" ? "active" : ""}\`}
          onClick={() => setActiveTab("account")}
        >
          Account
        </button>
        <button
          className={\`au-tabs-trigger au-tabs-trigger-md \${activeTab === "password" ? "active" : ""}\`}
          onClick={() => setActiveTab("password")}
        >
          Password
        </button>
      </div>
      <div class="au-tabs-content">
        {activeTab === "account" && <div>Account settings...</div>}
        {activeTab === "password" && <div>Password settings...</div>}
      </div>
    </div>
  );
}`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Variants</h2>
        <DemoBlock
          preview={
            <div className="space-y-8 w-full">
              <div>
                <h4 className="text-sm font-medium mb-2 text-au-muted-foreground">Default</h4>
                <div className="au-tabs">
                  <div className="au-tabs-list">
                    <button className="au-tabs-trigger au-tabs-trigger-md active">Tab 1</button>
                    <button className="au-tabs-trigger au-tabs-trigger-md">Tab 2</button>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium mb-2 text-au-muted-foreground">Pill</h4>
                <div className="au-tabs-pill">
                  <div className="au-tabs-list">
                    <button className="au-tabs-trigger au-tabs-trigger-md active">Tab 1</button>
                    <button className="au-tabs-trigger au-tabs-trigger-md">Tab 2</button>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium mb-2 text-au-muted-foreground">Underline</h4>
                <div className="au-tabs-underline">
                  <div className="au-tabs-list">
                    <button className="au-tabs-trigger au-tabs-trigger-md active">Tab 1</button>
                    <button className="au-tabs-trigger au-tabs-trigger-md">Tab 2</button>
                  </div>
                </div>
              </div>
            </div>
          }
          code={`<!-- Default -->
<div class="au-tabs">
  <div class="au-tabs-list">
    <button class="au-tabs-trigger au-tabs-trigger-md active">Tab 1</button>
    <button class="au-tabs-trigger au-tabs-trigger-md">Tab 2</button>
  </div>
  <div class="au-tabs-content">...</div>
</div>

<!-- Pill -->
<div class="au-tabs-pill">
  <div class="au-tabs-list">...</div>
  <div class="au-tabs-content">...</div>
</div>

<!-- Underline -->
<div class="au-tabs-underline">
  <div class="au-tabs-list">...</div>
  <div class="au-tabs-content">...</div>
</div>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Sizes</h2>
        <DemoBlock
          preview={
            <div className="space-y-6 w-full max-w-md">
              <div>
                <h4 className="text-sm font-medium mb-2 text-au-muted-foreground">Small</h4>
                <div className="au-tabs au-tabs-default">
                  <div className="au-tabs-list">
                    <button className="au-tabs-trigger au-tabs-trigger-sm active">Tab</button>
                    <button className="au-tabs-trigger au-tabs-trigger-sm">Tab</button>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium mb-2 text-au-muted-foreground">Medium</h4>
                <div className="au-tabs au-tabs-default">
                  <div className="au-tabs-list">
                    <button className="au-tabs-trigger au-tabs-trigger-md active">Tab</button>
                    <button className="au-tabs-trigger au-tabs-trigger-md">Tab</button>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium mb-2 text-au-muted-foreground">Large</h4>
                <div className="au-tabs au-tabs-default">
                  <div className="au-tabs-list">
                    <button className="au-tabs-trigger au-tabs-trigger-lg active">Tab</button>
                    <button className="au-tabs-trigger au-tabs-trigger-lg">Tab</button>
                  </div>
                </div>
              </div>
            </div>
          }
          code={`<button class="au-tabs-trigger au-tabs-trigger-sm">Small</button>
<button class="au-tabs-trigger au-tabs-trigger-md">Medium</button>
<button class="au-tabs-trigger au-tabs-trigger-lg">Large</button>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Disabled Tab</h2>
        <DemoBlock
          preview={
            <div className="au-tabs au-tabs-default w-full max-w-md">
              <div className="au-tabs-list">
                <button className="au-tabs-trigger au-tabs-trigger-md active">
                  Active
                </button>
                <button className="au-tabs-trigger au-tabs-trigger-md" disabled>
                  Disabled
                </button>
                <button className="au-tabs-trigger au-tabs-trigger-md">Tab</button>
              </div>
              <div className="au-tabs-content">
                <p>Content for active tab.</p>
              </div>
            </div>
          }
          code={`<button class="au-tabs-trigger au-tabs-trigger-md" data-disabled="true" disabled>
  Disabled
</button>`}
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
              <tr><td className="px-4 py-2 font-mono text-xs">au-tabs</td><td className="px-4 py-2">Container base</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-tabs-list</td><td className="px-4 py-2">Tab list container</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-tabs-list-pill</td><td className="px-4 py-2">Pill variant list</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-tabs-list-underline</td><td className="px-4 py-2">Underline variant list</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-tabs-trigger</td><td className="px-4 py-2">Tab button</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-tabs-trigger-sm|md|lg</td><td className="px-4 py-2">Sizes</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-tabs-content</td><td className="px-4 py-2">Content area</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-tabs-pill</td><td className="px-4 py-2">Pill container variant</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-tabs-underline</td><td className="px-4 py-2">Underline container variant</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}