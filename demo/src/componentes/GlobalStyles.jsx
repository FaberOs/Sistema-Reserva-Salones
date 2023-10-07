// GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${(props) => props.backgroundColor || '#ffffff'}; /* Color de fondo predeterminado o proporcionado */
    color: ${(props) => props.textColor || '#000000'}; /* Color de texto predeterminado o proporcionado */
    /* Agrega cualquier otro estilo global que desees aquí */
  }
`;

export default GlobalStyles;
