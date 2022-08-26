import styled from 'styled-components';

const size_hg = (props) => { return props.theme.space.hg }
const size_sm = (props) => { return props.theme.space.sm }
const size_xs = (props) => { return props.theme.space.xs }
const size_md = (props) => { return props.theme.space.md }

const cl_primary = (props) => { return props.theme.colors.primary }
const cl_gray = (props) => { return props.theme.colors.light_gray }
const cl_red = (props) => { return props.theme.colors.red }
const cl_orange= (props) => { return props.theme.colors.orange }

const font_size_md = (props) => { return props.theme.space.md }


export const NavbarWrapper = styled.div`
    align-items: center;
    display: flex;
    height: 10vh;
    justify-content: space-between;
    padding: 0 ${size_hg};

    nav {
      align-items: flex-start;
      display: flex;
      justify-content: flex-end;
    }    
`;

export const MenuWrapper = styled.section`

      align-items: center;
      display: flex;
      
      div {
        align-items: center;
        display: flex;
        justify-content: flex-start;
        
        svg {
          width: ${font_size_md};
          margin-right: ${size_md};
        }

        label {
          color: ${cl_gray};
        }

        &:hover {
          color: ${cl_red};
          cursor: pointer;
        }       
      }
      
      ul {
          align-items: center;
          display: flex;
          list-style: none;
          margin-left: ${size_sm};
          padding: 0;

          li {
            margin-right: ${size_sm};
            padding: 0;

            a {          
              color: ${cl_primary};
              text-decoration: none;

              &:hover {
                color: ${cl_red};
              }
            }
          }
        }
`

export const LangWrapper = styled.nav`
    ul {
      align-items: center;
      display: flex;
      list-style: none;
      margin-left: ${size_md};
      padding: 0;

      li {
        color: ${cl_primary};
        font-weight: 500;

        a {
          color: ${cl_primary};
          font-weight: 500;
          padding: 0 ${size_xs};
          text-decoration: none;
            &:hover {
              color: ${cl_red};
              cursor: pointer;
            }           
        }  
        
        &.active {
          a {
            color: ${cl_orange};
          }
        }
      }
    }     
`