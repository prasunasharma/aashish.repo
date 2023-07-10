import  {React, useState } from 'react'
import {AiOutlineClose} from 'react-icons/ai'

function Announce() {
    const[announceStyle, setAnnounceStyle] = useState('bg-purple-600 text-white flex items-center justify-center')

    const handleClose = ()=> {
      setAnnounceStyle(announceStyle + " hidden")
    }
  return (
    <div className={announceStyle}>
       <h2> Hurry up its 40% off now.</h2>
        <AiOutlineClose className='cursor-pointer' onClick={handleClose} />
    </div>
  )
}

export default Announce