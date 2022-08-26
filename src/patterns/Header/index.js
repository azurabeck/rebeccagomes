import Link from 'next/link'
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


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

export default function Header(props) {
  return (
    <header>{NavbarContainer()}</header>
  )
}

Header.propTypes = {
    children: PropTypes.node,
}