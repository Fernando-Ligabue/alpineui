import { bold, cyan, dim } from 'kolorist';

const COMPONENTS = [
  {
    name: 'button',
    displayName: 'Button',
    description: 'Displays a button or a link that looks like a button',
    status: 'available',
  },
  {
    name: 'input',
    displayName: 'Input',
    description: 'Displays an input field',
    status: 'coming-soon',
  },
  {
    name: 'card',
    displayName: 'Card',
    description: 'Displays a card with header, content and footer',
    status: 'coming-soon',
  },
  {
    name: 'badge',
    displayName: 'Badge',
    description: 'Displays a badge',
    status: 'coming-soon',
  },
  {
    name: 'dialog',
    displayName: 'Dialog',
    description: 'Displays a dialog box',
    status: 'coming-soon',
  },
  {
    name: 'dropdown',
    displayName: 'Dropdown',
    description: 'Displays a dropdown menu',
    status: 'coming-soon',
  },
  {
    name: 'tabs',
    displayName: 'Tabs',
    description: 'Displays a tabs component',
    status: 'coming-soon',
  },
  {
    name: 'accordion',
    displayName: 'Accordion',
    description: 'Displays an accordion component',
    status: 'coming-soon',
  },
  {
    name: 'toast',
    displayName: 'Toast',
    description: 'Displays a toast notification',
    status: 'coming-soon',
  },
];

export async function list() {
  console.log(bold(cyan('\n📦 Available Components\n')));

  const available = COMPONENTS.filter((c) => c.status === 'available');
  const comingSoon = COMPONENTS.filter((c) => c.status === 'coming-soon');

  if (available.length > 0) {
    console.log(bold('Available:'));
    for (const component of available) {
      console.log(`  ${bold(cyan(component.name))} - ${component.description}`);
    }
    console.log('');
  }

  if (comingSoon.length > 0) {
    console.log(bold('Coming Soon:'));
    for (const component of comingSoon) {
      console.log(`${dim('  ')}${dim(component.name)} - ${dim(component.description)}`);
    }
  }

  console.log('');
  console.log(dim('Run "alpineui add <component>" to add a component.'));
}
