export interface Option
{
  label: string;
  value: string;
}

export type FieldStatus = 'success' | 'error' | 'warning' | 'disabled' | 'default';