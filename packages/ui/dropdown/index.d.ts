export declare const dropdownSizes: readonly ["sm", "md", "lg"];
export declare const dropdownPositions: readonly ["bottom-left", "bottom-right", "top-left", "top-right"];

export interface DropdownConfig {
  size?: "sm" | "md" | "lg";
  position?: "bottom-left" | "bottom-right" | "top-left" | "top-right";
  disabled?: boolean;
  divider?: boolean;
}