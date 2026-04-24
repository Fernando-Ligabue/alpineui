"use client";

import { useState, useEffect } from "react";
import { CheckCircle, XCircle, AlertTriangle, Info, X } from "lucide-react";
import DemoBlock from "@/components/DemoBlock";
import { InstallCommand } from "@/components/InstallCommand";

interface ToastData {
  id: string;
  title: string;
  description?: string;
  variant: "default" | "success" | "error" | "warning" | "info";
}

function ToastContainer({ toasts, position, onDismiss }: { toasts: ToastData[]; position: string; onDismiss: (id: string) => void }) {
  const containerClass = `au-toast-container au-toast-container-${position}`;

  return (
    <div className={containerClass}>
      {toasts.map((toast) => (
        <div key={toast.id} className={`au-toast au-toast-${toast.variant}`}>
          {toast.variant === "success" && <CheckCircle className="au-toast-icon" />}
          {toast.variant === "error" && <XCircle className="au-toast-icon" />}
          {toast.variant === "warning" && <AlertTriangle className="au-toast-icon" />}
          {toast.variant === "info" && <Info className="au-toast-icon" />}
          {toast.variant === "default" && <Info className="au-toast-icon" />}
          <div className="au-toast-content">
            <div className="au-toast-title">{toast.title}</div>
            {toast.description && <div className="au-toast-description">{toast.description}</div>}
          </div>
          <button className="au-toast-close" onClick={() => onDismiss(toast.id)}>
            <X className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
}

function InteractiveToasts() {
  const [toasts, setToasts] = useState<ToastData[]>([]);

  const addToast = (variant: ToastData["variant"]) => {
    const id = Date.now().toString();
    const messages = {
      default: { title: "Notification", description: "This is a default toast message." },
      success: { title: "Success!", description: "Your changes have been saved." },
      error: { title: "Error", description: "Something went wrong. Please try again." },
      warning: { title: "Warning", description: "Your session will expire soon." },
      info: { title: "Info", description: "New updates are available." },
    };
    setToasts((prev) => [...prev, { id, ...messages[variant], variant }]);
  };

  const dismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  useEffect(() => {
    const timers = toasts.map((toast) =>
      setTimeout(() => dismissToast(toast.id), 5000)
    );
    return () => timers.forEach(clearTimeout);
  }, [toasts]);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <button className="au-button au-button-sm au-button-default" onClick={() => addToast("default")}>
          Default
        </button>
        <button className="au-button au-button-sm au-button-default" onClick={() => addToast("success")}>
          Success
        </button>
        <button className="au-button au-button-sm au-button-destructive" onClick={() => addToast("error")}>
          Error
        </button>
        <button className="au-button au-button-sm au-button-secondary" onClick={() => addToast("warning")}>
          Warning
        </button>
        <button className="au-button au-button-sm au-button-ghost" onClick={() => addToast("info")}>
          Info
        </button>
      </div>
      <ToastContainer toasts={toasts} position="top-right" onDismiss={dismissToast} />
    </div>
  );
}

function InteractiveToastPositions() {
  const [position, setPosition] = useState("top-right");
  const [toast, setToast] = useState<ToastData | null>(null);

  const showToast = () => {
    setToast({
      id: Date.now().toString(),
      title: "Notification",
      description: `Toast anchored to ${position}`,
      variant: "default" as const,
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {["top-left", "top-center", "top-right", "bottom-left", "bottom-center", "bottom-right"].map((pos) => (
          <button
            key={pos}
            className={`au-button au-button-sm ${position === pos ? "au-button-default" : "au-button-outline"}`}
            onClick={() => setPosition(pos)}
          >
            {pos}
          </button>
        ))}
      </div>
      <button className="au-button au-button-default px-4 py-2" onClick={showToast}>
        Show Toast
      </button>
      {toast && <ToastContainer toasts={[toast]} position={position} onDismiss={() => setToast(null)} />}
    </div>
  );
}

export default function ToastPage() {
  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-au-foreground mb-2">Toast</h1>
      <p className="text-au-muted-foreground mb-8">
        A notification component for displaying messages to the user.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Installation</h2>
        <InstallCommand command="npx alpineui add toast" />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Interactive Demo</h2>
        <DemoBlock
          preview={<InteractiveToasts />}
          code={`function App() {
  const [toasts, setToasts] = useState([]);

  const addToast = (variant) => {
    setToasts([...toasts, {
      id: Date.now().toString(),
      title: "Title",
      description: "Description",
      variant
    }]);
  };

  const dismissToast = (id) => {
    setToasts(toasts.filter(t => t.id !== id));
  };

  return (
    <div>
      <button onClick={() => addToast("default")}>Show Toast</button>
      <div className="au-toast-container au-toast-container-top-right">
        {toasts.map(toast => (
          <div className={\`au-toast au-toast-\${toast.variant}\`}>
            <div className="au-toast-content">
              <div className="au-toast-title">{toast.title}</div>
              <div className="au-toast-description">{toast.description}</div>
            </div>
            <button onClick={() => dismissToast(toast.id)}>×</button>
          </div>
        ))}
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
            <div className="space-y-3">
              <div className="au-toast au-toast-default">
                <Info className="au-toast-icon" />
                <div className="au-toast-content">
                  <div className="au-toast-title">Default</div>
                  <div className="au-toast-description">This is a default toast.</div>
                </div>
              </div>
              <div className="au-toast au-toast-success">
                <CheckCircle className="au-toast-icon" />
                <div className="au-toast-content">
                  <div className="au-toast-title">Success</div>
                  <div className="au-toast-description">Operation completed successfully.</div>
                </div>
              </div>
              <div className="au-toast au-toast-error">
                <XCircle className="au-toast-icon" />
                <div className="au-toast-content">
                  <div className="au-toast-title">Error</div>
                  <div className="au-toast-description">Something went wrong.</div>
                </div>
              </div>
              <div className="au-toast au-toast-warning">
                <AlertTriangle className="au-toast-icon" />
                <div className="au-toast-content">
                  <div className="au-toast-title">Warning</div>
                  <div className="au-toast-description">Please review before proceeding.</div>
                </div>
              </div>
              <div className="au-toast au-toast-info">
                <Info className="au-toast-icon" />
                <div className="au-toast-content">
                  <div className="au-toast-title">Info</div>
                  <div className="au-toast-description">New information available.</div>
                </div>
              </div>
            </div>
          }
          code={`<div class="au-toast au-toast-default">...</div>
<div class="au-toast au-toast-success">...</div>
<div class="au-toast au-toast-error">...</div>
<div class="au-toast au-toast-warning">...</div>
<div class="au-toast au-toast-info">...</div>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Positions</h2>
        <DemoBlock
          preview={<InteractiveToastPositions />}
          code={`<div class="au-toast-container au-toast-container-top-left">...</div>
<div class="au-toast-container au-toast-container-top-center">...</div>
<div class="au-toast-container au-toast-container-top-right">...</div>
<div class="au-toast-container au-toast-container-bottom-left">...</div>
<div class="au-toast-container au-toast-container-bottom-center">...</div>
<div class="au-toast-container au-toast-container-bottom-right">...</div>`}
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
              <tr><td className="px-4 py-2 font-mono text-xs">au-toast-container</td><td className="px-4 py-2">Container (position: fixed)</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-toast-container-top-left</td><td className="px-4 py-2">Top left position</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-toast-container-top-center</td><td className="px-4 py-2">Top center position</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-toast-container-top-right</td><td className="px-4 py-2">Top right position</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-toast-container-bottom-left</td><td className="px-4 py-2">Bottom left position</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-toast-container-bottom-center</td><td className="px-4 py-2">Bottom center position</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-toast-container-bottom-right</td><td className="px-4 py-2">Bottom right position</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-toast</td><td className="px-4 py-2">Toast item</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-toast-default|success|error|warning|info</td><td className="px-4 py-2">Variants</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-toast-title</td><td className="px-4 py-2">Title text</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-toast-description</td><td className="px-4 py-2">Description text</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-toast-close</td><td className="px-4 py-2">Close button</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}