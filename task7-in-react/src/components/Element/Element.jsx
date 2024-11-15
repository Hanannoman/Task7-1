import'./Element.css'
import { GiCheckMark } from 'react-icons/gi'

export default function Element( {tit}) {
  return (
    <div className='d-flex  ele'>
     <div> {<GiCheckMark/>}</div> 
      <p>{tit}</p>
    </div>
  )
}
