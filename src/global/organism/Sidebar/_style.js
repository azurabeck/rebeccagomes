import styled from 'styled-components'
import { theme } from 'assets/_style'

export const SidebarWrapper = styled.section`
    color: ${theme.colors.font_black_light};
    z-index: 1;
`

export const SidebarClose = styled.div`
    color: ${theme.colors.font_default};
    width: 15px;
    font-size: 15px;

        &:hover{
            color: ${theme.colors.purple};
            cursor: pointer;
        }
`

export const SidebarOpen = styled.div`
    bottom: 0;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
`

export const OutsideArea = styled.div`
    background-color: rgba(252, 252, 252, 0.85);
    bottom: 0;
    left: 440px;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 998;
`

export const SidebarContainer = styled.div`
    background-color: #fff;
    bottom: 0;
    box-shadow: 0px 0px 10px 14px rgba(154, 138, 138, 0.4);
    left: 0;
    position: fixed;
    top: 0;
    width: 440px;
    z-index: 999;

    span {
        background-color: ${theme.colors.purple};
        display: block;
        height: 100%;
        width: 5px;
    }
`