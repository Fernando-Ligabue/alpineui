"use client";

import { useState } from "react";
import { Home, Settings, User, FileText, Bell, Mail, Search, Menu, X, PanelLeftOpen, PanelRightOpen } from "lucide-react";
import DemoBlock from "@/components/DemoBlock";

function InteractiveSidebarDefault() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex h-64 w-full max-w-md border border-gray-200 rounded-lg overflow-hidden">
      <aside
        className={`relative flex flex-col h-full bg-white border-r border-gray-200 transition-all duration-300 ${collapsed ? "w-16" : "w-80"}`}
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <span className={`text-lg font-semibold text-gray-900 truncate ${collapsed ? "hidden" : ""}`}>
            {collapsed ? "A" : "AlpineUI"}
          </span>
          <button
            className={`p-2 rounded-md hover:bg-gray-100 transition-colors ${collapsed ? "mx-auto" : ""}`}
            onClick={() => setCollapsed(!collapsed)}
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {collapsed ? <PanelLeftOpen className="w-6 h-6 text-black" /> : <PanelRightOpen className="w-6 h-6 text-black" />}
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto p-2 space-y-1">
          <a href="#" className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium bg-gray-900 text-white hover:bg-gray-900 ${collapsed ? "justify-center px-2.5" : ""}`}>
            <Home className="w-5 h-5 shrink-0" />
            <span className={`${collapsed ? "hidden" : "truncate"}`}>Home</span>
          </a>
          <a href="#" className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-colors ${collapsed ? "justify-center px-2.5" : ""}`}>
            <User className="w-5 h-5 shrink-0" />
            <span className={`${collapsed ? "hidden" : "truncate"}`}>Profile</span>
          </a>
          <a href="#" className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-colors ${collapsed ? "justify-center px-2.5" : ""}`}>
            <FileText className="w-5 h-5 shrink-0" />
            <span className={`${collapsed ? "hidden" : "truncate"}`}>Documents</span>
          </a>
          <a href="#" className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-colors ${collapsed ? "justify-center px-2.5" : ""}`}>
            <Bell className="w-5 h-5 shrink-0" />
            <span className={`${collapsed ? "hidden" : "truncate"}`}>Notifications</span>
          </a>
          <div className="h-px my-2 mx-3 bg-gray-200" />
          <a href="#" className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-colors ${collapsed ? "justify-center px-2.5" : ""}`}>
            <Settings className="w-5 h-5 shrink-0" />
            <span className={`${collapsed ? "hidden" : "truncate"}`}>Settings</span>
          </a>
        </nav>
      </aside>
      <main className="flex-1 p-4 bg-gray-100/30">
        <p className="text-gray-500">Main content area</p>
      </main>
    </div>
  );
}

function InteractiveSidebarGroups() {
  return (
    <div className="flex h-64 w-full max-w-md border border-gray-200 rounded-lg overflow-hidden">
      <aside className="relative flex flex-col h-full bg-white border-r border-gray-200 w-80">
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <span className="text-lg font-semibold text-gray-900 truncate">Dashboard</span>
        </div>
        <nav className="flex-1 overflow-y-auto p-2 space-y-1">
          <div className="mb-4">
            <span className="block px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Main</span>
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium bg-gray-900 text-white hover:bg-gray-900">
              <Home className="w-5 h-5 shrink-0" />
              <span className="truncate">Home</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-colors">
              <Search className="w-5 h-5 shrink-0" />
              <span className="truncate">Explore</span>
            </a>
          </div>
          <div className="mb-4">
            <span className="block px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Content</span>
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-colors">
              <FileText className="w-5 h-5 shrink-0" />
              <span className="truncate">Documents</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-colors">
              <Mail className="w-5 h-5 shrink-0" />
              <span className="truncate">Messages</span>
            </a>
          </div>
          <div className="mb-4">
            <span className="block px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">System</span>
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-colors">
              <Settings className="w-5 h-5 shrink-0" />
              <span className="truncate">Settings</span>
            </a>
          </div>
        </nav>
      </aside>
      <main className="flex-1 p-4 bg-gray-100/30">
        <p className="text-gray-500">Content with groups</p>
      </main>
    </div>
  );
}

function InteractiveSidebarSizes() {
  const [size, setSize] = useState("md");

  const sizeWidths: Record<string, string> = {
    sm: "w-64",
    md: "w-80",
    lg: "w-96",
    xl: "w-[32rem]",
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        {['sm', 'md', 'lg', 'xl'].map((s) => (
          <button
            key={s}
            className={`px-3 py-1 rounded-md text-sm ${size === s ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}
            onClick={() => setSize(s)}
          >
            {s.toUpperCase()}
          </button>
        ))}
      </div>
      <div className="flex h-48 w-full border border-gray-200 rounded-lg overflow-hidden">
        <aside className={`relative flex flex-col h-full bg-white border-r border-gray-200 ${sizeWidths[size]}`}>
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <span className="text-lg font-semibold text-gray-900 truncate">{size.toUpperCase()}</span>
          </div>
          <nav className="flex-1 overflow-y-auto p-2 space-y-1">
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium bg-gray-900 text-white hover:bg-gray-900">
              <Home className="w-5 h-5 shrink-0" />
              <span className="truncate">Home</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-colors">
              <Settings className="w-5 h-5 shrink-0" />
              <span className="truncate">Settings</span>
            </a>
          </nav>
        </aside>
      </div>
    </div>
  );
}

