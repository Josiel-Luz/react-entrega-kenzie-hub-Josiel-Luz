import styled from "styled-components";

export const StyledInput = styled.input`
  padding: 10px 20px;
  border-radius: 4px;
  border: 2px solid transparent;
  background-color: var(--gray2);
  transition: 0.3s;
  color: var(--gray0);

  &:hover {
    border-color: var(--gray1);
  }

  &:focus {
    border: 2px solid var(--gray0);

    &::placeholder {
      color: var(--gray0);
    }
  }
`;
