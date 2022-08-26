import App from 'next/app'
import { ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    primary: '#6100ff',
  },
  space: { none: 0, xxs: '4px', xs: '8px', sm: '12px', md: '16px', lg: '20px', xl: '24px', xxl: '28px', hg: '32px'  }
}

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}