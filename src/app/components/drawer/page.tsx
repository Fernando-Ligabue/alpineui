"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import DemoBlock from "@/components/DemoBlock";
import { useI18n } from "@/i18n/I18nProvider";

function DrawerContent({ open, onClose, direction, children }: { open: boolean; onClose: () => void; direction: "top" | "bottom" | "left" | "right"; children: React.ReactNode }) {
  const { t } = useI18n();
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;

  const positionClasses: Record<string, string> = {
    bottom: "bottom-0 left-0 right-0 mt-24 rounded-t-lg border border-au-border bg-au-background max-h-[80vh]",
    top: "top-0 left-0 right-0 mb-24 rounded-b-lg border border-au-border bg-au-background max-h-[80vh]",
    left: "left-0 top-0 bottom-0 border-r border-au-border bg-au-background w-[75%] sm:max-w-96",
    right: "right-0 top-0 bottom-0 border-l border-au-border bg-au-background w-[75%] sm:max-w-96",
  };

  return (
    <>
      <div className="fixed inset-0 z-40 bg-black/50" onClick={onClose} />
      <div className={`fixed z-50 flex flex-col ${positionClasses[direction]}`}>
        <div className="flex justify-end p-2">
          <button aria-label={t("common.close")} onClick={onClose}>
            <X className="h-4 w-4 text-au-muted-foreground" />
          </button>
        </div>
        {children}
      </div>
    </>
  );
}

function DrawerDemo() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)} className="inline-flex items-center justify-center rounded-lg bg-au-primary px-4 py-2 text-sm font-medium text-au-primary-foreground hover:opacity-90">
        {t("common.open")}
      </button>
      <DrawerContent open={open} onClose={() => setOpen(false)} direction="bottom">
        <div className="flex flex-col gap-1.5 p-4 text-center sm:text-left">
          <h3 className="text-lg font-semibold leading-none tracking-tight">{t("common.areYouAbsolutelySure")}</h3>
          <p className="text-sm text-au-muted-foreground">{t("common.actionCannotBeUndone")} {t("common.deleteAccountPermanent")}</p>
        </div>
        <div className="px-4 py-2">
          <p className="text-sm text-au-foreground">{t("common.deleteAccountWarning")}</p>
        </div>
        <div className="flex flex-col gap-2 p-4 mt-auto">
          <button onClick={() => setOpen(false)} className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium bg-gray-900 text-white hover:bg-gray-800">{t("common.continue")}</button>
          <button onClick={() => setOpen(false)} className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium border border-au-border text-au-foreground hover:bg-au-accent">{t("common.cancel")}</button>
        </div>
      </DrawerContent>
    </>
  );
}

function DrawerDirectionsDemo() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const [direction, setDirection] = useState<"top" | "bottom" | "left" | "right">("bottom");

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      <button onClick={() => { setDirection("top"); setOpen(true); }} className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium border border-au-border text-au-foreground hover:bg-au-accent">{t("common.top")}</button>
      <button onClick={() => { setDirection("bottom"); setOpen(true); }} className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium border border-au-border text-au-foreground hover:bg-au-accent">{t("common.bottom")}</button>
      <button onClick={() => { setDirection("left"); setOpen(true); }} className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium border border-au-border text-au-foreground hover:bg-au-accent">{t("common.left")}</button>
      <button onClick={() => { setDirection("right"); setOpen(true); }} className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium border border-au-border text-au-foreground hover:bg-au-accent">{t("common.right")}</button>

      <DrawerContent open={open} onClose={() => setOpen(false)} direction={direction}>
        <div className="flex flex-col gap-1.5 p-4 text-center sm:text-left">
          <h3 className="text-lg font-semibold leading-none tracking-tight capitalize">{direction} Drawer</h3>
          <p className="text-sm text-au-muted-foreground">Drawer sliding from {direction}</p>
        </div>
        <div className="px-4">
          <p className="text-sm text-au-foreground">This is a drawer that slides from the {direction} side of the screen.</p>
        </div>
        <div className="flex flex-col gap-2 p-4 mt-auto">
          <button onClick={() => setOpen(false)} className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium bg-gray-900 text-white hover:bg-gray-800">{t("common.confirm")}</button>
          <button onClick={() => setOpen(false)} className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium border border-au-border text-au-foreground hover:bg-au-accent">{t("common.cancel")}</button>
        </div>
      </DrawerContent>
    </div>
  );
}

