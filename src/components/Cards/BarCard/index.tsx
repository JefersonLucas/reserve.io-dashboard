import React from "react";

import { Cell, ResponsiveContainer, BarChart, Bar } from "recharts";

import CountUp from "react-countup";

import { BarCardProps } from "./types";

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

const BarCard: React.FC<BarCardProps> = ({ data }) => (
  <Container>
    <SideLeft>
      <Title>Reservas</Title>
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
        <BarChart width={150} height={40} data={data}>
          <Bar dataKey="percent">
            {data.map(({ color, name }) => (
              <Cell key={name} fill={color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </SideRight>
  </Container>
);

export default BarCard;
