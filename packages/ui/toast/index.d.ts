export declare const toastVariants: readonly ["default", "success", "error", "warning", "info"];
export declare const toastPositions: readonly ["top-left", "top-center", "top-right", "bottom-left", "bottom-center", "bottom-right"];
export interface ToastConfig {
    variant?: "default" | "success" | "error" | "warning" | "info";
    position?: "top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right";
    duration?: number;
    dismissible?: boolean;
}
export interface Toast {
    id: string;
    title?: string;
    description?: string;
    variant?: "default" | "success" | "error" | "warning" | "info";
}