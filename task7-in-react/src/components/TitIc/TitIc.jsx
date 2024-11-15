import './TitIc.css'
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io'

export default function TitIc({title ,desc ,x ,ic,ht,pa}) {
  return (
    <div >
        <div className={x?'icp':'icp1'}>
       <IoIosArrowRoundBack className={ic} />
       <p className={pa}>{desc}</p>
       <IoIosArrowRoundForward  className={ic} />
       </div>
       <h2 className={ht}>{title}</h2>
    </div>
  )
}
