import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { logo, lang } from './Constant'

function First() {
  const navigate=useNavigate()
  function sign()
  {
    navigate('/signup')
  }
  return (
    <div id='first'>
      <div id='black'></div>
      <div id='first-content'>
        <div id='header'>
          <div id='header-content'>
            <div id='logo'>
              <img src={logo} alt="img" />
            </div>
            <div id='right'>
              <div id='lang'>
                <img src={lang} alt="img" />
                <select>
                  <option>English</option>
                </select>
              </div>
              <div>
                <button onClick={sign}><Link className='link' to='/signup'>Sign In</Link></button>
              </div>
            </div>
          </div>
        </div>
        <div id='first-body'>
          <div><h1>
            Unlimited movies, TV shows and more</h1></div>
          <div><h3>Watch anywhere. Cancel anytime.</h3></div>
          <div><h4>Ready to watch? Enter your email to create or restart your membership.</h4></div>
          <div id='search'>
            <div id="email">
              <input type="text" placeholder=" " />
              <label>Enter Name</label>
            </div>
            <div><button>Get Started {">"}</button></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default First;