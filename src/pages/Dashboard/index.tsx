import React from "react";

import { Container, Content } from "./styles";

import ContentHeader from "components/ContentHeader";
import SelectInput from "components/SelectInput";
import HistoryFinanceList from "components/HistoryFinanceList";

import { options, finances } from "mock";

import { useTheme } from "styled-components";

const Dashboard: React.FC = () => {
  const theme = useTheme();
  return (
    <Container>
      <ContentHeader title="Dashboard" lineColor={theme.colors.main}>
        <SelectInput options={options} />
        <SelectInput options={options} />
      </ContentHeader>
      <Content>
        {finances.map(({ id, title, subtitle, amount }) => (
          <HistoryFinanceList
            key={id}
            cardColor={theme.colors.secondary}
            tagColor={theme.colors.main}
            title={title}
            subtitle={subtitle}
            amount={amount}
          />
        ))}
      </Content>
    </Container>
  );
};

export default Dashboard;
