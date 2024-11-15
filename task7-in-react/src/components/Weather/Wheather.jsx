import React from 'react'

export default function  Wheather({ic ,pa}) {
    return (
      <div>
        <h3>Regular Plane</h3>
        {/* <img src={img} alt="img" /> */}
        <p> <span>$49</span> /Month</p>
        <ul>
         <div>{ic}</div> <li>{pa}</li>
        </ul>
      </div>
    )
  }

 
