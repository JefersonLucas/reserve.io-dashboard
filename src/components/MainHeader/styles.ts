import styled from "styled-components";

export const Container = styled.div`
  grid-area: MH;

  display: flex;
  justify-content: space-between;
  align-items: center;

  color: ${({ theme }) => theme.colors.text.white};
  background-color: ${({ theme }) => theme.colors.background.secondary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.text.gray};

  padding: 0 35px 0 25px;
`;

export const Profile = styled.div``;

export const Welcome = styled.h3``;

export const UserName = styled.span``;
