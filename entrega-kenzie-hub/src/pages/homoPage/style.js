import styled from "styled-components";

export const StyledHome = styled.div`
  height: 100vh;
  background-color: var(--gray4);

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    border-bottom: 2px solid var(--gray3);
  }

  .user {
    padding: 20px 15px;
    display: flex;
    gap: 15px;
    flex-direction: column;
    border-bottom: 2px solid var(--gray3);
  }

  .description {
    display: none;
  }

  @media (min-width: 700px) {
    header {
      padding: 20px 100px;
    }

    .user {
      padding: 20px 100px;
    }

    .description {
      display: block;
      padding: 20px 100px;
      display: flex;
      gap: 15px;
      flex-direction: column;
    }
  }
`;
