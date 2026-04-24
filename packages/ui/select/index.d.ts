export declare const selectVariants: readonly ["default", "filled", "outline"];
export declare const selectSizes: readonly ["sm", "md", "lg"];
export interface SelectConfig {
    variant?: "default" | "filled" | "outline";
    size?: "sm" | "md" | "lg";
    searchable?: boolean;
    placeholder?: string;
}
export interface SelectOption {
    value: string;
    label: string;
    disabled?: boolean;
}