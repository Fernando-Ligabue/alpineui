import Link from "next/link";
import { ArrowRight, Check, Clock } from "lucide-react";

const components = {
  complete: [
    { name: "Accordion", description: "Expandable content sections", href: "/components/accordion" },
    { name: "Alert", description: "Notification alert messages", href: "/components/alert" },
    { name: "Alert Dialog", description: "Confirmation dialog with actions", href: "/components/alert-dialog" },
    { name: "Avatar", description: "User avatar with fallback", href: "/components/avatar" },
    { name: "Badge", description: "Small status indicators and labels", href: "/components/badge" },
    { name: "Breadcrumb", description: "Navigation breadcrumb", href: "/components/breadcrumb" },
    { name: "Button", description: "Clickable button with variants and sizes", href: "/components/button" },
    { name: "Card", description: "Versatile container for grouping content", href: "/components/card" },
    { name: "Checkbox", description: "Checkbox and switch components", href: "/components/checkbox" },
    { name: "ContextMenu", description: "Right-click context menu", href: "/components/contextmenu" },
    { name: "DatePicker", description: "Date selection component", href: "/components/datepicker" },
    { name: "Dialog", description: "Modal dialog for focused interactions", href: "/components/dialog" },
    { name: "Drawer", description: "Slide-out panel for navigation", href: "/components/drawer" },
    { name: "Dropdown", description: "Collapsible menu for navigation", href: "/components/dropdown" },
    { name: "Input", description: "Form input with validation and icons", href: "/components/input" },
    { name: "NavigationMenu", description: "Navigation menu with dropdown", href: "/components/navigationmenu" },
    { name: "Pagination", description: "Page navigation", href: "/components/pagination" },
    { name: "Popover", description: "Floating content container", href: "/components/popover" },
    { name: "Progress", description: "Progress indicator", href: "/components/progress" },
    { name: "RadioGroup", description: "Radio button group", href: "/components/radiogroup" },
    { name: "Select", description: "Dropdown select with search", href: "/components/select" },
    { name: "Sidebar", description: "Collapsible navigation sidebar", href: "/components/sidebar" },
    { name: "Slider", description: "Range slider input", href: "/components/slider" },
    { name: "Switch", description: "Toggle switch component", href: "/components/switch" },
    { name: "Table", description: "Data table with sorting", href: "/components/table" },
    { name: "Tabs", description: "Tabbed interface for organizing content", href: "/components/tabs" },
    { name: "Textarea", description: "Multi-line text input", href: "/components/textarea" },
    { name: "Toast", description: "Notification messages", href: "/components/toast" },
    { name: "Tooltip", description: "Contextual tooltip on hover", href: "/components/tooltip" },
    { name: "Collapsible", description: "Expandable content section", href: "/components/collapsible" },
    { name: "Spinner", description: "Loading spinner indicator", href: "/components/spinner" },
    { name: "Skeleton", description: "Loading placeholder animation", href: "/components/skeleton" },
    { name: "Scroll Area", description: "Styled scrollable container", href: "/components/scrollarea" },
    { name: "Resizable", description: "Draggable panel divider", href: "/components/resizable" },
    { name: "Carousel", description: "Content slider with controls", href: "/components/carousel" },
    { name: "Toggle", description: "Pressed state toggle button", href: "/components/toggle" },
    { name: "Aspect Ratio", description: "Fixed ratio media container", href: "/components/aspectratio" },
    { name: "Kbd", description: "Keyboard key display element", href: "/components/kbd" },
    { name: "Separator", description: "Visual divider between sections", href: "/components/separator" },
    { name: "Label", description: "Form input label component", href: "/components/label" },
    { name: "Native Select", description: "Native browser select dropdown", href: "/components/nativeselect" },
    { name: "Button Group", description: "Grouped button toolbar", href: "/components/buttongroup" },
    { name: "Toggle Group", description: "Grouped toggle buttons", href: "/components/toggle-group" },
  ],
  comingSoon: [] as Array<{ name: string; description: string }>,
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

      {components.comingSoon.length > 0 && (
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
      )}
    </div>
  );
}
