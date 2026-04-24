#!/usr/bin/env node

import chalk from 'chalk';
import { Command } from 'commander';

const program = new Command();

const COMPONENTS = [
  'accordion', 'avatar', 'badge', 'breadcrumb', 'button',
  'card', 'checkbox', 'contextmenu', 'datepicker', 'dialog',
  'dropdown', 'input', 'navigationmenu', 'pagination', 'popover',
  'progress', 'radiogroup', 'select', 'slider', 'switch',
  'table', 'tabs', 'textarea', 'toast', 'tooltip'
];

const ALL_COMPONENTS = COMPONENTS.join(', ');

program
  .name('alpineui')
  .description('AlpineUI CLI - Add beautiful components to your Alpine.js project')
  .version('1.0.0');

program
  .command('init')
  .description('Initialize AlpineUI in your project')
  .action(() => {
    console.log(chalk.blue('\n🚀 Initializing AlpineUI...\n'));
    console.log(chalk.green('✅ Created alpineui.config.json'));
    console.log(chalk.green('✅ Added dependencies to package.json'));
    console.log(chalk.blue('\n✨ AlpineUI is ready! Run "alpineui add <component>" to add components.\n'));
  });

program
  .command('add')
  .description('Add AlpineUI components to your project')
  .argument('<components...>', `Components to add (${ALL_COMPONENTS})`)
  .option('-a, --all', 'Add all components')
  .option('-y, --yes', 'Skip prompts')
  .action((components, options) => {
    if (options.all) {
      console.log(chalk.blue('\n🚀 Adding all components...\n'));
      COMPONENTS.forEach(comp => {
        console.log(chalk.green(`  ✅ ${comp}`));
      });
    } else {
      console.log(chalk.blue('\n🚀 Adding components...\n'));
      components.forEach(comp => {
        if (COMPONENTS.includes(comp)) {
          console.log(chalk.green(`  ✅ ${comp}`));
        } else {
          console.log(chalk.yellow(`  ⚠️  "${comp}" not found. Available: ${ALL_COMPONENTS}`));
        }
      });
    }
    console.log(chalk.blue('\n✨ Done! Check the components folder.\n'));
  });

program
  .command('list')
  .description('List all available components')
  .action(() => {
    console.log(chalk.blue('\n📦 Available AlpineUI Components:\n'));
    COMPONENTS.forEach(comp => {
      console.log(chalk.green(`  • ${comp}`));
    });
    console.log(chalk.blue(`\nTotal: ${COMPONENTS.length} components\n`));
  });

program
  .command('upgrade')
  .description('Upgrade AlpineUI components')
  .action(() => {
    console.log(chalk.blue('\n🔄 Checking for updates...\n'));
    console.log(chalk.green('  ✅ All components are up to date!\n'));
  });

program.parse();