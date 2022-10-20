import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        font-family: 'Inter', sans-serif;
    }

    :root{
        --Color-primary: #FF577F;
        --Color-primary-focus: #FF427F;
        --Color-primary-negative: #59323F;

        --gray0: #F8F9FA;
        --gray1: #868E96;
        --gray2: #343B41;
        --gray3: #212529;
        --gray4: #121214;

        --opacity50: #00000050;

        --Sucess: #3FE864;
        --Negative: #E83F5B;
    }
`;
