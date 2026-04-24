"use client";

import { useState } from "react";
import DemoBlock from "@/components/DemoBlock";
import { InstallCommand } from "@/components/InstallCommand";

function InteractiveInput() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState("Day");

  const emailError = emailTouched && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValid = name.length > 0 && !emailError;

  return (
    <div className="w-full max-w-sm space-y-4">
      <div className="au-field">
        <label className="au-label au-label-required">Name</label>
        <input
          type="text"
          className="au-input au-input-md"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="au-field">
        <label className="au-label au-label-required">Email</label>
        <input
          type="email"
          className={`au-input au-input-md ${emailError ? "au-input-error" : isValid ? "au-input-success" : ""}`}
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => setEmailTouched(true)}
        />
        {emailError && <span className="au-input-error-message">Invalid email</span>}
        {!emailError && isValid && <span className="au-input-success-message">Email looks good!</span>}
      </div>
      <div className="au-field">
        <label className="au-label">Period</label>
        <div className="au-input-group">
          {["Day", "Week", "Month"].map((period) => (
            <button
              key={period}
              className={`au-input-group-item ${selectedPeriod === period ? "au-input-group-item-active" : ""}`}
              onClick={() => setSelectedPeriod(period)}
            >
              {period}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function InputPage() {
  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-au-foreground mb-2">Input</h1>
      <p className="text-au-muted-foreground mb-8">
        A form input component with validation, icons, and various states.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Installation</h2>
        <InstallCommand command="npx alpineui add input" />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Interactive Demo</h2>
        <DemoBlock
          preview={<InteractiveInput />}
          code={`function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState("Day");

  const emailError = emailTouched && !/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);
  const isValid = name.length > 0 && !emailError;

  return (
    <div class="au-field">
      <label class="au-label au-label-required">Name</label>
      <input
        type="text"
        className="au-input au-input-md"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div class="au-field">
        <label class="au-label au-label-required">Email</label>
        <input
          type="email"
          className={\`au-input au-input-md \${emailError ? "au-input-error" : isValid ? "au-input-success" : ""}\`}
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => setEmailTouched(true)}
        />
        {emailError && <span class="au-input-error-message">Invalid email</span>}
        {!emailError && isValid && <span class="au-input-success-message">Email looks good!</span>}
      </div>
      <div class="au-field">
        <label class="au-label">Period</label>
        <div class="au-input-group">
          {["Day", "Week", "Month"].map((period) => (
            <button
              key={period}
              className={\`au-input-group-item \${selectedPeriod === period ? "au-input-group-item-active" : ""}\`}
              onClick={() => setSelectedPeriod(period)}
            >
              {period}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Basic Input</h2>
        <DemoBlock
          preview={
            <div className="w-full max-w-sm">
              <div className="au-field">
                <label className="au-label">Name</label>
                <input type="text" className="au-input au-input-md" placeholder="Enter your name" />
              </div>
            </div>
          }
          code={`<div class="au-field">
  <label class="au-label">Name</label>
  <input type="text" class="au-input au-input-md" placeholder="Enter your name" />
</div>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Sizes</h2>
        <DemoBlock
          preview={
            <div className="w-full max-w-sm space-y-3">
              <div className="au-field">
                <label className="au-label" style={{ fontSize: "0.75rem" }}>Small</label>
                <input type="text" className="au-input au-input-sm" placeholder="Small input" />
              </div>
              <div className="au-field">
                <label className="au-label" style={{ fontSize: "0.875rem" }}>Medium</label>
                <input type="text" className="au-input au-input-md" placeholder="Medium input" />
              </div>
              <div className="au-field">
                <label className="au-label" style={{ fontSize: "1rem" }}>Large</label>
                <input type="text" className="au-input au-input-lg" placeholder="Large input" />
              </div>
            </div>
          }
          code={`<div class="au-field">
  <label class="au-label">Small</label>
  <input type="text" class="au-input au-input-sm" placeholder="Small input" />
</div>

<div class="au-field">
  <label class="au-label">Medium</label>
  <input type="text" class="au-input au-input-md" placeholder="Medium input" />
</div>

<div class="au-field">
  <label class="au-label">Large</label>
  <input type="text" class="au-input au-input-lg" placeholder="Large input" />
</div>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Validation States</h2>
        <DemoBlock
          preview={
            <div className="w-full max-w-sm space-y-4">
              <div className="au-field">
                <label className="au-label au-label-required">Email</label>
                <input type="email" className="au-input au-input-md au-input-error" defaultValue="invalid-email" />
                <span className="au-input-error-message">Invalid email</span>
              </div>
              <div className="au-field">
                <label className="au-label">Username</label>
                <input type="text" className="au-input au-input-md au-input-success" defaultValue="johndoe" />
                <span className="au-input-success-message">Name available</span>
              </div>
            </div>
          }
          code={`<div class="au-field">
  <label class="au-label au-label-required">Email</label>
  <input type="email" class="au-input au-input-md au-input-error" />
  <span class="au-input-error-message">Invalid email</span>
</div>

<div class="au-field">
  <label class="au-label">Username</label>
  <input type="text" class="au-input au-input-md au-input-success" />
  <span class="au-input-success-message">Name available</span>
</div>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Disabled</h2>
        <DemoBlock
          preview={
            <div className="w-full max-w-sm">
              <div className="au-field">
                <label className="au-label">Disabled</label>
                <input type="text" className="au-input au-input-md" defaultValue="Cannot edit" disabled />
              </div>
            </div>
          }
          code={`<div class="au-field">
  <label class="au-label">Disabled</label>
  <input type="text" class="au-input au-input-md" value="Cannot edit" disabled />
</div>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Textarea</h2>
        <DemoBlock
          preview={
            <div className="w-full max-w-sm">
              <div className="au-field">
                <label className="au-label">Message</label>
                <textarea className="au-textarea au-textarea-md" placeholder="Enter your message..." />
              </div>
            </div>
          }
          code={`<div class="au-field">
  <label class="au-label">Message</label>
  <textarea class="au-textarea au-textarea-md" placeholder="Enter your message..."></textarea>
</div>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Input Group</h2>
        <DemoBlock
          preview={
            <div className="w-full max-w-sm">
              <div className="au-field">
                <label className="au-label">Period</label>
                <div className="au-input-group">
                  <button className="au-input-group-item au-input-group-item-active">Day</button>
                  <button className="au-input-group-item">Week</button>
                  <button className="au-input-group-item">Month</button>
                </div>
              </div>
            </div>
          }
          code={`<div class="au-field">
  <label class="au-label">Period</label>
  <div class="au-input-group">
    <button class="au-input-group-item au-input-group-item-active">Day</button>
    <button class="au-input-group-item">Week</button>
    <button class="au-input-group-item">Month</button>
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
              <tr><td className="px-4 py-2 font-mono text-xs">au-input</td><td className="px-4 py-2">Base input class</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-input-sm</td><td className="px-4 py-2">Small input</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-input-md</td><td className="px-4 py-2">Medium input</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-input-lg</td><td className="px-4 py-2">Large input</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-input-error</td><td className="px-4 py-2">Error state</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-input-success</td><td className="px-4 py-2">Success state</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-textarea</td><td className="px-4 py-2">Textarea class</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-label</td><td className="px-4 py-2">Label class</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-label-required</td><td className="px-4 py-2">Required label</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-input-group</td><td className="px-4 py-2">Input group container</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-input-group-item</td><td className="px-4 py-2">Group item</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-input-group-item-active</td><td className="px-4 py-2">Active group item</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
