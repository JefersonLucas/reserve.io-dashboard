import React from "react";

import { Button, Container } from "./styles";
import { FiltersProps } from "./types";

const Filters: React.FC<FiltersProps> = ({ controls }) => {
  return (
    <Container>
      {controls.map(({ title, status, active }) => (
        <Button type="button" status={status} active={active} key={title}>
          {title}
        </Button>
      ))}
    </Container>
  );
};

export default Filters;
