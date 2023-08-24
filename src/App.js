import React from 'react'
import Home from './components/Home/Home';
import { Routes, Route, Link } from 'react-router-dom'
import About from './components/layout/About/About';
const App = () => {
  return (
    <>
    <Home/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}></Route>
    </Routes>
    </>
  )
}

export default App