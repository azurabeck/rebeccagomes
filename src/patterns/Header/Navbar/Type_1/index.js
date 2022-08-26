import Link from 'next/link'
import React from 'react'
import { NavbarWrapper } from '../style'
import Pages from '../../../../infra/Data/pages.json'

export default function Type_1() {
  return (
    <NavbarWrapper>
        <nav>
        <ul>
            { Pages.map((page, i) => (
                <li key={i}><Link href={page.link}><a>{page.title}</a></Link></li>
            )) }
        </ul>
        </nav>

        <section>
        <ul>
            <li>pt</li>
            <li>en</li>
        </ul>
        </section>          
    </NavbarWrapper>
  )
}
