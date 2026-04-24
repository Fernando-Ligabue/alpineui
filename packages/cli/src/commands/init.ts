import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import { bold, cyan } from 'kolorist';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '../../..');

export async function init(options: { yes?: boolean }) {
  console.log(bold(cyan('🚀 Initializing AlpineUI...')));

  const componentsDir = path.join(process.cwd(), 'components', 'alpineui');
  const cssFile = path.join(process.cwd(), 'components', 'alpineui.css');

  const cssContent = `@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
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
    --au-radius: 0.5rem;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}
`;

  const registryContent = `export const registry = {
  name: 'alpineui',
  version: '1.0.0',
};`;

  await fs.ensureDir(componentsDir);
  await fs.writeFile(cssFile, cssContent);
  await fs.writeFile(path.join(componentsDir, 'registry.js'), registryContent);

  console.log(bold(cyan('✅ AlpineUI initialized!')));
  console.log('');
  console.log('Next steps:');
  console.log('  1. Import the CSS in your HTML:');
  console.log(`     <link rel="stylesheet" href="./components/alpineui.css">`);
  console.log('');
  console.log('  2. Add your first component:');
  console.log('     npx @alpineui/cli add button');
}