export default function DrawerPage() {
  const { t } = useI18n();
  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-au-foreground mb-2">{t("drawer.title")}</h1>
      <p className="text-au-muted-foreground mb-8">
        {t("drawer.description")}
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">{t("common.basicExample")}</h2>
        <DemoBlock
          preview={<DrawerDemo />}
          code={`<div x-data="{ open: false }">
  <!-- Trigger -->
  <button @click="open = true"
    class="inline-flex items-center justify-center rounded-lg bg-black px-4 py-2 text-sm font-medium text-white hover:opacity-90">
    Open Drawer
  </button>

  <!-- Overlay -->
  <div x-show="open" @click="open = false" class="fixed inset-0 z-40 bg-black/50"></div>

  <!-- Drawer Panel (bottom) -->
  <div x-show="open"
    class="fixed bottom-0 left-0 right-0 z-50 flex flex-col mt-24 rounded-t-lg border border-gray-200 bg-white max-h-[80vh]">
    <div class="flex justify-end p-2">
      <button @click="open = false">
        <svg class="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
    </div>
    <div class="flex flex-col gap-1.5 p-4 text-center sm:text-left">
      <h3 class="text-lg font-semibold leading-none tracking-tight">Are you absolutely sure?</h3>
      <p class="text-sm text-gray-500">This action cannot be undone.</p>
    </div>
    <div class="flex flex-col gap-2 p-4 mt-auto">
      <button @click="open = false"
        class="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium bg-gray-900 text-white hover:bg-gray-800">Continue</button>
      <button @click="open = false"
        class="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium border border-gray-300 text-gray-700 hover:bg-gray-50">Cancel</button>
    </div>
  </div>
</div>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">{t("common.directions")}</h2>
        <DemoBlock
          preview={<DrawerDirectionsDemo />}
          code={`<!-- Bottom -->
<div x-data="{ open: false }">
  <button @click="open = true" class="...">Bottom</button>
  <div x-show="open" @click="open = false" class="fixed inset-0 z-40 bg-black/50"></div>
  <div x-show="open"
    class="fixed bottom-0 left-0 right-0 z-50 flex flex-col mt-24 rounded-t-lg border border-gray-200 bg-white max-h-[80vh]">
    <!-- content -->
  </div>
</div>

<!-- Top -->
<div x-data="{ open: false }">
  <div x-show="open"
    class="fixed top-0 left-0 right-0 z-50 flex flex-col mb-24 rounded-b-lg border border-gray-200 bg-white max-h-[80vh]">
    <!-- content -->
  </div>
</div>

<!-- Left -->
<div x-data="{ open: false }">
  <div x-show="open"
    class="fixed left-0 top-0 bottom-0 z-50 flex flex-col border-r border-gray-200 bg-white w-[75%] sm:max-w-96">
    <!-- content -->
  </div>
</div>

<!-- Right -->
<div x-data="{ open: false }">
  <div x-show="open"
    class="fixed right-0 top-0 bottom-0 z-50 flex flex-col border-l border-gray-200 bg-white w-[75%] sm:max-w-96">
    <!-- content -->
  </div>
</div>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">{t("common.directions")}</h2>
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-4 py-3 font-medium">{t("drawer.direction")}</th>
                <th className="text-left px-4 py-3 font-medium">{t("drawer.classes")}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr><td className="px-4 py-2 font-mono text-xs">bottom</td><td className="px-4 py-2 font-mono text-xs">fixed bottom-0 left-0 right-0 z-50 ... rounded-t-lg</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">top</td><td className="px-4 py-2 font-mono text-xs">fixed top-0 left-0 right-0 z-50 ... rounded-b-lg</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">left</td><td className="px-4 py-2 font-mono text-xs">fixed left-0 top-0 bottom-0 z-50 ... border-r w-[75%] sm:max-w-96</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">right</td><td className="px-4 py-2 font-mono text-xs">fixed right-0 top-0 bottom-0 z-50 ... border-l w-[75%] sm:max-w-96</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
