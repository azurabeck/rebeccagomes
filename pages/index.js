import React from 'react'
import styled from 'styled-components'

// IMPORTS INFRA
import Typography from '../src/infra/Typography'
import Head from '../src/infra/Head'


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
        <Head title='Rebecca Gomes - Home'></Head>
        <Typography>
            {MainContainer()}
        </Typography>
    </div>
  )
}
