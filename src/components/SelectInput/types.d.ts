import React from "react";

export interface SelectInputProps {
  options: {
    value: string | number;
    label: string | number;
  }[];
  onChange?(event: React.ChangeEvent<HTMLSelectElement>): void | undefined;
  defaultValue?: string | number;
}
