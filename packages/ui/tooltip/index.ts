export const tooltipPositions = ['top', 'bottom', 'left', 'right'] as const;

export interface TooltipConfig {
  position?: typeof tooltipPositions[number];
  delay?: number;
}