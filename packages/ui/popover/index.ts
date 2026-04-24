export const popoverPositions = ['top', 'bottom', 'left', 'right'] as const;

export interface PopoverConfig {
  position?: typeof popoverPositions[number];
}