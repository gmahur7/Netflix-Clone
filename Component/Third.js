import React from 'react'
import { str, stranger } from './Constant'
import { BiDownload } from "react-icons/bi";

function Third() {
    return (
        <div id='third'>
            <div id='str-rel'>
                <img src={str} />
            </div>
            <div>
                <h1>Download your shows to watch offline</h1>
                <h3>Save your favourites easily and always have something to watch.</h3>
            </div>
            <div id='str-abs'>
                <div>
                    <img src={stranger} />
                </div>
                <div>
                    <h1>Stranger Things</h1>
                    <h3>Downloading...</h3>
                </div>
                <div id='download'>
                    <BiDownload/>
                </div>
            </div>
        </div>
    )
}

export default Third;