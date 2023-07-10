import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import React, { useState } from 'react'

function Product({item}) {

    const [hoverEffect, setHoverEffects]=useState('opacity-0');

    const handleHoverEnter = ()=>{
        setHoverEffects(' opacity-1 bg-[rgba(0,0,0,0.2)]')
    }

    const handleHoverExit = ()=>{
        setHoverEffects(' opacity-0')
    }

    const iconStyle= 'rounded-lg bg-white cursor-pointer items-center justify-center hover:bg-[#894af3] hover:text-white hover:scale[1.1] ease-in duration-100'
    
    return (
        <div className='m-2 flex flex-1 justify-center items-center overflow-hidden rounded-md shadow-lg relative' 
        onMouseEnter={handleHoverEnter}
        onMouseLeave={handleHoverExit}>
            <img src={item.src} alt='product_image' className='w-[100%]' />
            <div className={` flex gap-2 justify-center items-center absolute ease-in duration-100 ` + hoverEffect}>
                {/* icons */}
                <div className={iconStyle}>
                    <ShoppingCartOutlined />
                </div>
                <div className={iconStyle}>
                    <FavoriteBorderOutlined />
                </div>
               <div className={iconStyle}>
                <SearchOutlined />
               </div>
            </div>
        </div>

    )
}

export default Product
