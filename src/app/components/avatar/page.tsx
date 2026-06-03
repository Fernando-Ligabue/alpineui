"use client";

import { useState } from "react";
import { User } from "lucide-react";
import DemoBlock from "@/components/DemoBlock";
import { useI18n } from "@/i18n/I18nProvider";

const sizeClasses: Record<string, string> = {
  xs: "w-6 h-6",
  sm: "w-8 h-8",
  md: "w-10 h-10",
  lg: "w-16 h-16",
  xl: "w-24 h-24",
};

const fallbackTextClasses: Record<string, string> = {
  xs: "text-[10px]",
  sm: "text-xs",
  md: "text-sm",
  lg: "text-lg",
  xl: "text-2xl",
};

function AvatarWithFallback({ size }: { size: string }) {
  const [hasError, setHasError] = useState(false);
  const fallback = "JD";

  return (
    <div className={`relative flex shrink-0 overflow-hidden rounded-full ${sizeClasses[size] || ""}`}>
      {hasError ? (
        <div className={`flex h-full w-full items-center justify-center rounded-full bg-au-secondary text-au-muted-foreground font-medium ${fallbackTextClasses[size] || ""}`}>
          {fallback}
        </div>
      ) : (
        <img
          src="https://i.pravatar.cc/150?img=1"
          alt="Avatar"
          className="aspect-square h-full w-full object-cover"
          onError={() => setHasError(true)}
        />
      )}
    </div>
  );
}

function InteractiveAvatars() {
  return (
    <div className="flex items-end gap-4">
      {["xs", "sm", "md", "lg", "xl"].map((size) => (
        <div key={size} className="flex flex-col items-center gap-2">
          <AvatarWithFallback size={size} />
          <span className="text-xs text-au-muted-foreground">{size}</span>
        </div>
      ))}
    </div>
  );
}

function InteractiveAvatarShapes() {
  return (
    <div className="flex items-end gap-4">
      <div className="flex flex-col items-center gap-2">
        <div className="relative flex shrink-0 overflow-hidden rounded-full w-10 h-10">
          <img src="https://i.pravatar.cc/150?img=2" alt="Circle" className="aspect-square h-full w-full object-cover" />
        </div>
        <span className="text-xs text-au-muted-foreground">circle</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="relative flex shrink-0 overflow-hidden rounded-none w-10 h-10">
          <img src="https://i.pravatar.cc/150?img=3" alt="Square" className="aspect-square h-full w-full object-cover" />
        </div>
        <span className="text-xs text-au-muted-foreground">square</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="relative flex shrink-0 overflow-hidden rounded-md w-10 h-10">
          <img src="https://i.pravatar.cc/150?img=4" alt="Rounded" className="aspect-square h-full w-full object-cover" />
        </div>
        <span className="text-xs text-au-muted-foreground">rounded</span>
      </div>
    </div>
  );
}

function InteractiveAvatarStatus() {
  return (
    <div className="flex gap-4">
      <div className="relative">
        <div className="relative flex shrink-0 overflow-hidden rounded-full w-10 h-10">
          <img src="https://i.pravatar.cc/150?img=5" alt="Online" className="aspect-square h-full w-full object-cover" />
        </div>
        <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-au-background bg-green-500" />
      </div>
      <div className="relative">
        <div className="relative flex shrink-0 overflow-hidden rounded-full w-10 h-10">
          <img src="https://i.pravatar.cc/150?img=6" alt="Busy" className="aspect-square h-full w-full object-cover" />
        </div>
        <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-au-background bg-red-500" />
      </div>
      <div className="relative">
        <div className="relative flex shrink-0 overflow-hidden rounded-full w-10 h-10">
          <img src="https://i.pravatar.cc/150?img=7" alt="Away" className="aspect-square h-full w-full object-cover" />
        </div>
        <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-au-background bg-yellow-500" />
      </div>
      <div className="relative">
        <div className="relative flex shrink-0 overflow-hidden rounded-full w-10 h-10">
          <img src="https://i.pravatar.cc/150?img=8" alt="Offline" className="aspect-square h-full w-full object-cover" />
        </div>
        <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-au-background bg-gray-400" />
      </div>
    </div>
  );
}

