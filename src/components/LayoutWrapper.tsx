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
      <main className="main-content pb-12">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
