"use client";

import DemoBlock from "@/components/DemoBlock";
import { useI18n } from "@/i18n/I18nProvider";

const positionClasses: Record<string, string> = {
  top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
  bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
  left: "right-full top-1/2 -translate-y-1/2 mr-2",
  right: "left-full top-1/2 -translate-y-1/2 ml-2",
};

function TooltipWrapper({ children, content, position = "top" }: { children: React.ReactNode; content: string; position?: string }) {
  return (
    <div className="relative inline-flex group">
      <div className="inline-flex items-center">
        {children}
      </div>
      <div className={`absolute z-50 px-3 py-1.5 text-xs font-medium text-au-primary-foreground bg-au-primary rounded-md shadow-sm pointer-events-none whitespace-nowrap invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-150 ${positionClasses[position] || positionClasses.top}`}>
        {content}
      </div>
    </div>
  );
}

function InteractiveTooltip() {
  const { t } = useI18n();
  return (
    <div className="flex flex-wrap gap-6 justify-center py-4">
      <TooltipWrapper content={t("common.top")} position="top">
        <button className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 bg-au-primary text-au-primary-foreground hover:bg-au-primary">{t("common.top")}</button>
      </TooltipWrapper>
      <TooltipWrapper content={t("common.bottom")} position="bottom">
        <button className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 bg-au-primary text-au-primary-foreground hover:bg-au-primary">{t("common.bottom")}</button>
      </TooltipWrapper>
      <TooltipWrapper content={t("common.left")} position="left">
        <button className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 bg-au-primary text-au-primary-foreground hover:bg-au-primary">{t("common.left")}</button>
      </TooltipWrapper>
      <TooltipWrapper content={t("common.right")} position="right">
        <button className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 bg-au-primary text-au-primary-foreground hover:bg-au-primary">{t("common.right")}</button>
      </TooltipWrapper>
    </div>
  );
}

export default function TooltipPage() {
  const { t } = useI18n();
  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-au-foreground mb-2">{t("tooltip.title")}</h1>
      <p className="text-au-muted-foreground mb-8">
        {t("tooltip.description")}
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">{t("common.interactiveDemo")}</h2>
        <DemoBlock
          preview={
            <div className="py-4">
              <TooltipWrapper content={t("common.popoverContent")} position="top">
                <button className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 bg-au-primary text-au-primary-foreground hover:bg-au-primary">{t("common.hoverMe")}</button>
              </TooltipWrapper>
            </div>
          }
          code={`<div class="relative inline-flex group">
  <button class="...">Hover me</button>
  <div class="absolute z-50 px-3 py-1.5 text-xs font-medium text-white bg-gray-900 rounded-md shadow-sm pointer-events-none whitespace-nowrap invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-150 bottom-full left-1/2 -translate-x-1/2 mb-2">
    This is a tooltip!
  </div>
</div>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">{t("common.positions")}</h2>
        <DemoBlock
          preview={<InteractiveTooltip />}
          code={`<!-- Top -->
<div class="relative inline-flex group">
  <div class="absolute z-50 px-3 py-1.5 text-xs font-medium text-white bg-gray-900 rounded-md shadow-sm ... bottom-full left-1/2 -translate-x-1/2 mb-2">
    Tooltip on top
  </div>
</div>

<!-- Bottom -->
<div class="relative inline-flex group">
  <div class="absolute ... top-full left-1/2 -translate-x-1/2 mt-2">
    Tooltip on bottom
  </div>
</div>

<!-- Left -->
<div class="relative inline-flex group">
  <div class="absolute ... right-full top-1/2 -translate-y-1/2 mr-2">
    Tooltip on left
  </div>
</div>

<!-- Right -->
<div class="relative inline-flex group">
  <div class="absolute ... left-full top-1/2 -translate-y-1/2 ml-2">
    Tooltip on right
  </div>
</div>`}
        />
      </section>
    </div>
  );
}
