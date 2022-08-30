import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/header'
import Home from './Pages/Home/Home'
import Clientes from './Pages/Clientes/Clientes' 
import Cadastro from './Pages/Cadastro/Cadastro'

const Rotas = () => {
  return (
    <BrowserRouter>
    <Header />
        <Routes> 
            <Route path="/" element={<Home />} />
            <Route path="/clientes" element={<Clientes />} />
            <Route path='/Cadastro' element={<Cadastro />} />
        </Routes>  
    </BrowserRouter>
  )
}

export default Rotas