"use client";

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

const componentList = [
  { nameKey: "nav.accordion", description: "Expandable content sections", href: "/components/accordion" },
  { nameKey: "nav.alert", description: "Notification alert messages", href: "/components/alert" },
  { nameKey: "nav.alertDialog", description: "Confirmation dialog with actions", href: "/components/alert-dialog" },
  { nameKey: "nav.avatar", description: "User avatar with fallback", href: "/components/avatar" },
  { nameKey: "nav.badge", description: "Small status indicators and labels", href: "/components/badge" },
  { nameKey: "nav.breadcrumb", description: "Navigation breadcrumb", href: "/components/breadcrumb" },
  { nameKey: "nav.button", description: "Clickable button with variants and sizes", href: "/components/button" },
  { nameKey: "nav.buttonGroup", description: "Grouped button toolbar", href: "/components/buttongroup" },
  { nameKey: "nav.card", description: "Versatile container for grouping content", href: "/components/card" },
  { nameKey: "nav.carousel", description: "Content slider with controls", href: "/components/carousel" },
  { nameKey: "nav.checkbox", description: "Checkbox and switch components", href: "/components/checkbox" },
  { nameKey: "nav.collapsible", description: "Expandable content section", href: "/components/collapsible" },
  { nameKey: "nav.contextMenu", description: "Right-click context menu", href: "/components/contextmenu" },
  { nameKey: "nav.datePicker", description: "Date selection component", href: "/components/datepicker" },
  { nameKey: "nav.dialog", description: "Modal dialog for focused interactions", href: "/components/dialog" },
  { nameKey: "nav.drawer", description: "Slide-out panel for navigation", href: "/components/drawer" },
  { nameKey: "nav.dropdown", description: "Collapsible menu for navigation", href: "/components/dropdown" },
  { nameKey: "nav.input", description: "Form input with validation and icons", href: "/components/input" },
  { nameKey: "nav.kbd", description: "Keyboard key display element", href: "/components/kbd" },
  { nameKey: "nav.label", description: "Form input label component", href: "/components/label" },
  { nameKey: "nav.nativeSelect", description: "Native browser select dropdown", href: "/components/nativeselect" },
  { nameKey: "nav.navigationMenu", description: "Navigation menu with dropdown", href: "/components/navigationmenu" },
  { nameKey: "nav.pagination", description: "Page navigation", href: "/components/pagination" },
  { nameKey: "nav.popover", description: "Floating content container", href: "/components/popover" },
  { nameKey: "nav.progress", description: "Progress indicator", href: "/components/progress" },
  { nameKey: "nav.radioGroup", description: "Radio button group", href: "/components/radiogroup" },
  { nameKey: "nav.resizable", description: "Draggable panel divider", href: "/components/resizable" },
  { nameKey: "nav.scrollArea", description: "Styled scrollable container", href: "/components/scrollarea" },
  { nameKey: "nav.select", description: "Dropdown select with search", href: "/components/select" },
  { nameKey: "nav.separator", description: "Visual divider between sections", href: "/components/separator" },
  { nameKey: "nav.sidebar", description: "Collapsible navigation sidebar", href: "/components/sidebar" },
  { nameKey: "nav.skeleton", description: "Loading placeholder animation", href: "/components/skeleton" },
  { nameKey: "nav.slider", description: "Range slider input", href: "/components/slider" },
  { nameKey: "nav.spinner", description: "Loading spinner indicator", href: "/components/spinner" },
  { nameKey: "nav.switch", description: "Toggle switch component", href: "/components/switch" },
  { nameKey: "nav.table", description: "Data table with sorting", href: "/components/table" },
  { nameKey: "nav.tabs", description: "Tabbed interface for organizing content", href: "/components/tabs" },
  { nameKey: "nav.textarea", description: "Multi-line text input", href: "/components/textarea" },
  { nameKey: "nav.toast", description: "Notification messages", href: "/components/toast" },
  { nameKey: "nav.toggle", description: "Pressed state toggle button", href: "/components/toggle" },
  { nameKey: "nav.toggleGroup", description: "Grouped toggle buttons", href: "/components/toggle-group" },
  { nameKey: "nav.tooltip", description: "Contextual tooltip on hover", href: "/components/tooltip" },
  { nameKey: "nav.aspectRatio", description: "Fixed ratio media container", href: "/components/aspectratio" },
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
              <p className="text-sm text-au-muted-foreground mb-3">{component.description}</p>
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
