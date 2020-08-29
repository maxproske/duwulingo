import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
  ${normalize}

  @font-face {
    font-family: 'Comfortaa';
    src: url('/fonts/Comfortaa-VariableFont_wght.ttf');
  }

  * {
    /* Include padding and border in all elements' total width and height. */
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  html {
    background-color: black;
  }
  
  body {
    font-family: 'Comfortaa', Arial, Helvetica, 
    sans-serif;
    font-variation-settings: 'wght' 700;
  }

  h1, h2, h3, h4 {
    margin: 0;
  }
`

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  )
}

export default MyApp
