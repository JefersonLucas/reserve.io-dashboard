import styled from "styled-components";

import Switch, { ReactSwitchProps } from "react-switch";

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const ToggleSelector = styled(Switch).attrs<ReactSwitchProps>(
  ({ theme }) => ({
    onColor: theme.colors.main,
    offColor: theme.colors.text.gray,
    offHandleColor: theme.colors.background.primary,
    activeBoxShadow: `0 0 2px 3px ${theme.colors.main}`,
    height: 28,
  }),
)<ReactSwitchProps>`
  position: relative;
`;

export const ToggleLabel = styled.label`
  position: absolute;
  top: 1.7px;
  left: -4px;

  font-size: 24.9px;
  line-height: 1;
`;
