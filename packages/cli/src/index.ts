import { Command } from 'commander';
import { init } from './commands/init.js';
import { add } from './commands/add.js';
import { list } from './commands/list.js';

const program = new Command();

program
  .name('alpineui')
  .description('CLI for AlpineUI - Copy-paste components built with Alpine.js')
  .version('0.1.0');

program
  .command('init')
  .description('Initialize AlpineUI in your project')
  .option('-y, --yes', 'Skip prompts and use defaults')
  .action(init);

program
  .command('add <components...>')
  .description('Add component(s) to your project')
  .option('-y, --yes', 'Skip prompts and use defaults')
  .option('-o, --overwrite', 'Overwrite existing files')
  .action(add);

program
  .command('list')
  .description('List all available components')
  .action(list);

export function run() {
  program.parse(process.argv);
}
