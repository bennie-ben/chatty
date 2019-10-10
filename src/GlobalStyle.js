import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 14px;
    background: #DA4453;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #C06C84, #DA4453);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #C06C84, #DA4453); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    color: white;
  }
  h1,h2,h3,h4,h5,h6{
    font-weight: 300;
  }
  a{
    text-decoration: none;
  }
  li{
    list-style: none;
  }
`

export default GlobalStyle;