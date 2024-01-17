import { createGlobalStyle } from 'styled-components';
import { generateColorScheme, generateColorVariables } from './ColorVariables';


const GlobalStyles = createGlobalStyle`

:root {
    ${({theme}) => generateColorVariables(theme.darkMode)}

    --primary-font: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    --success-4: 221 243 228;
    --success-5: 204 235 215;
    --success-8: 91 185 140;
    --danger-4: 255 229 229;
    --danger-5: 253 216 216;
    --danger-8: 235 144 145;
    --tw-bg-opacity: 1;
    --tw-text-opacity: 1;
    --tw-ring-offset-shadow: 0 0 #0000;
    --tw-shadow: 0 20px 25px -5px #0000001a,0 8px 10px -6px #0000001a;
    --tw-ring-shadow: 0 0 #0000;
    --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color),0 8px 10px -6px var(--tw-shadow-color);
  
  }


  html {
    color-scheme: ${({theme}) => generateColorScheme(theme.darkMode)};

    font-family: var(--primary-font);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    scroll-behavior: smooth;

    font-size: clamp(0.875rem, 0.2vw + 0.9rem, 1.10rem);

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
  }

  img {
    max-width: 100%;
    display: block;
  }

  h1, h2, h3, h4, h5, h6 {
    text-wrap: balance;
  }

  p {
    text-wrap: pretty;
  }

  
`

export default GlobalStyles;