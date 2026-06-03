"use client";

import { useState } from "react";
import { AlertTriangle } from "lucide-react";
import DemoBlock from "@/components/DemoBlock";
import { useI18n } from "@/i18n/I18nProvider";

function AlertDialog({ open, onOpenChange, children }: { open: boolean; onOpenChange: (v: boolean) => void; children: React.ReactNode }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black/50" onClick={() => onOpenChange(false)} />
      <div className="relative z-50 w-full max-w-md rounded-lg border border-au-border bg-au-background p-6 shadow-lg">
        {children}
      </div>
    </div>
  );
}

function AlertDialogDemo() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)} className="inline-flex items-center justify-center rounded-lg bg-au-primary px-4 py-2 text-sm font-medium text-au-primary-foreground hover:opacity-90">
        {t("common.show")}
      </button>
      <AlertDialog open={open} onOpenChange={setOpen}>
        <div className="flex flex-col gap-1.5 text-center sm:text-left mb-4">
          <h3 className="text-lg font-semibold">{t("common.areYouAbsolutelySure")}</h3>
          <p className="text-sm text-au-muted-foreground">{t("common.actionCannotBeUndone")}</p>
        </div>
        <div className="flex flex-col-reverse sm:flex-row justify-end gap-2 mt-6">
          <button onClick={() => setOpen(false)} className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium bg-au-primary text-au-primary-foreground hover:opacity-90">{t("common.continue")}</button>
          <button onClick={() => setOpen(false)} className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium border border-au-border text-au-foreground hover:bg-au-accent">{t("common.cancel")}</button>
        </div>
      </AlertDialog>
    </>
  );
}

function AlertDialogWithMediaDemo() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)} className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium bg-au-destructive text-au-primary-foreground hover:bg-au-destructive">
        {t("common.delete")}
      </button>
      <AlertDialog open={open} onOpenChange={setOpen}>
        <div className="flex flex-col gap-1.5 text-center sm:text-left mb-4">
          <AlertTriangle className="h-8 w-8 text-au-destructive mx-auto sm:mx-0" />
          <h3 className="text-lg font-semibold">{t("common.delete")}</h3>
          <p className="text-sm text-au-muted-foreground">{t("common.deleteConversation")}</p>
        </div>
        <div className="flex flex-col-reverse sm:flex-row justify-end gap-2 mt-6">
          <button onClick={() => setOpen(false)} className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium bg-au-destructive text-au-primary-foreground hover:bg-au-destructive">{t("common.delete")}</button>
          <button onClick={() => setOpen(false)} className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium border border-au-border text-au-foreground hover:bg-au-accent">{t("common.cancel")}</button>
        </div>
      </AlertDialog>
    </>
  );
}

export default function AlertDialogPage() {
  const { t } = useI18n();
  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-au-foreground mb-2">{t("alertDialog.title")}</h1>
      <p className="text-au-muted-foreground mb-8">
        {t("alertDialog.description")}
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">{t("common.basicExample")}</h2>
        <DemoBlock
          preview={<AlertDialogDemo />}
          code={`<div x-data="{ open: false }">
  <!-- Trigger -->
  <button @click="open = true"
    class="inline-flex items-center justify-center rounded-lg bg-black px-4 py-2 text-sm font-medium text-white hover:opacity-90">
    Show Dialog
  </button>

  <!-- Overlay -->
  <div x-show="open" @click="open = false"
    class="fixed inset-0 z-40 bg-black/50"></div>

  <!-- Content -->
  <div x-show="open"
    class="fixed left-[50%] top-[50%] z-50 translate-x-[-50%] translate-y-[-50%] w-full max-w-md rounded-lg border border-gray-200 bg-white p-6 shadow-lg">
    <div class="flex flex-col gap-1.5 text-center sm:text-left mb-4">
      <h3 class="text-lg font-semibold">Are you absolutely sure?</h3>
      <p class="text-sm text-gray-500">This action cannot be undone.</p>
    </div>
    <div class="flex flex-col-reverse sm:flex-row justify-end gap-2 mt-6">
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
        <h2 className="text-xl font-semibold text-au-foreground mb-4">{t("common.withMediaIcon")}</h2>
        <DemoBlock
          preview={<AlertDialogWithMediaDemo />}
          code={`<div x-data="{ open: false }">
  <button @click="open = true"
    class="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium bg-red-600 text-white hover:bg-red-700">
    Delete Chat
  </button>

  <div x-show="open" @click="open = false" class="fixed inset-0 z-40 bg-black/50"></div>

  <div x-show="open"
    class="fixed left-[50%] top-[50%] z-50 translate-x-[-50%] translate-y-[-50%] w-full max-w-md rounded-lg border border-gray-200 bg-white p-6 shadow-lg">
    <div class="flex flex-col gap-1.5 text-center sm:text-left mb-4">
      <svg class="h-8 w-8 text-red-600 mx-auto sm:mx-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z"/>
      </svg>
      <h3 class="text-lg font-semibold">Delete Chat</h3>
      <p class="text-sm text-gray-500">Are you sure you want to delete this conversation?</p>
    </div>
    <div class="flex flex-col-reverse sm:flex-row justify-end gap-2 mt-6">
      <button @click="open = false"
        class="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium bg-red-600 text-white hover:bg-red-700">Delete</button>
      <button @click="open = false"
        class="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium border border-gray-300 text-gray-700 hover:bg-gray-50">Cancel</button>
    </div>
  </div>
</div>`}
        />
      </section>
    </div>
  );
}
