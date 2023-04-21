import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    body{
        padding: 0;
        margin: 0;
        width:100%;
        height: 100%;
    }

    :root{
        --Color-primary:#FF577F;
        --Color-primary-Focus:#FF427F;
        --Color-primary-Negative:#59323F;
        --Grey-4:#121214;
        --Grey-3:#212529;
        --Grey-2:#343B41;
        --Grey-1:#868E96;
        --Grey-0:#F8F9FA;
    }

`;
