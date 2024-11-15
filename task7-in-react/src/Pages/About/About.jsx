
import { CiSearch } from 'react-icons/ci'
import EnvatoComponents from '../../components/EnvatoComponents/EnvatoComponents'
import Footer from '../../components/Footer/Footer'

import Hero from '../../components/Hero/Hero'
import Navbar from '../../components/Navbar/Navbar'
import Team from '../../components/Team/Team'
import TeamMember from '../../components/TeamMember/TeamMember'
import img from'./../../assets/Images/plane.webp'

import './About.css'


export default function About() {
  return (
    <div>
       <Navbar z={true}  PhotoNav={img} ic={<CiSearch/>}/>
       <Hero /> 
     <Team /> 
       <TeamMember /> 
    
      <Footer />
      
      
   
   
    
    </div>
  )
}
