import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import FooterBg from '../assets/website/coffee-footer.jpg'

const footerLinks = [
  {
    title: "Home",
    link: "/#"
  },
  {
    title: "About",
    link: "/#about"
  },
  {
    title: "Contact",
    link: "/#contact"
  },
  {
    title: "Blog",
    link: "/#blog"
  },
]

const bgImg = {
  backgroundImage: `url(${FooterBg})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  minHeight: "400px",
  width: "100%",
}

const Footer = () => {
  return (
    <div style={bgImg} className='text-white'>
      <div className='bg-black/40 min-h-[400px]'>
        <div className='px-20 grid md:grid-cols-3 pb-20 pt-5'>
          {/* company details */}
          <div className='py-8 px-4'>
            <a href="#" className='font-semibold tracking-widest text-2xl sm:text-3xl font-pacifico'>Coffee Cafe</a>
            <p className='pt-4'>
              Crafted Coffee, Cozy Vibes, Unforgetable Moments - Your Perfect Espresso Escape
            </p>
            <a href="#" target='_blank' className='inline-block bg-secondary py-2 px-4 rounded-xl mt-5'>
              Visit Our Youtube Channel
            </a>
          </div>

          {/* footer links */}
          <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10'>
            <div className='py-8 px-4'>
              <h1 className='text-xl font-semibold sm:text-left mb-3'>Footer Links</h1>
              <ul className='space-y-3'>
                {footerLinks.map((data, index) => (
                  <li key={index}>
                    <a href={data.link} className='inline-block hover:scale-105 duration-200'>{data.title}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className='py-8 px-4'>
              <h1 className='text-xl font-semibold sm:text-left mb-3'>Quick Links</h1>
              <ul className='space-y-3'>
                {footerLinks.map((data, index) => (
                  <li key={index}>
                    <a href={data.link} className='inline-block hover:scale-105 duration-200'>{data.title}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Address Section */}
            <div className='py-8 px-4 col-span-2 sm:col-auto'>
              <h1 className='text-xl font-semibold sm:text-left mb-3'>Address</h1>
              <div>
                <p className='mb-3'>Noida, India</p>
                <p>+91 1234567890</p>

                <div className='space-x-3 mt-6'>
                  <a href="#">
                    <FaFacebook className='text-3xl inline-block hover:scale-105 duration-200'/>
                  </a>
                  <a href="#">
                    <FaInstagram className='text-3xl inline-block hover:scale-105 duration-200'/>
                  </a>
                  <a href="#">
                    <FaLinkedin className='text-3xl inline-block hover:scale-105 duration-200'/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer