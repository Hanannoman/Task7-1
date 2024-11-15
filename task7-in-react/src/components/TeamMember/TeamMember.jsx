import React from 'react'
import'./TeamMember.css'
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import Buttons from '../Buttons/Buttons';
import Crd from '../Crd/Crd';
import EnvatoComponents from '../EnvatoComponents/EnvatoComponents';
import TitIc from '../TitIc/TitIc';

export default function TeamMember() {
  return (
    <>
    <div className='HN-sec'>
    <TitIc title={'Our Didicated Team Member'} desc={'Team member'} ic={'icon'} x={true}/>
    <Buttons title={'All Members'} x={'button1'} /></div> 
       

         
         <Crd /> 
        <p className='para'>1+k Brands Trust Us</p>
       
      

         <EnvatoComponents  /> 
      
        </>
   
  
   
     
    
      

    
   
  )
}
