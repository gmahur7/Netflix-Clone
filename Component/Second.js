import React from 'react'
import { tv } from './Constant'

function Second() {
    return (
        <div id='second'>
                <div>
                    <h1>Enjoy on your TV</h1>
                    <h3>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h3>
                </div>
                <div>
                    <img src={tv} />
                </div>
        </div>
    )
}

export default Second;