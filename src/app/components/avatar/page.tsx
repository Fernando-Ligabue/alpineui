"use client";

import { useState } from "react";
import { User } from "lucide-react";
import DemoBlock from "@/components/DemoBlock";
import { InstallCommand } from "@/components/InstallCommand";

function AvatarWithFallback({ size }: { size: string }) {
  const [hasError, setHasError] = useState(false);
  const fallback = "JD";

  return (
    <div className={`au-avatar au-avatar-${size} au-avatar-circle relative`}>
      {hasError ? (
        <div className="au-avatar-fallback">{fallback}</div>
      ) : (
        <img
          src="https://i.pravatar.cc/150?img=1"
          alt="Avatar"
          className="au-avatar-image"
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
        <div className="au-avatar au-avatar-md au-avatar-circle">
          <img src="https://i.pravatar.cc/150?img=2" alt="Circle" className="au-avatar-image" />
        </div>
        <span className="text-xs text-au-muted-foreground">circle</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="au-avatar au-avatar-md au-avatar-square">
          <img src="https://i.pravatar.cc/150?img=3" alt="Square" className="au-avatar-image" />
        </div>
        <span className="text-xs text-au-muted-foreground">square</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="au-avatar au-avatar-md au-avatar-rounded">
          <img src="https://i.pravatar.cc/150?img=4" alt="Rounded" className="au-avatar-image" />
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
        <div className="au-avatar au-avatar-md au-avatar-circle">
          <img src="https://i.pravatar.cc/150?img=5" alt="Online" className="au-avatar-image" />
        </div>
        <div className="au-avatar-status au-avatar-status-online" />
      </div>
      <div className="relative">
        <div className="au-avatar au-avatar-md au-avatar-circle">
          <img src="https://i.pravatar.cc/150?img=6" alt="Busy" className="au-avatar-image" />
        </div>
        <div className="au-avatar-status au-avatar-status-busy" />
      </div>
      <div className="relative">
        <div className="au-avatar au-avatar-md au-avatar-circle">
          <img src="https://i.pravatar.cc/150?img=7" alt="Away" className="au-avatar-image" />
        </div>
        <div className="au-avatar-status au-avatar-status-away" />
      </div>
      <div className="relative">
        <div className="au-avatar au-avatar-md au-avatar-circle">
          <img src="https://i.pravatar.cc/150?img=8" alt="Offline" className="au-avatar-image" />
        </div>
        <div className="au-avatar-status au-avatar-status-offline" />
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
    <div className="au-avatar-group">
      {users.slice(0, 3).map((user, i) => (
        <div key={i} className="au-avatar au-avatar-sm au-avatar-circle">
          <img src={user.src} alt={user.fallback} className="au-avatar-image" />
        </div>
      ))}
      <div className="au-avatar au-avatar-sm au-avatar-circle au-avatar-group-counter">
        +{extra}
      </div>
    </div>
  );
}

export default function AvatarPage() {
  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-au-foreground mb-2">Avatar</h1>
      <p className="text-au-muted-foreground mb-8">
        A user avatar component with fallback support.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Installation</h2>
        <InstallCommand command="npx alpineui add avatar" />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Interactive Demo</h2>
        <DemoBlock
          preview={
            <div className="flex gap-4">
              <div className="au-avatar au-avatar-md au-avatar-circle">
                <img src="https://i.pravatar.cc/150?img=20" alt="User" className="au-avatar-image" />
              </div>
              <div className="au-avatar au-avatar-md au-avatar-circle">
                <div className="au-avatar-fallback">JD</div>
              </div>
              <div className="au-avatar au-avatar-md au-avatar-circle">
                <User className="w-6 h-6 text-au-muted-foreground" />
              </div>
            </div>
          }
          code={`// With image
<div class="au-avatar au-avatar-md au-avatar-circle">
  <img src="..." class="au-avatar-image" />
</div>

// With fallback
<div class="au-avatar au-avatar-md au-avatar-circle">
  <div class="au-avatar-fallback">JD</div>
</div>

// With icon
<div class="au-avatar au-avatar-md au-avatar-circle">
  <UserIcon />
</div>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Sizes</h2>
        <DemoBlock preview={<InteractiveAvatars />} code={`<div class="au-avatar au-avatar-xs">...</div>
<div class="au-avatar au-avatar-sm">...</div>
<div class="au-avatar au-avatar-md">...</div>
<div class="au-avatar au-avatar-lg">...</div>
<div class="au-avatar au-avatar-xl">...</div>`} />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Shapes</h2>
        <DemoBlock preview={<InteractiveAvatarShapes />} code={`<div class="au-avatar au-avatar-md au-avatar-circle">...</div>
<div class="au-avatar au-avatar-md au-avatar-square">...</div>
<div class="au-avatar au-avatar-md au-avatar-rounded">...</div>`} />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Status</h2>
        <DemoBlock preview={<InteractiveAvatarStatus />} code={`<div class="au-avatar au-avatar-status au-avatar-status-online"></div>
<div class="au-avatar au-avatar-status au-avatar-status-busy"></div>
<div class="au-avatar au-avatar-status au-avatar-status-away"></div>
<div class="au-avatar au-avatar-status au-avatar-status-offline"></div>`} />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Avatar Group</h2>
        <DemoBlock preview={<InteractiveAvatarGroup />} code={`<div class="au-avatar-group">
  <div class="au-avatar">...</div>
  <div class="au-avatar">...</div>
  <div class="au-avatar au-avatar-group-counter">+N</div>
</div>`} />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">CSS Classes Reference</h2>
        <div className="border border-au-border rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-au-secondary">
              <tr>
                <th className="text-left px-4 py-3 font-medium">Class</th>
                <th className="text-left px-4 py-3 font-medium">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-au-border">
              <tr><td className="px-4 py-2 font-mono text-xs">au-avatar</td><td className="px-4 py-2">Container base</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-avatar-xs|sm|md|lg|xl</td><td className="px-4 py-2">Sizes</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-avatar-circle|square|rounded</td><td className="px-4 py-2">Shapes</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-avatar-image</td><td className="px-4 py-2">Image element</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-avatar-fallback</td><td className="px-4 py-2">Fallback text</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-avatar-status</td><td className="px-4 py-2">Status indicator</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-avatar-status-online|offline|busy|away</td><td className="px-4 py-2">Status colors</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-avatar-group</td><td className="px-4 py-2">Group container</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}