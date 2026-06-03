"use client";

import DemoBlock from "@/components/DemoBlock";
import { useI18n } from "@/i18n/I18nProvider";

export default function LabelPage() {
  const { t } = useI18n();
  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-au-foreground mb-2">{t("label.title")}</h1>
      <p className="text-au-muted-foreground mb-8">{t("label.description")}</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">{t("common.interactiveDemo")}</h2>
        <DemoBlock
          preview={
            <div className="space-y-6 w-full max-w-md">
              <div>
                <label className="block text-sm font-medium text-au-foreground mb-1.5">{t("common.email")}</label>
                <input type="email" className="flex h-10 w-full rounded-md border border-au-border bg-au-background px-3 py-2 text-sm placeholder:text-au-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-au-ring disabled:cursor-not-allowed disabled:opacity-50" placeholder="you@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-au-foreground mb-1.5">
                  {t("label.password")} <span className="text-red-500">*</span>
                </label>
                <input type="password" className="flex h-10 w-full rounded-md border border-au-border bg-au-background px-3 py-2 text-sm placeholder:text-au-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-au-ring disabled:cursor-not-allowed disabled:opacity-50" />
              </div>
            </div>
          }
          code={`<div>
  <label class="block text-sm font-medium text-gray-900 mb-1.5">Email</label>
  <input type="email" class="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black" />
</div>

<div>
  <label class="block text-sm font-medium text-gray-900 mb-1.5">
    Password <span class="text-red-500">*</span>
  </label>
  <input type="password" class="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm" />
</div>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">{t("common.withDescription")}</h2>
        <DemoBlock
          preview={
            <div className="w-full max-w-md space-y-6">
              <div>
                <label className="block text-sm font-medium text-au-foreground mb-1">{t("label.fullName")}</label>
                <p className="text-xs text-au-muted-foreground mb-2">{t("label.bioDescription")}</p>
                <input type="text" className="flex h-10 w-full rounded-md border border-au-border bg-au-background px-3 py-2 text-sm placeholder:text-au-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-au-ring" />
              </div>
              <div>
                <label className="block text-sm font-medium text-au-foreground mb-1">{t("label.bio")}</label>
                <p className="text-xs text-au-muted-foreground mb-2">{t("label.bioHelp")}</p>
                <textarea className="flex min-h-[80px] w-full rounded-md border border-au-border bg-au-background px-3 py-2 text-sm placeholder:text-au-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-au-ring" />
              </div>
            </div>
          }
          code={`<div>
  <label class="block text-sm font-medium text-gray-900 mb-1">Full Name</label>
  <p class="text-xs text-au-muted-foreground mb-2">This will be displayed on your profile.</p>
  <input type="text" class="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm" />
</div>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">{t("common.withCheckbox")}</h2>
        <DemoBlock
          preview={
            <div className="space-y-3 w-full max-w-md">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="peer sr-only" />
                <div className="h-4 w-4 rounded border border-au-border peer-checked:bg-au-primary peer-checked:border-au-primary flex items-center justify-center after:content-[''] after:block after:w-1.5 after:h-1.5 after:rotate-45 after:border-r-2 after:border-b-2 after:border-au-background after:mt-[-1px] after:invisible peer-checked:after:visible shrink-0" />
                <span className="text-sm font-medium text-au-foreground">{t("common.acceptTerms")}</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="peer sr-only" />
                <div className="h-4 w-4 rounded border border-au-border peer-checked:bg-au-primary peer-checked:border-au-primary flex items-center justify-center after:content-[''] after:block after:w-1.5 after:h-1.5 after:rotate-45 after:border-r-2 after:border-b-2 after:border-au-background after:mt-[-1px] after:invisible peer-checked:after:visible shrink-0" />
                <span className="text-sm font-medium text-au-foreground">{t("label.subscribeNewsletter")}</span>
              </label>
            </div>
          }
          code={`<label class="flex items-center gap-2 cursor-pointer">
  <input type="checkbox" class="peer sr-only" />
  <div class="h-4 w-4 rounded border border-gray-300 peer-checked:bg-black peer-checked:border-black flex items-center justify-center after:content-[''] after:block after:w-1.5 after:h-1.5 after:rotate-45 after:border-r-2 after:border-b-2 after:border-white after:mt-[-1px] after:invisible peer-checked:after:visible shrink-0"></div>
  <span class="text-sm font-medium text-gray-900">Accept terms</span>
</label>`}
        />
      </section>
    </div>
  );
}
