"use client";

import Link from "next/link";
import {
  ArrowRight,
  Copy,
  Zap,
  Palette,
  Box,
  Github,
  Play,
  CheckCircle2,
  Sparkles,
  Layers,
  Type,
  MousePointerClick,
  Rocket,
  Check
} from "lucide-react";
import { useState } from "react";
import { useI18n } from "@/i18n/I18nProvider";

export default function Home() {
  const { t } = useI18n();
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-linear-to-br from-au-background via-au-background to-au-primary/5 dark:to-au-primary/15" />
          <div className="absolute top-0 left-1/4 w-125 h-125 bg-au-primary/10 dark:bg-white/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-100 h-100 bg-au-primary/5 dark:bg-white/10 rounded-full blur-[100px] animate-pulse delay-1000" />

          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-size[64px_64px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] dark:bg-[linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)]" />

          {/* Floating Elements */}
          <div className="absolute top-32 left-[15%] w-3 h-3 bg-au-primary/40 dark:bg-white/40 rounded-full animate-float" />
          <div className="absolute top-40 right-[20%] w-2 h-2 bg-au-primary/30 dark:bg-white/30 rounded-full animate-float-delayed" />
          <div className="absolute bottom-40 left-[25%] w-4 h-4 bg-au-primary/20 dark:bg-white/20 rounded-full animate-float-slow" />
          <div className="absolute top-1/2 right-[15%] w-2 h-2 bg-au-primary/50 dark:bg-white/50 rounded-full animate-float-delay-2000" />
        </div>

        <div className="container px-6 py-20 mx-auto text-center max-w-5xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-au-border bg-au-background/80 backdrop-blur-sm animate-fade-in">
            <Sparkles className="w-4 h-4 text-au-primary" />
            <span className="text-sm font-medium text-au-foreground">{t("home.hero.badge")}</span>
            <span className="w-1.5 h-1.5 bg-green-400/80 rounded-full animate-pulse" />
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 animate-fade-in-up">
            <span className="text-au-foreground">{t("home.hero.title1")} </span>
            <span className="relative">
              <span className="bg-linear-to-r from-au-primary via-au-primary/80 to-au-primary/60 bg-clip-text text-transparent">
                {t("home.hero.title2")}
              </span>
            </span>
            <br />
            <span className="text-au-foreground">{t("home.hero.title3")} </span>
            <span className="relative inline-block">
              <span className="bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Alpine.js</span>
              <svg className="absolute -bottom-1 left-0 w-full h-3" viewBox="0 0 200 12" fill="none">
                <path d="M2 8 Q50 2 100 8 T198 8" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round" fill="none" />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="50%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-au-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in-up delay-200">
            {t("home.hero.subtitle")}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up delay-300">
            <Link
              href="/installation"
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-au-primary text-au-primary-foreground rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-au-primary/20"
            >
              {t("home.hero.cta")}
              <Rocket className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/components"
              className="group inline-flex items-center gap-2 px-8 py-4 border-2 border-au-border rounded-xl font-semibold text-lg text-au-foreground transition-all duration-300 hover:bg-au-secondary hover:border-au-primary/50"
            >
              {t("home.hero.browse")}
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Component Showcase */}
          <div className="animate-fade-in-up delay-500">
            <ComponentShowcase t={t} />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-au-border rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-au-muted-foreground rounded-full animate-scroll" />
          </div>
        </div>
      </section>

      {/* Live Preview Section */}
      <section className="py-24 bg-au-secondary/30">
        <div className="container px-6 mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-au-foreground mb-4">
              {t("home.preview.title")}
            </h2>
            <p className="text-lg text-au-muted-foreground max-w-2xl mx-auto">
              {t("home.preview.subtitle")}
            </p>
          </div>

          {/* Interactive Preview */}
          <div className="relative bg-au-background rounded-2xl border border-au-border shadow-2xl overflow-hidden">
            {/* Window Controls */}
            <div className="flex items-center gap-2 px-4 py-3 bg-au-secondary border-b border-au-border">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-4 text-xs text-au-muted-foreground">{t("home.preview.label")}</span>
            </div>

            {/* Preview Content */}
            <div className="p-12">
              <div className="flex flex-wrap items-center justify-center gap-6">
                {/* Button Variants */}
                <button className="inline-flex items-center justify-center gap-2 h-10 px-4 py-2 rounded-md bg-au-primary text-au-primary-foreground text-sm font-medium hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-au-ring">Default</button>
                <button className="inline-flex items-center justify-center gap-2 h-10 px-4 py-2 rounded-md bg-au-secondary text-au-foreground text-sm font-medium hover:bg-au-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-au-ring">Secondary</button>
                <button className="inline-flex items-center justify-center gap-2 h-10 px-4 py-2 rounded-md border border-au-border bg-transparent text-au-foreground text-sm font-medium hover:bg-au-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-au-ring">Outline</button>
                <button className="inline-flex items-center justify-center gap-2 h-10 px-4 py-2 rounded-md bg-transparent text-au-foreground text-sm font-medium hover:bg-au-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-au-ring">Ghost</button>
                <button className="inline-flex items-center justify-center gap-2 h-10 px-4 py-2 rounded-md bg-au-destructive text-au-destructive-foreground text-sm font-medium hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">Destructive</button>
                <button aria-label="Icon button" className="inline-flex items-center justify-center gap-2 h-10 w-10 px-0 py-2 rounded-md bg-au-primary text-au-primary-foreground text-sm font-medium hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-au-ring">
                  <Zap className="w-4 h-4" />
                </button>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
                <button className="inline-flex items-center justify-center gap-2 h-8 px-3 py-1.5 rounded-md bg-au-primary text-au-primary-foreground text-xs font-medium hover:opacity-90">Small</button>
                <button className="inline-flex items-center justify-center gap-2 h-10 px-4 py-2 rounded-md bg-au-primary text-au-primary-foreground text-sm font-medium hover:opacity-90">Medium</button>
                <button className="inline-flex items-center justify-center gap-2 h-12 px-6 py-3 rounded-md bg-au-primary text-au-primary-foreground text-base font-medium hover:opacity-90">Large</button>
              </div>
            </div>
          </div>

          {/* Code Preview */}
          <div className="mt-8 bg-[#1e1e1e] rounded-xl overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 bg-[#252526] border-b border-[#3c3c3c]">
              <div className="flex items-center gap-2">
                <span className="text-xs text-[#a0a0a0]">HTML</span>
              </div>
              <CopyButton code={`<div x-data="{ count: 0 }" class="text-center">
  <p class="text-lg mb-4">Count: <span x-text="count">0</span></p>
  <button @click="count++"
    class="inline-flex items-center justify-center gap-2 h-10 px-4 py-2 rounded-md bg-black text-white text-sm font-medium hover:opacity-90">
    Increment
  </button>
</div>`} copyLabel={t("home.preview.copy")} copiedLabel={t("home.preview.copied")} />
            </div>
            <pre className="p-6 text-sm overflow-x-auto">
              <code className="text-[#d4d4d4]">
                <span className="text-[#569cd6]">{`<div`}</span> <span className="text-[#9cdcfe]">x-data</span><span className="text-[#d4d4d4]">=</span><span className="text-[#ce9178]">&quot;{"{ count: 0 }"}&quot;</span><span className="text-[#569cd6]">{`>`}</span>
                {"\n  "}<span className="text-[#569cd6]">{`<button`}</span>
                {"\n    "}<span className="text-[#9cdcfe]">@click</span><span className="text-[#d4d4d4]">=</span><span className="text-[#ce9178]">&quot;count++&quot;</span>
                {"\n  "}<span className="text-[#569cd6]">{`>`}</span>Increment<span className="text-[#569cd6]">{`</button>`}</span>
                {"\n"}<span className="text-[#569cd6]">{`</div>`}</span>
              </code>
            </pre>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="container px-6 mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-au-foreground mb-4">
              {t("home.features.title")}
            </h2>
            <p className="text-lg text-au-muted-foreground max-w-2xl mx-auto">
              {t("home.features.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Copy className="w-6 h-6" />}
              title={t("home.features.copyPaste")}
              description={t("home.features.copyPasteDesc")}
              color="blue"
            />
            <FeatureCard
              icon={<Zap className="w-6 h-6" />}
              title={t("home.features.fast")}
              description={t("home.features.fastDesc")}
              color="yellow"
            />
            <FeatureCard
              icon={<Palette className="w-6 h-6" />}
              title={t("home.features.customizable")}
              description={t("home.features.customizableDesc")}
              color="purple"
            />
            <FeatureCard
              icon={<Layers className="w-6 h-6" />}
              title={t("home.features.composable")}
              description={t("home.features.composableDesc")}
              color="green"
            />
            <FeatureCard
              icon={<Type className="w-6 h-6" />}
              title={t("home.features.accessible")}
              description={t("home.features.accessibleDesc")}
              color="pink"
            />
            <FeatureCard
              icon={<Sparkles className="w-6 h-6" />}
              title={t("home.features.zeroDeps")}
              description={t("home.features.zeroDepsDesc")}
              color="orange"
            />
          </div>
        </div>
      </section>

      {/* Component Showcase */}
      <section className="py-24 bg-au-secondary/30">
        <div className="container px-6 mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-au-foreground mb-6">
                {t("home.showcase.title")}
              </h2>
              <p className="text-lg text-au-muted-foreground mb-8">
                {t("home.showcase.desc")}
              </p>

              <ul className="space-y-4">
                {[
                  t("home.showcase.item1"),
                  t("home.showcase.item2"),
                  t("home.showcase.item3"),
                  t("home.showcase.item4"),
                  t("home.showcase.item5")
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-au-foreground">
                    <CheckCircle2 className="w-5 h-5 text-au-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href="/components"
                className="inline-flex items-center gap-2 mt-8 text-au-primary font-semibold hover:gap-3 transition-all"
              >
                {t("home.showcase.viewAll")}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="relative">
              <div className="bg-au-background rounded-2xl border border-au-border p-8 shadow-xl">
                <div className="space-y-6">
                  {/* Card Preview */}
                  <div className="p-6 border border-au-border rounded-xl bg-au-background">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-linear-to-br from-au-primary to-au-accent flex items-center justify-center text-au-primary-foreground font-bold">
                        A
                      </div>
                      <div>
                        <h3 className="font-semibold text-au-foreground">AlpineUI Components</h3>
                        <p className="text-sm text-au-muted-foreground">Beautiful by default</p>
                      </div>
                    </div>
                    <p className="text-sm text-au-muted-foreground mb-4">
                      A collection of reusable components that help you build beautiful interfaces faster.
                    </p>
                    <div className="flex gap-2">
                      <button className="inline-flex items-center justify-center gap-2 h-8 px-3 py-1.5 rounded-md bg-au-primary text-au-primary-foreground text-xs font-medium hover:opacity-90">Get Started</button>
                      <button className="inline-flex items-center justify-center gap-2 h-8 px-3 py-1.5 rounded-md bg-transparent text-au-foreground text-xs font-medium hover:bg-au-accent">Learn More</button>
                    </div>
                  </div>

                  {/* Input Preview */}
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search components..."
                      className="w-full px-4 py-3 pl-10 border border-au-border rounded-lg bg-au-background text-au-foreground placeholder:text-au-muted-foreground focus:outline-none focus:ring-2 focus:ring-au-ring"
                    />
                    <MousePointerClick className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-au-muted-foreground" />
                  </div>

                  {/* Badge Preview */}
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-xs font-medium bg-au-primary/10 text-au-primary rounded-full">Button</span>
                    <span className="px-3 py-1 text-xs font-medium bg-au-primary/15 text-au-primary rounded-full">Card</span>
                    <span className="px-3 py-1 text-xs font-medium bg-au-primary/10 text-au-primary rounded-full">Input</span>
                    <span className="px-3 py-1 text-xs font-medium bg-au-primary/15 text-au-primary rounded-full">Dialog</span>
                    <span className="px-3 py-1 text-xs font-medium bg-au-accent text-au-accent-foreground rounded-full">+10 more</span>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-linear-to-br from-au-primary/20 to-au-accent/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-linear-to-br from-au-accent/20 to-au-destructive/20 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="py-24">
        <div className="container px-6 mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-au-foreground mb-4">
            {t("home.quickstart.title")}
          </h2>
          <p className="text-lg text-au-muted-foreground mb-12 max-w-2xl mx-auto">
            {t("home.quickstart.subtitle")}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <InstallCard
              title={t("home.quickstart.copyPaste")}
              description={t("home.quickstart.copyPasteDesc")}
              command={t("home.quickstart.guide")}
              icon={<Terminal className="w-6 h-6" />}
            />
            <InstallCard
              title={t("home.quickstart.requirements")}
              description={t("home.quickstart.requirementsDesc")}
              command={t("home.quickstart.noDeps")}
              icon={<Box className="w-6 h-6" />}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-linear-to-br from-au-primary via-au-primary to-au-primary/90">
        <div className="container px-6 mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-au-primary-foreground mb-6">
            {t("home.cta.title")}
          </h2>
          <p className="text-xl text-au-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            {t("home.cta.subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/installation"
              className="inline-flex items-center gap-2 px-8 py-4 bg-au-background text-au-primary rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <Play className="w-5 h-5" />
              {t("home.cta.start")}
            </Link>
            <a
              href="https://github.com/Fernando-Ligabue/alpineui"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-au-primary-foreground/30 text-au-primary-foreground rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-au-primary-foreground/10"
            >
              <Github className="w-5 h-5" />
              {t("home.cta.star")}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function ComponentShowcase({ t }: { t: (key: string) => string }) {
  const COMPONENTS = [
    "accordion", "alert", "alert-dialog", "aspectratio", "avatar",
    "badge", "breadcrumb", "button", "buttongroup", "card",
    "carousel", "checkbox", "collapsible", "contextmenu", "datepicker",
    "dialog", "drawer", "dropdown", "input", "kbd",
    "label", "nativeselect", "navigationmenu", "pagination", "popover",
    "progress", "radiogroup", "resizable", "scrollarea", "select",
    "separator", "sidebar", "skeleton", "slider", "spinner",
    "switch", "table", "tabs", "textarea", "toast",
    "toggle", "toggle-group", "tooltip",
  ];

  const DISPLAY_COUNT = 35;
  const extra = COMPONENTS.length - DISPLAY_COUNT;

  return (
    <div className="flex flex-col items-center gap-6 pb-8">
      <div className="flex items-baseline gap-3">
        <span className="text-5xl font-extrabold bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          {COMPONENTS.length}
        </span>
        <div>
          <p className="text-lg font-bold text-au-foreground">{t("home.hero.componentCount")}</p>
          <p className="text-sm text-au-muted-foreground">{t("home.hero.componentTagline")}</p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
        {COMPONENTS.slice(0, DISPLAY_COUNT).map((name, i) => (
          <Link
            key={name}
            href={`/components/${name}`}
            className="group relative px-3 py-1.5 text-xs font-medium rounded-full border border-au-border bg-au-background text-au-muted-foreground hover:text-au-primary hover:border-au-primary/40 hover:bg-au-primary/5 transition-all duration-200"
            style={{ animationDelay: `${(i % 10) * 40}ms` }}
          >
            {name}
          </Link>
        ))}
        {extra > 0 && (
          <Link
            href="/components"
            className="px-3 py-1.5 text-xs font-medium rounded-full bg-linear-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 text-au-primary border border-au-primary/30 hover:border-au-primary transition-all duration-200"
          >
            +{extra} {t("home.hero.more")}
          </Link>
        )}
      </div>

      <Link
        href="/components"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-au-primary hover:gap-2 transition-all"
      >
        {t("home.hero.browseAll")}
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}

function FeatureCard({ icon, title, description, color }: { icon: React.ReactNode; title: string; description: string; color: string }) {
  const colorClasses: Record<string, string> = {
    blue: "bg-blue-500/10 text-blue-500",
    yellow: "bg-yellow-500/10 text-yellow-500",
    purple: "bg-purple-500/10 text-purple-500",
    green: "bg-green-500/10 text-green-500",
    pink: "bg-pink-500/10 text-pink-500",
    orange: "bg-orange-500/10 text-orange-500",
  };

  return (
    <div className="group p-8 rounded-2xl border border-au-border bg-au-background transition-all duration-300 hover:border-au-primary/50 hover:shadow-xl hover:shadow-au-primary/5">
      <div className={`w-14 h-14 rounded-xl ${colorClasses[color]} flex items-center justify-center mb-6 transition-transform group-hover:scale-110`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-au-foreground mb-3">{title}</h3>
      <p className="text-au-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}

function InstallCard({ title, description, command, icon }: { title: string; description: string; command: string; icon: React.ReactNode }) {
  return (
    <div className="p-6 rounded-xl border border-au-border bg-au-background text-left">
      <div className="flex items-center gap-3 mb-4">
        <div className="text-au-primary">{icon}</div>
        <h3 className="text-lg font-semibold text-au-foreground">{title}</h3>
      </div>
      <p className="text-sm text-au-muted-foreground mb-4">{description}</p>
      <code className="block px-4 py-3 bg-au-secondary rounded-lg text-sm text-au-foreground font-mono overflow-x-auto">
        {command}
      </code>
    </div>
  );
}

function CopyButton({ code, copyLabel, copiedLabel }: { code: string; copyLabel: string; copiedLabel: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <button onClick={handleCopy} className="flex items-center gap-2 px-3 py-1 text-xs text-au-muted-foreground hover:text-au-foreground hover:bg-au-accent rounded transition-colors">
      {copied ? <><Check className="w-3.5 h-3.5 text-au-primary" /> {copiedLabel}</> : <><Copy className="w-3.5 h-3.5" /> {copyLabel}</>}
    </button>
  );
}

function Terminal(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polyline points="4 17 10 11 4 5" />
      <line x1="12" x2="20" y1="19" y2="19" />
    </svg>
  );
}


