import styled from 'styled-components'

const cl_gray = (props) => { return props.theme.colors.dark_gray }
const cl_purple = (props) => { return props.theme.colors.wine }

const ft_title = (props) => { return props.theme.fonts.size[3] }
const ft_period = (props) => { return props.theme.fonts.size[1] }

export const ProfileWrapper = styled.div`
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    //ProfileWrapper -> [div] TitleWrapper
    //ProfileWrapper -> [ul] WorkContainer
`

export const TitleWrapper = styled.div`

    margin-bottom: 30px;

    .title {
        color: ${cl_gray};
        font-weight: 600;
        font-size: ${ft_title};
    }
    .period {
        color: ${cl_purple};
        font-size: ${ft_period};
        font-style: italic;
    }
`
export const WorkContainer = styled.ul`
  display: grid; 
  grid-template-columns: 1fr 1fr 1fr; 
  gap: 0px 5px;    
  height: 250px;
  list-style: none;
  padding: 0;
  width: 100%;
    
  //WorkContainer -> [li] Wallpaper
`

export const Wallpaper = styled.li`    
      align-items: center;
      background: ${(props) => `url(${props.image.src})`}; 
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;
      display: flex;
      justify-content: center;
      height: 100%;
      width: 100%;

      a {
        align-items: flex-end;
        background: transparent;
        color: #000;
        display: flex;
        height: 100%;
        justify-content: center;
        text-decoration: none;
        width: 100%;

        p {
            background: #ffffffb8;
            font-size: 14px;
            font-weight: 700;
            padding: 10px;
            width: calc(100% - 20px);
        }

        &:hover {
            background: linear-gradient(0deg, white, #ffffff4f, #ffffff4f);

            p { 
                color: #6100ff;
            }
        }
    }

`