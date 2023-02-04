import React , {useState} from 'react'
import Link from 'next/link'
import Locale from './_locale'
import { ContentWrapper } from '../../../assets/_style'
import { ProfileWrapper , Text } from './_style';
import { useRouter } from "next/router";

import Image from 'next/image'
import ImgEnterprise from '@/assets/images/enterprise_image_01.png'
import ImgCyberlabs from '@/assets/images/cyberlabs_image_01.png'
import ImgPsafe from '@/assets/images/psafe_image_01.png'

export const Profile = () => {  
    
    const { locale } = useRouter();
    const LocaleText = Locale[locale]

    const enterprise = 'https://enterprise.psafe.com'
    const cyber = 'https://cyberlabs.ai'
    const psafe = 'https://psafe.com'


    return (
      <ContentWrapper>
        <ProfileWrapper>

          <Text dangerouslySetInnerHTML={{ __html: LocaleText }} />

          <Link href={enterprise}><a target='_blank'> Enterprise </a></Link> 
          <Link href={cyber}><a target='_blank'> Cyberlabs </a></Link> 
          <Link href={psafe}><a target='_blank'> PSafe </a></Link> 

         </ProfileWrapper>     
      </ContentWrapper>
    )
 }


export default Profile