function InteractiveAvatarGroup() {
  const users = [
    { src: "https://i.pravatar.cc/150?img=10", fallback: "JD" },
    { src: "https://i.pravatar.cc/150?img=11", fallback: "AS" },
    { src: "https://i.pravatar.cc/150?img=12", fallback: "MW" },
    { src: "https://i.pravatar.cc/150?img=13", fallback: "RK" },
  ];
  const extra = users.length - 3;

  return (
    <div className="flex -space-x-2">
      {users.slice(0, 3).map((user, i) => (
        <div key={i} className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8 ring-2 ring-au-background">
          <img src={user.src} alt={user.fallback} className="aspect-square h-full w-full object-cover" />
        </div>
      ))}
      <div className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8 ring-2 ring-au-background flex items-center justify-center bg-au-secondary text-xs font-medium text-au-muted-foreground">
        +{extra}
      </div>
    </div>
  );
}

export default function AvatarPage() {
  const { t } = useI18n();
  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-au-foreground mb-2">{t("avatar.title")}</h1>
      <p className="text-au-muted-foreground mb-8">
        {t("avatar.description")}
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">{t("common.interactiveDemo")}</h2>
        <DemoBlock
          preview={
            <div className="flex gap-4">
              <div className="relative flex shrink-0 overflow-hidden rounded-full w-10 h-10">
                <img src="https://i.pravatar.cc/150?img=20" alt="User" className="aspect-square h-full w-full object-cover" />
              </div>
              <div className="relative flex shrink-0 overflow-hidden rounded-full w-10 h-10">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-au-secondary text-au-muted-foreground font-medium text-sm">JD</div>
              </div>
              <div className="relative flex shrink-0 overflow-hidden rounded-full w-10 h-10">
                <User className="w-6 h-6 text-au-muted-foreground" />
              </div>
            </div>
          }
          code={`// With image
<div class="relative flex shrink-0 overflow-hidden rounded-full w-10 h-10">
  <img src="..." class="aspect-square h-full w-full object-cover" />
</div>

// With fallback
<div class="relative flex shrink-0 overflow-hidden rounded-full w-10 h-10">
  <div class="flex h-full w-full items-center justify-center rounded-full bg-gray-100 text-gray-600 font-medium text-sm">JD</div>
</div>

// With icon
<div class="relative flex shrink-0 overflow-hidden rounded-full w-10 h-10">
  <svg class="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
</div>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">{t("common.sizes")}</h2>
        <DemoBlock preview={<InteractiveAvatars />} code={`<div class="relative flex shrink-0 overflow-hidden rounded-full w-6 h-6">...</div>
<div class="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">...</div>
<div class="relative flex shrink-0 overflow-hidden rounded-full w-10 h-10">...</div>
<div class="relative flex shrink-0 overflow-hidden rounded-full w-16 h-16">...</div>
<div class="relative flex shrink-0 overflow-hidden rounded-full w-24 h-24">...</div>`} />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">{t("common.shapes")}</h2>
        <DemoBlock preview={<InteractiveAvatarShapes />} code={`<div class="relative flex shrink-0 overflow-hidden rounded-full w-10 h-10">...</div>
<div class="relative flex shrink-0 overflow-hidden rounded-none w-10 h-10">...</div>
<div class="relative flex shrink-0 overflow-hidden rounded-md w-10 h-10">...</div>`} />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">{t("common.status")}</h2>
        <DemoBlock preview={<InteractiveAvatarStatus />} code={`<div class="relative">
  <div class="relative flex shrink-0 overflow-hidden rounded-full w-10 h-10">...</div>
  <div class="absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white bg-green-500"></div>
</div>`} />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">{t("common.avatarGroup")}</h2>
        <DemoBlock preview={<InteractiveAvatarGroup />} code={`<div class="flex -space-x-2">
  <div class="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8 ring-2 ring-white">...</div>
  <div class="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8 ring-2 ring-white">...</div>
  <div class="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8 ring-2 ring-white flex items-center justify-center bg-gray-100 text-xs font-medium text-gray-600">+N</div>
</div>`} />
      </section>
    </div>
  );
}
