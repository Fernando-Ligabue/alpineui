"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  Component,
  Code2,
  Github,
  Palette,
  Rocket,
  X,
  PanelLeftDashed,
  PanelTopDashed,
  Sheet,
  PanelRight,
  ReceiptText,
  LayoutList,
  Cuboid,
  SquarePlus,
  ChevronsLeftRightEllipsis,
  Award,
  IdCard,
  MessageSquareWarning,
  ChevronDown,
  StretchVertical,
  ListCollapse,
  CloudAlert,
  Hand,
  CalendarFold,
  User,
  Info,
  SquareCheck,
  PanelBottomClose,
  LoaderCircle,
  CircleDot,
  Settings2,
  TextCursorInput,
  PilcrowRight,
  ToggleLeft,
  AlertCircle,
  AlertTriangle,
  Minus,
  Blocks,
  ScrollText,
  GripHorizontal,
  Images,
  Keyboard,
  Maximize2,
  PanelTopOpen,
  Tag,
  List,
  Columns3,
  ToggleRight
} from "lucide-react";

const navigation = {
  gettingStarted: [
    { name: "Introduction", href: "/", icon: Rocket },
    { name: "Installation", href: "/installation", icon: Code2 },
    { name: "Theming", href: "/theming", icon: Palette },
  ],
  components: [
    { name: "All Components", href: "/components", icon: LayoutList },
    { name: "Accordion", href: "/components/accordion", icon: ListCollapse },
    { name: "Alert", href: "/components/alert", icon: AlertCircle },
    { name: "Alert Dialog", href: "/components/alert-dialog", icon: AlertTriangle },
    { name: "Avatar", href: "/components/avatar", icon: User },
    { name: "Badge", href: "/components/badge", icon: Award },
    { name: "Breadcrumb", href: "/components/breadcrumb", icon: PilcrowRight },
    { name: "Button", href: "/components/button", icon: SquarePlus },
    { name: "Card", href: "/components/card", icon: IdCard },
    { name: "Checkbox", href: "/components/checkbox", icon: SquareCheck },
    { name: "ContextMenu", href: "/components/contextmenu", icon: PanelTopDashed },
    { name: "DatePicker", href: "/components/datepicker", icon: CalendarFold },
    { name: "Dialog", href: "/components/dialog", icon: MessageSquareWarning },
    { name: "Drawer", href: "/components/drawer", icon: PanelRight },
    { name: "Dropdown", href: "/components/dropdown", icon: ChevronDown },
    { name: "Input", href: "/components/input", icon: TextCursorInput },
    { name: "NavigationMenu", href: "/components/navigationmenu", icon: PanelTopOpen },
    { name: "Pagination", href: "/components/pagination", icon: ChevronsLeftRightEllipsis },
    { name: "Popover", href: "/components/popover", icon: PanelBottomClose },
    { name: "Progress", href: "/components/progress", icon: LoaderCircle },
    { name: "RadioGroup", href: "/components/radiogroup", icon: CircleDot },
    { name: "Select", href: "/components/select", icon: Hand },
    { name: "Sidebar", href: "/components/sidebar", icon: PanelLeftDashed },
    { name: "Slider", href: "/components/slider", icon: Settings2 },
    { name: "Switch", href: "/components/switch", icon: ToggleLeft },
    { name: "Table", href: "/components/table", icon: Sheet },
    { name: "Tabs", href: "/components/tabs", icon: StretchVertical },
    { name: "Textarea", href: "/components/textarea", icon: ReceiptText },
    { name: "Toast", href: "/components/toast", icon: CloudAlert },
    { name: "Tooltip", href: "/components/tooltip", icon: Info },
    { name: "Collapsible", href: "/components/collapsible", icon: ChevronDown },
    { name: "Spinner", href: "/components/spinner", icon: LoaderCircle },
    { name: "Skeleton", href: "/components/skeleton", icon: Blocks },
    { name: "Scroll Area", href: "/components/scrollarea", icon: ScrollText },
    { name: "Resizable", href: "/components/resizable", icon: GripHorizontal },
    { name: "Carousel", href: "/components/carousel", icon: Images },
    { name: "Toggle", href: "/components/toggle", icon: ToggleLeft },
    { name: "Aspect Ratio", href: "/components/aspectratio", icon: Maximize2 },
    { name: "Kbd", href: "/components/kbd", icon: Keyboard },
    { name: "Separator", href: "/components/separator", icon: Minus },
    { name: "Label", href: "/components/label", icon: Tag },
    { name: "Native Select", href: "/components/nativeselect", icon: List },
    { name: "Button Group", href: "/components/buttongroup", icon: Columns3 },
    { name: "Toggle Group", href: "/components/toggle-group", icon: ToggleRight },
  ],
  commingSoon: [] as Array<{ name: string; icon: React.ElementType; href: string }>,
};

