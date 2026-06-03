"use client";

import DemoBlock from "@/components/DemoBlock";
import { useI18n } from "@/i18n/I18nProvider";

export default function SkeletonPage() {
  const { t } = useI18n();
  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-au-foreground mb-2">{t("skeleton.title")}</h1>
      <p className="text-au-muted-foreground mb-8">{t("skeleton.description")}</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">{t("common.interactiveDemo")}</h2>
        <DemoBlock
          preview={
            <div className="w-full max-w-md space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-au-secondary animate-pulse" />
                <div className="space-y-2 flex-1">
                  <div className="h-4 bg-au-secondary rounded animate-pulse w-3/4" />
                  <div className="h-3 bg-au-secondary rounded animate-pulse w-1/2" />
                </div>
              </div>
              <div className="h-24 bg-au-secondary rounded-lg animate-pulse w-full" />
              <div className="h-10 bg-au-secondary rounded-lg animate-pulse w-1/3" />
            </div>
          }
          code={`<div class="space-y-4">
  <!-- Avatar + text skeleton -->
  <div class="flex items-center gap-4">
    <div class="w-12 h-12 rounded-full bg-gray-200 animate-pulse"></div>
    <div class="space-y-2 flex-1">
      <div class="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
      <div class="h-3 bg-gray-200 rounded animate-pulse w-1/2"></div>
    </div>
  </div>

  <!-- Card skeleton -->
  <div class="h-24 bg-gray-200 rounded-lg animate-pulse w-full"></div>

  <!-- Button skeleton -->
  <div class="h-10 bg-gray-200 rounded-lg animate-pulse w-1/3"></div>
</div>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">{t("common.cardSkeleton")}</h2>
        <DemoBlock
          preview={
            <div className="w-full max-w-sm border border-au-border rounded-lg p-6 space-y-4">
              <div className="h-40 bg-au-secondary rounded-lg animate-pulse" />
              <div className="h-4 bg-au-secondary rounded animate-pulse w-3/4" />
              <div className="h-3 bg-au-secondary rounded animate-pulse w-full" />
              <div className="h-3 bg-au-secondary rounded animate-pulse w-2/3" />
              <div className="flex gap-2">
                <div className="h-8 bg-au-secondary rounded animate-pulse w-20" />
                <div className="h-8 bg-au-secondary rounded animate-pulse w-20" />
              </div>
            </div>
          }
          code={`<div class="border border-gray-200 rounded-lg p-6 space-y-4">
  <!-- Image placeholder -->
  <div class="h-40 bg-gray-200 rounded-lg animate-pulse"></div>

  <!-- Title -->
  <div class="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>

  <!-- Description lines -->
  <div class="h-3 bg-gray-200 rounded animate-pulse w-full"></div>
  <div class="h-3 bg-gray-200 rounded animate-pulse w-2/3"></div>

  <!-- Buttons -->
  <div class="flex gap-2">
    <div class="h-8 bg-gray-200 rounded animate-pulse w-20"></div>
    <div class="h-8 bg-gray-200 rounded animate-pulse w-20"></div>
  </div>
</div>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">{t("common.listSkeleton")}</h2>
        <DemoBlock
          preview={
            <div className="w-full max-w-md space-y-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-au-secondary animate-pulse" />
                  <div className="space-y-1.5 flex-1">
                    <div className="h-3 bg-au-secondary rounded animate-pulse w-1/2" />
                    <div className="h-2.5 bg-au-secondary rounded animate-pulse w-1/3" />
                  </div>
                </div>
              ))}
            </div>
          }
          code={`<div class="space-y-3">
  <div class="flex items-center gap-3">
    <div class="w-10 h-10 rounded-full bg-gray-200 animate-pulse"></div>
    <div class="space-y-1.5 flex-1">
      <div class="h-3 bg-gray-200 rounded animate-pulse w-1/2"></div>
      <div class="h-2.5 bg-gray-200 rounded animate-pulse w-1/3"></div>
    </div>
  </div>
  <!-- Repeat for more items -->
</div>`}
        />
      </section>
    </div>
  );
}
