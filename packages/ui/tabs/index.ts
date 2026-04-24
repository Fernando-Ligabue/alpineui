export const tabsVariants = ['default', 'pill', 'underline'] as const;

export const tabsSizes = ['sm', 'md', 'lg'] as const;

export interface TabsConfig {
  variant?: typeof tabsVariants[number];
  size?: typeof tabsSizes[number];
}

export interface TabItem {
  id: string;
  label: string;
  content?: string;
  disabled?: boolean;
  icon?: string;
}