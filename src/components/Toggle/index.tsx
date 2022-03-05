import React from "react";

import { Container, ToggleLabel, ToggleSelector } from "./styles";

const Toggle: React.FC = () => {
  return (
    <Container>
      <ToggleSelector
        checked={true}
        uncheckedIcon={false}
        uncheckedHandleIcon={<ToggleLabel>🌝</ToggleLabel>}
        checkedHandleIcon={<ToggleLabel>🌚</ToggleLabel>}
        checkedIcon={true}
        onChange={() => {}}
      />
    </Container>
  );
};

export default Toggle;
