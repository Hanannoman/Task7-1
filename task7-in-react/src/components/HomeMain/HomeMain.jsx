import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import CardComponents from "../CardComponents/CardComponents";
import TitIc from "../TitIc/TitIc";
import'./HomeMain.css'
import photo from'./../../assets/Images/serviceIcon1_2.svg'
import photo1 from'./../../assets/Images/serviceIcon1_3.svg'
import photo2 from'./../../assets/Images/serviceIcon1_4.svg'
import photo3 from'./../../assets/Images/serviceIcon1_1.svg'



export default function HomeMain() {
  return (
    <>
    <div className="titlicc">
<div className="HN-TIT"> <TitIc title={'Elivating Businesses With IT Ingenuity'} desc={'our service'} x={true} /> </div>
       
       <div className='d-flex backfor'>
        <IoIosArrowRoundBack className='bac1'  />
        <IoIosArrowRoundForward  className='forw1' />
        </div>
      </div>
     <div className="H-Ca mt-3">
   
     <CardComponents title={'Woo Comerce'} desc={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere odit soluta, maiores hic autem impedit? Id dolore rem quidem nisi'} cls={'hn-ca'} img={photo}/> 

     <CardComponents title={'CRM solutions'} desc={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere odit soluta, maiores hic autem impedit? Id dolore rem quidem nisi'}  cls={'hn-ca'} img={photo1}/> 
     
     <CardComponents title={'Web Design'} desc={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere odit soluta, maiores hic autem impedit? Id dolore rem quidem nisi' } cls={'hn-ca'} img={photo2}/> 
     <CardComponents title={'Data Guard Sentinel'} desc={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere odit soluta, maiores hic autem impedit? Id dolore rem quidem nisi'}  cls={'hn-ca'} img={photo3}/> 
    </div>
    <div className="iframe">
    <iframe width="650" height="400" src="https://www.youtube.com/embed/btCnsAoN4ag?si=6tXVzlqtFCvHrBSP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    
    </div>
    
    <div className="sum-ca">
    <CardComponents title={'Requirement'} desc={' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere odit soluta, maiores hic autem impedit?'} x={true} cls={'vid'} />
<CardComponents title={'UI/UX Design'} desc={' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere odit soluta, maiores hic autem impedit?'} x={true} cls={'vid'} />
<CardComponents title={'Prototype'} desc={' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere odit soluta, maiores hic autem impedit?'} x={true} cls={'vid'} />
<CardComponents title={'Development'} desc={' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere odit soluta, maiores hic autem impedit?'} x={true} cls={'vid'} />
    

    </div>
   


   
    </>
  )
}
