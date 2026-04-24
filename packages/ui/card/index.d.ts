export interface CardProps {
  variant?: 'default' | 'subtle' | 'outline' | 'elevated' | 'glass' | 'dashed' | 'flat';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  interactive?: boolean;
  loading?: boolean;
  hoverable?: boolean;
}

export interface CardHeaderProps {
  layout?: 'column' | 'row';
}

export interface CardTitleProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export interface CardDescriptionProps {
  size?: 'sm' | 'md' | 'lg';
}

export interface CardContentProps {
  class?: string;
}

export interface CardFooterProps {
  alignment?: 'start' | 'center' | 'between' | 'stretch';
  class?: string;
}

export interface CardActionProps {
  class?: string;
}

export interface CardImageProps {
  src: string;
  alt: string;
  ratio?: 'square' | 'video' | 'portrait' | 'auto';
  position?: 'top' | 'bottom' | 'full';
  class?: string;
}

export interface CardMetaProps {
  class?: string;
}

export interface CardBadgeProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'destructive';
  class?: string;
}

export interface CardStatProps {
  class?: string;
}

export interface CardStatValueProps {
  class?: string;
}

export interface CardStatLabelProps {
  class?: string;
}
