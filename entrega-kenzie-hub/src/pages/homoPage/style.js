import styled from "styled-components";

export const StyledHome = styled.div`
  height: 100vh;
  background-color: var(--gray4);
  padding-top: 90px;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    border-bottom: 2px solid var(--gray3);
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;

    background-color: var(--gray4);
  }

  .user {
    padding: 20px 15px;
    display: flex;
    gap: 15px;
    flex-direction: column;
    border-bottom: 2px solid var(--gray3);
  }

  .description {
    display: block;
    padding: 20px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .description > .new-teck {
    padding: 0 10px;

    font-size: 30px;
  }

  @media (min-width: 700px) {
    header {
      padding: 20px 100px;
    }

    .user {
      padding: 20px 100px;
    }

    .description {
      padding: 20px 100px;
    }
  }
`;
