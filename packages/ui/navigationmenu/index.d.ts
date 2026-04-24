export declare function navigationMenu(): {
  activeItem: string | null;
  isOpen: boolean;
  init(): void;
  setActive(item: string): void;
  open(item: string): void;
  close(): void;
  toggle(item: string): void;
};

export declare function navigationMenuItem(): {
  label: string;
  href: string;
  disabled: boolean;
  active: boolean;
  init(): void;
  handleClick(): void;
};

export declare function navigationMenuTrigger(): {
  isOpen: boolean;
  open(): void;
  close(): void;
  toggle(): void;
};