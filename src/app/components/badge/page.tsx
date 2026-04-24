import DemoBlock from "@/components/DemoBlock";
import { InstallCommand } from "@/components/InstallCommand";

export default function BadgePage() {
  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-au-foreground mb-2">Badge</h1>
      <p className="text-au-muted-foreground mb-8">
        A small status indicator or label component.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Installation</h2>
        <InstallCommand command="npx alpineui add badge" />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Variants</h2>
        <DemoBlock
          preview={
            <div className="flex flex-wrap gap-3 items-center justify-center">
              <span className="au-badge au-badge-default">Default</span>
              <span className="au-badge au-badge-secondary">Secondary</span>
              <span className="au-badge au-badge-destructive">Destructive</span>
              <span className="au-badge au-badge-outline">Outline</span>
              <span className="au-badge au-badge-ghost">Ghost</span>
              <span className="au-badge au-badge-link">Link</span>
            </div>
          }
          code={`<span class="au-badge au-badge-default">Default</span>
<span class="au-badge au-badge-secondary">Secondary</span>
<span class="au-badge au-badge-destructive">Destructive</span>
<span class="au-badge au-badge-outline">Outline</span>
<span class="au-badge au-badge-ghost">Ghost</span>
<span class="au-badge au-badge-link">Link</span>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Sizes</h2>
        <DemoBlock
          preview={
            <div className="flex flex-wrap gap-3 items-center justify-center">
              <span className="au-badge au-badge-sm au-badge-default">Small</span>
              <span className="au-badge au-badge-default">Default</span>
              <span className="au-badge au-badge-lg au-badge-default">Large</span>
            </div>
          }
          code={`<span class="au-badge au-badge-sm au-badge-default">Small</span>
<span class="au-badge au-badge-default">Default</span>
<span class="au-badge au-badge-lg au-badge-default">Large</span>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">With Status Dot</h2>
        <DemoBlock
          preview={
            <div className="flex flex-wrap gap-3 items-center justify-center">
              <span className="au-badge au-badge-default au-badge-dot">Online</span>
              <span className="au-badge au-badge-secondary au-badge-dot">Away</span>
              <span className="au-badge au-badge-destructive au-badge-dot">Offline</span>
            </div>
          }
          code={`<span class="au-badge au-badge-default au-badge-dot">Online</span>
<span class="au-badge au-badge-secondary au-badge-dot">Away</span>
<span class="au-badge au-badge-destructive au-badge-dot">Offline</span>`}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Usage Examples</h2>
        <DemoBlock
          preview={
            <div className="flex flex-col gap-4 w-full max-w-sm">
              <div className="flex items-center gap-3">
                <img src="https://i.pravatar.cc/40?img=1" alt="User" className="w-10 h-10 rounded-full" />
                <div className="flex-1">
                  <p className="font-medium">John Smith</p>
                  <p className="text-sm text-au-muted-foreground">john@example.com</p>
                </div>
                <span className="au-badge au-badge-secondary">Pro</span>
              </div>
              <div className="flex items-center gap-3">
                <img src="https://i.pravatar.cc/40?img=2" alt="User" className="w-10 h-10 rounded-full" />
                <div className="flex-1">
                  <p className="font-medium">Jane Doe</p>
                  <p className="text-sm text-au-muted-foreground">jane@example.com</p>
                </div>
                <span className="au-badge au-badge-outline">Free</span>
              </div>
            </div>
          }
          code={`<div class="flex items-center gap-3">
  <img src="..." class="w-10 h-10 rounded-full" />
  <div class="flex-1">
    <p class="font-medium">Name</p>
    <p class="text-sm text-au-muted-foreground">email</p>
  </div>
  <span class="au-badge au-badge-secondary">Pro</span>
</div>`}
        />
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
              <tr><td className="px-4 py-2 font-mono text-xs">au-badge</td><td className="px-4 py-2">Container base</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-badge-default</td><td className="px-4 py-2">Default style</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-badge-secondary</td><td className="px-4 py-2">Secondary style</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-badge-destructive</td><td className="px-4 py-2">Destructive style</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-badge-outline</td><td className="px-4 py-2">Outline style</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-badge-ghost</td><td className="px-4 py-2">Ghost style</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-badge-link</td><td className="px-4 py-2">Link style</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-badge-sm</td><td className="px-4 py-2">Small size</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-badge-lg</td><td className="px-4 py-2">Large size</td></tr>
              <tr><td className="px-4 py-2 font-mono text-xs">au-badge-dot</td><td className="px-4 py-2">With status dot</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}