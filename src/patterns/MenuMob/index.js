import Link from 'next/link';
import Pages from '@/infra/Data/pages.json'
import React , { useState } from 'react'
import { MenuMobileWrapper } from './_style';
import { arrowIc , barsIc } from '@/assets/fontawesome'
import { useRouter } from "next/router";


export default function MenuMobile() {  
  const [menu , setMenuState] = useState(false)  
  const { locale, asPath } = useRouter();
  const PageMenu = Pages[locale];

  return (
    <MenuMobileWrapper>
        <div onClick={() => setMenuState(!menu)}> { barsIc } </div>
        { menu &&
            <ul>
                <li onClick={() => setMenuState(!menu)}> { barsIc } </li>
                { PageMenu && PageMenu.map((page, i) => (
                    <li key={i} className={page.link + '/' === asPath ? 'active' : null}><Link href={page.link}><a>{page.title} {arrowIc}</a></Link></li>
                ))    }  
            </ul>        
        }
    </MenuMobileWrapper>
  )
}