export declare const avatarSizes: readonly ["xs", "sm", "md", "lg", "xl"];
export declare const avatarShapes: readonly ["circle", "square", "rounded"];
export interface AvatarConfig {
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    shape?: "circle" | "square" | "rounded";
}
export interface AvatarProps {
    src?: string;
    alt?: string;
    fallback?: string;
}