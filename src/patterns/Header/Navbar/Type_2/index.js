import Image from 'next/image'
import ImageImp from '../../../../assets/images/cover_2.png'
import Link from 'next/link'
import React from 'react'
import Pages from '../../../../infra/Data/pages.json'
import { LangWrapper } from '../style'
import { useRouter } from "next/router";
import { 
  Decoration, 
  MenuWrapper, 
  Title,
  Title_Var01, 
  Title_Var02, 
  Title_Var03, 
  Title_Var04, 
  TopWrapper, 
  Wallpaper
}   from './style'

export default function Type_2() {
  
  const { locale, asPath } = useRouter();
  const PageMenu = Pages[locale];

  return (
    <div>     
        <TopWrapper>   
          <LangWrapper>
              <ul>
                <li className={locale === "pt-BR" ? 'active' : null}>
                  <Link
                    activeClassName={locale === "pt-BR" && 'active'}
                    href={asPath}
                    locale="pt-BR">pt</Link>
                </li>
                <li> / </li>
                <li className={locale === "en-US" ? 'active' : null}>
                  <Link
                    activeClassName={locale === "en-US"}
                    href={asPath}
                    locale="en-US">en</Link>
                </li>
              </ul>  
          </LangWrapper> 
        </TopWrapper>

        <Wallpaper>
          <Image src={ImageImp} width="420.44" height="598.39" />
          <Title>
              <Title_Var01>Hello World, I'm </Title_Var01> <br/>
              <Title_Var02>Rebecca Gomes</Title_Var02> 
              <Title_Var03>and I'm a</Title_Var03><br/>
              <Title_Var04>Design & Code Developer</Title_Var04>
          </Title>            
        </Wallpaper>

        <MenuWrapper>
            <Decoration decor_size='99%'></Decoration>
            <ul>
                { PageMenu && PageMenu.map((page, i) => (
                    <li key={i} className={page.link + '/' === asPath ? 'active' : null}><Link href={page.link}><a>{page.title}</a></Link></li>
                ))    }        
            </ul>       
        </MenuWrapper>
    </div>
  )
}
