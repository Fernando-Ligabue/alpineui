"use client";

import { useState } from "react";
import DemoBlock from "@/components/DemoBlock";
import { useI18n } from "@/i18n/I18nProvider";

function InteractiveButton() {
  const { t } = useI18n();
  const [loading, setLoading] = useState(false);
  const [variant, setVariant] = useState("default");
  const [size, setSize] = useState("md");

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-3 justify-center">
        <button
          onClick={handleClick}
            className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-au-ring disabled:opacity-50 disabled:pointer-events-none ${
              size === "xs" ? "h-6 px-2 text-[10px]" : size === "sm" ? "h-8 px-3 text-xs" : size === "lg" ? "h-12 px-6 text-base" : "h-10 px-4 py-2"
          } ${
            variant === "default" ? "bg-au-primary text-au-primary-foreground hover:opacity-90" :
            variant === "destructive" ? "bg-au-destructive text-au-primary-foreground hover:opacity-90" :
            variant === "outline" ? "border border-au-border bg-transparent text-au-foreground hover:bg-au-accent" :
            variant === "secondary" ? "bg-au-secondary text-au-foreground hover:bg-au-accent" :
            variant === "ghost" ? "bg-transparent text-au-foreground hover:bg-au-accent" :
            variant === "link" ? "bg-transparent text-au-primary underline hover:opacity-80" :
            "bg-au-primary text-au-primary-foreground hover:opacity-90"
          } ${loading ? "opacity-70 pointer-events-none" : ""}`}
        >
          {loading ? t("common.processing") : t("common.clickMe")}
        </button>
      </div>
      <div className="flex gap-2 justify-center text-sm">
        <select
          value={variant}
          onChange={(e) => setVariant(e.target.value)}
          className="flex h-8 w-auto rounded-md border border-au-border bg-au-background px-2 text-xs placeholder:text-au-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-au-ring disabled:cursor-not-allowed disabled:opacity-50"
        >
          <option value="default">{t("common.default")}</option>
          <option value="destructive">{t("common.destructive")}</option>
          <option value="outline">{t("common.outline")}</option>
          <option value="secondary">{t("common.secondary")}</option>
          <option value="ghost">{t("common.ghost")}</option>
          <option value="link">{t("common.link")}</option>
        </select>
        <select
          value={size}
          onChange={(e) => setSize(e.target.value)}
          className="flex h-8 w-auto rounded-md border border-au-border bg-au-background px-2 text-xs placeholder:text-au-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-au-ring disabled:cursor-not-allowed disabled:opacity-50"
        >
          <option value="xs">{t("common.xs")}</option>
          <option value="sm">{t("common.sm")}</option>
          <option value="md">{t("common.md")}</option>
          <option value="lg">{t("common.lg")}</option>
        </select>
      </div>
    </div>
  );
}

export default function ButtonPage() {
  const { t } = useI18n();
  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-au-foreground mb-2">{t("button.title")}</h1>
      <p className="text-au-muted-foreground mb-8">
        {t("button.description")}
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">{t("common.variants")}</h2>
        <DemoBlock
          preview={
            <div className="flex flex-wrap gap-3 items-center justify-center">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-au-ring disabled:opacity-50 disabled:pointer-events-none h-10 px-4 py-2 bg-au-primary text-au-primary-foreground hover:opacity-90">{t("common.default")}</button>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-au-ring disabled:opacity-50 disabled:pointer-events-none h-10 px-4 py-2 bg-au-destructive text-au-primary-foreground hover:opacity-90">{t("common.destructive")}</button>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-au-ring disabled:opacity-50 disabled:pointer-events-none h-10 px-4 py-2 border border-au-border bg-transparent text-au-foreground hover:bg-au-accent">{t("common.outline")}</button>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-au-ring disabled:opacity-50 disabled:pointer-events-none h-10 px-4 py-2 bg-au-secondary text-au-foreground hover:bg-au-accent">{t("common.secondary")}</button>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-au-ring disabled:opacity-50 disabled:pointer-events-none h-10 px-4 py-2 bg-transparent text-au-foreground hover:bg-au-accent">{t("common.ghost")}</button>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-au-ring disabled:opacity-50 disabled:pointer-events-none h-10 px-4 py-2 bg-transparent text-au-primary underline hover:opacity-80">{t("common.link")}</button>
            </div>
          }
          code={`<button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:opacity-50 disabled:pointer-events-none h-10 px-4 py-2 bg-black text-white hover:opacity-90">Default</button>
<button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:opacity-50 disabled:pointer-events-none h-10 px-4 py-2 bg-red-600 text-white hover:opacity-90">Destructive</button>
<button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:opacity-50 disabled:pointer-events-none h-10 px-4 py-2 border border-gray-300 bg-transparent text-gray-900 hover:bg-gray-100">Outline</button>
<button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:opacity-50 disabled:pointer-events-none h-10 px-4 py-2 bg-gray-100 text-gray-900 hover:bg-gray-200">Secondary</button>
<button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:opacity-50 disabled:pointer-events-none h-10 px-4 py-2 bg-transparent text-gray-900 hover:bg-gray-100">Ghost</button>
<button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:opacity-50 disabled:pointer-events-none h-10 px-4 py-2 bg-transparent text-black underline hover:opacity-80">Link</button>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">{t("common.sizes")}</h2>
        <DemoBlock
          preview={
            <div className="flex flex-wrap gap-3 items-center justify-center">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-au-ring disabled:opacity-50 disabled:pointer-events-none h-6 px-2 text-[10px] bg-au-primary text-au-primary-foreground hover:opacity-90">{t("common.xs")}</button>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-au-ring disabled:opacity-50 disabled:pointer-events-none h-8 px-3 text-xs bg-au-primary text-au-primary-foreground hover:opacity-90">{t("common.sm")}</button>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-au-ring disabled:opacity-50 disabled:pointer-events-none h-10 px-4 py-2 bg-au-primary text-au-primary-foreground hover:opacity-90">{t("common.md")}</button>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-au-ring disabled:opacity-50 disabled:pointer-events-none h-12 px-6 text-base bg-au-primary text-au-primary-foreground hover:opacity-90">{t("common.lg")}</button>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-au-ring disabled:opacity-50 disabled:pointer-events-none h-10 w-10 p-0 bg-au-primary text-au-primary-foreground hover:opacity-90">+</button>
            </div>
          }
          code={`<!-- XS -->
<button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:opacity-50 disabled:pointer-events-none h-6 px-2 text-[10px] bg-black text-white hover:opacity-90">XS</button>
<!-- Small -->
<button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:opacity-50 disabled:pointer-events-none h-8 px-3 text-xs bg-black text-white hover:opacity-90">Small</button>
<!-- Medium -->
<button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:opacity-50 disabled:pointer-events-none h-10 px-4 py-2 bg-black text-white hover:opacity-90">Medium</button>
<!-- Large -->
<button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:opacity-50 disabled:pointer-events-none h-12 px-6 text-base bg-black text-white hover:opacity-90">Large</button>
<!-- Icon -->
<button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:opacity-50 disabled:pointer-events-none h-10 w-10 p-0 bg-black text-white hover:opacity-90">+</button>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">{t("common.interactiveDemo")}</h2>
        <DemoBlock
          preview={<InteractiveButton />}
          code={`<div x-data="{ loading: false, variant: 'default', size: 'md' }">
  <div class="flex flex-wrap gap-3 justify-center">
    <button
      @click="loading = true; setTimeout(() => loading = false, 2000)"
      :class="'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:opacity-50 disabled:pointer-events-none ' + (
        size === 'xs' ? 'h-6 px-2 text-[10px]' : size === 'sm' ? 'h-8 px-3 text-xs' : size === 'lg' ? 'h-12 px-6 text-base' : 'h-10 px-4 py-2'
      ) + ' ' + (
        variant === 'default' ? 'bg-black text-white hover:opacity-90' :
        variant === 'destructive' ? 'bg-red-600 text-white hover:opacity-90' :
        variant === 'outline' ? 'border border-gray-300 bg-transparent text-gray-900 hover:bg-gray-100' :
        variant === 'secondary' ? 'bg-gray-100 text-gray-900 hover:bg-gray-200' :
        variant === 'ghost' ? 'bg-transparent text-gray-900 hover:bg-gray-100' :
        variant === 'link' ? 'bg-transparent text-black underline hover:opacity-80' :
        'bg-black text-white hover:opacity-90'
      ) + (loading ? ' opacity-70 pointer-events-none' : '')"
      x-text="loading ? 'Processing...' : 'Click me'"
    ></button>
  </div>
  <div class="flex gap-2 justify-center mt-4 text-sm">
    <select x-model="variant" class="flex h-8 w-auto rounded-md border border-gray-300 bg-white px-2 text-xs">
      <option value="default">Default</option>
      <option value="destructive">Destructive</option>
      <option value="outline">Outline</option>
      <option value="secondary">Secondary</option>
      <option value="ghost">Ghost</option>
      <option value="link">Link</option>
    </select>
    <select x-model="size" class="flex h-8 w-auto rounded-md border border-gray-300 bg-white px-2 text-xs">
      <option value="xs">XS</option>
      <option value="sm">Small</option>
      <option value="md">Medium</option>
      <option value="lg">Large</option>
    </select>
  </div>
</div>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">{t("common.states")}</h2>
        <DemoBlock
          preview={
            <div className="flex flex-wrap gap-3 items-center justify-center">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-au-ring disabled:opacity-50 disabled:pointer-events-none h-10 px-4 py-2 bg-au-primary text-au-primary-foreground hover:opacity-90" disabled>{t("common.disabled")}</button>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-au-ring disabled:opacity-50 disabled:pointer-events-none h-10 px-4 py-2 bg-au-primary text-au-primary-foreground hover:opacity-90 opacity-70 pointer-events-none">{t("common.loading")}</button>
            </div>
          }
          code={`<button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:opacity-50 disabled:pointer-events-none h-10 px-4 py-2 bg-black text-white hover:opacity-90" disabled>Disabled</button>
<button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:opacity-50 disabled:pointer-events-none h-10 px-4 py-2 bg-black text-white hover:opacity-90 opacity-70 pointer-events-none">Loading</button>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">{t("common.moreVariants")}</h2>
        <DemoBlock
          preview={
            <div className="w-full space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-16 text-xs text-au-muted-foreground">{t("common.xs")}</span>
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-au-ring disabled:opacity-50 disabled:pointer-events-none h-6 px-2 text-[10px] bg-au-primary text-au-primary-foreground hover:opacity-90">{t("common.default")}</button>
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-au-ring disabled:opacity-50 disabled:pointer-events-none h-6 px-2 text-[10px] border border-au-border bg-transparent text-au-foreground hover:bg-au-accent">{t("common.outline")}</button>
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-au-ring disabled:opacity-50 disabled:pointer-events-none h-6 px-2 text-[10px] bg-transparent text-au-foreground hover:bg-au-accent">{t("common.ghost")}</button>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-16 text-xs text-au-muted-foreground">{t("common.sm")}</span>
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-au-ring disabled:opacity-50 disabled:pointer-events-none h-8 px-3 text-xs bg-au-primary text-au-primary-foreground hover:opacity-90">{t("common.default")}</button>
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-au-ring disabled:opacity-50 disabled:pointer-events-none h-8 px-3 text-xs border border-au-border bg-transparent text-au-foreground hover:bg-au-accent">{t("common.outline")}</button>
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-au-ring disabled:opacity-50 disabled:pointer-events-none h-8 px-3 text-xs bg-transparent text-au-foreground hover:bg-au-accent">{t("common.ghost")}</button>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-16 text-xs text-au-muted-foreground">{t("common.md")}</span>
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-au-ring disabled:opacity-50 disabled:pointer-events-none h-10 px-4 py-2 bg-au-primary text-au-primary-foreground hover:opacity-90">{t("common.default")}</button>
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-au-ring disabled:opacity-50 disabled:pointer-events-none h-10 px-4 py-2 border border-au-border bg-transparent text-au-foreground hover:bg-au-accent">{t("common.outline")}</button>
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-au-ring disabled:opacity-50 disabled:pointer-events-none h-10 px-4 py-2 bg-transparent text-au-foreground hover:bg-au-accent">{t("common.ghost")}</button>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-16 text-xs text-au-muted-foreground">{t("common.lg")}</span>
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-au-ring disabled:opacity-50 disabled:pointer-events-none h-12 px-6 text-base bg-au-primary text-au-primary-foreground hover:opacity-90">{t("common.default")}</button>
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-au-ring disabled:opacity-50 disabled:pointer-events-none h-12 px-6 text-base border border-au-border bg-transparent text-au-foreground hover:bg-au-accent">{t("common.outline")}</button>
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-au-ring disabled:opacity-50 disabled:pointer-events-none h-12 px-6 text-base bg-transparent text-au-foreground hover:bg-au-accent">{t("common.ghost")}</button>
              </div>
            </div>
          }
          code={`<!-- XS -->
<button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:opacity-50 disabled:pointer-events-none h-6 px-2 text-[10px] bg-black text-white hover:opacity-90">Default</button>
<button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:opacity-50 disabled:pointer-events-none h-6 px-2 text-[10px] border border-gray-300 bg-transparent text-gray-900 hover:bg-gray-100">Outline</button>
<button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:opacity-50 disabled:pointer-events-none h-6 px-2 text-[10px] bg-transparent text-gray-900 hover:bg-gray-100">Ghost</button>

<!-- Small -->
<button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:opacity-50 disabled:pointer-events-none h-8 px-3 text-xs bg-black text-white hover:opacity-90">Default</button>
<button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:opacity-50 disabled:pointer-events-none h-8 px-3 text-xs border border-gray-300 bg-transparent text-gray-900 hover:bg-gray-100">Outline</button>
<button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:opacity-50 disabled:pointer-events-none h-8 px-3 text-xs bg-transparent text-gray-900 hover:bg-gray-100">Ghost</button>

<!-- Medium -->
<button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:opacity-50 disabled:pointer-events-none h-10 px-4 py-2 bg-black text-white hover:opacity-90">Default</button>
<button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:opacity-50 disabled:pointer-events-none h-10 px-4 py-2 border border-gray-300 bg-transparent text-gray-900 hover:bg-gray-100">Outline</button>
<button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:opacity-50 disabled:pointer-events-none h-10 px-4 py-2 bg-transparent text-gray-900 hover:bg-gray-100">Ghost</button>

<!-- Large -->
<button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:opacity-50 disabled:pointer-events-none h-12 px-6 text-base bg-black text-white hover:opacity-90">Default</button>
<button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:opacity-50 disabled:pointer-events-none h-12 px-6 text-base border border-gray-300 bg-transparent text-gray-900 hover:bg-gray-100">Outline</button>
<button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:opacity-50 disabled:pointer-events-none h-12 px-6 text-base bg-transparent text-gray-900 hover:bg-gray-100">Ghost</button>`}
        />
      </section>
    </div>
  );
}
