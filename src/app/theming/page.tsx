import CodeBlock from "@/components/CodeBlock";

export default function ThemingPage() {
  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-au-foreground mb-2">Theming</h1>
      <p className="text-au-muted-foreground mb-8">
        AlpineUI components use Tailwind utility classes for all styling. Customize components by changing the classes directly.
      </p>

      <section className="mb-12">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">How it works</h2>
        <p className="text-au-foreground mb-4">
          Every component snippet uses standard Tailwind utility classes. To customize, just modify the classes in the copied HTML:
        </p>
        <CodeBlock code={`<!-- Original: black button -->
<button class="inline-flex items-center justify-center gap-2 h-10 px-4 py-2 rounded-md bg-black text-white text-sm font-medium hover:opacity-90">
  Button
</button>

<!-- Customized: blue, pill, larger -->
<button class="inline-flex items-center justify-center gap-2 h-12 px-6 py-3 rounded-full bg-blue-600 text-white text-base font-medium hover:bg-blue-700">
  Button
</button>`} />
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Using your own CSS classes</h2>
        <p className="text-au-foreground mb-4">
          If you prefer, wrap components in your own styles using Tailwind&apos;s <code className="text-sm bg-au-secondary px-1 py-0.5 rounded text-au-foreground">@apply</code>:
        </p>
        <CodeBlock code={`/* your-styles.css */
.btn-primary {
  @apply inline-flex items-center justify-center gap-2 h-10 px-4 py-2 rounded-md bg-black text-white text-sm font-medium hover:opacity-90;
}

/* Then in HTML: <button class="btn-primary">Button</button> */`} />
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Design System (Portal)</h2>
        <p className="text-au-foreground mb-4">
          This portal uses a set of CSS custom properties for its own theme. If you are building a design system with Tailwind, you can define your own theme tokens in your <code className="text-sm bg-au-secondary px-1 py-0.5 rounded text-au-foreground">tailwind.config</code> or <code className="text-sm bg-au-secondary px-1 py-0.5 rounded text-au-foreground">globals.css</code>:
        </p>
        <CodeBlock code={`@theme {
  --color-primary: #0a0a0a;
  --color-primary-foreground: #ffffff;
  --color-background: #ffffff;
  --color-border: #e5e5e5;
}

/* Use in HTML: class="bg-primary text-primary-foreground" */`} />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Color Palette Reference</h2>
        <p className="text-au-foreground mb-4">
          The most common Tailwind color classes used across components. You can swap these for any Tailwind color:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ColorSwatch name="gray-900 (text)" classValue="text-gray-900" color="#111827" />
          <ColorSwatch name="gray-500 (muted)" classValue="text-gray-500" color="#6b7280" />
          <ColorSwatch name="gray-100 (bg)" classValue="bg-gray-100" color="#f3f4f6" />
          <ColorSwatch name="black (primary)" classValue="bg-black" color="#000000" />
          <ColorSwatch name="white (bg)" classValue="bg-white" color="#ffffff" />
          <ColorSwatch name="gray-200 (border)" classValue="border-gray-200" color="#e5e7eb" />
          <ColorSwatch name="red-600 (error)" classValue="bg-red-600" color="#dc2626" />
          <ColorSwatch name="green-500 (success)" classValue="bg-green-500" color="#22c55e" />
        </div>
      </section>
    </div>
  );
}

function ColorSwatch({ name, classValue, color }: { name: string; classValue: string; color: string }) {
  return (
    <div className="border border-au-border rounded-lg p-4">
      <div
        className="w-full h-12 rounded-md mb-2 border border-au-border"
        style={{ backgroundColor: color }}
      />
      <p className="text-sm font-medium text-au-foreground">{name}</p>
      <p className="text-xs text-au-muted-foreground font-mono">{classValue}</p>
    </div>
  );
}
