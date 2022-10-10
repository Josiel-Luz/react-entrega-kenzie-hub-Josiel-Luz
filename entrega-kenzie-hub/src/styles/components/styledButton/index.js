import styled from "styled-components";

export const BtnStyled = styled.button`
  padding: 10px 20px;
  border-radius: 4px;
  border: 2px solid transparent;
  color: var(--gray0);
  cursor: pointer;
  transition: 0.3s;

  ${({ btnType }) =>
    btnType == "btn1"
      ? "background-color: var(--Color-primary); &:hover {background-color: var(--Color-primary-focus);}"
      : "background-color: var(--gray1); &:hover {background-color: var(--gray2);}"}
`;
