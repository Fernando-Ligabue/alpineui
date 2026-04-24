export declare const accordionVariants: readonly ["default", "ghost", "bordered"];
export declare const accordionSizes: readonly ["sm", "md", "lg"];
export interface AccordionConfig {
    variant?: "default" | "ghost" | "bordered";
    size?: "sm" | "md" | "lg";
    multiple?: boolean;
    collapsible?: boolean;
}
export interface AccordionItem {
    id: string;
    title: string;
    content: string;
    disabled?: boolean;
}