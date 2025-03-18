import React from 'react'
import BannerImg from '../assets/coffee-white.png'
import BgTexture from '../assets/website/coffee-texture.jpg'
import { GrSecure } from 'react-icons/gr'
import { IoFastFood } from 'react-icons/io5'
import { GiFoodTruck } from 'react-icons/gi'

const bgImage = {
  backgroundImage: `url(${BgTexture})`,
  backgroundColor: "#270c03",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
}

const Banner = () => {
  return (
    <div style={bgImage}>
      <div className='px-20 min-h-[500px] flex justify-center items-center py-10 sm:py-0'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
          {/* Image Section */}
          <div>
            <img src={BannerImg} alt="white-coffee" className='max-w-[430px] w-full mx-auto spin'/>
          </div>

          {/* Text Section */}
          <div className='flex flex-col justify-center gap-6'>
            <h1 className='text-3xl sm:text-4xl font-pacifico font-bold text-gray-800'>Premium Blend Coffee</h1>
            <p className='text-gray-600 tracking-wide leading-5'>Coffee is a beloved beverage made from roasted beans, offering rich flavors, caffeine boost, and cultural significance worldwide in various brewing styles.</p>
            <div className='grid grid-cols-2'>
              <div className='space-y-5'>
                <div className='flex items-center gap-4'>
                  <GrSecure className='h-12 w-12 shadow-sm p-3 rounded-full bg-red-100'/>
                  <span className=''>Premium Coffee</span>
                </div>
                <div className='flex items-center gap-4'>
                  <IoFastFood className='h-12 w-12 shadow-sm p-3 rounded-full bg-emerald-100'/>
                  <span className=''>Hot Coffee</span>
                </div>
                <div className='flex items-center gap-4'>
                  <GiFoodTruck className='h-12 w-12 shadow-sm p-3 rounded-full bg-yellow-100'/>
                  <span className=''>Cold Coffee</span>
                </div>
              </div>
              <div className='border-l-4 border-primary pl-6 space-y-3'>
                <h1 className='text-2xl font-semibold font-pacifico text-gray-800'>Coffee Lover</h1>
                <p className='text-gray-600'>
                  Much like writing code, brewing the perfect cup of coffee requires patience, precision and a dash of passion to create a comforting blend of flavours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner