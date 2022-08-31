import React from 'react'
import Locale from './_locale'
import { 
  ContentWrapper,
  Text } from './_style'
import { useRouter } from "next/router";

export const About = () => {  
    
    const { locale } = useRouter();
    const LocaleText = Locale[locale]

    return (
      <ContentWrapper>
        <Text dangerouslySetInnerHTML={{ __html: LocaleText }} />    
      </ContentWrapper>
    )
 }


export default About