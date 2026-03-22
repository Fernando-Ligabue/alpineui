# Contribute to AlpineUI

We love your input! We want to make contributing as easy as possible.

## Development Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Build the CLI: `npm run build`
4. Link the CLI locally: `cd packages/cli && npm link`

## Adding a New Component

1. Create the component directory: `packages/ui/<component-name>/`
2. Add the component files:
   - `<component-name>.js` - Alpine component logic
   - `index.css` - Component styles
   - `index.ts` - Exports for npm
   - `index.d.ts` - TypeScript definitions
3. Register the component in `packages/cli/src/commands/add.ts`
4. Add to the component list in `packages/cli/src/commands/list.ts`

## CLI Commands

```bash
# Build CLI
npm run build -w @alpineui/cli

# Test locally
cd packages/cli
npm link
alpineui init
alpineui add button
```

## Pull Request Process

1. Fork the repo and create your branch
2. Follow the existing code style
3. Make sure your component has proper TypeScript types
4. Update documentation if needed
5. Submit a PR!
