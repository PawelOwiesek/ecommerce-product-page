import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    html{
        box-sizing: border-box;
        scroll-behavior:smooth;
    };

    *,::before,::after{
        box-sizing:inherit;
    };

    body{
        font-family:"Kumbh+Sans",sans-serif;
        max-width:1400px;
        margin:0 auto;
        background-color: ${({ theme }) => theme.neutralColors.white};
    };
`;
