import React, { useMemo, useState } from "react";

import { Container, Profile, Welcome, UserName } from "./styles";

import Toggle from "components/Toggle";

import emojis from "utils/emojis";

import useThemeContext from "hooks/useThemeContext";

const MainHeader: React.FC = () => {
  const { toggleTheme, theme } = useThemeContext();

  const [isTheme, setIsTheme] = useState(() =>
    theme.title === "dark" ? true : false,
  );

  const handleChangeTheme = () => {
    setIsTheme(!isTheme);
    toggleTheme();
  };

  const emoji = useMemo(() => {
    const index = Math.floor(Math.random() * emojis.length);
    return emojis[index];
  }, []);

  return (
    <Container>
      <Toggle checked={isTheme} onChange={handleChangeTheme} />
      <Profile>
        <Welcome>Olá, {emoji}</Welcome>
        <UserName>Jeferson Lucas</UserName>
      </Profile>
    </Container>
  );
};

export default MainHeader;
