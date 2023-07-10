import React from 'react'
import Announce from '../components/Announce'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import Counter from '../components/Counter'


function ProductPage() {
  return (
    <div>
      <Announce/>
      <Navbar/>
      <div className='flex justify-center'>
        <div className='flex flex-1 items-center justify-center'>
            <img src="https://images.thejacketmaker.com/Men%27s+Ionic+Black+Leather+Jacket8074-2-1577697208357.jpg"
            alt='product_image'
            className='h-[90%] w-[75%] rounded-lg shadow-lg hover:scale-[1.1] ease-in duration-300'
            />
        </div>

        <div className='flex-[1.3] flex items-start justify-items-start flex-col mt-2'>
            <h1 className='title text-[40px]'>Leather jacket</h1>
            <p className='pr-[4rem] text-justify mt-4'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt expedita autem rerum esse nostrum? Dignissimos saepe commodi aspernatur veritatis. Praesentium fugit cupiditate numquam autem laudantium ea consectetur, provident voluptates rem.
            </p>
            <p className='mt-5 text-3xl '>Price: <b>$200</b></p>
            {/* color variant */}
            <div className='flex text-2xl mt-5'>
               Colors
               <div className='bg-red-500 w-[2rem] h-[2rem] 
               rounded-full border-2 p-[10px] cursor-pointer
               ml-5 hover:border-[#8a4af3]'></div>
               <div className='bg-blue-500 w-[2rem] h-[2rem] 
               rounded-full border-2 p-[10px] cursor-pointer
               ml-5 hover:border-[#8a4af3]'></div>
               <div className='bg-yellow-400 w-[2rem] h-[2rem] 
               rounded-full border-2 p-[10px] cursor-pointer
               ml-5 hover:border-[#8a4af3]'></div>
            </div>
            <div className='mt-5 text-2xl'>
                Size
                <select className='ml-5 border-2 border-silver'>
                    <option selected disabled>Select</option>
                    <option>Small</option>
                    <option>Medium</option>
                    <option>Large</option>
                </select>
            </div>
            <div className='mt-2'>
            <Counter/>
            </div>
            <button className='btn mt-3'>Add to cart</button>
        </div>
      </div>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default ProductPage
