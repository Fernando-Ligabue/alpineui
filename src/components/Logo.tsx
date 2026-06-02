"use client";

import { useId } from "react";
import Link from "next/link";

interface LogoProps {
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

export default function Logo({ showText = true, size = "md" }: LogoProps) {
  const gradId = useId();
  const iconSize = size === "sm" ? 28 : size === "lg" ? 40 : 32;
  const fontSize = size === "sm" ? "text-base" : size === "lg" ? "text-2xl" : "text-lg";

  return (
    <Link href="/" className="flex items-center gap-2 shrink-0">
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        </defs>

        {/* Back mountain (smaller, left) */}
        <path
          d="M2 28 L8 12 L16 28"
          stroke={`url(#${gradId})`}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.5"
        />

        {/* Main mountain (tallest, center-right) — the Alps peak */}
        <path
          d="M10 28 L22 2 L30 28"
          stroke={`url(#${gradId})`}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Right foothill */}
        <path
          d="M18 28 L26 16 L32 28"
          stroke={`url(#${gradId})`}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.6"
        />

        {/* Snow cap on main peak — organic shape */}
        <path
          d="M22 2 L17.5 14 Q19 12.5 18.5 15 Q20 14 19.5 16 L24.5 16 Q24 14 25.5 15 Q25 12.5 26.5 14 Z"
          fill={`url(#${gradId})`}
          opacity="0.3"
        />

        {/* Snow cap outline */}
        <path
          d="M17.5 14 Q19 12.5 18.5 15 Q20 14 19.5 16 L24.5 16 Q24 14 25.5 15 Q25 12.5 26.5 14"
          stroke={`url(#${gradId})`}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity="0.6"
        />
      </svg>

      {showText && (
        <span className={`${fontSize} font-extrabold tracking-tight`}>
          <span
            style={{
              background: "linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Alpine
          </span>
          <span className="text-au-foreground">UI</span>
        </span>
      )}
    </Link>
  );
}
