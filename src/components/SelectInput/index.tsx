import React from "react";

import { Select, Option } from "./styles";

import { SelectInputProps } from "./types";

const SelectInput: React.FC<SelectInputProps> = ({ options, ...props }) => (
  <Select {...props}>
    {options.map(({ value, label }) => (
      <Option value={value} key={value}>
        {label}
      </Option>
    ))}
  </Select>
);

export default SelectInput;
