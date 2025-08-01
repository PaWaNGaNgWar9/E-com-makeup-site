import React from 'react'
import cate from '../assets/Logo/Cate.jpg';

const About = () => {
  return (
    <div className=' bg-[#fbf2e0] h-90 flex items-center justify-center  p-5  w-full'>
    <div className=' flex flex-row justify-center items-center h-80 w-195 bg-[#422A3C]  -mt-50 cursor-pointer'>
      <div className='ml-20 shadow-2xl'>
        <img src={cate} alt="" className='h-100 -mt-10  ' />
      </div>
      <div className='flex flex-col  w-90 ml-10 text-white'>
       <h1 className='text-start mt-10 pb-2 '>About Us</h1>
       <h1 className='text-start text-lg font-bold p-1'>It’s the bridge between service companies and consumers.</h1>
       <p className='text-start pb-2'>ServiceMarket.dk is a Copenhagen-based technology company known for our overview platform. Our aim is to simplify and improve everyday life for citizens in Denmark. One platform that brings together all services in an easy and controlled environment.</p>
      </div>
    </div>
    </div>
  )
}

export default About;
