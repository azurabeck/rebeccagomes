import styled from 'styled-components'

const hg_size = (props) => { return props.theme.space.hg }
const xxl_size = (props) => { return props.theme.space.xxl } 
const xl_size = (props) => { return props.theme.space.xl } 
const md_size = (props) => { return props.theme.space.md }
const cl_primary = (props) => { return props.theme.colors.primary }
const cl_gray = (props) => { return props.theme.colors.gray }
const cl_hover = (props) => { return props.theme.colors.light_blue }
const cl_red = (props) => { return props.theme.colors.red }
const font = (props) => { return props.theme.fonts.big_shoulder }

export const FooterWrapper = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: calc(15vh - ${md_size});
    justify-content: flex-end;    
    padding: 0 ${hg_size};
    padding-bottom: ${md_size};

    @media only screen and (min-width: 550px) {
        align-items: flex-end;
        flex-direction: row;
        justify-content: space-between;   
    } 

    ul { 
        display: flex;
        font-size: ${xxl_size};
        flex-direction: row;
        list-style: none;
        padding: 0;
        
        @media only screen and (min-width: 550px) {
            flex-direction: column;
        } 

        li {
            a {                
                color: ${cl_primary};

                svg {                    
                    width: ${xxl_size};
                    font-size: ${xxl_size};
                }

                &:hover {
                    color: ${cl_hover};
                }
            }
        }
    }
`;

export const FooterLogo = styled.section`
    label {
        color: ${cl_red};
        font-family: ${font};
        font-weight: 400;
        font-size: ${xl_size};
        letter-spacing: 0.475em;
    }

    p {
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        color: ${cl_gray};
    }
`; 