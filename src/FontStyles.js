import { createGlobalStyle } from 'styled-components';
import Bangers from './fonts/Bangers-Regular.ttf';
import Montserrat from './fonts/Montserrat-VariableFont_wght.ttf';
import MontserratItalic from './fonts/Montserrat-Italic-VariableFont_wght.ttf';

const FontStyles = createGlobalStyle`

@font-face {
    font-family: 'Bangers';
    src: url(${Bangers}) format('truetype');
}

@font-face {
    font-family: 'Montserrat';
    src: url(${Montserrat}) format('truetype'), url(${MontserratItalic}) format('truetype');
}

`;

export default FontStyles;
