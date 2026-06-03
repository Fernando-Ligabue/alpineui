"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import DemoBlock from "@/components/DemoBlock";
import { useI18n } from "@/i18n/I18nProvider";

function BreadcrumbItem({ href, children, active = false }: { href?: string; children: React.ReactNode; active?: boolean }) {
  if (href) {
    return (
      <Link href={href} className={`flex items-center gap-1 text-sm ${active ? "text-au-foreground font-medium" : "text-au-muted-foreground hover:text-au-foreground transition-colors"}`}>
        {children}
      </Link>
    );
  }
  return <span className="flex items-center gap-1 text-sm text-au-muted-foreground">{children}</span>;
}

function InteractiveBreadcrumb() {
  const { t } = useI18n();
  return (
    <nav className="flex" aria-label={t("breadcrumb.ariaLabel")}>
      <ol className="flex items-center gap-1 flex-wrap">
        <li>
          <BreadcrumbItem href="/">
            <Home className="w-4 h-4" />
          </BreadcrumbItem>
        </li>
        <li className="text-au-muted-foreground mx-1"><ChevronRight className="w-4 h-4" /></li>
        <li>
          <BreadcrumbItem href="/components">{t("common.components")}</BreadcrumbItem>
        </li>
        <li className="text-au-muted-foreground mx-1"><ChevronRight className="w-4 h-4" /></li>
        <li>
          <BreadcrumbItem>{t("breadcrumb.title")}</BreadcrumbItem>
        </li>
      </ol>
    </nav>
  );
}

export default function BreadcrumbPage() {
  const { t } = useI18n();
  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-au-foreground mb-2">{t("breadcrumb.title")}</h1>
      <p className="text-au-muted-foreground mb-8">
        {t("breadcrumb.description")}
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">{t("common.interactiveDemo")}</h2>
        <DemoBlock
          preview={<InteractiveBreadcrumb />}
          code={`<nav aria-label="Breadcrumb">
  <ol class="flex items-center gap-1 flex-wrap">
    <li><a href="/">Home</a></li>
    <li class="text-gray-400 mx-1">/</li>
    <li><a href="/components">Components</a></li>
    <li class="text-gray-400 mx-1">/</li>
    <li>Breadcrumb</li>
  </ol>
</nav>`}
        />
      </section>
    </div>
  );
}
