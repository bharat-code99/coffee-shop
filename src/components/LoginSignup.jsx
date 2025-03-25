import React from 'react'

const LoginSignup = ({showPopup, setShowPopup}) => {
  return (
    <>
    {showPopup && <div>
      <div className='w-full h-full bg-black/40 fixed top-0 left-0 z-50 backdrop-blur-sm'>
        <div className='bg-white fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded p-4 shadow-md duration-200 w-xs'>
          <div className='flex justify-between'>
            <div>
              <h1 className='text-2xl font-bold'>Login</h1>
            </div>
            <div>
              <p onClick={() => setShowPopup(false)} className='font-xl cursor-pointer'>X</p>
            </div>
          </div>
          <div className='space-y-4 my-4'>
            <input className='border-2 border-gray-300 rounded-md w-full px-2 py-1' type="email" placeholder='Email Id' />
            <input className='border-2 border-gray-300 rounded-md w-full px-2 py-1' type="password" placeholder='Password' />
            <div>
              <button className='w-full cursor-pointer rounded-md bg-primary text-white font-bold p-2'>Login</button>
            </div>
          </div>
          
        </div>
      </div>
    </div>}
    </>
  )
}

export default LoginSignup