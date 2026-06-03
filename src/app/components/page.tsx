"use client";

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

const componentList = [
  { nameKey: "nav.accordion", descKey: "accordion.description", href: "/components/accordion" },
  { nameKey: "nav.alert", descKey: "alert.description", href: "/components/alert" },
  { nameKey: "nav.alertDialog", descKey: "alertDialog.description", href: "/components/alert-dialog" },
  { nameKey: "nav.avatar", descKey: "avatar.description", href: "/components/avatar" },
  { nameKey: "nav.badge", descKey: "badge.description", href: "/components/badge" },
  { nameKey: "nav.breadcrumb", descKey: "breadcrumb.description", href: "/components/breadcrumb" },
  { nameKey: "nav.button", descKey: "button.description", href: "/components/button" },
  { nameKey: "nav.buttonGroup", descKey: "buttonGroup.description", href: "/components/buttongroup" },
  { nameKey: "nav.card", descKey: "card.description", href: "/components/card" },
  { nameKey: "nav.carousel", descKey: "carousel.description", href: "/components/carousel" },
  { nameKey: "nav.checkbox", descKey: "checkbox.description", href: "/components/checkbox" },
  { nameKey: "nav.collapsible", descKey: "collapsible.description", href: "/components/collapsible" },
  { nameKey: "nav.contextMenu", descKey: "contextMenu.description", href: "/components/contextmenu" },
  { nameKey: "nav.datePicker", descKey: "datePicker.description", href: "/components/datepicker" },
  { nameKey: "nav.dialog", descKey: "dialog.description", href: "/components/dialog" },
  { nameKey: "nav.drawer", descKey: "drawer.description", href: "/components/drawer" },
  { nameKey: "nav.dropdown", descKey: "dropdown.description", href: "/components/dropdown" },
  { nameKey: "nav.input", descKey: "input.description", href: "/components/input" },
  { nameKey: "nav.kbd", descKey: "kbd.description", href: "/components/kbd" },
  { nameKey: "nav.label", descKey: "label.description", href: "/components/label" },
  { nameKey: "nav.nativeSelect", descKey: "nativeSelect.description", href: "/components/nativeselect" },
  { nameKey: "nav.navigationMenu", descKey: "navigationMenu.description", href: "/components/navigationmenu" },
  { nameKey: "nav.pagination", descKey: "pagination.description", href: "/components/pagination" },
  { nameKey: "nav.popover", descKey: "popover.description", href: "/components/popover" },
  { nameKey: "nav.progress", descKey: "progress.description", href: "/components/progress" },
  { nameKey: "nav.radioGroup", descKey: "radioGroup.description", href: "/components/radiogroup" },
  { nameKey: "nav.resizable", descKey: "resizable.description", href: "/components/resizable" },
  { nameKey: "nav.scrollArea", descKey: "scrollArea.description", href: "/components/scrollarea" },
  { nameKey: "nav.select", descKey: "select.description", href: "/components/select" },
  { nameKey: "nav.separator", descKey: "separator.description", href: "/components/separator" },
  { nameKey: "nav.sidebar", descKey: "sidebar.description", href: "/components/sidebar" },
  { nameKey: "nav.skeleton", descKey: "skeleton.description", href: "/components/skeleton" },
  { nameKey: "nav.slider", descKey: "slider.description", href: "/components/slider" },
  { nameKey: "nav.spinner", descKey: "spinner.description", href: "/components/spinner" },
  { nameKey: "nav.switch", descKey: "switch.description", href: "/components/switch" },
  { nameKey: "nav.table", descKey: "table.description", href: "/components/table" },
  { nameKey: "nav.tabs", descKey: "tabs.description", href: "/components/tabs" },
  { nameKey: "nav.textarea", descKey: "textarea.description", href: "/components/textarea" },
  { nameKey: "nav.toast", descKey: "toast.description", href: "/components/toast" },
  { nameKey: "nav.toggle", descKey: "toggle.description", href: "/components/toggle" },
  { nameKey: "nav.toggleGroup", descKey: "toggleGroup.description", href: "/components/toggle-group" },
  { nameKey: "nav.tooltip", descKey: "tooltip.description", href: "/components/tooltip" },
  { nameKey: "nav.aspectRatio", descKey: "aspectRatio.description", href: "/components/aspectratio" },
];

export default function ComponentsPage() {
  const { t } = useI18n();

  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-au-foreground mb-2">{t("components.title")}</h1>
      <p className="text-au-muted-foreground mb-8">
        {t("components.description")}
      </p>

      <section className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <Check className="w-5 h-5 text-au-primary" />
          <h2 className="text-xl font-semibold text-au-foreground">{t("components.available")}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {componentList.map((component) => (
            <Link
              key={component.href}
              href={component.href}
              className="p-4 border border-au-border rounded-lg bg-au-background hover:border-au-primary hover:shadow-md transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-au-foreground group-hover:text-au-primary">
                  {t(component.nameKey)}
                </h3>
                <span className="text-xs bg-green-400/30 text-au-primary px-2 py-0.5 rounded">
                  {t("components.ready")}
                </span>
              </div>
              <p className="text-sm text-au-muted-foreground mb-3">{t(component.descKey)}</p>
              <span className="text-sm text-au-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                {t("components.view")}
                <ArrowRight className="w-3 h-3" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
