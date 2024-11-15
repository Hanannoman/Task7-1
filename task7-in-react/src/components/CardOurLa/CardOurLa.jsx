
import { FaStar } from 'react-icons/fa'
import'./CardOurLa.css'
import { HiOutlineArrowLongLeft, HiOutlineArrowLongRight } from 'react-icons/hi2'
export default function CardOurLa({desc,img,title,desc1 ,x ,crd,title1 ,bot }) {
  return (
    <div className={crd}>
     <button className={ x?'bott1':'bott'}>{bot}</button>
     <div className="d-flex star">
  <FaStar />
  <FaStar />
  <FaStar />
  <FaStar />

  
 
  
  
</div>
<div></div>
      <p>{desc}</p>
      
      <h4>{title1}</h4>
      <div className='imhp'>     <img src={img} alt="img" />
      <div><h3>{title}</h3>

<p>{desc1}</p></div>
<button className={ x?'bott1':'bott2'}><HiOutlineArrowLongRight/></button></div>
  
      
    </div>
    
  )
}
