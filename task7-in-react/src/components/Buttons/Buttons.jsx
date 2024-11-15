
import './Buttons.css'
import { IoIosArrowRoundForward } from "react-icons/io";
export default function Buttons({title , x}) {
  return (
    <div >
      <button className={ x}>{title}
      <IoIosArrowRoundForward  />
      </button>
    </div>
  )
}
