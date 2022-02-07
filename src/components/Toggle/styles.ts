import styled from "styled-components";

import Switch, { ReactSwitchProps } from "react-switch";

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const ToggleSelector = styled(Switch).attrs<ReactSwitchProps>(
  ({ theme }) => ({
    onColor: theme.colors.main,
    offColor: theme.colors.gray,
  }),
)<ReactSwitchProps>`
  margin: 0 7px;
`;

export const ToggleLabel = styled.label``;
