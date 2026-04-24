"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import DemoBlock from "@/components/DemoBlock";
import { InstallCommand } from "@/components/InstallCommand";

function BreadcrumbItem({ href, children, active = false }: { href?: string; children: React.ReactNode; active?: boolean }) {
  if (href) {
    return (
      <Link href={href} className={`text-sm ${active ? "text-au-foreground font-medium" : "text-au-muted-foreground hover:text-au-foreground"}`}>
        {children}
      </Link>
    );
  }
  return <span className="text-sm text-au-muted-foreground">{children}</span>;
}

function InteractiveBreadcrumb() {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="flex items-center gap-1">
        <li>
          <BreadcrumbItem href="/">
            <Home className="w-4 h-4" />
          </BreadcrumbItem>
        </li>
        <li><ChevronRight className="w-4 h-4 text-au-muted-foreground" /></li>
        <li>
          <BreadcrumbItem href="/components">Components</BreadcrumbItem>
        </li>
        <li><ChevronRight className="w-4 h-4 text-au-muted-foreground" /></li>
        <li>
          <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
        </li>
      </ol>
    </nav>
  );
}

export default function BreadcrumbPage() {
  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-au-foreground mb-2">Breadcrumb</h1>
      <p className="text-au-muted-foreground mb-8">
        A navigation component that shows the user's location in the application.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Installation</h2>
        <InstallCommand command="npx alpineui add breadcrumb" />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Interactive Demo</h2>
        <DemoBlock
          preview={<InteractiveBreadcrumb />}
          code={`<nav aria-label="Breadcrumb">
  <ol class="flex items-center gap-1">
    <li><a href="/">Home</a></li>
    <li>/</li>
    <li><a href="/components">Components</a></li>
    <li>/</li>
    <li>Breadcrumb</li>
  </ol>
</nav>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">CSS Classes Reference</h2>
        <div className="border border-au-border rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-au-secondary">
              <tr>
                <th className="text-left px-4 py-3 font-medium">Class</th>
                <th className="text-left px-4 py-3 font-medium">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-au-border">
              <tr><td className="px-4 py-2 font-mono text-xs">au-breadcrumb</td><td className="px-4 py-2">Breadcrumb container</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-breadcrumb-item</td><td className="px-4 py-2">Breadcrumb item</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-breadcrumb-separator</td><td className="px-4 py-2">Separator</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}