import React from "react";

import { Button } from "./styles";
import { FiltersProps } from "./types";

const Filters: React.FC<FiltersProps> = (props) => {
  return (
    <Button type="button" {...props}>
      {props.title}
    </Button>
  );
};

export default Filters;
