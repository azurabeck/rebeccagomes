import App from 'next/app'
import styled , {createGlobalStyle , ThemeProvider} from 'styled-components'

// IMPORT PATTERNS
import Footer from '../src/patterns/Footer'
import Header from '../src/patterns/Header'

const theme = {
  colors: {
    primary: '#6100ff',
  },
  space: { none: 0, xxs: '4px', xs: '8px', sm: '12px', md: '16px', lg: '20px', xl: '24px', xxl: '28px', hg: '32px'  }
}

const GlobalStyle = createGlobalStyle`
    * {      
      font-family: sans-serif;
      margin: 0;
    }
    html, body {
      background: linear-gradient(#ffffff, #d1d1d1);
      bottom: 0; 
      left: 0;  
      position: absolute;
      right: 0;
      top: 0;   
    }
`;

const ComponentWrapper = styled.div`
  min-height: 80vh;
`;

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <Header/>
        <ComponentWrapper>
          <Component {...pageProps} />    
        </ComponentWrapper>
        <Footer/>
      </ThemeProvider>
    )
  }
}