"use client";

import DemoBlock from "@/components/DemoBlock";
import { useI18n } from "@/i18n/I18nProvider";

export default function KbdPage() {
  const { t } = useI18n();
  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-au-foreground mb-2">{t("kbd.title")}</h1>
      <p className="text-au-muted-foreground mb-8">{t("kbd.description")}</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">{t("common.interactiveDemo")}</h2>
        <DemoBlock
          preview={
            <div className="flex flex-wrap items-center gap-2">
              <kbd className="px-2 py-1 text-xs font-medium text-au-foreground bg-au-secondary border border-au-border rounded-md shadow-[0_2px_0_0_#d1d5db]">Ctrl</kbd>
              <span className="text-sm text-au-muted-foreground">+</span>
              <kbd className="px-2 py-1 text-xs font-medium text-au-foreground bg-au-secondary border border-au-border rounded-md shadow-[0_2px_0_0_#d1d5db]">C</kbd>
            </div>
          }
          code={`<div class="flex items-center gap-2">
  <kbd class="px-2 py-1 text-xs font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md shadow-[0_2px_0_0_#d1d5db]">Ctrl</kbd>
  <span class="text-sm text-gray-400">+</span>
  <kbd class="px-2 py-1 text-xs font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md shadow-[0_2px_0_0_#d1d5db]">C</kbd>
</div>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">{t("common.usageExamples")}</h2>
        <DemoBlock
          preview={
            <div className="space-y-4 w-full max-w-md">
              <div className="flex items-center justify-between">
                <span className="text-sm text-au-foreground">{t("common.copy")}</span>
                <div className="flex items-center gap-1.5">
                  <kbd className="px-2 py-1 text-xs font-medium text-au-foreground bg-au-secondary border border-au-border rounded-md shadow-[0_2px_0_0_#d1d5db]">Ctrl</kbd>
                  <span className="text-xs text-au-muted-foreground">+</span>
                  <kbd className="px-2 py-1 text-xs font-medium text-au-foreground bg-au-secondary border border-au-border rounded-md shadow-[0_2px_0_0_#d1d5db]">C</kbd>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-au-foreground">{t("common.save")}</span>
                <div className="flex items-center gap-1.5">
                  <kbd className="px-2 py-1 text-xs font-medium text-au-foreground bg-au-secondary border border-au-border rounded-md shadow-[0_2px_0_0_#d1d5db]">Ctrl</kbd>
                  <span className="text-xs text-au-muted-foreground">+</span>
                  <kbd className="px-2 py-1 text-xs font-medium text-au-foreground bg-au-secondary border border-au-border rounded-md shadow-[0_2px_0_0_#d1d5db]">S</kbd>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-au-foreground">{t("kbd.selectAll")}</span>
                <div className="flex items-center gap-1.5">
                  <kbd className="px-2 py-1 text-xs font-medium text-au-foreground bg-au-secondary border border-au-border rounded-md shadow-[0_2px_0_0_#d1d5db]">Ctrl</kbd>
                  <span className="text-xs text-au-muted-foreground">+</span>
                  <kbd className="px-2 py-1 text-xs font-medium text-au-foreground bg-au-secondary border border-au-border rounded-md shadow-[0_2px_0_0_#d1d5db]">A</kbd>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-au-foreground">{t("kbd.find")}</span>
                <div className="flex items-center gap-1.5">
                  <kbd className="px-2 py-1 text-xs font-medium text-au-foreground bg-au-secondary border border-au-border rounded-md shadow-[0_2px_0_0_#d1d5db]">Ctrl</kbd>
                  <span className="text-xs text-au-muted-foreground">+</span>
                  <kbd className="px-2 py-1 text-xs font-medium text-au-foreground bg-au-secondary border border-au-border rounded-md shadow-[0_2px_0_0_#d1d5db]">F</kbd>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-au-foreground">{t("common.delete")}</span>
                <kbd className="px-2 py-1 text-xs font-medium text-au-foreground bg-au-secondary border border-au-border rounded-md shadow-[0_2px_0_0_#d1d5db]">Del</kbd>
              </div>
            </div>
          }
          code={`<div class="flex items-center justify-between">
  <span class="text-sm text-gray-700">Copy</span>
  <div class="flex items-center gap-1.5">
    <kbd class="px-2 py-1 text-xs font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md shadow-[0_2px_0_0_#d1d5db]">Ctrl</kbd>
    <span class="text-xs text-gray-400">+</span>
    <kbd class="px-2 py-1 text-xs font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md shadow-[0_2px_0_0_#d1d5db]">C</kbd>
  </div>
</div>

<div class="flex items-center justify-between">
  <span class="text-sm text-gray-700">Delete</span>
  <kbd class="px-2 py-1 text-xs font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md shadow-[0_2px_0_0_#d1d5db]">Del</kbd>
</div>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">{t("common.sizes")}</h2>
        <DemoBlock
          preview={
            <div className="flex items-center gap-3">
              <kbd className="px-1.5 py-0.5 text-[10px] font-medium text-au-foreground bg-au-secondary border border-au-border rounded shadow-[0_1.5px_0_0_#d1d5db]">⌘K</kbd>
              <kbd className="px-2 py-1 text-xs font-medium text-au-foreground bg-au-secondary border border-au-border rounded-md shadow-[0_2px_0_0_#d1d5db]">⌘K</kbd>
              <kbd className="px-3 py-1.5 text-sm font-medium text-au-foreground bg-au-secondary border border-au-border rounded-md shadow-[0_3px_0_0_#d1d5db]">⌘K</kbd>
            </div>
          }
          code={`<!-- Small -->
<kbd class="px-1.5 py-0.5 text-[10px] font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded shadow-[0_1.5px_0_0_#d1d5db]">⌘K</kbd>

<!-- Medium -->
<kbd class="px-2 py-1 text-xs font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md shadow-[0_2px_0_0_#d1d5db]">⌘K</kbd>

<!-- Large -->
<kbd class="px-3 py-1.5 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md shadow-[0_3px_0_0_#d1d5db]">⌘K</kbd>`}
        />
      </section>
    </div>
  );
}
