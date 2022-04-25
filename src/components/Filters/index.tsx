import React from "react";

import { Button } from "./styles";
import { FilterByStatusProps } from "./types";

const FilterByStatus: React.FC<FilterByStatusProps> = (props) => (
  <Button type="button" {...props}>
    {props.title}
  </Button>
);

export default FilterByStatus;
