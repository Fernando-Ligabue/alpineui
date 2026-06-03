"use client";

import { useState, useEffect } from "react";
import { CheckCircle, XCircle, AlertTriangle, Info, X } from "lucide-react";
import DemoBlock from "@/components/DemoBlock";
import { useI18n } from "@/i18n/I18nProvider";

interface ToastData {
  id: string;
  title: string;
  description?: string;
  variant: "default" | "success" | "error" | "warning" | "info";
}

const positionClasses: Record<string, string> = {
  "top-left": "fixed top-4 left-4 z-[100] flex flex-col gap-2 items-start",
  "top-center": "fixed top-4 left-1/2 -translate-x-1/2 z-[100] flex flex-col gap-2 items-center",
  "top-right": "fixed top-4 right-4 z-[100] flex flex-col gap-2 items-end",
  "bottom-left": "fixed bottom-4 left-4 z-[100] flex flex-col gap-2 items-start",
  "bottom-center": "fixed bottom-4 left-1/2 -translate-x-1/2 z-[100] flex flex-col gap-2 items-center",
  "bottom-right": "fixed bottom-4 right-4 z-[100] flex flex-col gap-2 items-end",
};

const iconMap: Record<string, React.ReactNode> = {
  success: <CheckCircle className="w-5 h-5 shrink-0 text-green-500" />,
  error: <XCircle className="w-5 h-5 shrink-0 text-red-500" />,
  warning: <AlertTriangle className="w-5 h-5 shrink-0 text-amber-500" />,
  info: <Info className="w-5 h-5 shrink-0 text-blue-500" />,
  default: <Info className="w-5 h-5 shrink-0 text-gray-500" />,
};

const variantBorderBg: Record<string, string> = {
  default: "",
  success: "border-green-500 bg-green-50",
  error: "border-red-500 bg-red-50",
  warning: "border-amber-500 bg-amber-50",
  info: "border-blue-500 bg-blue-50",
};

