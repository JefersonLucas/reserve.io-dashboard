import React from "react";

import { Container, Error } from "./styles";

import { TextareaProps } from "./types";

const Textarea: React.FC<TextareaProps> = ({ ...props }) => (
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

export default Textarea;
