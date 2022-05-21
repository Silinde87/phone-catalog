import { createGlobalStyle } from 'styled-components';
import { breakPoints } from './globals/breakpoints';

const GlobalStyles = createGlobalStyle`
    html, body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    h1, h2, h3, h4, h5, h6, p, span {
        margin: 0;
        padding: 0;
        border: 0;
	    font-size: 100%;
        font-family: OpenSans;
        letter-spacing: 0em;
    }
    ol, ul {
	    list-style: none;
    }
    h1 {
        font-weight: 400;
        font-size: 48px;
        line-height: 49px;
        @media (min-width: ${breakPoints.xs}px) and (max-width: ${breakPoints.sm}px) {
            font-size: 32px;
            line-height: 44px;
        }
    }
    h2 {
        font-weight: 700;
        font-size: 26px;
        line-height: 30px;
        @media (min-width: ${breakPoints.xs}px) and (max-width: ${breakPoints.sm}px) {
            font-weight: 600;
            font-size: 22px;
            line-height: 30px;
        }
    }
    h3 {
        font-weight: 600;
        font-size: 24px;
        line-height: 33px;
        @media (min-width: ${breakPoints.xs}px) and (max-width: ${breakPoints.sm}px) {
            font-size: 20px;
            line-height: 27px;
        }
    }
    span,p {
        font-weight: 400;
        font-size: 18px;
        line-height: 29px;
        @media (min-width: ${breakPoints.xs}px) and (max-width: ${breakPoints.sm}px) {
            font-size: 16px;
            line-height: 29px;
        }
    }
`;

export default GlobalStyles;
