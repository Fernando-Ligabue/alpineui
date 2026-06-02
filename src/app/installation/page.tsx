"use client";

import CodeBlock from "@/components/CodeBlock";
import { useI18n } from "@/i18n/I18nProvider";

export default function InstallationPage() {
  const { t } = useI18n();

  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-au-foreground mb-2">{t("installation.title")}</h1>
      <p className="text-au-muted-foreground mb-8">
        {t("installation.description")}
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">{t("installation.prerequisites")}</h2>
        <p className="text-au-foreground mb-4">
          {t("installation.prerequisitesDesc")}
        </p>
        <ul className="list-disc list-inside space-y-2 text-au-muted-foreground">
          <li>{t("installation.prereq1")}</li>
          <li>{t("installation.prereq2")}</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">{t("installation.usage")}</h2>
        <p className="text-au-foreground mb-4">
          {t("installation.usageDesc")}
        </p>
        <ol className="list-decimal list-inside space-y-2 text-au-muted-foreground">
          <li>{t("installation.step1")}</li>
          <li>{t("installation.step2")}</li>
          <li>{t("installation.step3")}</li>
          <li>{t("installation.step4")}</li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">{t("installation.example")}</h2>
        <p className="text-au-foreground mb-4">
          {t("installation.exampleDesc")}
        </p>
        <CodeBlock code={`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>My AlpineUI Project</title>
  <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
  <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
</head>
<body class="p-8">
  <div x-data="{ count: 0 }" class="text-center">
    <p class="text-lg mb-4">Count: <span x-text="count">0</span></p>
    <button @click="count++"
      class="inline-flex items-center justify-center gap-2 h-10 px-4 py-2 rounded-md bg-black text-white text-sm font-medium hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
      Increment
    </button>
  </div>
</body>
</html>`} />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">{t("installation.buildTool")}</h2>
        <p className="text-au-foreground mb-4">
          {t("installation.buildToolDesc")}
        </p>
      </section>
    </div>
  );
}
