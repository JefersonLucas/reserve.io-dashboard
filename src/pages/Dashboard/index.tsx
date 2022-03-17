/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { Container, Content } from "./styles";

import ContentHeader from "components/ContentHeader";
import SelectInput from "components/SelectInput";
import Head from "components/Head";

import { months, years } from "mocks";
import { useTheme } from "styled-components";

const Dashboard: React.FC = () => {
  const theme = useTheme();

  return (
    <>
      <Head
        title="Dashboard"
        description="Visualize as informações sobre as suas reservas"
      />
      <Container>
        <ContentHeader title="Dashboard" lineColor={theme.colors.main}>
          <SelectInput options={months} />
          <SelectInput options={years} />
        </ContentHeader>
        <Content />
      </Container>
    </>
  );
};

export default Dashboard;
