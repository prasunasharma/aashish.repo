import { Search, ShoppingCartOutlined } from '@mui/icons-material'
import { Badge } from '@mui/material'
import React from 'react'



function Navbar() {
  const style = 'cursor-pointer text-purple-600 ml-[25px]  text-[14px]'
  return (
    <div className='navbar h-[60px] shadow-md relative z-10'>
       <div className='wrapper pl-[20px] pr-[20px] pt-[10px] pb-[10px] flex justify-between items-center'>
        {/* left div */}
        <div className='left flex flex-1 items-center gap-3 '>
            <div className='language cursor-pointer text-[16px] '>
                En
            </div>
            <div className='searchInput flex border-[2px] border-solid border-lightgray ml-[10px] p-[5px] rounded-md items-center
            focus-within:border-purple-600 transition-all'>
              <input className='input outline-none'
              type='text' />
              
              <Search className='text-purple-500' style={{fontSize: '20px'}} />
            </div>
            </div>

{/* LOgo */}
        <div className='center flex flex-1'>
          <div className='logo font-bold text-lg text-purple-500'>
            Summer Kings
          </div>
          </div>

{/* right div */}
        <div className='right flex flex-1 items-center justify-end'>
          
          <div className={style}>Register</div>
          <div className={style}>Sign In</div>
          <div className={style}>   
          <Badge badgeContent={2} color='primary'>
            <ShoppingCartOutlined /> 
          </Badge>
          </div>
          </div>


        </div> 
    </div>
  )
}

export default Navbar