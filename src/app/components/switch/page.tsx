"use client";

import { useState } from "react";
import type { ButtonHTMLAttributes } from "react";
import DemoBlock from "@/components/DemoBlock";

type AriaChecked = ButtonHTMLAttributes<HTMLButtonElement>["aria-checked"];

function InteractiveSwitchBasic() {
  const [checked, setChecked] = useState(false);

  const ariaChecked: AriaChecked = checked ? "true" : "false";

  return (
    <div className="flex items-center gap-4">
      <button
        className="relative inline-flex items-center w-11 h-6 bg-au-secondary border border-au-border rounded-full cursor-pointer transition-colors duration-200 data-[checked=true]:bg-au-primary data-[checked=true]:border-au-primary"
        role="switch"
        aria-checked={ariaChecked}
        onClick={() => setChecked(!checked)}
        data-checked={checked ? "true" : "false"}
      >
        <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-au-background rounded-full shadow-sm transition-transform duration-200 data-[checked=true]:translate-x-5 pointer-events-none" />
      </button>
      <span className="text-au-foreground">{checked ? "On" : "Off"}</span>
    </div>
  );
}

function InteractiveSwitchSizes() {
  const [checkedSm, setCheckedSm] = useState(false);
  const [checkedMd, setCheckedMd] = useState(false);
  const [checkedLg, setCheckedLg] = useState(false);

  return (
    <div className="flex items-center gap-8">
      <div className="flex flex-col items-center gap-3">
        <button
          className="relative inline-flex items-center w-8 h-[18px] bg-au-secondary border border-au-border rounded-full cursor-pointer transition-colors duration-200 data-[checked=true]:bg-au-primary data-[checked=true]:border-au-primary"
          role="switch"
          aria-checked={checkedSm ? "true" : "false"}
          onClick={() => setCheckedSm(!checkedSm)}
          data-checked={checkedSm ? "true" : "false"}
        >
          <div className="absolute top-0.5 left-0.5 w-[14px] h-[14px] bg-au-background rounded-full shadow-sm transition-transform duration-200 data-[checked=true]:translate-x-[14px] pointer-events-none" />
        </button>
        <span className="text-xs text-au-muted-foreground">Small</span>
      </div>
      <div className="flex flex-col items-center gap-3">
        <button
          className="relative inline-flex items-center w-11 h-6 bg-au-secondary border border-au-border rounded-full cursor-pointer transition-colors duration-200 data-[checked=true]:bg-au-primary data-[checked=true]:border-au-primary"
          role="switch"
          aria-checked={checkedMd ? "true" : "false"}
          onClick={() => setCheckedMd(!checkedMd)}
          data-checked={checkedMd ? "true" : "false"}
        >
          <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-au-background rounded-full shadow-sm transition-transform duration-200 data-[checked=true]:translate-x-5 pointer-events-none" />
        </button>
        <span className="text-xs text-au-muted-foreground">Medium (Default)</span>
      </div>
      <div className="flex flex-col items-center gap-3">
        <button
          className="relative inline-flex items-center w-14 h-8 bg-au-secondary border border-au-border rounded-full cursor-pointer transition-colors duration-200 data-[checked=true]:bg-au-primary data-[checked=true]:border-au-primary"
          role="switch"
          aria-checked={checkedLg ? "true" : "false"}
          onClick={() => setCheckedLg(!checkedLg)}
          data-checked={checkedLg ? "true" : "false"}
        >
          <div className="absolute top-1 left-1 w-6 h-6 bg-au-background rounded-full shadow-sm transition-transform duration-200 data-[checked=true]:translate-x-6 pointer-events-none" />
        </button>
        <span className="text-xs text-au-muted-foreground">Large</span>
      </div>
    </div>
  );
}

