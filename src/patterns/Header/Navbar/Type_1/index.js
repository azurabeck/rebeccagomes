import Link from 'next/link'
import React , { useState } from 'react'
import { NavbarWrapper , MenuWrapper , LangWrapper } from '../style'
import Pages from '../../../../infra/Data/pages.json'
import { barsIc } from '../../../../assets/fontawesome'
import { useRouter } from "next/router";

export default function Type_1(props) {

  const [menu , setMenuState] = useState(false)
  const { locale, locales, defaultLocale, asPath } = useRouter();

  return (
    <NavbarWrapper>   
        <MenuWrapper>
            <div onClick={() => setMenuState(!menu)}>
              { barsIc }          
              <label>{props.path === '/' ? 'Home' : props.path}</label>
            </div>
            { menu &&
                <ul>
                    { Pages.map((page, i) => (
                        page.link === '/' ? null : <li key={i}><Link href={page.link}><a>{page.title}</a></Link></li>
                    )) }
                </ul>        
            }
        </MenuWrapper>

        <LangWrapper>
            <ul>
              <li className={locale === "pt-BR" && 'active'}>
                <Link
                  activeClassName={locale === "pt-BR" && 'active'}
                  href={asPath}
                  locale="pt-BR">pt</Link>
              </li>
              <li className={locale === "en-US" && 'active'}>
                <Link
                  activeClassName={locale === "en-US"}
                  href={asPath}
                  locale="en-US">en</Link>
              </li>
            </ul>  
        </LangWrapper>
              
    </NavbarWrapper>
  )
}
