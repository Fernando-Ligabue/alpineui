export const dialogSizes = ['sm', 'md', 'lg', 'xl', 'full'] as const;

export interface DialogConfig {
  size?: typeof dialogSizes[number];
  closable?: boolean;
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
}

export interface DialogHeaderConfig {
  showClose?: boolean;
}

export interface DialogBodyConfig {
  scrollable?: boolean;
}