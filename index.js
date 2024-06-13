import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router,Routes, Route, NavLink } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import './reset.css'
import './index.css'
import './responsive.css'
import Home from './Component/Home'
import Signup from './Component/Signup'

function Netflix() {
  document.title="Netflix India - Watch TV Shows"
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