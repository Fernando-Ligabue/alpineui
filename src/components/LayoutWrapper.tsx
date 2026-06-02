"use client";

import { useState } from "react";
import MobileHeader from "./MobileHeader";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <div className="layout-wrapper">
      {/* Skip to content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-au-primary focus:text-au-primary-foreground focus:rounded-md focus:text-sm focus:font-medium"
      >
        Skip to content
      </a>

      {/* Mobile Header */}
      <MobileHeader onMenuToggle={toggleSidebar} isOpen={sidebarOpen} />

      {/* Desktop Sidebar - always visible on desktop via CSS */}
      <div className="desktop-sidebar">
        <Sidebar />
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <>
          <div
            className="mobile-overlay"
            onClick={closeSidebar}
            aria-hidden="true"
          />
          <div className={`mobile-sidebar ${sidebarOpen ? 'open' : ''}`}>
            <Sidebar onClose={closeSidebar} />
          </div>
        </>
      )}

      {/* Main Content */}
      <main id="main-content" className="main-content pb-12" tabIndex={-1}>
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