function InteractiveSwitchStates() {
  const [darkMode, setDarkMode] = useState(true);
  const [notifications, setNotifications] = useState(false);
  const [newsletter, setNewsletter] = useState(true);

  return (
    <div className="w-full max-w-sm space-y-3">
      <div className="flex items-center justify-between p-3 border border-au-border rounded-lg">
        <div>
          <p className="font-medium text-au-foreground">Dark Mode</p>
          <p className="text-sm text-au-muted-foreground">Enable dark theme</p>
        </div>
        <button
          className="relative inline-flex items-center w-11 h-6 bg-au-secondary border border-au-border rounded-full cursor-pointer transition-colors duration-200 data-[checked=true]:bg-au-primary data-[checked=true]:border-au-primary"
          role="switch"
          aria-checked={darkMode ? "true" : "false"}
          onClick={() => setDarkMode(!darkMode)}
          data-checked={darkMode ? "true" : "false"}
        >
          <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-au-background rounded-full shadow-sm transition-transform duration-200 data-[checked=true]:translate-x-5 pointer-events-none" />
        </button>
      </div>
      <div className="flex items-center justify-between p-3 border border-au-border rounded-lg">
        <div>
          <p className="font-medium text-au-foreground">Push Notifications</p>
          <p className="text-sm text-au-muted-foreground">Receive push alerts</p>
        </div>
        <button
          className="relative inline-flex items-center w-11 h-6 bg-au-secondary border border-au-border rounded-full cursor-pointer transition-colors duration-200 data-[checked=true]:bg-au-primary data-[checked=true]:border-au-primary"
          role="switch"
          aria-checked={notifications ? "true" : "false"}
          onClick={() => setNotifications(!notifications)}
          data-checked={notifications ? "true" : "false"}
        >
          <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-au-background rounded-full shadow-sm transition-transform duration-200 data-[checked=true]:translate-x-5 pointer-events-none" />
        </button>
      </div>
      <div className="flex items-center justify-between p-3 border border-au-border rounded-lg">
        <div>
          <p className="font-medium text-au-foreground">Newsletter</p>
          <p className="text-sm text-au-muted-foreground">Weekly email digest</p>
        </div>
        <button
          className="relative inline-flex items-center w-11 h-6 bg-au-secondary border border-au-border rounded-full cursor-pointer transition-colors duration-200 data-[checked=true]:bg-au-primary data-[checked=true]:border-au-primary"
          role="switch"
          aria-checked={newsletter ? "true" : "false"}
          onClick={() => setNewsletter(!newsletter)}
          data-checked={newsletter ? "true" : "false"}
        >
          <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-au-background rounded-full shadow-sm transition-transform duration-200 data-[checked=true]:translate-x-5 pointer-events-none" />
        </button>
      </div>
    </div>
  );
}

function InteractiveSwitchDisabled() {
  const [enabled, setEnabled] = useState(false);
  const [enabledOn, setEnabledOn] = useState(true);

  return (
    <div className="flex items-center gap-8">
      <div className="flex flex-col items-center gap-3">
        <button
          className="relative inline-flex items-center w-11 h-6 bg-au-secondary border border-au-border rounded-full cursor-pointer transition-colors duration-200 data-[checked=true]:bg-au-primary data-[checked=true]:border-au-primary"
          role="switch"
          aria-checked={enabled ? "true" : "false"}
          onClick={() => setEnabled(!enabled)}
          data-checked={enabled ? "true" : "false"}
        >
          <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-au-background rounded-full shadow-sm transition-transform duration-200 data-[checked=true]:translate-x-5 pointer-events-none" />
        </button>
        <span className="text-xs text-au-muted-foreground">Enabled Off</span>
      </div>
      <div className="flex flex-col items-center gap-3">
        <button
          className="relative inline-flex items-center w-11 h-6 bg-au-secondary border border-au-border rounded-full cursor-pointer transition-colors duration-200 data-[checked=true]:bg-au-primary data-[checked=true]:border-au-primary"
          role="switch"
          aria-checked={enabledOn ? "true" : "false"}
          onClick={() => setEnabledOn(!enabledOn)}
          data-checked={enabledOn ? "true" : "false"}
        >
          <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-au-background rounded-full shadow-sm transition-transform duration-200 data-[checked=true]:translate-x-5 pointer-events-none" />
        </button>
        <span className="text-xs text-au-muted-foreground">Enabled On</span>
      </div>
      <div className="flex flex-col items-center gap-3">
        <button
          className="relative inline-flex items-center w-11 h-6 bg-au-secondary border border-au-border rounded-full opacity-50 cursor-not-allowed"
          role="switch"
          aria-checked="false"
          disabled
        >
          <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-au-background rounded-full shadow-sm pointer-events-none" />
        </button>
        <span className="text-xs text-au-muted-foreground">Disabled Off</span>
      </div>
      <div className="flex flex-col items-center gap-3">
        <button
          className="relative inline-flex items-center w-11 h-6 bg-au-primary border border-au-primary rounded-full opacity-50 cursor-not-allowed"
          role="switch"
          aria-checked="true"
          disabled
        >
          <div className="absolute top-0.5 left-0.5 w-5 h-5 translate-x-5 bg-au-background rounded-full shadow-sm pointer-events-none" />
        </button>
        <span className="text-xs text-au-muted-foreground">Disabled On</span>
      </div>
    </div>
  );
}

