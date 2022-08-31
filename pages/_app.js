import App from 'next/app'
import styled , {ThemeProvider} from 'styled-components'
import { theme , GlobalStyle } from '../src/assets/_style'

// IMPORT PATTERNS
import Footer from '../src/patterns/Footer'
import Header from '../src/patterns/Header'

const ComponentWrapper = styled.div`
  min-height: 75vh;
`;

export default class MyApp extends App {
   render() {
    const { Component, pageProps } = this.props
    const path = this.props.router.asPath
    const NavType = path === '/' ? 1 : 2

    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <Header type={NavType} path={path}/>
        <ComponentWrapper>
          <Component {...pageProps} />    
        </ComponentWrapper>
        <Footer/>
      </ThemeProvider>
    )
  }
}