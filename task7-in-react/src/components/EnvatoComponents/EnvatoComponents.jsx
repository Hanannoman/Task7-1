import { DataEnvato } from "../../DataEnvato/DataEnvato"
import Envato from "../Envato/Envato"
import'./EnvatoComponents.css'

export default function EnvatoComponents() {
  return (
    <div className="data">
        {
            DataEnvato.map((e,index)=>{
                return(
                    <Envato  key={index} image={e.image} x={'envato1'}/>
                )
            })
        }
      
    </div>
  )
}
