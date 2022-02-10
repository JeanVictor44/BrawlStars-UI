import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle `
    ::root {

    }
    
    * {
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
    body {
        overflow:hidden;        
        font-family: 'Lilita One', cursive;
    }
    body, html {
        width:100%;
        height:100vh;
    }
`
