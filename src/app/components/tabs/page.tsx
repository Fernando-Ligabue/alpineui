"use client";

import { useState } from "react";
import DemoBlock from "@/components/DemoBlock";

function InteractiveTabs() {
  const [activeTab, setActiveTab] = useState("account");

  return (
    <div className="w-full max-w-md">
      <div className="inline-flex h-10 items-center justify-center rounded-md bg-au-secondary p-1 text-au-muted-foreground">
        <button
          className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all ${activeTab === "account" ? "bg-au-background text-au-foreground shadow-sm" : "hover:text-au-foreground"}`}
          onClick={() => setActiveTab("account")}
        >
          Account
        </button>
        <button
          className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all ${activeTab === "password" ? "bg-au-background text-au-foreground shadow-sm" : "hover:text-au-foreground"}`}
          onClick={() => setActiveTab("password")}
        >
          Password
        </button>
        <button
          className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all ${activeTab === "notifications" ? "bg-au-background text-au-foreground shadow-sm" : "hover:text-au-foreground"}`}
          onClick={() => setActiveTab("notifications")}
        >
          Notifications
        </button>
      </div>
      <div className="mt-2">
        {activeTab === "account" && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-au-foreground mb-1">Username</label>
              <input type="text" className="w-full px-3 py-2 border border-au-border rounded-md text-sm" defaultValue="johndoe" />
            </div>
            <div>
              <label className="block text-sm font-medium text-au-foreground mb-1">Email</label>
              <input type="email" className="w-full px-3 py-2 border border-au-border rounded-md text-sm" defaultValue="john@example.com" />
            </div>
          </div>
        )}
        {activeTab === "password" && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-au-foreground mb-1">Current Password</label>
              <input type="password" className="w-full px-3 py-2 border border-au-border rounded-md text-sm" placeholder="Enter current password" />
            </div>
            <div>
              <label className="block text-sm font-medium text-au-foreground mb-1">New Password</label>
              <input type="password" className="w-full px-3 py-2 border border-au-border rounded-md text-sm" placeholder="Enter new password" />
            </div>
          </div>
        )}
        {activeTab === "notifications" && (
          <div className="space-y-3">
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" className="rounded border-au-border" defaultChecked />
              <span>Email notifications</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" className="rounded border-au-border" defaultChecked />
              <span>Push notifications</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" className="rounded border-au-border" />
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
    <div className="w-full max-w-md">
      <div className="inline-flex h-10 items-center justify-center p-1 text-au-muted-foreground gap-2">
        <button
          className={`inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium transition-all ${activeTab === "overview" ? "bg-au-primary text-au-primary-foreground shadow-sm" : "hover:text-au-foreground hover:bg-au-accent"}`}
          onClick={() => setActiveTab("overview")}
        >
          Overview
        </button>
        <button
          className={`inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium transition-all ${activeTab === "analytics" ? "bg-au-primary text-au-primary-foreground shadow-sm" : "hover:text-au-foreground hover:bg-au-accent"}`}
          onClick={() => setActiveTab("analytics")}
        >
          Analytics
        </button>
        <button
          className={`inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium transition-all ${activeTab === "reports" ? "bg-au-primary text-au-primary-foreground shadow-sm" : "hover:text-au-foreground hover:bg-au-accent"}`}
          onClick={() => setActiveTab("reports")}
        >
          Reports
        </button>
      </div>
      <div className="mt-2 p-4 bg-au-background border border-au-border rounded-lg">
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
    <div className="w-full max-w-md">
      <div className="flex h-10 items-center border-b border-au-border">
        <button
          className={`inline-flex items-center justify-center whitespace-nowrap px-3 py-1.5 text-sm font-medium transition-all relative ${activeTab === "first" ? "text-au-foreground" : "text-au-muted-foreground hover:text-au-foreground"}`}
          onClick={() => setActiveTab("first")}
        >
          First
          {activeTab === "first" && <span className="absolute -bottom-[1px] left-0 right-0 h-0.5 bg-au-primary" />}
        </button>
        <button
          className={`inline-flex items-center justify-center whitespace-nowrap px-3 py-1.5 text-sm font-medium transition-all relative ${activeTab === "second" ? "text-au-foreground" : "text-au-muted-foreground hover:text-au-foreground"}`}
          onClick={() => setActiveTab("second")}
        >
          Second
          {activeTab === "second" && <span className="absolute -bottom-[1px] left-0 right-0 h-0.5 bg-au-primary" />}
        </button>
        <button
          className={`inline-flex items-center justify-center whitespace-nowrap px-3 py-1.5 text-sm font-medium transition-all relative ${activeTab === "third" ? "text-au-foreground" : "text-au-muted-foreground hover:text-au-foreground"}`}
          onClick={() => setActiveTab("third")}
        >
          Third
          {activeTab === "third" && <span className="absolute -bottom-[1px] left-0 right-0 h-0.5 bg-au-primary" />}
        </button>
      </div>
      <div className="mt-2">
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
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Interactive Demo</h2>
        <DemoBlock
          preview={<InteractiveTabs />}
          code={`<div x-data="{ activeTab: 'account' }" class="w-full max-w-md">
  <div class="inline-flex h-10 items-center justify-center rounded-md bg-gray-100 p-1 text-gray-500">
    <button @click="activeTab = 'account'"
      :class="activeTab === 'account' ? 'bg-white text-gray-900 shadow-sm' : 'hover:text-gray-900'"
      class="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all">
      Account
    </button>
    <button @click="activeTab = 'password'"
      :class="activeTab === 'password' ? 'bg-white text-gray-900 shadow-sm' : 'hover:text-gray-900'"
      class="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all">
      Password
    </button>
    <button @click="activeTab = 'notifications'"
      :class="activeTab === 'notifications' ? 'bg-white text-gray-900 shadow-sm' : 'hover:text-gray-900'"
      class="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all">
      Notifications
    </button>
  </div>
  <div class="mt-2">
    <template x-if="activeTab === 'account'">
      <div class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Username</label>
          <input type="text" class="w-full px-3 py-2 border border-gray-300 rounded-md text-sm" value="johndoe" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input type="email" class="w-full px-3 py-2 border border-gray-300 rounded-md text-sm" value="john@example.com" />
        </div>
      </div>
    </template>
    <template x-if="activeTab === 'password'">
      <div class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
          <input type="password" class="w-full px-3 py-2 border border-gray-300 rounded-md text-sm" placeholder="Enter current password" />
        </div>
      </div>
    </template>
    <template x-if="activeTab === 'notifications'">
      <div class="space-y-3">
        <label class="flex items-center gap-3"><input type="checkbox" class="rounded border-gray-300" checked /> <span>Email notifications</span></label>
        <label class="flex items-center gap-3"><input type="checkbox" class="rounded border-gray-300" checked /> <span>Push notifications</span></label>
      </div>
    </template>
  </div>
</div>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Variants</h2>
        <DemoBlock
          preview={
            <div className="space-y-8 w-full">
              <div>
                <h3 className="text-sm font-medium mb-2 text-au-muted-foreground">Default</h3>
                <div className="w-full">
                  <div className="inline-flex h-10 items-center justify-center rounded-md bg-au-secondary p-1 text-au-muted-foreground">
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium bg-au-background text-au-foreground shadow-sm">Tab 1</button>
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium hover:text-au-foreground">Tab 2</button>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-2 text-au-muted-foreground">Pill</h3>
                <div>
                  <div className="inline-flex h-10 items-center justify-center p-1 text-au-muted-foreground gap-2">
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium bg-au-primary text-au-primary-foreground shadow-sm">Tab 1</button>
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium hover:text-au-foreground hover:bg-au-accent">Tab 2</button>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-2 text-au-muted-foreground">Underline</h3>
                <div>
                  <div className="flex h-10 items-center border-b border-au-border">
                    <button className="inline-flex items-center justify-center whitespace-nowrap px-3 py-1.5 text-sm font-medium text-au-foreground relative">
                      Tab 1
                      <span className="absolute -bottom-[1px] left-0 right-0 h-0.5 bg-au-primary" />
                    </button>
                    <button className="inline-flex items-center justify-center whitespace-nowrap px-3 py-1.5 text-sm font-medium text-au-muted-foreground hover:text-au-foreground">Tab 2</button>
                  </div>
                </div>
              </div>
            </div>
          }
          code={`<!-- Default -->
<div class="w-full">
  <div class="inline-flex h-10 items-center justify-center rounded-md bg-gray-100 p-1 text-gray-500">
    <button class="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium bg-white text-gray-900 shadow-sm">Tab 1</button>
    <button class="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium hover:text-gray-900">Tab 2</button>
  </div>
  <div class="mt-2">...</div>
</div>

<!-- Pill -->
<div>
  <div class="inline-flex h-10 items-center justify-center p-1 text-gray-500 gap-2">
    <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium bg-black text-white shadow-sm">Tab 1</button>
    <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium hover:text-gray-900 hover:bg-gray-100">Tab 2</button>
  </div>
  <div class="mt-2 p-4 bg-white border border-gray-200 rounded-lg">...</div>
</div>

<!-- Underline -->
<div>
  <div class="flex h-10 items-center border-b border-gray-200">
    <button class="inline-flex items-center justify-center whitespace-nowrap px-3 py-1.5 text-sm font-medium text-gray-900 relative">
      Tab 1
      <span class="absolute -bottom-[1px] left-0 right-0 h-0.5 bg-gray-900" />
    </button>
    <button class="inline-flex items-center justify-center whitespace-nowrap px-3 py-1.5 text-sm font-medium text-gray-500 hover:text-gray-900">Tab 2</button>
  </div>
  <div class="mt-2">...</div>
</div>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Sizes</h2>
        <DemoBlock
          preview={
            <div className="space-y-6 w-full max-w-md">
              <div>
                <h3 className="text-sm font-medium mb-2 text-au-muted-foreground">Small</h3>
                <div className="w-full">
                  <div className="inline-flex h-8 items-center justify-center rounded-md bg-au-secondary p-1 text-au-muted-foreground">
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-2.5 py-1 text-xs font-medium bg-au-background text-au-foreground shadow-sm">Tab</button>
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-2.5 py-1 text-xs font-medium hover:text-au-foreground">Tab</button>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-2 text-au-muted-foreground">Medium</h3>
                <div className="w-full">
                  <div className="inline-flex h-10 items-center justify-center rounded-md bg-au-secondary p-1 text-au-muted-foreground">
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium bg-au-background text-au-foreground shadow-sm">Tab</button>
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium hover:text-au-foreground">Tab</button>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-2 text-au-muted-foreground">Large</h3>
                <div className="w-full">
                  <div className="inline-flex h-12 items-center justify-center rounded-md bg-au-secondary p-1 text-au-muted-foreground">
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-4 py-2 text-base font-medium bg-au-background text-au-foreground shadow-sm">Tab</button>
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-4 py-2 text-base font-medium hover:text-au-foreground">Tab</button>
                  </div>
                </div>
              </div>
            </div>
          }
          code={`<button class="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-2.5 py-1 text-xs font-medium bg-white text-gray-900 shadow-sm">Small</button>
<button class="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium bg-white text-gray-900 shadow-sm">Medium</button>
<button class="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-4 py-2 text-base font-medium bg-white text-gray-900 shadow-sm">Large</button>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Disabled Tab</h2>
        <DemoBlock
          preview={
            <div className="w-full max-w-md">
              <div className="inline-flex h-10 items-center justify-center rounded-md bg-au-secondary p-1 text-au-muted-foreground">
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium bg-au-background text-au-foreground shadow-sm">
                  Active
                </button>
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium hover:text-au-foreground opacity-50 cursor-not-allowed" disabled>
                  Disabled
                </button>
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium hover:text-au-foreground">
                  Tab
                </button>
              </div>
              <div className="mt-2">
                <p>Content for active tab.</p>
              </div>
            </div>
          }
          code={`<button class="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium hover:text-gray-900 opacity-50 cursor-not-allowed" disabled>
  Disabled
</button>`}
        />
      </section>
    </div>
  );
}
