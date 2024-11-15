import { Col, Row } from "react-bootstrap";
import './Footer.css'
import photo from'./../../assets/Images/logo.svg'
import Fotr from "../Fotr/Fotr";
import { IoCall, IoLocationSharp } from "react-icons/io5";
import { FaFacebookF, FaInstagram, FaMailBulk, FaTwitter, FaYoutube } from "react-icons/fa";
import List from "../List/List";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import photo1 from'./../../assets/Images/footerThumb1_1.webp'
import photo2 from'./../../assets/Images/footerThumb1_2.webp'
import { FaPhoneFlip } from "react-icons/fa6";
import { HiOutlineArrowLongRight } from "react-icons/hi2";






export default function Footer() {
  return (
    <div  className="dv">
      <div className="footer">
     <Fotr img1={<IoLocationSharp/>}  title={'Adress'}  desc={'4648 Rocky Road PhiladilPhia '} x={true}/>
     <Fotr img1={<FaMailBulk/>}  title={'Send Email'}  desc={'Info@exmpl.com'} x={true}/>
     <Fotr img1={<IoCall/>}  title={'Call Emergncy'}  desc={'+88 0123 65499'} x={true}/>
     </div>
     <div className="H-lis">
      <div className="lis1">
      <img src={photo} alt="img" />
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum commodi dolores consectetur nostrum repudiandae eaque aut, voluptatum velit vel sit cupiditate nemo dolor quod natus dolorem</p>
      <div className="d-flex ">
      <div className="fac"><FaFacebookF /> </div>
      <div className="fac"><FaInstagram className="mx-1" /></div>
      <div className="fac"><FaTwitter className="mx-2" /></div>
      <div className="fac"><FaYoutube /></div>
      </div>
     
      </div>
      <div className="lis1" >
        <h3> Quick Links</h3>
      <ul>
        <List img1={<MdOutlineKeyboardDoubleArrowRight/>} desc={'Exterch About'}/>
        <List img1={<MdOutlineKeyboardDoubleArrowRight/>} desc={' Our Service'}/>
        <List img1={<MdOutlineKeyboardDoubleArrowRight/>} desc={' Our Blogs'}/>
        <List img1={<MdOutlineKeyboardDoubleArrowRight/>} desc={'FAQ S'}/>
        <List img1={<MdOutlineKeyboardDoubleArrowRight/>} desc={'Contact Us'}/>
        </ul>
        </div> 
     
     
      <div className="lis1">
      <h3> Recent Posts</h3>
      <ul>
       <div className="d-flex src"><img src={photo1}  className="H-p"/> <List    img1={<SlCalender/>} title={'Top 5 Most FamouseTechnology Trend in 2024'} desc={'15yh,April,2024'} /></div>
       <div className="d-flex"><img src={photo2}  className="H-p" /> <List   img1={<SlCalender/>} title={'The Sufing Man Will Blow Your Mind'} desc={'20yh,june,2024'} /></div>
      </ul>
    </div>
   
    
    <div className="lis1">
    <h3 className="text-center"> Contact Us</h3>
      <ul>
        <List desc={'info@example.com'}/>
        <List  img1={<FaPhoneFlip />} desc={'+208 -6666-0112'}/>
        <div className="d-flex">
        <List 
         desc={'YourEmail Adress'}/> 
         <button className="buttonn"><HiOutlineArrowLongRight /></button>
        
        </div>
        <div className="d-flex a">
        <input type="checkbox"  className="input" />
        <List desc={'i agree to the '}  /> 
        <a href="#">privicy policy</a>
        </div>
      
      

      </ul>
    </div>
    
     </div>
     <div className="d-flex justify-content-between botFot">
      
        <p>&copy all copy right 2024 extrech</p>
        <p>Terms & Condition <span className="H-span">Privacy Policy</span></p>
         </div>
 </div>
  )
}
