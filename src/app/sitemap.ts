import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://alpineui.netlify.app";

  const pages = [
    "",
    "/installation",
    "/theming",
    "/components",
    "/components/accordion",
    "/components/alert",
    "/components/alert-dialog",
    "/components/aspectratio",
    "/components/avatar",
    "/components/badge",
    "/components/breadcrumb",
    "/components/button",
    "/components/buttongroup",
    "/components/card",
    "/components/carousel",
    "/components/checkbox",
    "/components/collapsible",
    "/components/contextmenu",
    "/components/datepicker",
    "/components/dialog",
    "/components/drawer",
    "/components/dropdown",
    "/components/input",
    "/components/kbd",
    "/components/label",
    "/components/nativeselect",
    "/components/navigationmenu",
    "/components/pagination",
    "/components/popover",
    "/components/progress",
    "/components/radiogroup",
    "/components/resizable",
    "/components/scrollarea",
    "/components/select",
    "/components/sidebar",
    "/components/skeleton",
    "/components/slider",
    "/components/spinner",
    "/components/switch",
    "/components/table",
    "/components/tabs",
    "/components/textarea",
    "/components/toast",
    "/components/toggle",
    "/components/toggle-group",
    "/components/tooltip",
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: page === "" ? 1 : 0.8,
  }));
}
