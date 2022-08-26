import React , {useState} from 'react'
import styled from 'styled-components'

// IMPORTS COMPONENTS
import Head from '../src/infra/Head'
import Typography from '../src/infra/typography'


const MainWrapper = styled.div`  
  align-items: center;
  display: flex;
  height: 80vh;
  justify-content: center;
  padding: 0 ${(props) => { return props.theme.space.hg }};
`

export function MainContainer() {
  return (
      <MainWrapper>
        Esse é o conteúdo dinámico
      </MainWrapper>
  )
}

export default function Home() {
    return (
    
    <div>
        <Head title='Home - Profile' />
        <Typography>
            {MainContainer()}
        </Typography>
    </div>
  )
}
