import React from 'react'
import'./Label.css'

export default function Label({title, inpt ,x}) {
  return (
    <div className='d-flex flex-column p-2 '>
      <label>{title}</label>
      <input type={inpt}  className= {x?'lb':'lb1'}/>
      
    </div>
  )
}