function InteractiveSidebarToggle() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="p-2 rounded-md hover:bg-gray-100 transition-colors"
        onClick={() => setIsOpen(true)}
        aria-label="Open menu"
      >
        <Menu className="w-5 h-5" />
      </button>
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsOpen(false)}
          />
          <aside className="fixed top-0 bottom-0 z-50 shadow-lg left-0 w-80 flex flex-col h-full bg-white border-r border-gray-200">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <span className="text-lg font-semibold text-gray-900 truncate">Menu</span>
              <button
                className="p-2 rounded-md hover:bg-gray-100 transition-colors"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto p-2 space-y-1">
              <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium bg-gray-900 text-white hover:bg-gray-900">
                <Home className="w-5 h-5 shrink-0" />
                <span className="truncate">Home</span>
              </a>
              <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-colors">
                <User className="w-5 h-5 shrink-0" />
                <span className="truncate">Profile</span>
              </a>
              <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-colors">
                <Settings className="w-5 h-5 shrink-0" />
                <span className="truncate">Settings</span>
              </a>
            </nav>
          </aside>
        </>
      )}
    </div>
  );
}

export default function SidebarPage() {
  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Sidebar</h1>
      <p className="text-gray-500 mb-8">
        A collapsible navigation sidebar for organizing and accessing app navigation.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Default Sidebar</h2>
        <DemoBlock
          preview={<InteractiveSidebarDefault />}
          code={`<div x-data="{ collapsed: false }" class="flex h-64 w-full max-w-md border border-gray-200 rounded-lg overflow-hidden">
  <aside :class="collapsed ? 'w-16' : 'w-80'"
    class="relative flex flex-col h-full bg-white border-r border-gray-200 transition-all duration-300"
    aria-label="Main navigation">
    <div class="flex items-center justify-between p-4 border-b border-gray-200">
      <span :class="collapsed ? 'hidden' : ''" class="text-lg font-semibold text-gray-900 truncate">AlpineUI</span>
      <button @click="collapsed = !collapsed" :class="collapsed ? 'mx-auto' : ''"
        class="p-2 rounded-md hover:bg-gray-100 transition-colors">
        <template x-if="collapsed">
          <svg class="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"/>
          </svg>
        </template>
        <template x-if="!collapsed">
          <svg class="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7"/>
          </svg>
        </template>
      </button>
    </div>
    <nav class="flex-1 overflow-y-auto p-2 space-y-1">
      <a href="#" :class="collapsed ? 'justify-center px-2.5' : ''"
        class="flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium bg-gray-900 text-white hover:bg-gray-900">
        <svg class="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
        </svg>
        <span :class="collapsed ? 'hidden' : 'truncate'">Home</span>
      </a>
      <a href="#" :class="collapsed ? 'justify-center px-2.5' : ''"
        class="flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-colors">
        <svg class="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
        </svg>
        <span :class="collapsed ? 'hidden' : 'truncate'">Profile</span>
      </a>
      <a href="#" :class="collapsed ? 'justify-center px-2.5' : ''"
        class="flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-colors">
        <svg class="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
        </svg>
        <span :class="collapsed ? 'hidden' : 'truncate'">Settings</span>
      </a>
    </nav>
  </aside>
  <main class="flex-1 p-4 bg-gray-100/30">
    <p class="text-gray-500">Main content area</p>
  </main>
</div>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">With Groups</h2>
        <DemoBlock
          preview={<InteractiveSidebarGroups />}
          code={`<aside class="relative flex flex-col h-full bg-white border-r border-gray-200 w-80">
  <nav class="flex-1 overflow-y-auto p-2 space-y-1">
    <div class="mb-4">
      <span class="block px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Main</span>
      <a href="#" class="flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium bg-gray-900 text-white hover:bg-gray-900">
        <svg class="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
        </svg>
        <span class="truncate">Home</span>
      </a>
    </div>
    <div class="mb-4">
      <span class="block px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Settings</span>
      <a href="#" class="flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-colors">
        <svg class="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
        </svg>
        <span class="truncate">Settings</span>
      </a>
    </div>
  </nav>
</aside>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Sizes</h2>
        <DemoBlock
          preview={<InteractiveSidebarSizes />}
          code={`<!-- Small: 16rem (w-64) -->
<aside class="relative flex flex-col h-full bg-white border-r border-gray-200 w-64">...</aside>

<!-- Medium: 20rem / default (w-80) -->
<aside class="relative flex flex-col h-full bg-white border-r border-gray-200 w-80">...</aside>

<!-- Large: 24rem (w-96) -->
<aside class="relative flex flex-col h-full bg-white border-r border-gray-200 w-96">...</aside>

<!-- Extra Large: 32rem (w-[32rem]) -->
<aside class="relative flex flex-col h-full bg-white border-r border-gray-200 w-[32rem]">...</aside>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Mobile Toggle</h2>
        <DemoBlock
          preview={<InteractiveSidebarToggle />}
          code={`<div x-data="{ open: false }" class="relative">
  <button @click="open = true"
    class="p-2 rounded-md hover:bg-gray-100 transition-colors">
    <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
    </svg>
  </button>
  <div x-show="open" class="fixed inset-0 bg-black/50 z-40" @click="open = false"></div>
  <aside x-show="open"
    class="fixed top-0 bottom-0 z-50 shadow-lg left-0 w-80 flex flex-col h-full bg-white border-r border-gray-200">
    <div class="flex items-center justify-between p-4 border-b border-gray-200">
      <span class="text-lg font-semibold text-gray-900 truncate">Menu</span>
      <button @click="open = false"
        class="p-2 rounded-md hover:bg-gray-100 transition-colors">
        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
    </div>
    <nav class="flex-1 overflow-y-auto p-2 space-y-1">
      <a href="#" class="flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium bg-gray-900 text-white hover:bg-gray-900">
        <svg class="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
        </svg>
        <span class="truncate">Home</span>
      </a>
      <a href="#" class="flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-colors">
        <svg class="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
        </svg>
        <span class="truncate">Settings</span>
      </a>
    </nav>
  </aside>
</div>`}
        />
      </section>
    </div>
  );
}
