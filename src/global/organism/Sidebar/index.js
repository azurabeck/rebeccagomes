import React, { useState } from 'react'
import { OutsideArea, SidebarClose, SidebarContainer, SidebarOpen, SidebarWrapper } from './_style'
import { barsIc } from '@/assets/fontawesome'

export const Sidebar = (props) => {  

    const [ sidebarState , setSidebarState ] = useState(false)
    
    return (
            <SidebarWrapper>
                <SidebarClose onClick={() => setSidebarState(!sidebarState)}>{barsIc}</SidebarClose>
                {
                    sidebarState && 
                    <SidebarOpen>
                        <SidebarContainer>
                            <span/>
                        </SidebarContainer>
                        <OutsideArea onClick={() => setSidebarState(!sidebarState)}></OutsideArea>
                    </SidebarOpen>
                }                
            </SidebarWrapper>
    )
 }


export default Sidebar