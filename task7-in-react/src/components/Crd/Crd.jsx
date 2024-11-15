import { Cards } from "../../Cards/Cards";
import'./Crd.css'
import CardComponents from "../CardComponents/CardComponents";


export default function Crd() {
  return (
    <div className="crd ">
      {
        Cards.map((e,index) =>{
            return(
                <CardComponents key={index} img={e.img} title={e.title} desc={e.desc} x={true} cls={'HN-card'}
                />

            )
           
        })
      }
    </div>
  )
}
