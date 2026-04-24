export declare const dialogSizes: readonly ["sm", "md", "lg", "xl", "full"];

export interface DialogConfig {
  size?: "sm" | "md" | "lg" | "xl" | "full";
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