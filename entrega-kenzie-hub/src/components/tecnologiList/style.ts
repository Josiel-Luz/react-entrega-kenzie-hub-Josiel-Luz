import styled from "styled-components";

export const StyledTechList = styled.ul`
  padding: 20px 15px;
  display: flex;
  gap: 15px;
  flex-direction: column;
  border-bottom: 2px solid var(--gray3);
  background-color: var(--gray3);
  margin: 15px;
  border-radius: 4px;

  li {
    display: flex;
    justify-content: space-between;
    background-color: var(--gray4);
    border-radius: 4px;
    padding: 10px;
    align-items: center;
    transition: 0.3s;

    div {
      display: flex;
      gap: 10px;

      button {
        background-color: transparent;
        border: none;
        color: var(--gray1);
        font-weight: 600;
        cursor: pointer;
      }
    }
  }

  li:hover {
    background-color: var(--gray2);
  }

  @media (min-width: 700px) {
    margin: 20px 100px;
  }

  @media (min-width: 870px) {
    width: 670px;
    margin: 20px auto;
  }
`;
