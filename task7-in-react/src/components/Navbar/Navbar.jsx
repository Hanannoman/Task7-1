import './Navbar.css'

import logo from './../../assets/Images/logo.svg'
import { Link } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import Buttons from '../Buttons/Buttons';


{/* <IoIosArrowForward /> */}
// import { IoIosArrowForward } from "react-icons/io";
// import { IoIosArrowRoundBack } from "react-icons/io";
// <IoIosArrowRoundBack />


export default function Navbar({z , PhotoNav ,ic}) {
  return (
    <div>
        <nav>
           <div className={z ?'HN-nav':'HN-nav2'}>
           
          <div className={z?'d1':'d2'}> <img src={PhotoNav} alt="img" /></div> 
        <div className='child'>
        <div className={z?'d1':'d'}>
          
          <img src={logo} alt="logo" /> 
          </div>
        <div>
        <ul className='lst'>
          <li> <Link to={'/home '}>Home <select></select> </Link></li>
          
            <li > <Link to={'/'} >About </Link> </li>
            <li> Services <select></select></li>
            <li>Pages  <select></select></li>
            <li>Blog <select></select></li>
            
            <li><Link to={'/contact'}> Contact</Link></li>
            <div className='mt-3'>{ic}</div>

            <Buttons title={'Get A Quote'} x={'button'} />
          
           
            
        </ul>
       
        </div>
       
        </div>
       
           </div> 
        
       
       
        </nav>
        
      
    </div>
  )
}
