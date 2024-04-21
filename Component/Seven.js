import React from 'react'
import { lang } from './Constant'

function Seven()
{
    return(
        <div id='seven'>
            <div className='seven-margin'>
                <h1>Questions? Call <a>000-800-919-1694</a></h1>
            </div>
            <div id='seven-mid' className='seven-margin'>
                <div>
                    <div>FAQ</div>
                    <div>Help Center</div>
                    <div>Account</div>
                    <div>Media Center</div>
                </div>
                <div>
                    <div>Investor Relations</div>
                    <div>Jobs</div>
                    <div>Ways to Watch</div>
                    <div>Terms of Use</div>
                </div>
                <div>
                    <div>Privacy</div>
                    <div>Cookie Preferences</div>
                    <div>Corporate Information</div>
                    <div>Contact Us</div>
                </div>
                <div>
                    <div>Speed Test</div>
                    <div>Legal Notices</div>
                    <div>Only on Netflix</div>
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
            <div className='seven-margin'>
                Netflix India
            </div>
        </div>
    )
}

export default Seven;