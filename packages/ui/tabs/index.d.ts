export declare const tabsVariants: readonly ["default", "pill", "underline"];
export declare const tabsSizes: readonly ["sm", "md", "lg"];
export interface TabsConfig {
    variant?: "default" | "pill" | "underline";
    size?: "sm" | "md" | "lg";
}
export interface TabItem {
    id: string;
    label: string;
    content?: string;
    disabled?: boolean;
    icon?: string;
}