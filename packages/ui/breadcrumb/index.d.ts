export declare function breadcrumb(): {
  items: Array<{ label: string; href?: string; icon?: string }>;
  separator: string;
  init(): void;
};

export declare function breadcrumbNav(): {
  currentPath: string;
  items: Array<{ label: string; href?: string }>;
  init(): void;
  isActive(item: any): boolean;
  getSeparator(): string;
};