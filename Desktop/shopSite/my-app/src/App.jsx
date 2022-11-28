import React from 'react'
import Home from './pages/home'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Products from './pages/products'

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Products/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App