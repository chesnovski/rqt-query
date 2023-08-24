import React from 'react'
import Header from './Header/Header'

const Layout = ({children}) => {
  return (
    <div className='my-8'>
        <Header/>
        {children}

    </div>
  )
}

export default Layout