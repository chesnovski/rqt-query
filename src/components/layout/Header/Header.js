import React from 'react'

const Header = () => {
  return (
    <div class="header flex ...">
    <div class="w-5/6 ">
      <h1 className='ml-'>Please be calm and take your profit</h1>
    </div>
    <div class="w-1/6 invisible  md:visible">
      <a>About</a> 
    </div>
  </div>
    // <div className='header grid grid-cols-2'>
    //   <h1 className='ml-'>Please be calm and take your profit</h1>
    //   <div className=' space-x-4'>
    //     <a>About</a>
    //   </div>
    // </div>
    
  )
}

export default Header