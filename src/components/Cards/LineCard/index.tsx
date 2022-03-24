import React from "react";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import { useTheme } from "styled-components";

import { Container, Title, LineContainer } from "./styles";

import { LineCardProps } from "./types";

const LineCard: React.FC<LineCardProps> = ({ data }) => {
  const theme = useTheme();
  return (
    <Container>
      <Title>Histórico de reservas</Title>
      <LineContainer>
        <ResponsiveContainer>
          <LineChart data={data}>
            <CartesianGrid
              strokeDasharray="3 3"
              color={theme.colors.text.gray}
            />
            <XAxis dataKey="month" color={theme.colors.text.gray} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="amountWaiting"
              name="Aguardando"
              stroke={theme.colors.status.warning}
              strokeWidth={5}
              dot={{ r: 5 }}
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="amountUsing"
              name="Utilizando"
              stroke={theme.colors.status.success}
              strokeWidth={5}
              dot={{ r: 5 }}
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="amountCollected"
              name="Recolhido"
              stroke={theme.colors.status.danger}
              strokeWidth={5}
              dot={{ r: 5 }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </LineContainer>
    </Container>
  );
};

export default LineCard;