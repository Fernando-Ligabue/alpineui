export const datepickerViews = ['day', 'month', 'year'] as const;

export interface DatepickerConfig {
  format?: string;
  minDate?: Date;
  maxDate?: Date;
  disabled?: boolean;
}