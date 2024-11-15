import './Hero.css'
import photo from'./../../assets/Images/line-element.webp'
import photo1 from'./../../assets/Images/element.webp'
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';


export default function Hero() {
  return (
    
    <section>
      <div className='HN-Hero'>
        <div className='hero-child'>
          <img src={photo} alt="image" className='imag' />
          <img src={photo1} alt="image" className='imag1' />
          <div className='Title'>
          <h1>About Us</h1>
          <p><Link to={'/home'} className='link'>HOME</Link>  <IoIosArrowForward /> About Us</p>
          </div>
          
        </div>
    
     
          
      

      </div>


      
    </section>
  )
}
