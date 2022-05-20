import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    html, body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    h1, h2, h3, h4, h5, h6, p {
        margin: 0;
        padding: 0;
        border: 0;
	    font-size: 100%;
    }
    ol, ul {
	    list-style: none;
    }
`;

export default GlobalStyles;
