import styled from "styled-components";

export const StyledMain = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--gray4);

  a {
    text-align: center;
    padding: 10px 20px;
    border-radius: 4px;
    border: 2px solid transparent;
    color: var(--gray0);
    cursor: pointer;
    transition: 0.3s;
    background-color: var(--gray2);

    &:hover {
      background-color: var(--gray1);
    }
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
  }
`;
