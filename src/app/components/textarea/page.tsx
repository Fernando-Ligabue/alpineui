"use client";

import { useState } from "react";
import DemoBlock from "@/components/DemoBlock";
import { useI18n } from "@/i18n/I18nProvider";

function InteractiveTextarea() {
  const { t } = useI18n();
  const [value, setValue] = useState("");

  return (
    <textarea
      className="flex min-h-[80px] w-full rounded-md border border-au-border bg-au-background px-3 py-2 text-sm placeholder:text-au-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-au-ring disabled:cursor-not-allowed disabled:opacity-50"
placeholder={t("textarea.typeYourMessage")}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

export default function TextareaPage() {
  const { t } = useI18n();
  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-au-foreground mb-2">{t("textarea.title")}</h1>
      <p className="text-au-muted-foreground mb-8">
        {t("textarea.description")}
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">{t("common.interactiveDemo")}</h2>
        <DemoBlock
          preview={<InteractiveTextarea />}
          code={`<div x-data="{ message: '' }">
  <textarea x-model="message"
    class="flex min-h-[80px] w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
    placeholder="Type your message here..."></textarea>
  <p class="text-xs text-au-muted-foreground mt-1" x-text="message ? message.length + ' characters' : ''"></p>
</div>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">{t("common.states")}</h2>
        <DemoBlock
          preview={
            <div className="space-y-4 w-full max-w-md">
              <textarea className="flex min-h-[80px] w-full rounded-md border border-au-border bg-au-background px-3 py-2 text-sm placeholder:text-au-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-au-ring disabled:cursor-not-allowed disabled:opacity-50" placeholder={t("common.default")} />
              <textarea className="flex min-h-[80px] w-full rounded-md border border-au-border bg-au-background px-3 py-2 text-sm placeholder:text-au-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-au-ring disabled:cursor-not-allowed disabled:opacity-50" defaultValue="With default content" />
              <textarea className="flex min-h-[80px] w-full rounded-md border border-red-500 bg-au-background px-3 py-2 text-sm placeholder:text-au-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500 disabled:cursor-not-allowed disabled:opacity-50" placeholder={t("common.error")} />
              <textarea className="flex min-h-[80px] w-full rounded-md border border-au-border bg-au-secondary px-3 py-2 text-sm placeholder:text-au-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-au-ring disabled:cursor-not-allowed disabled:opacity-50" placeholder={t("common.disabled")} disabled />
            </div>
          }
          code={`<textarea class="flex min-h-[80px] w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:cursor-not-allowed disabled:opacity-50" placeholder="Default" />
<textarea class="flex min-h-[80px] w-full rounded-md border border-red-500 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Error" />
<textarea class="flex min-h-[80px] w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-2 text-sm placeholder:text-gray-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:cursor-not-allowed disabled:opacity-50" disabled />`}
        />
      </section>
    </div>
  );
}
