export const badgeVariants = ['default', 'secondary', 'destructive', 'outline', 'ghost', 'link'] as const;

export interface BadgeConfig {
  variant?: typeof badgeVariants[number];
}