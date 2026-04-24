export const toastVariants = ['default', 'success', 'error', 'warning', 'info'] as const;

export const toastPositions = ['top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right'] as const;

export interface ToastConfig {
  variant?: typeof toastVariants[number];
  position?: typeof toastPositions[number];
  duration?: number;
  dismissible?: boolean;
}

export interface Toast {
  id: string;
  title?: string;
  description?: string;
  variant?: typeof toastVariants[number];
}