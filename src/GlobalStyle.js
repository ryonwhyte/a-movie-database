import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --maxWidth: 1280px;
        --white: #fff;
        ---lightGrey: #333;
        --medGrey: 353535;
        --darkGrey: #1c1c1c;
        --fontSuperBig: 2.5rem;
        --fontBig: 1.5rem;
        --fontMed: 1.2rem;
        --font-Small: 1rem;
    }
    *{
        box-sizing: border-box;
        font-family: 'Abel' sans-serif;
    }
    body{
        margin:0;
        padding:0;

        h1{
            font-size:2rem;
            font-weight:600;
            color: (--white);
        }
        h2{
            font-size:1.1rem;
            font-weight:600;
        }
        p{
            font-size:1rem;
            color: (--white);
        }
    }

`