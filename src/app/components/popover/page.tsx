"use client";

import DemoBlock from "@/components/DemoBlock";
import { useI18n } from "@/i18n/I18nProvider";

function InteractivePopover() {
  const { t } = useI18n();
  return (
    <div className="flex flex-wrap gap-6 justify-center py-4">
      <div className="inline-flex items-center group relative">
        <button className="rounded-md border border-au-border bg-au-background px-4 py-2 text-sm font-medium hover:bg-au-accent">
          {t("common.hoverMe")}
        </button>
        <div className="absolute z-50 w-72 rounded-md border border-au-border bg-au-background p-4 shadow-md invisible group-hover:visible top-full left-1/2 -translate-x-1/2 mt-2">
          <div className="font-semibold mb-1">{t("common.popoverTitle")}</div>
          <div className="text-sm text-au-muted-foreground">
            {t("common.popoverContent")}
          </div>
        </div>
      </div>

      <div className="inline-flex items-center group relative">
        <button className="rounded-md border border-au-border bg-au-background px-4 py-2 text-sm font-medium hover:bg-au-accent">
          {t("common.moreInfo")}
        </button>
        <div className="absolute z-50 w-72 rounded-md border border-au-border bg-au-background p-4 shadow-md invisible group-hover:visible left-full top-1/2 -translate-y-1/2 ml-2">
          <div className="font-semibold mb-1">{t("common.details")}</div>
          <div className="text-sm text-au-muted-foreground">
            {t("common.additionalDetails")}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PopoverPage() {
  const { t } = useI18n();
  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-au-foreground mb-2">{t("popover.title")}</h1>
      <p className="text-au-muted-foreground mb-8">
        {t("popover.description")}
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">{t("common.interactiveDemo")}</h2>
        <DemoBlock
          preview={
            <div className="py-4">
              <div className="inline-flex items-center group relative">
                  <button className="rounded-md border border-au-border bg-au-background px-4 py-2 text-sm font-medium hover:bg-au-accent">
                    {t("common.hoverMe")}
                  </button>
                  <div className="absolute z-50 w-72 rounded-md border border-au-border bg-au-background p-4 shadow-md invisible group-hover:visible top-full left-1/2 -translate-x-1/2 mt-2">
                    <div className="font-semibold mb-1">{t("common.popoverTitle")}</div>
                    <div className="text-sm text-au-muted-foreground">
                      {t("common.popoverContent")}
                    </div>
                </div>
              </div>
            </div>
          }
          code={`<div class="inline-flex items-center group relative">
  <button class="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium hover:bg-gray-50">Hover me</button>
  <div class="absolute z-50 w-72 rounded-md border border-gray-200 bg-white p-4 shadow-md invisible group-hover:visible top-full left-1/2 -translate-x-1/2 mt-2">
    <div class="font-semibold mb-1">Title</div>
    <div class="text-sm text-gray-500">Description</div>
  </div>
</div>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">{t("common.positions")}</h2>
        <DemoBlock
          preview={<InteractivePopover />}
          code={`<!-- Bottom (default) -->
<div class="inline-flex items-center group relative">
  <button class="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium">Hover me</button>
  <div class="absolute z-50 w-72 rounded-md border border-gray-200 bg-white p-4 shadow-md invisible group-hover:visible top-full left-1/2 -translate-x-1/2 mt-2">...</div>
</div>

<!-- Right -->
<div class="inline-flex items-center group relative">
  <button class="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium">More Info</button>
  <div class="absolute z-50 w-72 rounded-md border border-gray-200 bg-white p-4 shadow-md invisible group-hover:visible left-full top-1/2 -translate-y-1/2 ml-2">...</div>
</div>

<!-- Top -->
<div class="inline-flex items-center group relative">
  <button>Trigger</button>
  <div class="absolute z-50 w-72 ... invisible group-hover:visible bottom-full left-1/2 -translate-x-1/2 mb-2">...</div>
</div>

<!-- Left -->
<div class="inline-flex items-center group relative">
  <button>Trigger</button>
  <div class="absolute z-50 w-72 ... invisible group-hover:visible right-full top-1/2 -translate-y-1/2 mr-2">...</div>
</div>`}
        />
      </section>
    </div>
  );
}
