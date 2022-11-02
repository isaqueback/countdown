import { createGlobalStyle } from "styled-components";
import topImage from '../assets/top-image.svg'
import bottomImage from '../assets/bottom-image.svg'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${props => props.theme.white};
        -webkit-font-smoothing: antialiased;
        background-image: url(${topImage});
        background-repeat: no-repeat;
        z-index: 0;
        
        &:before{
            background-image: url(${bottomImage});
            background-repeat: no-repeat;
            background-position: bottom;
            width: 100vw;
            height: 100vh;
            content: '';
            position: absolute;
            z-index: 0;
        }
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
`