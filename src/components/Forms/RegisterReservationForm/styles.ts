import styled from "styled-components";

export const Form = styled.form`
  display: grid;
  gap: 10px;
  align-items: center;
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas:
    "requester requester equipment equipment"
    "errorR errorR errorE errorE"
    "date date entry exit"
    "errorD errorD errorT1 errorT2"
    "place place status status"
    "errorL errorL . ."
    "observations observations observations observations"
    ". . cancel confirm";

  height: 100%;
  width: 100%;

  border-radius: 10px;

  input,
  textarea,
  select {
    border: 1px solid ${({ theme }) => theme.colors.background.primary};
    background-color: ${({ theme }) => theme.colors.background.tertiary};
    color: ${({ theme }) => theme.colors.text.white};

    &::placeholder {
      color: ${({ theme }) => theme.colors.text.gray};
    }
  }

  textarea {
    resize: none;
    margin: 10px 0;
  }

  .requester {
    grid-area: requester;
  }

  .equipment {
    grid-area: equipment;
  }

  .date {
    grid-area: date;
  }

  .entry {
    grid-area: entry;
  }

  .exit {
    grid-area: exit;
  }

  .place {
    grid-area: place;
  }

  .status {
    grid-area: status;

    box-shadow: none;

    padding: 12px 14px;

    &:focus,
    &:hover {
      border: 1px solid ${({ theme }) => theme.colors.main};
      box-shadow: 0 0 3px 1px ${({ theme }) => theme.colors.main};
    }
  }

  .observations {
    grid-area: observations;
  }

  .cancel {
    grid-area: cancel;
    background-color: ${({ theme }) => theme.colors.background.primary};
    border-radius: 5px;
    color: ${({ theme }) => theme.colors.status.danger};
    border: 1px solid ${({ theme }) => theme.colors.status.danger};
    transition: ${({ theme }) => theme.animation.duration.normal};

    &:focus,
    &:hover {
      animation: none;
      border: 1px solid ${({ theme }) => theme.colors.status.danger};
      box-shadow: 0 0 2px 1px ${({ theme }) => theme.colors.status.danger};
    }
  }

  .confirm {
    grid-area: confirm;
  }
`;

export const Error = styled.small`
  align-items: flex-start;
  align-content: center;
  justify-content: center;
  width: 100%;
  padding: 0 5px;
  color: ${({ theme }) => theme.colors.status.danger};
`;
