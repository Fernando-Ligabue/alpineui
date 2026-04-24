export declare function button(): {
  loading: boolean;
  disabled: boolean;
  init(): void;
  handleClick(event: Event): Promise<void>;
};

export declare function buttonGroup(): {
  activeValue: string | null;
  init(): void;
  select(value: string): void;
};
