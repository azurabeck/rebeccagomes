import Link from 'next/link'
import React , {useState} from 'react'
import styled , {createGlobalStyle} from 'styled-components'

// IMPORTS COMPONENTS
import Head from '../src/infra/Head'
import Typography from '../src/components/typography'

// IMPORT PATTERNS
import Footer from '../src/patterns/Footer'
import Header from '../src/patterns/Header'


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

const NavbarWrapper = styled.nav`
    align-items: center;
    display: flex;
    height: 10vh;
    justify-content: space-between;
    padding: 0 ${(props) => { return props.theme.space.hg }};

    ul {
      align-items: center;
      display: flex;
      list-style: none;
      padding: 0;

      li {
        margin-right: ${(props) => { return props.theme.space.sm }};
        padding: 0;

        a {          
          color: ${(props) => { return props.theme.colors.primary }};
          text-decoration: none;
        }
      }
    }
`;

const MainWrapper = styled.div`  
  align-items: center;
  display: flex;
  height: 80vh;
  justify-content: center;
  padding: 0 ${(props) => { return props.theme.space.hg }};
`

const FooterWrapper = styled.div`
    align-items: center;
    display: flex;
    height: 10vh;
    justify-content: space-between;    
    padding: 0 ${(props) => { return props.theme.space.hg }};
`;


export function NavbarContainer() {
  return (
    <NavbarWrapper>
          <nav>
            <ul>
              <li><Link href='/'><a>home</a></Link></li>
              <li><Link href='/about'><a>about</a></Link></li>
              <li><Link href='/exp'><a>experience</a></Link></li>
              <li><Link href='/profile'><a>profile</a></Link></li>
              <li><Link href='/whatsapp'><a>contact</a></Link></li>
            </ul>
          </nav>

          <section>
            <ul>
              <li>pt</li>
              <li>en</li>
            </ul>
          </section>          
      </NavbarWrapper>
  )
}

export function MainContainer() {
  return (
      <MainWrapper>
        Esse é o conteúdo dinámico
      </MainWrapper>
  )
}

export function FooterContainer() {
  return (
      <FooterWrapper>
        <section>
          <label>Rebecca</label><br/>
          <label>Design & Code Developer</label>
        </section>

        <section>
          <ul>
            <li><a href=''>github</a></li>
            <li><a href=''>linkedin</a></li>
            <li><a href=''>whatsapp</a></li>
          </ul>
        </section>
      </FooterWrapper>
  )
}

export default function Home() {
    return (
    
    <div>
        <GlobalStyle/>
        <Head title='Rebecca Gomes' />
        <Header>
          {NavbarContainer()}
        </Header>
        <Typography>
            {MainContainer()}
        </Typography>
        <Footer>
         {FooterContainer()}
        </Footer>
    </div>
  )
}
