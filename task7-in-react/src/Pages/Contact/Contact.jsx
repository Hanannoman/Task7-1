
import './Contact.css'
import Hero from '../../components/Hero/Hero'
import Footer from '../../components/Footer/Footer'
import ContReady from '../../components/ContReady/ContReady'
import Navbar from '../../components/Navbar/Navbar'
import img from'./../../assets/Images/plane.webp'



export default function Contact() {
  return (
    <div>
     <Navbar z={true}  PhotoNav={img}/>
   <Hero/>
  
    <ContReady /> 
   
   <Footer />
    </div>
  )
}
