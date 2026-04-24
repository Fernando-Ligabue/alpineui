import { InstallCommand } from "@/components/InstallCommand";

export default function ThemingPage() {
  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-au-foreground mb-2">Theming</h1>
      <p className="text-au-muted-foreground mb-8">
        Customize AlpineUI components to match your design system.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">CSS Variables</h2>
        <p className="text-au-foreground mb-4">
          AlpineUI uses CSS custom properties (variables) for theming. Override these variables to customize the appearance:
        </p>
        <div className="bg-[#1e1e1e] rounded-md overflow-hidden">
          <div className="px-4 py-2 bg-[#252526] border-b border-[#3c3c3c]">
            <span className="text-xs text-[#858585]">CSS</span>
          </div>
          <pre className="p-4 text-sm text-[#d4d4d4] overflow-x-auto">
            <code>{`:root {
  /* Colors */
  --au-background: #ffffff;
  --au-foreground: #0a0a0a;
  --au-primary: #0a0a0a;
  --au-primary-foreground: #ffffff;
  --au-secondary: #f5f5f5;
  --au-secondary-foreground: #0a0a0a;
  --au-muted: #f5f5f5;
  --au-muted-foreground: #737373;
  --au-accent: #f5f5f5;
  --au-accent-foreground: #0a0a0a;
  --au-destructive: #ef4444;
  --au-destructive-foreground: #ffffff;
  --au-border: #e5e5e5;
  --au-ring: #0a0a0a;
  
  /* Border Radius */
  --au-radius: 0.5rem;
}`}</code>
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Color Palette</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ColorSwatch name="Primary" variable="--au-primary" />
          <ColorSwatch name="Secondary" variable="--au-secondary" />
          <ColorSwatch name="Muted" variable="--au-muted" />
          <ColorSwatch name="Destructive" variable="--au-destructive" />
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Dark Mode</h2>
        <p className="text-au-foreground mb-4">
          To enable dark mode, override the CSS variables in your dark mode selector:
        </p>
        <div className="bg-[#1e1e1e] rounded-md overflow-hidden">
          <div className="px-4 py-2 bg-[#252526] border-b border-[#3c3c3c]">
            <span className="text-xs text-[#858585]">CSS</span>
          </div>
          <pre className="p-4 text-sm text-[#d4d4d4] overflow-x-auto">
            <code>{`@media (prefers-color-scheme: dark) {
  :root {
    --au-background: #0a0a0a;
    --au-foreground: #ffffff;
    --au-primary: #ffffff;
    --au-primary-foreground: #0a0a0a;
    --au-secondary: #1a1a1a;
    --au-secondary-foreground: #ffffff;
    --au-muted: #1a1a1a;
    --au-muted-foreground: #a3a3a3;
    --au-border: #262626;
  }
}`}</code>
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Custom Colors</h2>
        <p className="text-au-foreground mb-4">
          You can also create your own color scheme by modifying the CSS variables:
        </p>
        <div className="bg-[#1e1e1e] rounded-md overflow-hidden">
          <div className="px-4 py-2 bg-[#252526] border-b border-[#3c3c3c]">
            <span className="text-xs text-[#858585]">CSS</span>
          </div>
          <pre className="p-4 text-sm text-[#d4d4d4] overflow-x-auto">
            <code>{`/* Blue theme */
:root {
  --au-primary: #2563eb;
  --au-primary-foreground: #ffffff;
  --au-ring: #2563eb;
}

/* Purple theme */
:root {
  --au-primary: #7c3aed;
  --au-primary-foreground: #ffffff;
  --au-ring: #7c3aed;
}`}</code>
          </pre>
        </div>
      </section>
    </div>
  );
}

function ColorSwatch({ name, variable }: { name: string; variable: string }) {
  return (
    <div className="border border-au-border rounded-lg p-4">
      <div 
        className="w-full h-12 rounded-md mb-2"
        style={{ 
          backgroundColor: variable === '--au-primary' ? '#0a0a0a' : 
                          variable === '--au-secondary' ? '#f5f5f5' : 
                          variable === '--au-muted' ? '#f5f5f5' : 
                          variable === '--au-destructive' ? '#ef4444' : '#ccc'
        }}
      />
      <p className="text-sm font-medium text-au-foreground">{name}</p>
      <p className="text-xs text-au-muted-foreground font-mono">{variable}</p>
    </div>
  );
}
