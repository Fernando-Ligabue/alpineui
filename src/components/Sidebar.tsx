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
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import { useI18n } from "@/i18n/I18nProvider";



interface SidebarProps {
  onClose?: () => void;
}

export default function Sidebar({ onClose }: SidebarProps) {
  const pathname = usePathname();
  const { t } = useI18n();

  const getNavigation = () => ({
    gettingStarted: [
      { name: t("nav.introduction"), href: "/", icon: Rocket },
      { name: t("nav.installation"), href: "/installation", icon: Code2 },
      { name: t("nav.theming"), href: "/theming", icon: Palette },
    ],
    components: [
      { name: t("nav.allComponents"), href: "/components", icon: LayoutList },
      { name: t("nav.accordion"), href: "/components/accordion", icon: ListCollapse },
      { name: t("nav.alert"), href: "/components/alert", icon: AlertCircle },
      { name: t("nav.alertDialog"), href: "/components/alert-dialog", icon: AlertTriangle },
      { name: t("nav.avatar"), href: "/components/avatar", icon: User },
      { name: t("nav.badge"), href: "/components/badge", icon: Award },
      { name: t("nav.breadcrumb"), href: "/components/breadcrumb", icon: PilcrowRight },
      { name: t("nav.button"), href: "/components/button", icon: SquarePlus },
      { name: t("nav.card"), href: "/components/card", icon: IdCard },
      { name: t("nav.checkbox"), href: "/components/checkbox", icon: SquareCheck },
      { name: t("nav.contextMenu"), href: "/components/contextmenu", icon: PanelTopDashed },
      { name: t("nav.datePicker"), href: "/components/datepicker", icon: CalendarFold },
      { name: t("nav.dialog"), href: "/components/dialog", icon: MessageSquareWarning },
      { name: t("nav.drawer"), href: "/components/drawer", icon: PanelRight },
      { name: t("nav.dropdown"), href: "/components/dropdown", icon: ChevronDown },
      { name: t("nav.input"), href: "/components/input", icon: TextCursorInput },
      { name: t("nav.navigationMenu"), href: "/components/navigationmenu", icon: PanelTopOpen },
      { name: t("nav.pagination"), href: "/components/pagination", icon: ChevronsLeftRightEllipsis },
      { name: t("nav.popover"), href: "/components/popover", icon: PanelBottomClose },
      { name: t("nav.progress"), href: "/components/progress", icon: LoaderCircle },
      { name: t("nav.radioGroup"), href: "/components/radiogroup", icon: CircleDot },
      { name: t("nav.select"), href: "/components/select", icon: Hand },
      { name: t("nav.sidebar"), href: "/components/sidebar", icon: PanelLeftDashed },
      { name: t("nav.slider"), href: "/components/slider", icon: Settings2 },
      { name: t("nav.switch"), href: "/components/switch", icon: ToggleLeft },
      { name: t("nav.table"), href: "/components/table", icon: Sheet },
      { name: t("nav.tabs"), href: "/components/tabs", icon: StretchVertical },
      { name: t("nav.textarea"), href: "/components/textarea", icon: ReceiptText },
      { name: t("nav.toast"), href: "/components/toast", icon: CloudAlert },
      { name: t("nav.tooltip"), href: "/components/tooltip", icon: Info },
      { name: t("nav.collapsible"), href: "/components/collapsible", icon: ChevronDown },
      { name: t("nav.spinner"), href: "/components/spinner", icon: LoaderCircle },
      { name: t("nav.skeleton"), href: "/components/skeleton", icon: Blocks },
      { name: t("nav.scrollArea"), href: "/components/scrollarea", icon: ScrollText },
      { name: t("nav.resizable"), href: "/components/resizable", icon: GripHorizontal },
      { name: t("nav.carousel"), href: "/components/carousel", icon: Images },
      { name: t("nav.toggle"), href: "/components/toggle", icon: ToggleLeft },
      { name: t("nav.aspectRatio"), href: "/components/aspectratio", icon: Maximize2 },
      { name: t("nav.kbd"), href: "/components/kbd", icon: Keyboard },
      { name: t("nav.separator"), href: "/components/separator", icon: Minus },
      { name: t("nav.label"), href: "/components/label", icon: Tag },
      { name: t("nav.nativeSelect"), href: "/components/nativeselect", icon: List },
      { name: t("nav.buttonGroup"), href: "/components/buttongroup", icon: Columns3 },
      { name: t("nav.toggleGroup"), href: "/components/toggle-group", icon: ToggleRight },
    ],
    commingSoon: [] as Array<{ name: string; icon: React.ElementType; href: string }>,
  });

  const handleLinkClick = () => {
    if (onClose) {
      onClose();
    }
  };

  const nav = getNavigation();

  return (
    <div className="sidebar-content">
      {/* Mobile Header */}
      {onClose && (
        <div className="flex items-center justify-between p-4 border-b border-au-border">
          <div onClick={handleLinkClick} className="cursor-pointer">
            <Logo size="md" />
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-md hover:bg-au-accent transition-colors"
            aria-label={t("sidebar.closeMenu")}
          >
            <X className="w-5 h-5 text-au-foreground" />
          </button>
        </div>
      )}

      {/* Desktop Logo */}
      {!onClose && (
        <div className="p-4 border-b border-au-border">
          <Logo size="md" />
        </div>
      )}

      {/* Scrollable Navigation */}
      <nav className="sidebar-nav">
        <div className="mb-6">
          <div className="flex items-center gap-2 px-3 mb-2 text-xs font-semibold text-au-muted-foreground uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            {t("nav.gettingStarted")}
          </div>
          <ul className="space-y-1">
            {nav.gettingStarted.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={handleLinkClick}
                    aria-current={isActive ? "page" : undefined}
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
            {t("nav.components")}
          </div>
          <ul className="space-y-1">
            {nav.components.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={handleLinkClick}
                    aria-current={isActive ? "page" : undefined}
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

        {nav.commingSoon.length > 0 && (
          <div className="mb-6">
            <div className="flex items-center gap-2 px-3 mb-2 text-xs font-semibold text-au-muted-foreground uppercase tracking-wider">
              <Component className="w-3.5 h-3.5" />
              {t("sidebar.comingSoon")}
            </div>
            <ul className="space-y-1">
              {nav.commingSoon.map((item, index) => (
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
        <div className="flex items-center justify-between">
          <a
            href="https://github.com/Fernando-Ligabue/alpineui"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 text-sm text-au-foreground hover:bg-au-accent rounded-md transition-colors"
          >
            <Github className="w-4 h-4" />
            {t("sidebar.github")}
          </a>
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </div>
  );
}
