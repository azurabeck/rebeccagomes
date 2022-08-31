import styled from 'styled-components'

const cl_gray = (props) => { return props.theme.colors.dark_gray }
const cl_pink = (props) => { return props.theme.colors.pink }
const ft_text = (props) => { return props.theme.fonts.size[6] }

export const ContentWrapper = styled.div`
    margin: 0 auto;
    margin-top: 80px;
    max-width: 1050px;
`
export const Text = styled.p`
    color: ${cl_gray};
    font-size: ${ft_text};
    text-align: center;

    span {
        color: ${cl_pink};
    }
`