import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { I18nProvider } from "@/i18n/I18nProvider";
import LayoutWrapper from "@/components/LayoutWrapper";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alpineui.netlify.app"),
  title: "AlpineUI - Beautiful components for Alpine.js",
  description:
    "A collection of re-usable components built with Alpine.js and Tailwind CSS. Copy and paste beautifully designed components into your projects.",
  icons: {
    icon: "/alpine.ico",
  },

  openGraph: {
    title: "AlpineUI - Beautiful components for Alpine.js",
    description:
      "A collection of re-usable components built with Alpine.js and Tailwind CSS. Copy and paste beautifully designed components into your projects.",
    url: "https://alpineui.netlify.app",
    siteName: "AlpineUI",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/icon.svg",
        width: 512,
        height: 512,
        alt: "AlpineUI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AlpineUI - Beautiful components for Alpine.js",
    description:
      "A collection of re-usable components built with Alpine.js and Tailwind CSS.",
    images: ["/icon.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

const FOUC_SCRIPT = `(function(){var t=localStorage.getItem("au-theme");if(t==="light")return;if(t==="dark"||window.matchMedia("(prefers-color-scheme: dark)").matches)document.documentElement.classList.add("dark")})()`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {FOUC_SCRIPT}
        </Script>
      </head>
      <body className="min-h-full flex flex-col bg-au-background text-au-foreground" suppressHydrationWarning>
        <ThemeProvider>
          <I18nProvider>
            <LayoutWrapper>
              {children}
            </LayoutWrapper>
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
