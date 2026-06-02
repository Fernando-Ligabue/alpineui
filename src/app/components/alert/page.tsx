"use client";

import { useState } from "react";
import { X, CheckCircle, AlertTriangle, AlertCircle, Info } from "lucide-react";
import DemoBlock from "@/components/DemoBlock";

function InteractiveAlertDefault() {
  return (
    <div className="flex items-start gap-3 p-4 rounded-lg border bg-au-secondary border-au-border text-au-foreground">
      <Info className="w-5 h-5 shrink-0 mt-0.5" />
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-sm mb-1">Default Alert</p>
        <p className="text-sm">This is a default alert message.</p>
      </div>
    </div>
  );
}

function InteractiveAlertSuccess() {
  return (
    <div className="flex items-start gap-3 p-4 rounded-lg border bg-green-50 border-green-500 text-green-800">
      <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" />
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-sm mb-1">Success!</p>
        <p className="text-sm">Your changes have been saved successfully.</p>
      </div>
    </div>
  );
}

function InteractiveAlertWarning() {
  return (
    <div className="flex items-start gap-3 p-4 rounded-lg border bg-amber-50 border-amber-500 text-amber-800">
      <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" />
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-sm mb-1">Warning</p>
        <p className="text-sm">Please review your information before submitting.</p>
      </div>
    </div>
  );
}

function InteractiveAlertError() {
  return (
    <div className="flex items-start gap-3 p-4 rounded-lg border bg-red-50 border-red-500 text-red-800">
      <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-sm mb-1">Error</p>
        <p className="text-sm">Something went wrong. Please try again.</p>
      </div>
    </div>
  );
}

function InteractiveAlertInfo() {
  return (
    <div className="flex items-start gap-3 p-4 rounded-lg border bg-blue-50 border-blue-500 text-blue-800">
      <Info className="w-5 h-5 shrink-0 mt-0.5" />
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-sm mb-1">Information</p>
        <p className="text-sm">New features are available. Check them out!</p>
      </div>
    </div>
  );
}

function InteractiveAlertDismissible() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="flex items-start gap-3 p-4 rounded-lg border bg-green-50 border-green-500 text-green-800">
      <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" />
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-sm mb-1">Saved!</p>
        <p className="text-sm">Your preferences have been updated.</p>
      </div>
      <button className="shrink-0 flex items-center justify-center w-6 h-6 border-none bg-transparent rounded cursor-pointer opacity-50 hover:opacity-100 transition-opacity" onClick={() => setVisible(false)}>
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}

function InteractiveAlertSizes() {
  return (
    <div className="space-y-4">
      <div className="flex items-start gap-2 p-2 rounded-lg border bg-blue-50 border-blue-500 text-blue-800">
        <Info className="w-4 h-4 shrink-0 mt-0.5" />
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-xs mb-1">Small Alert</p>
          <p className="text-sm">Compact alert for tight spaces.</p>
        </div>
      </div>
      <div className="flex items-start gap-3 p-4 rounded-lg border bg-blue-50 border-blue-500 text-blue-800">
        <Info className="w-5 h-5 shrink-0 mt-0.5" />
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-sm mb-1">Medium Alert</p>
          <p className="text-sm">Default alert size for most cases.</p>
        </div>
      </div>
      <div className="flex items-start gap-4 p-5 rounded-lg border bg-blue-50 border-blue-500 text-blue-800">
        <Info className="w-6 h-6 shrink-0 mt-0.5" />
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-base mb-1">Large Alert</p>
          <p className="text-sm">Larger alert for important notifications.</p>
        </div>
      </div>
    </div>
  );
}

export default function AlertPage() {
  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-au-foreground mb-2">Alert</h1>
      <p className="text-au-muted-foreground mb-8">
        A component to display important messages or notifications to users.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Variants</h2>
        <DemoBlock
          preview={
            <div className="space-y-4">
              <InteractiveAlertDefault />
              <InteractiveAlertSuccess />
              <InteractiveAlertWarning />
              <InteractiveAlertError />
              <InteractiveAlertInfo />
            </div>
          }
          code={`<div class="flex items-start gap-3 p-4 rounded-lg border bg-gray-100 border-gray-200 text-gray-900">
  <svg class="w-5 h-5 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
  <div class="flex-1 min-w-0">
    <p class="font-semibold text-sm mb-1">Title</p>
    <p class="text-sm">Description</p>
  </div>
</div>

<div class="flex items-start gap-3 p-4 rounded-lg border bg-green-50 border-green-500 text-green-800">...</div>
<div class="flex items-start gap-3 p-4 rounded-lg border bg-amber-50 border-amber-500 text-amber-800">...</div>
<div class="flex items-start gap-3 p-4 rounded-lg border bg-red-50 border-red-500 text-red-800">...</div>
<div class="flex items-start gap-3 p-4 rounded-lg border bg-blue-50 border-blue-500 text-blue-800">...</div>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Dismissible</h2>
        <DemoBlock
          preview={<InteractiveAlertDismissible />}
          code={`<div x-data="{ visible: true }" x-show="visible"
  class="flex items-start gap-3 p-4 rounded-lg border bg-green-50 border-green-500 text-green-800">
  <svg class="w-5 h-5 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
  </svg>
  <div class="flex-1 min-w-0">
    <p class="font-semibold text-sm mb-1">Saved!</p>
    <p class="text-sm">Your preferences have been updated.</p>
  </div>
  <button @click="visible = false"
    class="shrink-0 flex items-center justify-center w-6 h-6 border-none bg-transparent rounded cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
    </svg>
  </button>
</div>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Sizes</h2>
        <DemoBlock
          preview={<InteractiveAlertSizes />}
          code={`<div class="flex items-start gap-2 p-2 rounded-lg border bg-blue-50 border-blue-500 text-blue-800">...</div>
<div class="flex items-start gap-3 p-4 rounded-lg border bg-blue-50 border-blue-500 text-blue-800">...</div>
<div class="flex items-start gap-4 p-5 rounded-lg border bg-blue-50 border-blue-500 text-blue-800">...</div>`}
        />
      </section>
    </div>
  );
}
