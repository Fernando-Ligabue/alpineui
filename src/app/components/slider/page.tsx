"use client";

import React, { useState } from "react";
import DemoBlock from "@/components/DemoBlock";
import { useI18n } from "@/i18n/I18nProvider";

function InteractiveSlider() {
  const [value, setValue] = useState(50);
  const sliderRef = React.useRef<HTMLDivElement>(null);

  const startDrag = (e: React.MouseEvent) => {
    e.preventDefault();
    const slider = sliderRef.current;
    if (!slider) return;

    const rect = slider.getBoundingClientRect();
    const updateValue = (clientX: number) => {
      const percent = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
      setValue(Math.round(percent));
    };

    updateValue(e.clientX);

    const handleMove = (moveEvent: MouseEvent) => updateValue(moveEvent.clientX);
    const handleUp = () => {
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseup', handleUp);
    };

    document.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseup', handleUp);
  };

  return (
    <div className="space-y-4 w-full max-w-sm">
      <div
        ref={sliderRef}
        className="relative flex w-full touch-none select-none items-center"
        onMouseDown={startDrag}
      >
        <div className="absolute h-full bg-au-primary" style={{ width: `${value}%` }} />
        <div
          className="block h-5 w-5 rounded-full border-2 border-au-primary bg-au-background ring-offset-au-background transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-au-ring disabled:pointer-events-none disabled:opacity-50"
          style={{ left: `${value}%` }}
        />
      </div>
      <div className="flex justify-between text-sm text-au-muted-foreground">
        <span>0</span>
        <span className="font-medium text-au-foreground">{value}</span>
        <span>100</span>
      </div>
    </div>
  );
}

export default function SliderPage() {
  const { t } = useI18n();
  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-au-foreground mb-2">{t("slider.title")}</h1>
      <p className="text-au-muted-foreground mb-8">
        {t("slider.description")}
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">{t("common.interactiveDemo")}</h2>
        <DemoBlock preview={<InteractiveSlider />} code={`<div class="relative flex w-full touch-none select-none items-center">
  <div class="absolute h-full bg-black" style="width: \${value}%"></div>
  <div
    class="block h-5 w-5 rounded-full border-2 border-black bg-white ring-offset-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
    style="left: \${value}%"
  ></div>
</div>`} />
      </section>
    </div>
  );
}
