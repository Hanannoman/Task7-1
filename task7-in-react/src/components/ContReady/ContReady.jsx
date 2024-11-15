// import React from 'react'
// import Label from '../Label/Label'
// import'./ContReady.css'
// import Buttons from '../Buttons/Buttons'

// import Fotr from '../Fotr/Fotr'
// import { ContacctData } from '../../ContactData/ContacctData'


// export default function ContReady() {
//   return (
//     <div className='Hn-contact'> 
    
//  <div className='footer1'>
//   <div className='cont'>
//     {
//       ContacctData.map((e,index)=>{
// return(
//   <Fotr key={index} title={e.title} img1={e.img1} desc={e.desc} />
// )
       
//       })
       
// }
// </div>


//       </div>



//       <div className=' Hn-form'>
//       <h3> Ready to Get Started? </h3>
//       <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique tempora molestias, itaque ea quis porro necessitatibus</p>
//     <form >
//       <div className='label'>

//       <Label title={'Your Name*'}  inpt={'text '} x={'lb1'}/>
//       <Label title={'Your Email*'}  inpt={'email '} x={'lb1'}/>
//       </div>
      
//       <Label title={'Your Messag*'}  nam={'text'}  x={'lb1'}/>
//     </form>
    
    
//      <Buttons title={'Send a massag'} x={'button1'} /> 
//       </div>
      
//       </div>)}

import'./ContReady.css'
   import React from 'react'
import Fotr from '../Fotr/Fotr'
import { IoCall, IoLocationSharp } from 'react-icons/io5'
import { FaMailBulk } from 'react-icons/fa'
import Buttons from '../Buttons/Buttons'
import Label from '../Label/Label'
   
   export default function ContReady() {
     return (
      <>
       <div className='FV' >
        <div className='H-cf '>
         <Fotr img1={<IoLocationSharp/>}  title={'Adress'}  desc={'4648 Rocky Road PhiladilPhia '} x={false}/>
         <div className='Inf'>
         <Fotr img1={<FaMailBulk
     />}  title={'Send Email'}  desc={'Info@exmpl.com'} x={false}/>
         </div>
     
     <Fotr img1={<IoCall/>}  title={'Call Emergncy'}  desc={'+88 0123 65499'} x={false}/>
     
     <iframe width="480" height="400" src="https://www.youtube.com/embed/btCnsAoN4ag?si=6tXVzlqtFCvHrBSP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    
     
     </div>


    
    
     
    
    
     <div className='HTN-form'>
     <h3> Ready to Get Started? </h3>
     <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique tempora molestias, itaque ea quis porro necessitatibus</p>
     <form >
       <div className='label'>

       <Label title={'Your Name*'}  inpt={'text '} x={true}/>
       <Label title={'Your Email*'}  inpt={'email '} x={true}/>
       </div>
      
       <Label title={'Your Messag*'}  nam={'text'}  x={false}/>
     </form>
    
    
      <Buttons title={'Send a massag'} x={'button1'} /> 
       </div>
       </div>
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52364.988500640844!2d35.84149102316683!3d34.88607240859345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15217e77890fb9a3%3A0xa072a491096e24b!2zVGFydHVz4oCOLCBTeXJpYQ!5e0!3m2!1sen!2s!4v1731702729531!5m2!1sen!2s" width="100%" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      
      </>
      
       
     
       
     )
   }
      
      
 
      