export interface InputConfig {
  required?: boolean;
  minlength?: number;
  maxlength?: number;
  min?: number;
  max?: number;
  pattern?: string;
  disabled?: boolean;
  readonly?: boolean;
  value?: string;
  error?: string;
  iconLeft?: string;
  iconRight?: string;
  helperText?: string;
  successMessage?: string;
  requiredMessage?: string;
  minlengthMessage?: string;
  maxlengthMessage?: string;
  emailMessage?: string;
  urlMessage?: string;
  minMessage?: string;
  maxMessage?: string;
  patternMessage?: string;
}

declare module 'alpinejs' {
  interface AlpineComponents {
    input: (config?: InputConfig) => InputComponent;
    inputGroup: () => InputGroupComponent;
  }
}

interface InputComponent {
  value: string;
  error: string;
  touched: boolean;
  focused: boolean;
  isLoading: boolean;
  isDisabled: boolean;
  isReadonly: boolean;
  isError: boolean;
  isSuccess: boolean;
  isFocused: boolean;
  init(): void;
  onInput(event: Event): void;
  onFocus(): void;
  onBlur(): void;
  onKeydown(event: KeyboardEvent): void;
  validate(): boolean;
  reset(): void;
  focus(): void;
  blur(): void;
  setError(message: string): void;
  clearError(): void;
}

interface InputGroupComponent {
  selectedValue: string;
  isOpen: boolean;
  init(): void;
  select(value: string): void;
}

export default {
  input: (config?: InputConfig) => ({
    value: '',
    error: '',
    touched: false,
    focused: false,
    isLoading: false,
    ...config
  }),
  inputGroup: () => ({
    selectedValue: '',
    isOpen: false
  })
};
