export declare function slider(): {
  value: number;
  min: number;
  max: number;
  step: number;
  isDragging: boolean;
  init(): void;
  updateValue(clientX: number): void;
  startDrag(event: MouseEvent): void;
  onDrag(event: MouseEvent): void;
  endDrag(): void;
};

export declare function rangeSlider(): {
  values: number[];
  min: number;
  max: number;
  step: number;
  isDragging: boolean;
  activeThumb: number | null;
  init(): void;
  getPercentage(value: number): number;
  startDrag(event: MouseEvent, index: number): void;
  onDrag(event: MouseEvent): void;
  endDrag(): void;
};