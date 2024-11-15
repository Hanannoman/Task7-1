import React from 'react'
import LogComponent from '../LogComponent/LogComponent'
import { TeamData } from '../../Data/TeamData'

export default function Team() {
  return (
    <div className='log'>
        {
            TeamData.map((e,index) =>{
                return(
                   
                    <LogComponent key={index} img={e.img} desc={e.desc} x={true} />  
                  
                    
                )
            })
        }
   
    </div>
  )
}

