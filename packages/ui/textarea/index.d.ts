export declare function textarea(): {
  value: string;
  charCount: number;
  maxLength: number;
  init(): void;
  updateCharCount(): void;
  autoResize(): void;
};