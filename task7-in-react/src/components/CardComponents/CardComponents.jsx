import { Card } from 'react-bootstrap'
import './CardComponents.css'
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md'
 

export default function CardComponents( { img,title,desc ,x ,cls}) {
  return (
    
   <div >
     
      <div className={cls}>
        
      <img src={img}/> 
     <div className='back'>
     <h4>{title}</h4>
     <p>{desc}</p>
     <button className={x?'boot':'boot1'}>  Read More <MdOutlineKeyboardDoubleArrowRight  />
      
     </button>
  
     </div>
    
      </div>
  
    </div>
    
    
  )
}
