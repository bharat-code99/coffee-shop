import React from 'react'
import HeroImg from '../assets/coffee2.png'

const Hero = () => {
  return (
    <div className='bg-brandDark text-white min-h-[500px] sm:min-h-[550px] flex justify-center items-center'>
      <div className='pb-8 px-8 sm:pb-0'>
        <div className='grid grid-cols-1 sm:grid-cols-2'>
          {/* Text Section */}
          <div className='flex flex-col items-start justify-center gap-6 order-2 sm:order-1'>
            <h1 data-aos="fade-up" data-aos-once="true" className='text-5xl sm:text-6xl font-bold'>We serve the richest <span data-aos="zoom-out" data-aos-delay="300" className='text-primary font-pacifico'>Coffee</span> in the city</h1>
            <button data-aos="fade-up" data-aos-delay="400" className='bg-gradient-to-r from-primary to-secondary rounded-xl px-4 py-2 font-bold cursor-pointer hover:scale-105 duration-200'>Coffee And Code</button>
          </div>

          {/* Image Section */}
          <div data-aos="zoom-in" className='flex justify-end items-center order-1 sm:order-2 relative'>
            <img src={HeroImg} alt="Coffee Image" className='w-[300px] sm:w-[500px] spin'/>
            <div data-aos="fade-left" className='bg-gradient-to-r from-primary to-secondary absolute top-10 left-14 p-3 rounded-xl'>Hey Coder</div>
            <div data-aos="fade-right" className='bg-gradient-to-r from-primary to-secondary absolute bottom-9 right-9 p-3 rounded-xl'>Best Coffee</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero 