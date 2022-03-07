import React from "react";

import { Container, ToggleLabel, ToggleSelector } from "./styles";
import { ToggleProps } from "./types";

const Toggle: React.FC<ToggleProps> = ({ checked, onChange }) => {
  return (
    <Container>
      <ToggleSelector
        checked={checked}
        onChange={onChange}
        uncheckedHandleIcon={<ToggleLabel>🌝</ToggleLabel>}
        checkedHandleIcon={<ToggleLabel>🌚</ToggleLabel>}
      />
    </Container>
  );
};

export default Toggle;
