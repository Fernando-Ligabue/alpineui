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
  PanelTopOpen,
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
  PilcrowRight
} from "lucide-react";

const navigation = {
  gettingStarted: [
    { name: "Introduction", href: "/", icon: Rocket },
    { name: "Installation", href: "/installation", icon: Code2 },
    { name: "Theming", href: "/theming", icon: Palette },
  ],
  components: [
    { name: "All Components", href: "/components", icon: LayoutList },
    { name: "Button", href: "/components/button", icon: SquarePlus },
    { name: "Input", href: "/components/input", icon: TextCursorInput },
    { name: "Card", href: "/components/card", icon: IdCard },
    { name: "Badge", href: "/components/badge", icon: Award },
    { name: "Dialog", href: "/components/dialog", icon: MessageSquareWarning },
    { name: "Dropdown", href: "/components/dropdown", icon: ChevronDown },
    { name: "Tabs", href: "/components/tabs", icon: StretchVertical },
    { name: "Accordion", href: "/components/accordion", icon: ListCollapse },
    { name: "Toast", href: "/components/toast", icon: CloudAlert },
    { name: "Select", href: "/components/select", icon: Hand },
    { name: "DatePicker", href: "/components/datepicker", icon: CalendarFold },
    { name: "Avatar", href: "/components/avatar", icon: User },
    { name: "Tooltip", href: "/components/tooltip", icon: Info },
    { name: "Popover", href: "/components/popover", icon: PanelBottomClose },
    { name: "Checkbox", href: "/components/checkbox", icon: SquareCheck },
    { name: "Progress", href: "/components/progress", icon: LoaderCircle },
    { name: "RadioGroup", href: "/components/radiogroup", icon: CircleDot },
    { name: "Slider", href: "/components/slider", icon: Settings2 },
    { name: "Breadcrumb", href: "/components/breadcrumb", icon: PilcrowRight },
    { name: "Pagination", href: "/components/pagination", icon: ChevronsLeftRightEllipsis },
    { name: "Textarea", href: "/components/textarea", icon: ReceiptText },
    { name: "ContextMenu", href: "/components/contextmenu", icon: PanelTopDashed },
    { name: "NavigationMenu", href: "/components/navigationmenu", icon: PanelTopOpen },
    { name: "Table", href: "/components/table", icon: Sheet },
  ],
  commingSoon: [
    { name: "Sidebar", href: "", icon: PanelLeftDashed },
  ],
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
