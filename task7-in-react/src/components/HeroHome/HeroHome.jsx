import { GiCheckMark } from 'react-icons/gi'
import Element from '../Element/Element'
import './HeroHome.css'
import Buttons from '../Buttons/Buttons'
import photo from'./../../assets/Images/heroThumb1_1.webp'
import photo1 from'./../../assets/Images/heroShape1_1.webp'
import photo2 from'./../../assets/Images/profileShape1_1.webp'
import Envato from '../Envato/Envato'
import { FaStar } from 'react-icons/fa'
import { DataHeHo } from '../../DataHeHo/DataHeHo'
import LogComponent from '../LogComponent/LogComponent'

export default function HeroHome() {
  return (
    <>
    
    <div   className='HN-hero'>
      <div className='hero'>
      <div  className='sec5'>
      <p> Every Thing You Need To Creat A Website</p>
      </div>
     
      <h2>Business Innovation With IT Services Exertise</h2>
    
      <div className='d-flex  '>
      <div>
      <Element   tit={'Deployment and Support'} />
      <Element   tit={'Discovery and Analysis'} />
      </div>
    <div>
    <Element   tit={'Flexibility and Adaptability'} />
      <Element   tit={'Competitive Advantage'} />
     
    </div>
      </div> 
      </div>
      
      <div className='im'>
      <img src={photo } alt="image" />
      
      </div>
    
     
<img src={photo1} alt="image" className='ima' />

      

    </div>
    
     <div className='da'>
        {
         DataHeHo.map((e,index)=>{
          return(
            <Envato  key={index} image={e.img}  x={'envato1'}/>  
          )
         })
               
      
           
        }
        </div>
        
    </>
  )
}
