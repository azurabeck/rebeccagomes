import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const FooterWrapper = styled.div`
    align-items: center;
    display: flex;
    height: 10vh;
    justify-content: space-between;    
    padding: 0 ${(props) => { return props.theme.space.hg }};
`;

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

export default function Footer(props) {
  return (
    <footer>{FooterContainer()}</footer>
  )
}

Footer.propTypes = {
    children: PropTypes.node,
}

