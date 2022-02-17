import React from "react";

import { Container } from "./styles";

import ContentHeader from "components/ContentHeader";
import SelectInput from "components/SelectInput";

import { useTheme } from "styled-components";

const Dashboard: React.FC = () => {
  const theme = useTheme();

  const options = [
    { value: "2021", label: "2021" },
    { value: "2022", label: "2022" },
  ];

  return (
    <Container>
      <ContentHeader title="Dashboard" lineColor={theme.colors.main}>
        <SelectInput options={options} />
        <SelectInput options={options} />
      </ContentHeader>
    </Container>
  );
};

export default Dashboard;
