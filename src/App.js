import React, { Component, useState } from 'react'
import Rotas from './Routes'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container"> 
      <Rotas />
    </div>
  )
}

export default App
