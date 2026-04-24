export const avatarSizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;

export const avatarShapes = ['circle', 'square', 'rounded'] as const;

export interface AvatarConfig {
  size?: typeof avatarSizes[number];
  shape?: typeof avatarShapes[number];
}

export interface AvatarProps {
  src?: string;
  alt?: string;
  fallback?: string;
}