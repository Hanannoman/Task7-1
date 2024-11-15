import React from 'react'
import TitIc from '../TitIc/TitIc'
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io'
import'./FeaturedNews.css'
import Envato from '../Envato/Envato'
import photo from './../../assets/Images/blogThumb1_2.webp'
import photo1 from './../../assets/Images/blogThumb1_3.webp'
import photo2 from './../../assets/Images/blogThumb1_1.webp'
import CardOurLa from '../CardOurLa/CardOurLa'
import photo5 from'./../../assets/Images/blogProfile1_2.webp'
import photo4 from'./../../assets/Images/blogProfile1_3.webp'
import photo3 from'./../../assets/Images/blogProfile1_1.webp'
export default function FeaturedNews() {
  return (
    <div>
      <div className='flex'>
        <TitIc title={'Featured News And Insights'} desc={'BLOG & NEWS'}  x={true} ic={'icon'}/>
        <div className='d-flex'>
        <IoIosArrowRoundBack className='bac'  />
        <IoIosArrowRoundForward  className='forw' />
        </div>
        </div>
        
    <div className='photoo '>
       <Envato image={photo} x={'envato2'}/>
       <Envato image={photo1} x={'envato2'}/>
       <Envato image={photo2} x={'envato2'}/>
       </div>
       <div className='photo1'>
       <div className='Or'>
        <CardOurLa bot={'ssss'} desc={ 'March14,2024'} title1={'Best and fastest server data ever'}  img={photo5} title={'Admin'} desc1={'Co fonder'} x={false} crd={'cardla'}/></div>
      
       <CardOurLa bot={'ssss'} desc={ 'March14,2024'} title1={'Best and fastest server data ever'}  img={photo4} title={'Admin'} desc1={'Co fonder'} x={false} crd={'cardla'}/>
       <div className='Or1'><CardOurLa bot={'ssss'} desc={ 'March14,2024'} title1={'Best and fastest server data ever'}  img={photo3} title={'Admin'} desc1={'Co fonder'} x={false} crd={'cardla'}/></div>
       </div>
      
    </div>

  )
}
