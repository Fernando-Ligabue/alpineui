export const accordionVariants = ['default', 'ghost', 'bordered'] as const;

export const accordionSizes = ['sm', 'md', 'lg'] as const;

export interface AccordionConfig {
  variant?: typeof accordionVariants[number];
  size?: typeof accordionSizes[number];
  multiple?: boolean;
  collapsible?: boolean;
}

export interface AccordionItem {
  id: string;
  title: string;
  content: string;
  disabled?: boolean;
}