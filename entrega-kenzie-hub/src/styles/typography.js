import styled, { css } from "styled-components";
import { Text } from "./components/text";

export const StyledText = styled(Text)`
  color: ${({ color }) => `var(${color})`};

  ${({ typeText }) => {
    switch (typeText) {
      case "title":
        return css`
          font-weight: 700;
          font-size: 16px;
        `;
      case "text1":
        return css`
          font-weight: 400;
          font-size: 12px;
        `;
      case "text2":
        return css`
          font-weight: 700;
          font-size: 12px;
        `;
    }
  }}
`;
