import React from 'react'
import'./LogComponent.css'


export default function LogComponent({img , desc, x}) {
  return (
   
    <div className='log '>
      <img src={img} alt="img" />
      <p className={x?'title':'tit'}>{desc}</p>

    </div>
    
  
 
  )
}
