import Buttons from "../Buttons/Buttons";
import TitIc from "../TitIc/TitIc";
import'./OurLatest.css'
import ima from './../../assets/Images/ctaThumb1_1.webp'
import ima1 from './../../assets/Images/ctaShape1_1.webp'
import CardOurLa from "../CardOurLa/CardOurLa";
import photo1 from './../../assets/Images/testiThumb3_1.webp'
import photo2 from './../../assets/Images/testiThumb3_2.webp'
import photo3 from './../../assets/Images/testiThumb3_3.webp'
import { FaStar } from "react-icons/fa";



export default function OurLatest() {
  return (
    <div >
<div className="our">
    <img src={ ima} alt="img" className="our-img" />
    <TitIc title={'Our Awesome Pricing Plans'} desc={'OUR PRICING'}  x={false} ic={'icon1'} ht={'color1'} pa={'p1'}/>
    <img src={ima1} alt="img"  className="ima1"/>
    
    <Buttons title={'TALK TO A SPECIALIST'}  x={'button3'}/>
    
  
    
</div>
<div className="allsec">
<div className="titlc">
<TitIc title={'Our latest client feedback'} desc={'TEST MONIALS'}  x={false} ic={'icon'} ht={'color'}  pa={'p'} />
</div>

<div className="oul-la">
  

<CardOurLa desc={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam alias maiores  Libero consequatur suscipit, perferendis ad dolorum quisquam eligendi '} title={'Kristin Waston'} desc1={'Web Designer'} img={photo1}  x={true} crd={'cardla'} />
<CardOurLa desc={'facere explicabo animi! Libero consequatur suscipit, perferendis ad, praesentium earum atque neque dolorum quisquam eligendi delectus exercitationem '} title={'Theresa webb'} desc1={'tech enthusiost'} img={photo2} x={true} crd={'cardla1'} />
<CardOurLa desc={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam alias maiores  Libero consequatur suscipit, perferendis ad dolorum quisquam eligendi'} title={'Ronald Reachard'} desc1={'Web enterpennour'} img={photo3} x={true} crd={'cardla'} />
</div>
<div className="dev1" >
<div className="dev">
  <div className="dev2"></div>
</div>
</div>
    </div>
    </div>
  )
}
