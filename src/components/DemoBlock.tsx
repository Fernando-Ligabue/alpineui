"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import clsx from "clsx";

interface DemoBlockProps {
  preview: React.ReactNode;
  code: string;
  title?: string;
}

export default function DemoBlock({ preview, code, title }: DemoBlockProps) {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");
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

  const highlightedCode = code
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  return (
    <div className="demo-block">
      <div className="demo-header">
        <button
          className={clsx("demo-tab", activeTab === "preview" && "active")}
          onClick={() => setActiveTab("preview")}
        >
          Preview
        </button>
        <button
          className={clsx("demo-tab", activeTab === "code" && "active")}
          onClick={() => setActiveTab("code")}
        >
          Code
        </button>
        <button
          onClick={handleCopy}
          className="ml-auto mr-3 flex items-center gap-1.5 px-2.5 py-1 text-xs text-au-muted-foreground hover:text-au-foreground hover:bg-au-accent rounded transition-colors"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-green-600" />
              <span className="text-green-600">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      
      {activeTab === "preview" ? (
        <div className="demo-preview">{preview}</div>
      ) : (
        <div className="demo-code">
          <pre className="!bg-[#1e1e1e] !text-[#d4d4d4] !p-4 !m-0 !rounded-none !text-sm">
            <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
          </pre>
        </div>
      )}
    </div>
  );
}
