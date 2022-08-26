import styled from 'styled-components';

export const NavbarWrapper = styled.nav`
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