import React from 'react'
import Slider from 'react-slick'

const TestimonialsData = [
  {
    id: 1,
    name: "Bharat",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus voluptas cumque vel tempora adipisci. Sit placeat consequatur quaerat nobis officiis!",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Sarvagya",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus voluptas cumque vel tempora adipisci. Sit placeat consequatur quaerat nobis officiis!",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Sandarbh",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus voluptas cumque vel tempora adipisci. Sit placeat consequatur quaerat nobis officiis!",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 4,
    name: "Ankit",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus voluptas cumque vel tempora adipisci. Sit placeat consequatur quaerat nobis officiis!",
    img: "https://picsum.photos/103/103",
  },
]

const Testimonials = () => {

  const settings = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div className='py-14'>
      <div className='px-20'>
        {/* Title */}
        <div data-aos="fade-up" className='text-center mb-10'>
          <h1 className='text-4xl sm:text-5xl font-pacifico text-gray-800'>Testimonials</h1>
        </div>

        {/* Testimonials Cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialsData.map((data) => {
              return(
                <div className='my-6' key={data.id}>
                  <div className='flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-primary/10 relative'> 
                    {/* Image Section */}
                    <div className='mb-4'>
                      <img src={data.img} alt=""  className='rounded-full'/>
                    </div>

                    {/* Text Content Section */}
                    <div className='flex flex-col items-center gap-4'>
                      <div className='space-y-4'>
                        <p className='text-gray-600'>{data.text}</p>
                        <h1 className='text-gray-800 text-xl font-bold font-pacifico'>{data.name}</h1>
                      </div>
                    </div>
                    <p className='text-black/20 text-9xl font-serif absolute top-0 right-0'>,,</p>
                  </div>
                </div>
              )
            })}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Testimonials