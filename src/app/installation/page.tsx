import CodeBlock from "@/components/CodeBlock";

export default function InstallationPage() {
  return (
    <div className="p-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Installation</h1>
      <p className="text-gray-500 mb-8">
        AlpineUI is a copy-paste component library. No CLI, no npm install &mdash; just copy the HTML and use it.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Prerequisites</h2>
        <p className="text-gray-900 mb-4">
          Before using AlpineUI, make sure you have:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-500">
          <li>Alpine.js 3.x included in your project</li>
          <li>Tailwind CSS configured</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Usage</h2>
        <p className="text-gray-900 mb-4">
          Browse any component page, copy the HTML code shown in the &ldquo;Code&rdquo; tab, and paste it directly into your project.
          Each component uses Tailwind utility classes for styling and Alpine.js directives for interactivity &mdash; no additional CSS required.
        </p>
        <ol className="list-decimal list-inside space-y-2 text-gray-500">
          <li>Navigate to the component page you want to use</li>
          <li>Click the &ldquo;Code&rdquo; tab to see the HTML</li>
          <li>Copy the complete HTML snippet</li>
          <li>Paste it into your project file</li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Example</h2>
        <p className="text-gray-900 mb-4">
          Here is a complete example using Alpine.js + Tailwind CSS. No extra files needed:
        </p>
        <CodeBlock code={`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>My AlpineUI Project</title>
  <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
  <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
</head>
<body class="p-8">
  <div x-data="{ count: 0 }" class="text-center">
    <p class="text-lg mb-4">Count: <span x-text="count">0</span></p>
    <button @click="count++"
      class="inline-flex items-center justify-center gap-2 h-10 px-4 py-2 rounded-md bg-black text-white text-sm font-medium hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
      Increment
    </button>
  </div>
</body>
</html>`} />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Using with a Build Tool</h2>
        <p className="text-gray-900 mb-4">
          If you use Vite, Next.js, or another build tool, just install Alpine.js and Tailwind CSS normally, then copy any component HTML directly into your templates.
        </p>
      </section>
    </div>
  );
}
