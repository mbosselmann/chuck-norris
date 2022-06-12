import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

* {
    box-sizing: border-box;
}

html, #root {
    height: 100%;
}

body {
    font-family: monospace;
    height: 100%;
    margin: 0;
}

input, button, select {
    font: inherit;
    padding: 8px 10px;
}
`;

export default GlobalStyles;
