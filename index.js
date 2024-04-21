import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router,Routes, Route, NavLink } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import './index.css'
import './reset.css'
import Home from './Component/Home'
import Signup from './Component/Signup'

function Netflix() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </Router>
  )
}

let root = ReactDOM.createRoot(document.getElementById('main'))
root.render(<Netflix />)