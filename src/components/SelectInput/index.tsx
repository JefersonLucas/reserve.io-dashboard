import React from "react";

import { Container, Select, Option } from "./styles";

import { SelectInputProps } from "./types";

const SelectInput: React.FC<SelectInputProps> = ({ options }) => {
  return (
    <Container>
      <Select name="" id="">
        {options.map(({ value, label }) => (
          <Option value={value} key={value}>
            {label}
          </Option>
        ))}
      </Select>
    </Container>
  );
};

export default SelectInput;
