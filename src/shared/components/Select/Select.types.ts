import type {
  ChangeEvent,
  SelectHTMLAttributes,
} from "react";

export interface SelectOption {
  label: string;
  value: string;
}

export interface SelectProps
  extends Omit<
    SelectHTMLAttributes<HTMLSelectElement>,
    "onChange"
  > {
  label?: string;

  error?: string;

  placeholder?: string;

  options: ReadonlyArray<SelectOption>;

  onChange?: (
    event: ChangeEvent<HTMLSelectElement>,
  ) => void;
}