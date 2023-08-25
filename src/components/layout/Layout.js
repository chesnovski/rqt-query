import React from 'react'
import Header from './Header/Header'

const Layout = ({children}) => {
  return (
    <div className='mb-8'>
        <Header/>
        {children}

    </div>
  )
}

export default Layout