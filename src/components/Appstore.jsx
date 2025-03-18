import React from 'react'
import AppStoreImg from '../assets/website/app_store.png'
import PlayStoreImg from '../assets/website/play_store.png'
import BgImg from '../assets/website/coffee-beans-bg.png'

const backgroundImg = {
  backgroundImage: `url(${BgImg})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
}

const Appstore = () => {
  return (
    <>
    <div style={backgroundImg} className='py-10'>
      <div className='px-20'>
        <div className='grid grid-cols-1 sm:grid-cols-2 items-center gap-4'>
          <div className='space-y-6 max-w-xl mx-auto'>
            <h1 className='text-2xl text-center sm:text-left sm:text-4xl font-semibold text-white/80'>Coffee Cafe is available for Android and IOS</h1>
            <div className='flex flex-wrap justify-center sm:justify-start items-center'>
              <a href="#">
                <img src={AppStoreImg} alt="Appstore Image" className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'/>
              </a>
              <a href="#">
                <img src={PlayStoreImg} alt="Appstore Image" className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Appstore