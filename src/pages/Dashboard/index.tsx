import React from "react";
import { Container, Content } from "./styles";

import ContentHeader from "components/ContentHeader";
import SelectInput from "components/SelectInput";

import { months, years } from "mocks";

import { useTheme } from "styled-components";

const Dashboard: React.FC = () => {
  const theme = useTheme();
  return (
    <Container>
      <ContentHeader title="Dashboard" lineColor={theme.colors.main}>
        <SelectInput options={months} />
        <SelectInput options={years} />
      </ContentHeader>
      <Content />
    </Container>
  );
};

export default Dashboard;
