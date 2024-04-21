import React, { useEffect, useState } from 'react'
import { logo, lang } from './Constant'

function Signup() {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [error, setError] = useState(false)
  const [type, setType] = useState('password')
  const [passDis, setPassDis] = useState('show')
  const [msg, setMsg] = useState(false)
  const passShow = () => {
    type === 'password' ? setType('text') : setType('password')
    type === 'password' ? setPassDis('hide') : setPassDis('show')
  }
  const submit = () => {

    console.log('con',!email.includes('@') || !email.includes('.') || email.charAt(email.length - 1) === '.')

    if (email && (!email.includes('@') || !email.includes('.') || email.charAt(email.length - 1) === '.'))
    {
      console.log('email=', email[email.length - 1])
      setMsg(true)
    }
    else {
      setMsg(false)
    }
    if (email === '' || pass === '') {
      setError(true)
      if(!email) setMsg(false)
    }
    else {
    }
    
  }
  return (
    <div id='signup'>
      <div id='sign-black'></div>
      <div id='first-content' >
        <div id='header'>
          <div id='header-content'>
            <div id='logo'>
              <img src={logo} alt="img" />
            </div>
          </div>
        </div>
        <div id='sign-body'>
          <div id='sign-heading'>
            <h1 className='white'>Sign In</h1>
          </div>
          <div id='sign-input'>
            <div>
              <input type='text' placeholder='Email or Phone number' onChange={(e) => setEmail(e.target.value)} />
              {error && email === '' ? <span className='error'>This Field Is Required</span> : null}
              {msg === true ? <span className='error'>Enter Valid Email</span> : null}
            </div>
            <div id='inp-pass'>
              <input type={type} placeholder='Password' onChange={(e) => setPass(e.target.value)} />
              {error && pass === '' && <span className='error'>This Field Is Required</span>}
              <button id='pass-show' onClick={passShow}>{passDis}</button>
            </div>
          </div>
          <div id='sign-btn'>
            <div>
              <button onClick={submit} className='white'>Sign In</button>
            </div>
            <div>
              <div>
                <input type='checkbox' />Remember me
              </div>
              <div>
                <p>Need help?</p>
              </div>
            </div>
          </div>
          <div id='signup-now'>
            <div>
              New to Netflix? <span className='white'>Sign up now.</span>
            </div>
            <div className='sign-learnmore'>
              This page is protected by Google reCAPTCHA to ensure you're not a bot. <span>Learn more.</span>
            </div>
          </div>
        </div>
      </div>
      <div id='sign-footer'>
        <div className='seven-margin'>
          <h1>Questions? Call <a>000-800-919-1694</a></h1>
        </div>
        <div id='seven-mid' className='seven-margin'>
          <div>
            <div>FAQ</div>
            <div>Help Center</div>
            <div>Terms of Use</div>
            <div>Privacy</div>
          </div>
          <div>
            <div>Cookie Preferences</div>
            <div>Corporate Information</div>
          </div>
        </div>
        <div className='seven-margin'>
          <div id='lang'>
            <img src={lang} alt="img" />
            <select>
              <option>English</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup;