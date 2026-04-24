export const cardVariants = ['default', 'subtle', 'outline', 'elevated', 'glass', 'dashed', 'flat'] as const;
export const cardSizes = ['sm', 'md', 'lg', 'xl'] as const;
export const cardImageRatios = ['square', 'video', 'portrait', 'auto'] as const;

export interface CardConfig {
  variant?: typeof cardVariants[number];
  size?: typeof cardSizes[number];
  interactive?: boolean;
  loading?: boolean;
  selected?: boolean;
  hoverable?: boolean;
}

export interface CardHeaderConfig {
  layout?: 'column' | 'row';
}

export interface CardFooterConfig {
  alignment?: 'start' | 'center' | 'between' | 'stretch';
}

export interface CardImageConfig {
  src: string;
  alt: string;
  ratio?: typeof cardImageRatios[number];
  position?: 'top' | 'bottom' | 'full';
}
