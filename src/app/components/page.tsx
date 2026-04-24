import Link from "next/link";
import { ArrowRight, Check, Clock } from "lucide-react";

const components = {
  complete: [
    { name: "Button", description: "Clickable button with variants and sizes", href: "/components/button" },
    { name: "Input", description: "Form input with validation and icons", href: "/components/input" },
    { name: "Card", description: "Versatile container for grouping content", href: "/components/card" },
    { name: "Badge", description: "Small status indicators and labels", href: "/components/badge" },
    { name: "Dialog", description: "Modal dialog for focused interactions", href: "/components/dialog" },
    { name: "Dropdown", description: "Collapsible menu for navigation", href: "/components/dropdown" },
    { name: "Tabs", description: "Tabbed interface for organizing content", href: "/components/tabs" },
    { name: "Accordion", description: "Expandable content sections", href: "/components/accordion" },
    { name: "Toast", description: "Notification messages", href: "/components/toast" },
    { name: "Select", description: "Dropdown select with search", href: "/components/select" },
    { name: "DatePicker", description: "Date selection component", href: "/components/datepicker" },
    { name: "Avatar", description: "User avatar with fallback", href: "/components/avatar" },
    { name: "Tooltip", description: "Contextual tooltip on hover", href: "/components/tooltip" },
    { name: "Popover", description: "Floating content container", href: "/components/popover" },
    { name: "Checkbox", description: "Checkbox and switch components", href: "/components/checkbox" },
    { name: "Progress", description: "Progress indicator", href: "/components/progress" },
    { name: "RadioGroup", description: "Radio button group", href: "/components/radiogroup" },
    { name: "Slider", description: "Range slider input", href: "/components/slider" },
    { name: "Breadcrumb", description: "Navigation breadcrumb", href: "/components/breadcrumb" },
    { name: "Pagination", description: "Page navigation", href: "/components/pagination" },
    { name: "Textarea", description: "Multi-line text input", href: "/components/textarea" },
    { name: "ContextMenu", description: "Right-click context menu", href: "/components/contextmenu" },
    { name: "NavigationMenu", description: "Navigation menu with dropdown", href: "/components/navigationmenu" },
    { name: "Table", description: "Data table with sorting", href: "/components/table" },
  ],
  comingSoon: [
    { name: "Sidebar", description: "Collapsible sidebar" },
  ],
};

export default function ComponentsPage() {
  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-au-foreground mb-2">Components</h1>
      <p className="text-au-muted-foreground mb-8">
        Browse all available AlpineUI components. Click on a component to see examples and usage.
      </p>

      {/* Available Components */}
      <section className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <Check className="w-5 h-5 text-green-600" />
          <h2 className="text-xl font-semibold text-au-foreground">Available</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {components.complete.map((component) => (
            <Link
              key={component.name}
              href={component.href}
              className="p-4 border border-au-border rounded-lg bg-au-background hover:border-au-primary hover:shadow-md transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-au-foreground group-hover:text-au-primary">
                  {component.name}
                </h3>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">
                  Ready
                </span>
              </div>
              <p className="text-sm text-au-muted-foreground mb-3">{component.description}</p>
              <span className="text-sm text-au-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                View component
                <ArrowRight className="w-3 h-3" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Coming Soon */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <Clock className="w-5 h-5 text-amber-600" />
          <h2 className="text-xl font-semibold text-au-foreground">Coming Soon</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {components.comingSoon.map((component) => (
            <div
              key={component.name}
              className="p-4 border border-au-border border-dashed rounded-lg bg-au-background opacity-60"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-au-muted-foreground">
                  {component.name}
                </h3>
                <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded">
                  Soon
                </span>
              </div>
              <p className="text-sm text-au-muted-foreground">{component.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
