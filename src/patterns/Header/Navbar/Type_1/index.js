import Link from 'next/link'
import React , { useState } from 'react'
import { NavbarWrapper , MenuWrapper } from './style'
import { LangWrapper } from '../style'
import MenuMobile from '../../../MenuMob'
import Pages from '@/infra/Data/pages.json'
import { barsIc } from '@/assets/fontawesome'
import { useRouter } from "next/router";

export default function Type_1(props) {

  const [menu , setMenuState] = useState(false)
  const { locale, asPath } = useRouter();
  const PageMenu = Pages[locale];
  const getTitle = PageMenu.filter(page => page.link === props.path)

  return (
    <NavbarWrapper>   
        <MenuWrapper>
            <div onClick={() => setMenuState(!menu)}>
              { barsIc }          
              <label>{getTitle[0].title}</label>
            </div>
            { menu &&
                <ul>
                    { PageMenu && PageMenu.map((page, i) => (
                        page.link === '/' ? null : <li key={i}><Link href={page.link}><a>{page.title}</a></Link></li>
                    )) }
                </ul>        
            }
        </MenuWrapper>

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
            <MenuMobile />          
        </LangWrapper>
              
    </NavbarWrapper>
  )
}
