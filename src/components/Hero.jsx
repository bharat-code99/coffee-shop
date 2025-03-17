import React from 'react'
import HeroImg from '../assets/coffee2.png'

const Hero = () => {
  return (
    <div className='bg-brandDark text-white'>
      <div>
        <div className='grid grid-cols-1 sm:grid-cols-2'>
          {/* Text Section */}
          <div className='flex flex-col items-start justify-center gap-4'>
            <h1 className='text-5xl font-bold'>We serve the richest <span className='text-primary font-pacifico'>Coffee</span> in the city</h1>
            <button className='bg-gradient-to-r from-primary to-secondary rounded-xl px-4 py-2 font-bold cursor-pointer hover:scale-105 duration-200'>Coffee And Code</button>
          </div>

          {/* Image Section */}
          <div>
            <img src={HeroImg} alt="Coffee Image" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero 