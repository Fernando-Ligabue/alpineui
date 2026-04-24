export const selectVariants = ['default', 'filled', 'outline'] as const;

export const selectSizes = ['sm', 'md', 'lg'] as const;

export interface SelectConfig {
  variant?: typeof selectVariants[number];
  size?: typeof selectSizes[number];
  searchable?: boolean;
  placeholder?: string;
}

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}