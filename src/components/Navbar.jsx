import React from 'react'
import Logo from '../assets/website/coffee_logo.png'
import {FaCoffee} from "react-icons/fa";

const Navbar = () => {

  const menus = [
    {
      id: 1,
      name: "Home",
      link: "/#"
    },
    {
      id: 2,
      name: "Services",
      link: "/#services"
    },
    {
      id: 3,
      name: "About",
      link: "/#about"
    },
  ]

  return (
    <div className='bg-gradient-to-r from-secondary to-secondary/90 text-white px-4 py-2'>
      <div className=''>
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div>
            <a href="#" className='font-bold text-2xl sm:text-3xl flex items-center gap-2 font-pacifico tracking-wider'>
              <img src={Logo} alt="Logo" className='w-14'/>
              Coffee Cafe
            </a>
          </div>

          {/* Links Section */}
          <div className='flex gap-4 items-center'>
            <ul className='hidden sm:flex gap-3 text-xl font-semibold'>
              {menus.map((menu) => (
                <li key={menu.id}>
                  <a href={menu.link} className='text-white/75 hover:text-white duration-200'>
                    {menu.name}
                  </a>
                </li>
              ))}
            </ul>
            <button className='bg-secondary text-white font-bold px-4 py-2 rounded-xl hover:scale-105 hover:bg-primary duration-200 cursor-pointer flex items-center gap-2'>
              Order
              <FaCoffee className='text-xl'/>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar 