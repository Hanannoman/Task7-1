import'./Fotr.css'


export default function Fotr( {img1,title,desc,x}) {
  return (
    <>
    <div className={'footer'}>
      
      
        <div className={x?'H-im':'H-im1'}>{img1}</div>
        <div className='H-h'>
        <h5>{title}</h5>
        
        <p>{desc}</p>
        </div>
       
        </div>
        
      
        </>

       
       
   
  )
}
