import React from 'react'
import TitIc from '../TitIc/TitIc'
import './OurAwesom.css'
import LogComponent from '../LogComponent/LogComponent'
import photo1 from'./../../assets/Images/pricingIcon1_2.svg'

import Wheather from '../Weather/Wheather'
import { DataWeather } from '../../DataWeather/DataWeather'



export default function OurAwesom() {
  return (
    <div>
      <div className='titawe '> 
      <TitIc title={'Our Awesome Pricing Plans'} desc={'OUR PRICING'}  x={false} ic={'icon'}/>
      <div className='d-flex '>
      <div className='MY'>
      <p className='month'> Monthly</p>
      <p> Yearly</p>
      </div>
      <LogComponent  img={photo1}  desc={'save25%'}  x={false} />
      
      </div>
     
      </div>
     
    
     {/* {
      DataWeather.map((e,index)=>{
        return(
          <Wheather key={index} ic={e.ic} pa={e.pa} />
        )
      })
     } */}
     
      
    </div>
  )
}

