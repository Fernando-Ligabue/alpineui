"use client";

import { useState } from "react";
import DemoBlock from "@/components/DemoBlock";
import { useI18n } from "@/i18n/I18nProvider";

function InteractiveCheckbox() {
  const { t } = useI18n();
  const [checked, setChecked] = useState(true);

  return (
    <div className="flex items-center gap-3">
      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="checkbox"
          className="peer h-4 w-4 shrink-0 rounded-sm border border-au-border ring-offset-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-au-ring disabled:cursor-not-allowed disabled:opacity-50 checked:bg-au-primary checked:border-au-primary checked:text-au-primary-foreground"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <span>{t("common.acceptTerms")}</span>
      </label>
    </div>
  );
}

function InteractiveSwitch() {
  const { t } = useI18n();
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="flex items-center gap-3">
      <div
        className="group peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-au-ring disabled:cursor-not-allowed disabled:opacity-50 bg-au-secondary data-[checked=true]:bg-au-primary"
        data-checked={enabled ? "true" : undefined}
        onClick={() => setEnabled(!enabled)}
        role="switch"
        aria-checked={enabled}
      >
        <div className="pointer-events-none block h-5 w-5 rounded-full bg-au-background shadow-lg ring-0 transition-transform translate-x-0 group-data-[checked=true]:translate-x-5" />
      </div>
      <span>{enabled ? t("common.enabled") : t("common.disabled")}</span>
    </div>
  );
}

export default function CheckboxPage() {
  const { t } = useI18n();
  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-au-foreground mb-2">{t("checkbox.title")}</h1>
      <p className="text-au-muted-foreground mb-8">
        {t("checkbox.description")}
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">{t("common.interactiveDemo")}</h2>
        <DemoBlock
          preview={<InteractiveCheckbox />}
          code={`<div x-data="{ checked: true }">
  <label class="flex items-center gap-2 cursor-pointer">
    <input type="checkbox"
      class="peer h-4 w-4 shrink-0 rounded-sm border border-gray-300 ring-offset-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:cursor-not-allowed disabled:opacity-50 checked:bg-black checked:border-black checked:text-white"
      x-model="checked"
    />
    <span x-text="checked ? 'Checked' : 'Unchecked'">Accept terms</span>
  </label>
</div>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">{t("common.states")}</h2>
        <DemoBlock
          preview={
            <div className="flex flex-wrap gap-4">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="peer h-4 w-4 shrink-0 rounded-sm border border-au-border ring-offset-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-au-ring disabled:cursor-not-allowed disabled:opacity-50 checked:bg-au-primary checked:border-au-primary checked:text-au-primary-foreground" defaultChecked />
                <span>{t("common.checked")}</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="peer h-4 w-4 shrink-0 rounded-sm border border-au-border ring-offset-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-au-ring disabled:cursor-not-allowed disabled:opacity-50 checked:bg-au-primary checked:border-au-primary checked:text-au-primary-foreground" />
                <span>{t("common.unchecked")}</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="peer h-4 w-4 shrink-0 rounded-sm border border-au-border ring-offset-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-au-ring disabled:cursor-not-allowed disabled:opacity-50 checked:bg-au-primary checked:border-au-primary checked:text-au-primary-foreground" disabled />
                <span>{t("common.disabled")}</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="peer h-4 w-4 shrink-0 rounded-sm border border-au-border ring-offset-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-au-ring disabled:cursor-not-allowed disabled:opacity-50 checked:bg-au-primary checked:border-au-primary checked:text-au-primary-foreground" disabled defaultChecked />
                <span>{t("common.checkedDisabled")}</span>
              </label>
            </div>
          }
          code={`<input type="checkbox" class="peer h-4 w-4 shrink-0 rounded-sm border border-gray-300 ring-offset-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:cursor-not-allowed disabled:opacity-50 checked:bg-black checked:border-black checked:text-white" checked />
<input type="checkbox" class="peer h-4 w-4 shrink-0 rounded-sm border border-gray-300 ring-offset-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:cursor-not-allowed disabled:opacity-50 checked:bg-black checked:border-black checked:text-white" />
<input type="checkbox" class="peer h-4 w-4 shrink-0 rounded-sm border border-gray-300 ring-offset-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:cursor-not-allowed disabled:opacity-50 checked:bg-black checked:border-black checked:text-white" disabled />
<input type="checkbox" class="peer h-4 w-4 shrink-0 rounded-sm border border-gray-300 ring-offset-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:cursor-not-allowed disabled:opacity-50 checked:bg-black checked:border-black checked:text-white" disabled checked />`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Switch (Toggle)</h2>
        <DemoBlock
          preview={<InteractiveSwitch />}
          code={`<div x-data="{ enabled: false }">
  <div
    class="peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:cursor-not-allowed disabled:opacity-50"
    :class="enabled ? 'bg-black' : 'bg-gray-200'"
    @click="enabled = !enabled"
    role="switch"
    :aria-checked="enabled"
  >
    <div class="pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform"
      :class="enabled ? 'translate-x-5' : 'translate-x-0'"
    ></div>
  </div>
  <span x-text="enabled ? 'Enabled' : 'Disabled'"></span>
</div>`}
        />
      </section>
    </div>
  );
}
