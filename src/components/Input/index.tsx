import React from "react";

import { Container, Error } from "./styles";

import { InputProps } from "./types";

const Input: React.FC<InputProps> = ({ ...props }) => (
  <>
    <Container
      {...props}
      onChange={props.onChange}
      value={props.value}
      onBlur={props.onBlur}
    />
    {props.error ? <Error>{props.error}</Error> : <Error> </Error>}
  </>
);

export default Input;
