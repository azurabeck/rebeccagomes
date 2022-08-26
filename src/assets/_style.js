import {createGlobalStyle} from 'styled-components'

export const theme = {
    colors: {
      primary: '#61777B',
  
      // NEUTRAL COLORS
      gray: '#888888',
      light_gray: "#A2B2B6",
      dark_gray: '#61777B',
  
      // HOT COLORS
      red: '#DB2222',
      pink: '#F54653',
      orange: '#FBAF40',
      yellow: '#FCD546',
  
      // LIGHT COLORS
      purple: '#6100ff',
      light_blue: '#69AFBD',
    },
    fonts: {
      big_shoulder: 'Big Shoulders Display',
      roboto:  'Roboto, sans-serif',
    },
    space: { none: 0, xxs: '4px', xs: '8px', sm: '12px', md: '16px', lg: '20px', xl: '24px', xxl: '28px', hg: '32px'  }
  }
  
  export const GlobalStyle = createGlobalStyle`
      * {      
        font-family: ${theme.fonts.roboto};
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
  