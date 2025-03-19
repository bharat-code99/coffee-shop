import React from 'react'
import Img2 from '../assets/coffee2.png'

const servicesData = [
  {
    id: 1,
    img: Img2,
    name: "Espresso",
    description: "Espresso is a strong, rich coffee brewed by forcing hot water through finely-ground beans, creating a concentrated and flavorful shot.",
    aosDelay: "100"
  },
  {
    id: 2,
    img: Img2,
    name: "Cappuccino",
    description: "Cappuccino is a popular Italian coffee drink made with espresso, steamed milk, and frothy milk foam, offering a balanced, creamy taste.",
    aosDelay: "300"
  },
  {
    id: 3,
    img: Img2,
    name: "Americano",
    description: "Americano is a diluted espresso-based coffee, made by adding hot water to espresso, resulting in a smoother, milder flavor.",
    aosDelay: "500"
  },
]

const Services = () => {

  return (
    <>
    <span id='services'></span>
    <div className="py-10">
      <div className='px-20'>
        {/* Title */}
        <div data-aos="fade-up" className='text-center mb-20'>
          <h1 className='text-4xl font-pacifico text-gray-800'>Best Coffee For You</h1>
        </div>

        {/* Serives Cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center'>
          {servicesData.map((data) => {
            return(
              <div data-aos="fade-up" data-aos-dealy={data.aosDelay} key={data.id} 
                className='rounded-2xl bg-white hover:bg-primary hover:text-white shadow-xl duration-200 max-w-[300px] group relative'
              >
                <div className='h-[122px]'>
                  <img src={data.img} alt="coffee cup" 
                    className='max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-110 group-hover:rotate-6 duration-300'
                  />
                </div>
                <div className='p-4 text-center'>
                  <h1 className='text-xl font-bold'>{data.name}</h1>
                  <p className='text-gray-600 group-hover:text-white duration-300'>{data.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
    </>
  )
}

export default Services