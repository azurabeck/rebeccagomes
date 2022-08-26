import Link from 'next/link'
import React from 'react'
import { NavbarWrapper } from '../style'

export default function Type_2() {
  return (
    <NavbarWrapper>
        <nav></nav>

        <section>
            <ul>                
                <li><Link href='/'><a>home</a></Link></li>
                <li>pt</li>
                <li>en</li>
            </ul>
        </section>          
    </NavbarWrapper>
  )
}
