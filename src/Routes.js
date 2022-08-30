import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/header'
import Home from './Pages/Home/Home'
import Clientes from './Pages/Clientes/Clientes' 

const Rotas = () => {
  return (
    <BrowserRouter>
    <Header />
        <Routes> 
            <Route path="/" element={<Home />} />
            <Route path="/clientes" element={<Clientes />} />
        </Routes>  
    </BrowserRouter>
  )
}

export default Rotas