import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import React from 'react'
import { ApiSlides } from '../apifolder/SliderApi'
import { useState } from 'react'
import './Slider.css'

function Slider() {
//use state hooks
const[slides] = useState(ApiSlides)
const[activeSlide, setActiveSlide] = useState(0)




//style 

    const arrowStyle = 'rounded-full bg-gray-100 flex items-center justify-center shadow-sm hover:cursor-pointer'

    const nextSlide =()=> {
        
        if(activeSlide === slides.length - 1)
        {
            setActiveSlide(0)
        }
        else{
            setActiveSlide(activeSlide + 1)
        }
    }

    const prevSlide =()=> {
        
        if(activeSlide === slides.length - 1)
        {
            setActiveSlide(0)
        }
        else{
            setActiveSlide(activeSlide + 1)
        }
    }
    return (
        <div className='parentDiv w-full h-[540px] bg-white flex items-center justify-between'>

            {/* left arrow div */}
            <div className={arrowStyle}>
                <ArrowLeftOutlined style={{ fontSize: '50px' }} onClick = {prevSlide} />
            </div>

            {/* slide div */}
           {slides.map((slide, index)=>{
            if(index === activeSlide){
                return(
                    <div className={`wrapper flex w-[100%] h-[500px] justify-center items-center shadow-2xl rounded-lg border-gray-300 border-10px overflow-hidden relative ${ slide.background}`}>
                    <div className='slide flex items-center justify-center h-[100%]'>
                        <div className='forimage flex flex-1 justify-center items-center h-[100%]'>
    
                            <img className='h-[100%] object-cover'
                                src={slide.src}
                                alt='slide_image' />
    {/* https://images.pexels.com/photos/1496372/pexels-photo-1496372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 */}
                        </div>
                        <div className='des flex flex-col flex-1 place-items-start justify-center ml-11'>
                            <h2 className='text-[55px]'>{slide.content.h2}</h2>
                            <p className='text-[30px]'>{slide.content.p}</p>
                            <button className="btn">
                                Shop Now</button>
    
                        </div>
    
                    </div>
                </div>
                )
            }
           })}

            {/* right arrow div */}
            <div className={arrowStyle}>
                <ArrowRightOutlined style={{ fontSize: '50px' }} onClick = {nextSlide} />
            </div>
        </div>
    )
}

export default Slider