interface SidebarProps {
  onClose?: () => void;
}

export default function Sidebar({ onClose }: SidebarProps) {
  const pathname = usePathname();

  const handleLinkClick = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <div className="sidebar-content">
      {/* Mobile Header */}
      {onClose && (
        <div className="flex items-center justify-between p-4 border-b border-au-border">
          <Link href="/" className="flex items-center gap-2" onClick={handleLinkClick}>
            <div className="w-8 h-8 bg-au-primary rounded-lg flex items-center justify-center">
              <span className="text-au-primary-foreground font-bold text-sm">A</span>
            </div>
            <span className="font-semibold text-lg text-au-foreground">AlpineUI</span>
          </Link>
          <button
            onClick={onClose}
            className="p-2 rounded-md hover:bg-au-accent transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5 text-au-foreground" />
          </button>
        </div>
      )}

      {/* Desktop Logo */}
      {!onClose && (
        <div className="p-4 border-b border-au-border">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-au-primary rounded-lg flex items-center justify-center">
              <span className="text-au-primary-foreground font-bold text-sm">A</span>
            </div>
            <span className="font-semibold text-lg text-au-foreground">AlpineUI</span>
          </Link>
        </div>
      )}

      {/* Scrollable Navigation */}
      <nav className="sidebar-nav">
        <div className="mb-6">
          <div className="flex items-center gap-2 px-3 mb-2 text-xs font-semibold text-au-muted-foreground uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            Getting Started
          </div>
          <ul className="space-y-1">
            {navigation.gettingStarted.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={handleLinkClick}
                    className={`flex items-center gap-2 px-3 py-2 text-sm rounded-md transition-colors ${isActive
                      ? "bg-au-primary text-au-primary-foreground font-medium"
                      : "text-au-foreground hover:bg-au-accent"
                      }`}
                  >
                    <item.icon className="w-4 h-4" />
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="mb-6">
          <div className="flex items-center gap-2 px-3 mb-2 text-xs font-semibold text-au-muted-foreground uppercase tracking-wider">
            <Cuboid className="w-3.5 h-3.5" />
            Components
          </div>
          <ul className="space-y-1">
            {navigation.components.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={handleLinkClick}
                    className={`flex items-center gap-2 px-3 py-2 text-sm rounded-md transition-colors ${isActive
                      ? "bg-au-primary text-au-primary-foreground font-medium"
                      : "text-au-foreground hover:bg-au-accent"
                      }`}
                  >
                    <item.icon className="w-4 h-4" />
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {navigation.commingSoon.length > 0 && (
          <div className="mb-6">
            <div className="flex items-center gap-2 px-3 mb-2 text-xs font-semibold text-au-muted-foreground uppercase tracking-wider">
              <Component className="w-3.5 h-3.5" />
              Coming Soon
            </div>
            <ul className="space-y-1">
              {navigation.commingSoon.map((item, index) => (
                <li key={index}>
                  <span className="flex items-center gap-2 px-3 py-2 text-sm text-au-muted-foreground">
                    <item.icon className="w-3 h-3" />
                    {item.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      {/* Fixed Footer */}
      <div className="sidebar-footer">
        <a
          href="https://github.com/Fernando-Ligabue/alpineui"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-2 text-sm text-au-foreground hover:bg-au-accent rounded-md transition-colors"
        >
          <Github className="w-4 h-4" />
          View on GitHub
        </a>
      </div>
    </div>
  );
}
