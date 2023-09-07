import React from 'react'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Index from './pages/Index'
import Menu from './pages/Menu'

const App = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/menu' element={<Menu />} />
    </Routes>
    </>
  )
}

export default App