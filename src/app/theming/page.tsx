"use client";

import CodeBlock from "@/components/CodeBlock";
import { useI18n } from "@/i18n/I18nProvider";

export default function ThemingPage() {
  const { t } = useI18n();

  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-au-foreground mb-2">{t("theming.title")}</h1>
      <p className="text-au-muted-foreground mb-8">
        {t("theming.description")}
      </p>

      <section className="mb-12">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">{t("theming.howItWorks")}</h2>
        <p className="text-au-foreground mb-4">
          {t("theming.howItWorksDesc")}
        </p>
        <CodeBlock code={`<!-- Original: black button -->
<button class="inline-flex items-center justify-center gap-2 h-10 px-4 py-2 rounded-md bg-black text-white text-sm font-medium hover:opacity-90">
  Button
</button>

<!-- Customized: blue, pill, larger -->
<button class="inline-flex items-center justify-center gap-2 h-12 px-6 py-3 rounded-full bg-blue-600 text-white text-base font-medium hover:bg-blue-700">
  Button
</button>`} />
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">{t("theming.yourOwnClasses")}</h2>
        <p className="text-au-foreground mb-4">
          {t("theming.yourOwnClassesDescBefore")} <code className="text-sm bg-au-secondary px-1 py-0.5 rounded text-au-foreground">@apply</code> {t("theming.yourOwnClassesDescAfter")}
        </p>
        <CodeBlock code={`/* your-styles.css */
.btn-primary {
  @apply inline-flex items-center justify-center gap-2 h-10 px-4 py-2 rounded-md bg-black text-white text-sm font-medium hover:opacity-90;
}

/* Then use in HTML */
<button class="btn-primary">Button</button>`} />
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">{t("theming.referenceColors")}</h2>
        <p className="text-au-foreground mb-4">
          {t("theming.referenceColorsDesc")}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { nameKey: "theming.colorBlackWhite", light: "bg-black", dark: "bg-white", text: "text-white", textDark: "text-black" },
            { nameKey: "theming.colorGray", light: "bg-gray-100", dark: "bg-gray-800", text: "text-gray-900", textDark: "text-gray-100" },
            { nameKey: "theming.colorRed", light: "bg-red-600", dark: "bg-red-500", text: "text-white", textDark: "text-white" },
            { nameKey: "theming.colorBlue", light: "bg-blue-600", dark: "bg-blue-500", text: "text-white", textDark: "text-white" },
          ].map((color) => (
            <div key={color.nameKey} className="p-4 border border-au-border rounded-lg">
              <div className={`h-10 rounded-md mb-2 ${color.light} ${color.text} flex items-center justify-center text-xs`}>
                {t("theming.light")}
              </div>
              <div className={`h-10 rounded-md mb-2 ${color.dark} ${color.textDark} flex items-center justify-center text-xs`}>
                {t("theming.dark")}
              </div>
              <p className="text-xs text-au-muted-foreground text-center">{t(color.nameKey)}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
