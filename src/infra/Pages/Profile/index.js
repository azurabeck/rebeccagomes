import React , {useState} from 'react'
import Link from 'next/link'
import Locale from './_locale'
import { ContentWrapper } from '../../../assets/_style'
import { ProfileWrapper , TitleWrapper , Wallpaper, WorkContainer } from './_style';
import { useRouter } from "next/router";

import cyberImage from '@/assets/images/cyberlabs_image_01.png'
import enterImage from '@/assets/images/enterprise_image_01.png'
import psafeImage from '@/assets/images/psafe_image_01.png'


export const Profile = () => {  
    
    const { locale } = useRouter();
    const LocaleText = Locale[locale][0]
    const WorkText = LocaleText.work_list
    
    return (
      <ContentWrapper>
        <ProfileWrapper>

          <TitleWrapper>
              <h2 className='title'>{LocaleText.profile_title}</h2>
              <h2 className='period'>{LocaleText.profile_desc}</h2>
          </TitleWrapper>

          <WorkContainer>
            {
              WorkText && WorkText.map((item, i) => {

               

                return (
                   <Wallpaper key={i} image={
                      item.title === 'Cyberlabs' && cyberImage ||
                      item.title === 'Enterprise' && enterImage ||
                      item.title === 'PSafe' && psafeImage 
                   }>
                      <Link href={item.link}><a target='_blank'> <p>{item.title}</p> </a></Link> 
                      
                   </Wallpaper>
                )
              })
            }
          </WorkContainer>

         </ProfileWrapper>     
      </ContentWrapper>
    )
 }


export default Profile
