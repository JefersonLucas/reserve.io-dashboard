import React from "react";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import CountUp from "react-countup";

import { PieCardProps } from "./types";

import {
  Container,
  Title,
  SideLeft,
  SideRight,
  LegendContainer,
  Legend,
  Percent,
  Status,
} from "./styles";

const PieCard: React.FC<PieCardProps> = ({ data }) => (
  <Container>
    <SideLeft>
      <Title>Relação</Title>
      <LegendContainer>
        {data.map(({ color, name, percent }) => (
          <Legend key={name}>
            <Percent color={color}>
              <CountUp end={Number(percent.toFixed(0))} suffix={"%"} />
            </Percent>
            <Status>{name}</Status>
          </Legend>
        ))}
      </LegendContainer>
    </SideLeft>
    <SideRight>
      <ResponsiveContainer>
        <PieChart>
          <Pie data={data} dataKey="percent">
            {data.map(({ color, name }) => (
              <Cell key={name} fill={color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </SideRight>
  </Container>
);

export default PieCard;
