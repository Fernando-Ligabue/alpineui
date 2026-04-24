export const dropdownSizes = ['sm', 'md', 'lg'] as const;
export const dropdownPositions = ['bottom-left', 'bottom-right', 'top-left', 'top-right'] as const;

export interface DropdownConfig {
  size?: typeof dropdownSizes[number];
  position?: typeof dropdownPositions[number];
  disabled?: boolean;
  divider?: boolean;
}