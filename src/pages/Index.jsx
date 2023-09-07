import React from 'react'
import About from '../components/About'
import Contact from '../components/Contact'
import Home from '../components/Home'
import Shortmenu from '../components/Shortmenu'

const Index = () => {
  return (
    <div className='bg-gray-50'>
      {/* <Navbar /> */}
      <Home />
      <Shortmenu />
      <About />
      <Contact />     
    </div>
  )
}

export default Index