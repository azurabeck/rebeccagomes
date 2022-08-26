import Link from 'next/link'
import React , { useState } from 'react'
import { NavbarWrapper , MenuWrapper , LangWrapper } from '../style'
import Pages from '../../../../infra/Data/pages.json'
import { barsIc } from '../../../../assets/fontawesome'

export default function Type_1(props) {

  const [menu , setMenuState] = useState(false)

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
              <li class='active'>pt</li>
              <li> / </li>
              <li>en</li>
            </ul>  
        </LangWrapper>
              
    </NavbarWrapper>
  )
}
