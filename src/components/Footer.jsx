import { EmailOutlined, Facebook, Instagram, LinkedIn, LocalPhoneOutlined, LocationOnOutlined, Twitter } from '@mui/icons-material'
import React from 'react'

function Footer() {

    const socialStyle = 'm-3 rounded-full cursor-pointer p-2 text-white'
  return (
    
    
    <div className='flex items-center justify-around p-2'>
      <div className='flex-1 flex flex-col flex-wrap p-2'>
         {/*store information  */}
         <h1 className='text-[25px]'>
            Aashish Chaulagain
         </h1>
         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Fugiat veniam eum eligendi voluptatem, delectus quo deleniti, dignissimos aspernatur quos itaque libero explicabo 
            maiores ullam voluptates neque quaerat! Voluptate, placeat asperiores!</p>
            <div className='flex items-center justify-center mt-3 self-start'>
                <div className={socialStyle + ' bg-blue-600'}>
                    <Facebook/>
                </div>
                <div className={socialStyle + ' bg-orange-500'}>
                    <Instagram/>
                </div>
                <div className={socialStyle + ' bg-sky-400'}>
                    <Twitter/>
                </div>
                <div className={socialStyle + ' bg-blue-500'}>
                    <LinkedIn/>
                </div>
            </div>
      </div>

      <div className='flex-1 flex flex-col p-2'>
    
        {/* contact information */}
        <div className='flex m-3'>
           <LocationOnOutlined /> 
           <p className='pl-3'>Anamnagar-11, Kathmandu</p>
        </div> 
        <div className='flex m-3'>
           <LocalPhoneOutlined/> 
           <p className='pl-3'>+977 9867143463</p>
        </div> 
        <div className='flex m-3'>
           <EmailOutlined/> 
           <p className='pl-3'>roshanbhusal431@gmail.com</p>
        </div> 

      </div>
      

    </div>
  )
}

export default Footer