function ToastContainer({ toasts, position, onDismiss }: { toasts: ToastData[]; position: string; onDismiss: (id: string) => void }) {
  const { t } = useI18n();
  return (
    <div className={positionClasses[position] || positionClasses["top-right"]}>
      {toasts.map((toast) => (
        <div key={toast.id} className={`group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border border-au-border bg-au-background p-6 shadow-lg transition-all ${variantBorderBg[toast.variant]}`}>
          {iconMap[toast.variant]}
          <div className="flex-1 min-w-0">
            <div className="text-sm font-semibold">{toast.title}</div>
            {toast.description && <div className="text-sm opacity-90">{toast.description}</div>}
          </div>
          <button aria-label={t("toast.dismiss")} className="shrink-0 rounded-md p-1 opacity-70 hover:opacity-100 transition-opacity" onClick={() => onDismiss(toast.id)}>
            <X className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
}

function InteractiveToasts() {
  const { t } = useI18n();
  const [toasts, setToasts] = useState<ToastData[]>([]);

  const addToast = (variant: ToastData["variant"]) => {
    const id = Date.now().toString();
    const messages: Record<string, { title: string; description: string }> = {
      default: { title: t("common.notifications"), description: t("common.defaultToast") },
      success: { title: t("common.success"), description: t("common.savedSuccess") },
      error: { title: t("common.error"), description: t("common.somethingWentWrong") },
      warning: { title: t("common.warning"), description: t("common.sessionExpiring") },
      info: { title: t("common.info"), description: t("common.newUpdates") },
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
        <button className="inline-flex items-center justify-center rounded-md text-sm font-medium h-8 px-3 bg-au-primary text-au-primary-foreground hover:bg-au-primary" onClick={() => addToast("default")}>
          {t("common.default")}
        </button>
        <button className="inline-flex items-center justify-center rounded-md text-sm font-medium h-8 px-3 bg-au-primary text-au-primary-foreground hover:bg-au-primary" onClick={() => addToast("success")}>
          {t("common.success")}
        </button>
        <button className="inline-flex items-center justify-center rounded-md text-sm font-medium h-8 px-3 bg-au-destructive text-au-destructive-foreground hover:bg-au-destructive" onClick={() => addToast("error")}>
          {t("common.error")}
        </button>
        <button className="inline-flex items-center justify-center rounded-md text-sm font-medium h-8 px-3 bg-au-secondary text-au-foreground hover:bg-au-accent" onClick={() => addToast("warning")}>
          {t("common.warning")}
        </button>
        <button className="inline-flex items-center justify-center rounded-md text-sm font-medium h-8 px-3 text-au-foreground hover:bg-au-accent" onClick={() => addToast("info")}>
          {t("common.info")}
        </button>
      </div>
      <ToastContainer toasts={toasts} position="top-right" onDismiss={dismissToast} />
    </div>
  );
}

function InteractiveToastPositions() {
  const { t } = useI18n();
  const [position, setPosition] = useState("top-right");
  const [toast, setToast] = useState<ToastData | null>(null);

  const positionLabels: Record<string, string> = {
    "top-left": t("common.topLeft"),
    "top-center": t("common.topCenter"),
    "top-right": t("common.topRight"),
    "bottom-left": t("common.bottomLeft"),
    "bottom-center": t("common.bottomCenter"),
    "bottom-right": t("common.bottomRight"),
  };

  const showToast = () => {
    setToast({
      id: Date.now().toString(),
      title: t("common.notifications"),
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
            className={`inline-flex items-center justify-center rounded-md text-sm font-medium h-8 px-3 ${position === pos ? "bg-au-primary text-au-primary-foreground" : "border border-au-border text-au-foreground hover:bg-au-accent"}`}
            onClick={() => setPosition(pos)}
          >
            {positionLabels[pos]}
          </button>
        ))}
      </div>
      <button className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 bg-au-primary text-au-primary-foreground hover:bg-au-primary" onClick={showToast}>
        {t("common.show")}
      </button>
      {toast && <ToastContainer toasts={[toast]} position={position} onDismiss={() => setToast(null)} />}
    </div>
  );
}

export default function ToastPage() {
  const { t } = useI18n();
  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-au-foreground mb-2">{t("toast.title")}</h1>
      <p className="text-au-muted-foreground mb-8">
        {t("toast.description")}
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">{t("common.interactiveDemo")}</h2>
        <DemoBlock
          preview={<InteractiveToasts />}
          code={`<div x-data="{ toasts: [] }">
  <div class="flex flex-wrap gap-2 mb-4">
    <button @click="toasts.push({ id: Date.now(), title: 'Notification', description: 'Default message', variant: 'default' }); setTimeout(() => toasts.shift(), 5000)"
      class="inline-flex items-center justify-center rounded-md text-sm font-medium h-8 px-3 bg-gray-900 text-white hover:bg-gray-800">Default</button>
    <button @click="toasts.push({ id: Date.now(), title: 'Success!', description: 'Your changes have been saved.', variant: 'success' }); setTimeout(() => toasts.shift(), 5000)"
      class="inline-flex items-center justify-center rounded-md text-sm font-medium h-8 px-3 bg-gray-900 text-white hover:bg-gray-800">Success</button>
    <button @click="toasts.push({ id: Date.now(), title: 'Error', description: 'Something went wrong.', variant: 'error' }); setTimeout(() => toasts.shift(), 5000)"
      class="inline-flex items-center justify-center rounded-md text-sm font-medium h-8 px-3 bg-red-600 text-white hover:bg-red-500">Error</button>
  </div>
  <div class="fixed top-4 right-4 z-[100] flex flex-col gap-2 items-end">
    <template x-for="toast in toasts" :key="toast.id">
      <div class="group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border border-gray-200 bg-white p-6 shadow-lg transition-all">
        <div class="flex-1 min-w-0">
          <div class="text-sm font-semibold" x-text="toast.title"></div>
          <div class="text-sm opacity-90" x-text="toast.description"></div>
        </div>
        <button @click="toasts = toasts.filter(t => t.id !== toast.id)"
          class="shrink-0 rounded-md p-1 opacity-70 hover:opacity-100 transition-opacity">
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
    </template>
  </div>
</div>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">{t("common.variants")}</h2>
        <DemoBlock
          preview={
            <div className="space-y-3">
              <div className="group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border border-au-border bg-au-background p-6 shadow-lg transition-all">
                <Info className="w-5 h-5 shrink-0 text-au-muted-foreground" />
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold">{t("common.default")}</div>
                  <div className="text-sm opacity-90">{t("common.defaultToast")}</div>
                </div>
              </div>
              <div className="group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border border-green-500 bg-green-50 p-6 shadow-lg transition-all">
                <CheckCircle className="w-5 h-5 shrink-0 text-green-500" />
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold">{t("common.success")}</div>
                  <div className="text-sm opacity-90">{t("common.operationCompleted")}</div>
                </div>
              </div>
              <div className="group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border border-red-500 bg-red-50 p-6 shadow-lg transition-all">
                <XCircle className="w-5 h-5 shrink-0 text-red-500" />
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold">{t("common.error")}</div>
                  <div className="text-sm opacity-90">{t("common.somethingWentWrong")}</div>
                </div>
              </div>
              <div className="group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border border-amber-500 bg-amber-50 p-6 shadow-lg transition-all">
                <AlertTriangle className="w-5 h-5 shrink-0 text-amber-500" />
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold">{t("common.warning")}</div>
                  <div className="text-sm opacity-90">{t("common.reviewBeforeProceeding")}</div>
                </div>
              </div>
              <div className="group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border border-blue-500 bg-blue-50 p-6 shadow-lg transition-all">
                <Info className="w-5 h-5 shrink-0 text-blue-500" />
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold">{t("common.info")}</div>
                  <div className="text-sm opacity-90">{t("common.newInfoAvailable")}</div>
                </div>
              </div>
            </div>
          }
          code={`<div class="group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border border-gray-200 bg-white p-6 shadow-lg transition-all">
  <svg class="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
  <div class="flex-1 min-w-0">
    <div class="text-sm font-semibold">Default</div>
    <div class="text-sm opacity-90">This is a default toast.</div>
  </div>
</div>

<div class="... border-green-500 bg-green-50">...</div>
<div class="... border-red-500 bg-red-50">...</div>
<div class="... border-amber-500 bg-amber-50">...</div>
<div class="... border-blue-500 bg-blue-50">...</div>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">{t("common.positions")}</h2>
        <DemoBlock
          preview={<InteractiveToastPositions />}
          code={`<!-- Top left -->
<div class="fixed top-4 left-4 z-[100] flex flex-col gap-2 items-start">...</div>

<!-- Top center -->
<div class="fixed top-4 left-1/2 -translate-x-1/2 z-[100] flex flex-col gap-2 items-center">...</div>

<!-- Top right -->
<div class="fixed top-4 right-4 z-[100] flex flex-col gap-2 items-end">...</div>

<!-- Bottom left -->
<div class="fixed bottom-4 left-4 z-[100] flex flex-col gap-2 items-start">...</div>

<!-- Bottom center -->
<div class="fixed bottom-4 left-1/2 -translate-x-1/2 z-[100] flex flex-col gap-2 items-center">...</div>

<!-- Bottom right -->
<div class="fixed bottom-4 right-4 z-[100] flex flex-col gap-2 items-end">...</div>`}
        />
      </section>
    </div>
  );
}
