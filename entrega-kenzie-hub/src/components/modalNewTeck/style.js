import styled from "styled-components";

export const StyledModal = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  background-color: var(--opacity50);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > div > div {
    display: flex;
    justify-content: space-between;
    padding: 10px 25px;
    background-color: var(--gray2);

    & > button {
      background-color: transparent;
      border: none;
      color: var(--gray1);
      cursor: pointer;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    padding: 30px 25px;
    gap: 15px;
    background-color: var(--gray3);
    width: 100%;
  }

  form > label {
    font-size: 12px;
    color: var(--gray0);
    font-weight: 400;
  }

  form > select {
    padding: 10px 20px;
    border-radius: 4px;
    border: 2px solid transparent;
    background-color: var(--gray2);
    transition: 0.3s;
    color: var(--gray1);
  }

  form > select:focus {
    border: 2px solid var(--gray0);
    color: var(--gray0);
  }

  @media (min-width: 400px) {
    form {
      width: 350px;
    }
  }
`;
