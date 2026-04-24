export declare function contextMenu(): {
  isOpen: boolean;
  position: { x: number; y: number };
  init(): void;
  open(event: MouseEvent): void;
  close(): void;
  handleClick(item: any): void;
  handleKeydown(event: KeyboardEvent): void;
};

export declare function contextMenuItem(): {
  disabled: boolean;
  danger: boolean;
  shortcut: string;
  icon: string;
  init(): void;
  handleClick(): void;
};