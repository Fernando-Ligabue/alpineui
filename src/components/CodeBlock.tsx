"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

interface CodeBlockProps {
  code: string;
  className?: string;
}

export default function CodeBlock({ code, className = "" }: CodeBlockProps) {
  const { t } = useI18n();
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
    <div className={`relative group ${className}`}>
      <pre className="text-sm text-[#d4d4d4] bg-[#1e1e1e] rounded-md p-4 overflow-x-auto pr-16">
        <code>{code}</code>
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 flex items-center gap-1.5 px-2.5 py-1 text-xs text-au-muted-foreground hover:text-au-foreground hover:bg-au-accent rounded transition-all opacity-0 group-hover:opacity-100"
      >
        {copied ? (
          <>
            <Check className="w-3.5 h-3.5 text-au-primary" />
            <span className="text-au-primary">{t("common.copied")}</span>
          </>
        ) : (
          <>
            <Copy className="w-3.5 h-3.5" />
            <span>{t("common.copy")}</span>
          </>
        )}
      </button>
    </div>
  );
}