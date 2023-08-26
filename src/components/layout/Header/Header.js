import React, {useState} from 'react'

const Header = () => {
  const [open, setOpen] = useState(false)
  const handleMenu = () => {
    setOpen((prev) => !prev)
    console.log(open)
  }
  return (
    <>
    <div class="header flex">
      <div class="w-5/6 ">
        <h1 className='ml-16'>Please be calm and take your profit</h1>
      </div>
 
    
      <div class="w-1/6 flex align-center ">
        <div className='hidden md:block'>
          <a className='mr-4' href="/">Home</a>
          <a className='mr-4' href="/about">About</a>  
        </div>
        <div className='md:hidden'>
          <div onClick={handleMenu} class="my-2 mx-2 space-y-2">
            <span class="block w-8 h-0.5 bg-gray-600"></span>
            <span class="block w-5 h-0.5 bg-gray-600"></span>
          </div>
        </div>
      </div>
    </div>
     { open ? (
      <div className='w-full mb-4 bg-gradient-to-r from-indigo-500 to-blue-100 font-mono md:hidden'>
        <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
          <a className='ml-2' href="/">Home</a>
          <a className='ml-2' href="/about">About</a>
      </div>
      </div>

    ) : null}
    </>
    
  )
}

export default Header