export default function SwitchPage() {
  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-au-foreground mb-2">Switch</h1>
      <p className="text-au-muted-foreground mb-8">
        A toggle switch component for binary on/off states. Unlike checkboxes, switches represent an immediate action or state change.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Interactive Demo</h2>
        <DemoBlock
          preview={<InteractiveSwitchBasic />}
          code={`<div x-data="{ checked: false }" class="flex items-center gap-4">
  <button @click="checked = !checked"
    :class="checked ? 'bg-black border-black' : 'bg-gray-200 border-gray-300'"
    class="relative inline-flex items-center w-11 h-6 border rounded-full cursor-pointer transition-colors duration-200"
    role="switch"
    :aria-checked="checked"
    :data-checked="checked">
    <div class="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform duration-200 pointer-events-none"
      :class="checked ? 'translate-x-5' : 'translate-x-0'"></div>
  </button>
  <span class="text-gray-900" x-text="checked ? 'On' : 'Off'">Off</span>
</div>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Sizes</h2>
        <p className="text-au-muted-foreground mb-4">
          Three sizes for different contexts:
        </p>
        <ul className="text-sm text-au-muted-foreground mb-4 space-y-1">
          <li><strong className="text-au-foreground">Small</strong> - Compact UI, tables, dense forms</li>
          <li><strong className="text-au-foreground">Medium (default)</strong> - General use, most common</li>
          <li><strong className="text-au-foreground">Large</strong> - Mobile/touch targets, emphasis</li>
        </ul>
        <DemoBlock
          preview={<InteractiveSwitchSizes />}
          code={`<!-- Small: 2rem x 1.125rem -->
<button class="relative inline-flex items-center w-8 h-[18px] bg-gray-200 border border-gray-300 rounded-full cursor-pointer transition-colors data-[checked=true]:bg-black data-[checked=true]:border-black"
  role="switch" data-checked="true">
  <div class="absolute top-0.5 left-0.5 w-[14px] h-[14px] bg-white rounded-full shadow-sm transition-transform data-[checked=true]:translate-x-[14px] pointer-events-none" />
</button>

<!-- Medium (default): 2.75rem x 1.5rem -->
<button class="relative inline-flex items-center w-11 h-6 bg-black border border-black rounded-full cursor-pointer"
  role="switch" data-checked="true">
  <div class="absolute top-0.5 left-0.5 w-5 h-5 translate-x-5 bg-white rounded-full shadow-sm pointer-events-none" />
</button>

<!-- Large: 3.5rem x 2rem -->
<button class="relative inline-flex items-center w-14 h-8 bg-black border border-black rounded-full cursor-pointer"
  role="switch" data-checked="true">
  <div class="absolute top-1 left-1 w-6 h-6 translate-x-6 bg-white rounded-full shadow-sm pointer-events-none" />
</button>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Interactive Settings</h2>
        <p className="text-au-muted-foreground mb-4">
          Common use case: settings panels with immediate state feedback.
        </p>
        <DemoBlock
          preview={<InteractiveSwitchStates />}
          code={`<div x-data="{ darkMode: true, notifications: false }" class="w-full max-w-sm space-y-3">
  <div class="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
    <div>
      <p class="font-medium text-gray-900">Dark Mode</p>
      <p class="text-sm text-gray-500">Enable dark theme</p>
    </div>
    <button @click="darkMode = !darkMode"
      :class="darkMode ? 'bg-black border-black' : 'bg-gray-200 border-gray-300'"
      class="relative inline-flex items-center w-11 h-6 border rounded-full cursor-pointer transition-colors duration-200"
      role="switch" :aria-checked="darkMode" :data-checked="darkMode">
      <div class="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform duration-200 pointer-events-none"
        :class="darkMode ? 'translate-x-5' : 'translate-x-0'"></div>
    </button>
  </div>
  <div class="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
    <div>
      <p class="font-medium text-gray-900">Push Notifications</p>
      <p class="text-sm text-gray-500">Receive push alerts</p>
    </div>
    <button @click="notifications = !notifications"
      :class="notifications ? 'bg-black border-black' : 'bg-gray-200 border-gray-300'"
      class="relative inline-flex items-center w-11 h-6 border rounded-full cursor-pointer transition-colors duration-200"
      role="switch" :aria-checked="notifications" :data-checked="notifications">
      <div class="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform duration-200 pointer-events-none"
        :class="notifications ? 'translate-x-5' : 'translate-x-0'"></div>
    </button>
  </div>
</div>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">States</h2>
        <DemoBlock
          preview={<InteractiveSwitchDisabled />}
          code={`<!-- Enabled Off -->
<button class="relative inline-flex items-center w-11 h-6 bg-gray-200 border border-gray-300 rounded-full cursor-pointer"
  role="switch" data-checked="false">
  <div class="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-sm pointer-events-none" />
</button>

<!-- Enabled On -->
<button class="relative inline-flex items-center w-11 h-6 bg-black border border-black rounded-full cursor-pointer"
  role="switch" data-checked="true">
  <div class="absolute top-0.5 left-0.5 w-5 h-5 translate-x-5 bg-white rounded-full shadow-sm pointer-events-none" />
</button>

<!-- Disabled Off -->
<button class="relative inline-flex items-center w-11 h-6 bg-gray-200 border border-gray-300 rounded-full opacity-50 cursor-not-allowed"
  role="switch" data-checked="false" disabled>
  <div class="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-sm pointer-events-none" />
</button>

<!-- Disabled On -->
<button class="relative inline-flex items-center w-11 h-6 bg-black border border-black rounded-full opacity-50 cursor-not-allowed"
  role="switch" data-checked="true" disabled>
  <div class="absolute top-0.5 left-0.5 w-5 h-5 translate-x-5 bg-white rounded-full shadow-sm pointer-events-none" />
</button>`}
        />
      </section>
    </div>
  );
}
