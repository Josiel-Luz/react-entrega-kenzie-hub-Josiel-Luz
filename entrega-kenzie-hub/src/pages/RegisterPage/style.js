import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--gray4);

  div {
    padding: 40px 0;
    display: flex;
    width: 90%;
    align-items: center;
    justify-content: space-between;
  }

  form {
    display: flex;
    flex-direction: column;
    padding: 30px 25px;
    border-radius: 4px;
    gap: 15px;
    background-color: var(--gray3);
    margin: 30px 10px;
    width: 90%;
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

  form > p,
  span {
    font-size: 12px;
    font-weight: 600;
    color: var(--gray1);
  }

  form > p,
  h2 {
    text-align: center;
  }

  @media (min-width: 400px) {
    form {
      width: 350px;
    }

    div {
      width: 350px;
    }
  }
`;
