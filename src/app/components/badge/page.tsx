"use client";

import DemoBlock from "@/components/DemoBlock";
import { useI18n } from "@/i18n/I18nProvider";

export default function BadgePage() {
  const { t } = useI18n();
  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-au-foreground mb-2">{t("badge.title")}</h1>
      <p className="text-au-muted-foreground mb-8">
        {t("badge.description")}
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">{t("common.variants")}</h2>
        <DemoBlock
          preview={
            <div className="flex flex-wrap gap-3 items-center justify-center">
              <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-au-secondary text-au-foreground">{t("common.default")}</span>
              <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-au-secondary text-au-muted-foreground">{t("common.secondary")}</span>
              <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-red-100 text-red-700">{t("common.destructive")}</span>
              <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium border border-au-border text-au-foreground">{t("common.outline")}</span>
              <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium text-au-foreground">{t("common.ghost")}</span>
              <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium text-au-foreground underline">{t("common.link")}</span>
            </div>
          }
          code={`<span class="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-gray-100 text-gray-900">Default</span>
<span class="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-gray-100 text-gray-600">Secondary</span>
<span class="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-red-100 text-red-700">Destructive</span>
<span class="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium border border-gray-300 text-gray-900">Outline</span>
<span class="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium text-gray-900">Ghost</span>
<span class="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium text-gray-900 underline">Link</span>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">{t("common.sizes")}</h2>
        <DemoBlock
          preview={
            <div className="flex flex-wrap gap-3 items-center justify-center">
              <span className="inline-flex items-center rounded-full px-1.5 py-0.5 text-xs font-medium bg-au-secondary text-au-foreground">{t("common.sm")}</span>
              <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-au-secondary text-au-foreground">{t("common.default")}</span>
              <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-au-secondary text-au-foreground">{t("common.lg")}</span>
            </div>
          }
          code={`<span class="inline-flex items-center rounded-full px-1.5 py-0.5 text-xs font-medium bg-gray-100 text-gray-900">Small</span>
<span class="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-gray-100 text-gray-900">Default</span>
<span class="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-gray-100 text-gray-900">Large</span>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">{t("common.withStatusDot")}</h2>
        <DemoBlock
          preview={
            <div className="flex flex-wrap gap-3 items-center justify-center">
              <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-au-secondary text-au-foreground"><span className="w-1.5 h-1.5 rounded-full bg-current mr-1" />{t("common.online")}</span>
              <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-au-secondary text-au-muted-foreground"><span className="w-1.5 h-1.5 rounded-full bg-current mr-1" />{t("common.away")}</span>
              <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-red-100 text-red-700"><span className="w-1.5 h-1.5 rounded-full bg-current mr-1" />{t("common.offline")}</span>
            </div>
          }
          code={`<span class="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-gray-100 text-gray-900"><span class="w-1.5 h-1.5 rounded-full bg-current mr-1"></span>Online</span>
<span class="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-gray-100 text-gray-600"><span class="w-1.5 h-1.5 rounded-full bg-current mr-1"></span>Away</span>
<span class="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-red-100 text-red-700"><span class="w-1.5 h-1.5 rounded-full bg-current mr-1"></span>Offline</span>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">{t("common.usageExamples")}</h2>
        <DemoBlock
          preview={
            <div className="flex flex-col gap-4 w-full max-w-sm">
              <div className="flex items-center gap-3">
                <img src="https://i.pravatar.cc/40?img=1" alt="User" className="w-10 h-10 rounded-full" />
                <div className="flex-1">
                  <p className="font-medium">{t("common.johnDoe")}</p>
                  <p className="text-sm text-au-muted-foreground">john@example.com</p>
                </div>
                <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-au-secondary text-au-muted-foreground">{t("common.pro")}</span>
              </div>
              <div className="flex items-center gap-3">
                <img src="https://i.pravatar.cc/40?img=2" alt="User" className="w-10 h-10 rounded-full" />
                <div className="flex-1">
                  <p className="font-medium">{t("common.janeSmith")}</p>
                  <p className="text-sm text-au-muted-foreground">jane@example.com</p>
                </div>
                <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium border border-au-border text-au-foreground">{t("common.free")}</span>
              </div>
            </div>
          }
          code={`<div class="flex items-center gap-3">
  <img src="..." class="w-10 h-10 rounded-full" />
  <div class="flex-1">
    <p class="font-medium">Name</p>
    <p class="text-sm text-gray-500">email</p>
  </div>
  <span class="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-gray-100 text-gray-600">Pro</span>
</div>`}
        />
      </section>
    </div>
  );
}