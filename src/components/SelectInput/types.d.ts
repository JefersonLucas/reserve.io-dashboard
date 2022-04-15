import React, { SelectHTMLAttributes } from "react";

export interface SelectInputProps
  extends SelectHTMLAttributes<HTMLSelectElement> {
  options: {
    value: string | number;
    label: string | number;
  }[];
  onChange?(event: React.ChangeEvent<HTMLSelectElement>): void | undefined;
  defaultValue?: string | number;
}
