import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import { bold, cyan, red, yellow } from 'kolorist';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const packagesDir = path.resolve(__dirname, '../../..');

const COMPONENTS: Record<string, { name: string; description: string; version: string }> = {
  button: {
    name: 'Button',
    description: 'Displays a button or a link that looks like a button',
    version: '1.0.0',
  },
  input: {
    name: 'Input',
    description: 'Displays an input field',
    version: '1.0.0',
  },
  card: {
    name: 'Card',
    description: 'Displays a card with header, content and footer',
    version: '1.0.0',
  },
  badge: {
    name: 'Badge',
    description: 'Displays a badge',
    version: '1.0.0',
  },
};

export async function add(components: string[], options: { yes?: boolean; overwrite?: boolean }) {
  const componentsDir = path.join(process.cwd(), 'components', 'alpineui');
  const invalidComponents: string[] = [];

  for (const component of components) {
    if (!COMPONENTS[component]) {
      invalidComponents.push(component);
      continue;
    }

    const componentDir = path.join(componentsDir, component);
    const sourceDir = path.join(packagesDir, 'ui', component);

    if (!fs.existsSync(sourceDir)) {
      console.log(yellow(`⚠ Component "${component}" not found in source.`));
      continue;
    }

    await fs.ensureDir(componentDir);

    if (options.overwrite) {
      await fs.emptyDir(componentDir);
    }

    const files = await fs.readdir(sourceDir);
    for (const file of files) {
      const sourceFile = path.join(sourceDir, file);
      const destFile = path.join(componentDir, file);
      
      if (fs.statSync(sourceFile).isFile()) {
        await fs.copy(sourceFile, destFile, { overwrite: options.overwrite });
        console.log(bold(cyan(`✓ Added ${component}/${file}`)));
      }
    }
  }

  if (invalidComponents.length > 0) {
    console.log(red(`\n❌ Unknown components: ${invalidComponents.join(', ')}`));
    console.log(yellow(`Run "alpineui list" to see available components.`));
  }

  console.log(bold(cyan('\n✅ Done!')));
  console.log(`\nImport in your HTML:`);
  console.log(`<script defer src="./components/alpineui/${components[0]}.js"></script>`);
}
