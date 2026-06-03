"use client";

import DemoBlock from "@/components/DemoBlock";
import { useI18n } from "@/i18n/I18nProvider";

export default function SeparatorPage() {
  const { t } = useI18n();
  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-au-foreground mb-2">{t("separator.title")}</h1>
      <p className="text-au-muted-foreground mb-8">{t("separator.description")}</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">{t("common.horizontal")}</h2>
        <DemoBlock
          preview={
            <div className="w-full max-w-md space-y-4">
              <div className="text-sm text-au-foreground">{t("common.contentAbove")}</div>
              <hr className="border-t border-au-border" />
              <div className="text-sm text-au-foreground">{t("common.contentBelow")}</div>
            </div>
          }
          code={`<div class="space-y-4">
  <div class="text-sm text-gray-700">Content above</div>
  <hr class="border-t border-gray-200" />
  <div class="text-sm text-gray-700">Content below</div>
</div>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">{t("common.withLabel")}</h2>
        <DemoBlock
          preview={
            <div className="w-full max-w-md">
              <div className="flex items-center gap-3">
                <hr className="flex-1 border-t border-au-border" />
                <span className="text-xs text-au-muted-foreground shrink-0">{t("common.orContinueWith")}</span>
                <hr className="flex-1 border-t border-au-border" />
              </div>
            </div>
          }
          code={`<div class="flex items-center gap-3">
  <hr class="flex-1 border-t border-gray-200" />
  <span class="text-xs text-au-muted-foreground shrink-0">Or continue with</span>
  <hr class="flex-1 border-t border-gray-200" />
</div>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">{t("common.vertical")}</h2>
        <DemoBlock
          preview={
            <div className="flex items-center gap-4">
              <span className="text-sm text-au-foreground">{t("common.left")}</span>
              <div className="w-px h-6 bg-au-border" />
              <span className="text-sm text-au-foreground">{t("common.center")}</span>
              <div className="w-px h-6 bg-au-border" />
              <span className="text-sm text-au-foreground">{t("common.right")}</span>
            </div>
          }
          code={`<div class="flex items-center gap-4">
  <span class="text-sm text-gray-700">Left</span>
  <div class="w-px h-6 bg-gray-200"></div>
  <span class="text-sm text-gray-700">Center</span>
  <div class="w-px h-6 bg-gray-200"></div>
  <span class="text-sm text-gray-700">Right</span>
</div>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">{t("common.variants")}</h2>
        <DemoBlock
          preview={
            <div className="space-y-6 w-full max-w-md">
              <div>
                <p className="text-xs text-au-muted-foreground mb-2">{t("common.light")}</p>
                <hr className="border-t border-au-border" />
              </div>
              <div>
                <p className="text-xs text-au-muted-foreground mb-2">{t("common.mediumWeight")}</p>
                <hr className="border-t border-au-border" />
              </div>
              <div>
                <p className="text-xs text-au-muted-foreground mb-2">{t("common.bold")}</p>
                <hr className="border-t-2 border-au-border" />
              </div>
              <div>
                <p className="text-xs text-au-muted-foreground mb-2">{t("common.dashed")}</p>
                <hr className="border-t border-dashed border-au-border" />
              </div>
              <div>
                <p className="text-xs text-au-muted-foreground mb-2">{t("common.dotted")}</p>
                <hr className="border-t border-dotted border-au-border" />
              </div>
            </div>
          }
          code={`<!-- Light -->
<hr class="border-t border-gray-200" />

<!-- Medium -->
<hr class="border-t border-gray-300" />

<!-- Bold -->
<hr class="border-t-2 border-gray-300" />

<!-- Dashed -->
<hr class="border-t border-dashed border-gray-300" />

<!-- Dotted -->
<hr class="border-t border-dotted border-gray-300" />`}
        />
      </section>
    </div>
  );
}
