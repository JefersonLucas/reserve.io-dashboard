import React, { useMemo } from "react";

import { Container, Profile, Welcome, UserName } from "./styles";

import emojis from "utils/emojis";

const MainHeader: React.FC = () => {
  const emoji = useMemo(() => {
    const index = Math.floor(Math.random() * emojis.length);
    return emojis[index];
  }, []);

  return (
    <Container>
      <h1>Toggle</h1>
      <Profile>
        <Welcome>Olá, {emoji}</Welcome>
        <UserName>Jeferson Lucas</UserName>
      </Profile>
    </Container>
  );
};

export default MainHeader;
