import styled from 'styled-components';

const size_sm = (props) => { return props.theme.space.sm }
const size_xs = (props) => { return props.theme.space.xs }
const size_xl = (props) => { return props.theme.space.xl }
const size_xxl = (props) => { return props.theme.space.xxl }

const cl_primary = (props) => { return props.theme.colors.primary }
const cl_gray = (props) => { return props.theme.colors.gray }
const cl_red = (props) => { return props.theme.colors.red }
const cl_pink = (props) => { return props.theme.colors.pink }


const ft_menu = (props) => { return props.theme.fonts.size[4] }
const ft_title_01 = (props) => { return props.theme.fonts.size[4] }
const ft_title_02 = (props) => { return props.theme.fonts.size[8] }
const ft_title_03 = (props) => { return props.theme.fonts.size[1] }
const ft_title_04 = (props) => { return props.theme.fonts.size[6] }


export const MenuMobileWrapper = styled.section`

      align-items: center;
      display: flex;
      
      div {
        align-items: center;
        display: flex;
        justify-content: flex-start;
        
        svg {
          width: ${ft_title_02};
        }

        &:hover {
          color: ${cl_red};
          cursor: pointer;
        }       
      }
      
      ul {
          align-items: center;
          background: linear-gradient(90deg, #ffffffeb, #fff);
          display: flex;
          flex-direction: column;
          height: calc(100vh - 25px);
          list-style: none;
          margin-left: ${size_sm};
          padding: 0;
          position: absolute;
          right: -24px;
          top: 0px;
          width: 100%;
          z-index: 999;

          li {
            margin-right: ${size_sm};
            padding: 15px;
            text-align: right;
            width: calc(100% - 30px);

            a {   
              align-items: center;    
              color: ${cl_primary};
              display: flex;
              justify-content: space-between;   
              text-decoration: none;

              &:hover {
                color: ${cl_red};
              }
            }
            
            &.active {
                a {                    
                    color: ${cl_pink};
                }
            }

            &::first-child {
                padding: 0 50px;
            }
          }
        }

    @media only screen and (min-width: 450px) {
        display: none;
    }  
`

export const MenuWrapper = styled.section`
   align-items: center;
   display: none;
   justify-content: center;
   margin: 0 auto;
   margin-top: 30px;
   max-width: 1050px;

   ul {
        align-items: center;
        display: flex;
        list-style: none;
        margin-left: ${size_sm};
        padding: 0;

        li {
        font-size: ${ft_menu};
        margin-right: ${size_sm};
        padding: 0;

            a {          
                color: ${cl_primary};
                text-decoration: none;

                &:hover {
                    color: ${cl_red};
                }
            }

            &.active {
                a {          
                    color: ${cl_red};
                    text-decoration: none;
                }
            }
        }
    }

    @media only screen and (min-width: 450px) {
        display: flex;
    }  

    @media only screen and (min-width: 750px) {
        margin-top: -40px;
    }        
`

export const Decoration = styled.div`
    background-color: ${cl_gray};
    height: ${size_xs};
    width: ${ (size) => { return size.decor_size }};
`

export const Title = styled.p`
    margin-left: ${size_xxl};
`

export const Title_Var01 = styled.span`
    color: ${cl_gray};
    font-size: ${ft_title_01};
`
export const Title_Var02 = styled.span`
    color: ${cl_pink};
    font-size: ${ft_title_02};
    letter-spacing: -0.05em;
    margin-right: ${size_xs};
    text-transform: uppercase;
`
export const Title_Var03 = styled.span`
    color: ${cl_pink};
    font-size: ${ft_title_03};
`
export const Title_Var04 = styled.span`
    align-items: center;
    color: ${cl_gray};
    display: flex;
    font-size: ${ft_title_04};
    justify-content: flex-end;
`


export const TopWrapper = styled.div`
    align-items: center;
    display: flex;
    justify-content: flex-end;
    margin-top: ${size_xl};
    width: calc(100% - 20px);    
`

export const Wallpaper = styled.section`
    align-items: center;
    display: flex;
    justify-content: center;
    margin-top: ${size_xxl};
`