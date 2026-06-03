"use client";

import DemoBlock from "@/components/DemoBlock";
import { useI18n } from "@/i18n/I18nProvider";

export default function ButtonGroupPage() {
  const { t } = useI18n();
  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-au-foreground mb-2">{t("buttonGroup.title")}</h1>
      <p className="text-au-muted-foreground mb-8">{t("buttonGroup.description")}</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">{t("common.interactiveDemo")}</h2>
        <DemoBlock
          preview={
            <div className="inline-flex rounded-md border border-au-border overflow-hidden">
              <button className="px-4 py-2 text-sm font-medium text-au-foreground bg-au-background hover:bg-au-accent transition-colors border-r border-au-border">{t("buttongroup.left")}</button>
              <button className="px-4 py-2 text-sm font-medium text-au-foreground bg-au-background hover:bg-au-accent transition-colors border-r border-au-border">{t("buttongroup.center")}</button>
              <button className="px-4 py-2 text-sm font-medium text-au-foreground bg-au-background hover:bg-au-accent transition-colors">{t("buttongroup.right")}</button>
            </div>
          }
          code={`<div class="inline-flex rounded-md border border-gray-300 overflow-hidden">
  <button class="px-4 py-2 text-sm font-medium text-gray-900 bg-white hover:bg-gray-100 transition-colors border-r border-gray-300">Left</button>
  <button class="px-4 py-2 text-sm font-medium text-gray-900 bg-white hover:bg-gray-100 transition-colors border-r border-gray-300">Center</button>
  <button class="px-4 py-2 text-sm font-medium text-gray-900 bg-white hover:bg-gray-100 transition-colors">Right</button>
</div>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">{t("buttongroup.withActiveState")}</h2>
        <DemoBlock
          preview={
            <div className="inline-flex rounded-md border border-au-border overflow-hidden">
              <button className="px-4 py-2 text-sm font-medium text-au-primary-foreground bg-au-primary transition-colors border-r border-au-border">{t("common.day")}</button>
              <button className="px-4 py-2 text-sm font-medium text-au-foreground bg-au-background hover:bg-au-accent transition-colors border-r border-au-border">{t("common.week")}</button>
              <button className="px-4 py-2 text-sm font-medium text-au-foreground bg-au-background hover:bg-au-accent transition-colors border-r border-au-border">{t("common.month")}</button>
              <button className="px-4 py-2 text-sm font-medium text-au-foreground bg-au-background hover:bg-au-accent transition-colors">{t("buttongroup.year")}</button>
            </div>
          }
          code={`<div class="inline-flex rounded-md border border-gray-300 overflow-hidden">
  <button class="px-4 py-2 text-sm font-medium text-white bg-gray-900 border-r border-gray-700">Day</button>
  <button class="px-4 py-2 text-sm font-medium text-gray-900 bg-white hover:bg-gray-100 border-r border-gray-300">Week</button>
  <button class="px-4 py-2 text-sm font-medium text-gray-900 bg-white hover:bg-gray-100 border-r border-gray-300">Month</button>
  <button class="px-4 py-2 text-sm font-medium text-gray-900 bg-white hover:bg-gray-100">Year</button>
</div>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">{t("common.vertical")}</h2>
        <DemoBlock
          preview={
            <div className="inline-flex flex-col rounded-md border border-au-border overflow-hidden">
              <button className="px-4 py-2 text-sm font-medium text-au-foreground bg-au-background hover:bg-au-accent transition-colors border-b border-au-border">{t("buttongroup.top")}</button>
              <button className="px-4 py-2 text-sm font-medium text-au-foreground bg-au-background hover:bg-au-accent transition-colors border-b border-au-border">{t("buttongroup.middle")}</button>
              <button className="px-4 py-2 text-sm font-medium text-au-foreground bg-au-background hover:bg-au-accent transition-colors">{t("buttongroup.bottom")}</button>
            </div>
          }
          code={`<div class="inline-flex flex-col rounded-md border border-gray-300 overflow-hidden">
  <button class="px-4 py-2 text-sm font-medium text-gray-900 bg-white hover:bg-gray-100 border-b border-gray-300">Top</button>
  <button class="px-4 py-2 text-sm font-medium text-gray-900 bg-white hover:bg-gray-100 border-b border-gray-300">Middle</button>
  <button class="px-4 py-2 text-sm font-medium text-gray-900 bg-white hover:bg-gray-100">Bottom</button>
</div>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">{t("buttongroup.withIcons")}</h2>
        <DemoBlock
          preview={
            <div className="inline-flex rounded-md border border-au-border overflow-hidden">
              <button className="px-3 py-2 text-sm font-medium text-au-foreground bg-au-background hover:bg-au-accent transition-colors border-r border-au-border flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
                {t("buttongroup.menu")}
              </button>
              <button className="px-3 py-2 text-sm font-medium text-au-foreground bg-au-background hover:bg-au-accent transition-colors border-r border-au-border flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                {t("common.save")}
              </button>
              <button className="px-3 py-2 text-sm font-medium text-au-foreground bg-au-background hover:bg-au-accent transition-colors flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                {t("common.delete")}
              </button>
            </div>
          }
          code={`<div class="inline-flex rounded-md border border-gray-300 overflow-hidden">
  <button class="px-3 py-2 text-sm font-medium text-gray-900 bg-white hover:bg-gray-100 border-r border-gray-300 flex items-center gap-1.5">
    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
    Menu
  </button>
  <button class="px-3 py-2 text-sm font-medium text-gray-900 bg-white hover:bg-gray-100 border-r border-gray-300 flex items-center gap-1.5">
    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
    Save
  </button>
  <button class="px-3 py-2 text-sm font-medium text-gray-900 bg-white hover:bg-gray-100 flex items-center gap-1.5">
    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
    Delete
  </button>
</div>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">{t("common.sizes")}</h2>
        <DemoBlock
          preview={
            <div className="flex flex-wrap items-center gap-6">
              <div className="inline-flex rounded-md border border-au-border overflow-hidden">
                <button className="px-2 py-1 text-xs font-medium text-au-foreground bg-au-background hover:bg-au-accent border-r border-au-border">{t("common.sm")}</button>
                <button className="px-2 py-1 text-xs font-medium text-au-foreground bg-au-background hover:bg-au-accent">{t("buttongroup.group")}</button>
              </div>
              <div className="inline-flex rounded-md border border-au-border overflow-hidden">
                <button className="px-4 py-2 text-sm font-medium text-au-foreground bg-au-background hover:bg-au-accent border-r border-au-border">{t("common.md")}</button>
                <button className="px-4 py-2 text-sm font-medium text-au-foreground bg-au-background hover:bg-au-accent">{t("buttongroup.group")}</button>
              </div>
              <div className="inline-flex rounded-md border border-au-border overflow-hidden">
                <button className="px-5 py-2.5 text-base font-medium text-au-foreground bg-au-background hover:bg-au-accent border-r border-au-border">{t("common.lg")}</button>
                <button className="px-5 py-2.5 text-base font-medium text-au-foreground bg-au-background hover:bg-au-accent">{t("buttongroup.group")}</button>
              </div>
            </div>
          }
          code={`<!-- Small -->
<div class="inline-flex rounded-md border border-gray-300 overflow-hidden">
  <button class="px-2 py-1 text-xs font-medium bg-white hover:bg-gray-100 border-r border-gray-300">Small</button>
  <button class="px-2 py-1 text-xs font-medium bg-white hover:bg-gray-100">Group</button>
</div>

<!-- Medium -->
<div class="inline-flex rounded-md border border-gray-300 overflow-hidden">
  <button class="px-4 py-2 text-sm font-medium bg-white hover:bg-gray-100 border-r border-gray-300">Medium</button>
  <button class="px-4 py-2 text-sm font-medium bg-white hover:bg-gray-100">Group</button>
</div>

<!-- Large -->
<div class="inline-flex rounded-md border border-gray-300 overflow-hidden">
  <button class="px-5 py-2.5 text-base font-medium bg-white hover:bg-gray-100 border-r border-gray-300">Large</button>
  <button class="px-5 py-2.5 text-base font-medium bg-white hover:bg-gray-100">Group</button>
</div>`}
        />
      </section>
    </div>
  );
}
