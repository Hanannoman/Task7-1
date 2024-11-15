import React from 'react'
import'./List.css'

export default function List({title , img1,desc}) {
  return (
    
       
       <div >
        <div className='d-flex'>
        <div>{img1}</div>
            <p>{desc}</p>
        
        </div>
       
       
       < li className='li'>{title}</li>
      
       
      </div>
  
  )
}
