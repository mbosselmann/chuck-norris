import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

* {
    box-sizing: border-box;
}

:root {
    --primary-color: #fff;
    --text-color: #000;
    --secondary-color: #87ceeb;
    --primary-accent-color: #E7BC99;
    --secondary-accent-color: #AE8766;
    --dark-color: #344a53;
    --box-shadow: #97afba;
}

@media (prefers-color-scheme: dark){
    :root {
    --primary-color: #00253b;
    --text-color: #fff;
    --secondary-color: #60a8c4;
    --primary-accent-color: #2b7994;
    --secondary-accent-color: #AE8766;
    --dark-color: #00536b;
    --box-shadow: #97afba; 
}
}

html, #root {
    height: 100%;
}

body {
    font-family: 'Montserrat', sans-serif;
    height: 100%;
    margin: 0;
    background-color: var(--primary-color);
    color: var(--text-color);
}

input, button, select {
    font: inherit;
    padding: 8px 10px;
}
`;

export default GlobalStyles;
