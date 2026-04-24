import { InstallCommand } from "@/components/InstallCommand";

export default function InstallationPage() {
  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-au-foreground mb-2">Installation</h1>
      <p className="text-au-muted-foreground mb-8">
        Learn how to install and set up AlpineUI in your project.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Prerequisites</h2>
        <p className="text-au-foreground mb-4">
          Before installing AlpineUI, make sure you have:
        </p>
        <ul className="list-disc list-inside space-y-2 text-au-muted-foreground">
          <li>Node.js 18 or higher</li>
          <li>Alpine.js 3.x installed in your project</li>
          <li>Tailwind CSS configured</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Install a Component</h2>
        <p className="text-au-foreground mb-4">
          Use the CLI to add components to your project:
        </p>
        <InstallCommand command="npx alpineui add button" />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Install Multiple Components</h2>
        <p className="text-au-foreground mb-4">
          Add multiple components at once:
        </p>
        <InstallCommand command="npx alpineui add button input card" />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Manual Installation</h2>
        <p className="text-au-foreground mb-4">
          Alternatively, you can manually copy the component files to your project:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-au-muted-foreground">
          <li>Copy the component CSS file to your styles directory</li>
          <li>Copy the component JS file to your scripts directory</li>
          <li>Include the CSS in your HTML</li>
          <li>Include the JS before Alpine.js initialization</li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-au-foreground mb-4">Using via CDN</h2>
        <p className="text-au-foreground mb-4">
          For quick prototyping, you can use the components via CDN:
        </p>
        <div className="bg-[#1e1e1e] rounded-md p-4 overflow-x-auto">
          <pre className="text-sm text-[#d4d4d4]">
            <code>
{`<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
<link rel="stylesheet" href="https://unpkg.com/@Fernando-Ligabue/button/styles.css">`}
            </code>
          </pre>
        </div>
      </section>
    </div>
  );
}
