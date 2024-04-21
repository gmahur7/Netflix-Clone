import React, { useState } from 'react'

function Sixth() {
    const [sym, setSym] = useState(['+','+','+','+','+','+'])
    const [style, setStyle] = useState(['none','none','none','none','none','none'])
    function hit(i) {
        let x=[]
        let y=[]
        for(let m=0;m<6;m++)
        {
            if(sym[i]==='+')
            {
                if(m===i)
                {
                    x.push('x')
                    y.push('block')
                }
                else
                {
                    x.push('+')
                    y.push('none')
                }
            }
            else
            {
                x.push('+')
                y.push('none') 
            }
        }

        setSym(x)
        setStyle(y)
        

    }
    return (
        <div id='sixth'>
            <h1>Frequently Asked Questions</h1>
            <div id='all'>
                <div onClick={() => hit(0)} id='s1'>
                    <div>
                        <h2>What is Netflix?</h2>
                        <h3>{sym[0]}</h3>
                    </div>
                    <div style={{ display: style[0] }}>
                        <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.
                            <br /><br />
                            You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</p>
                    </div>
                </div>
                <div onClick={() => hit(1)} id='s1'>
                    <div>
                        <h2>How much does Netflix cost?</h2>
                        <h3>{sym[1]}</h3>
                    </div>
                    <div style={{ display: style[1] }}>
                        <p>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.</p>
                    </div>
                </div>
                <div onClick={() => hit(2)} id='s1'>
                    <div>
                        <h2>Where can I watch?</h2>
                        <h3>{sym[2]}</h3>
                    </div>
                    <div style={{ display: style[2] }}>
                        <p>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
                            <br /><br />
                            You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</p>
                    </div>
                </div>
                <div onClick={() => hit(3)} id='s1'>
                    <div>
                        <h2>How do I cancel?</h2>
                        <h3>{sym[3]}</h3>
                    </div>
                    <div style={{ display: style[3] }}>
                        <p>Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</p>
                    </div>
                </div>
                <div onClick={() => hit(4)} id='s1'>
                    <div>
                        <h2>What can I watch on Netflix?</h2>
                        <h3>{sym[4]}</h3>
                    </div>
                    <div style={{ display: style[4] }}>
                        <p>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</p>
                    </div>
                </div>
                <div onClick={() => hit(5)} id='s1'>
                    <div>
                        <h2>Is Netflix good for kids?</h2>
                        <h3>{sym[5]}</h3>
                    </div>
                    <div style={{ display: style[5] }}>
                        <p>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.<br/><br/>
                            Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.</p>
                    </div>
                </div>
            </div>
            <div className='margin'>
            <div><h4>Ready to watch? Enter your email to create or restart your membership.</h4></div>
            <div id='search' >
              <div id="email">
                <input type="text" placeholder=" "/>
                  <label>Enter Name</label>
              </div>
              <div><button>Get Started {">"}</button></div>
            </div>
            </div>
        </div>
    )
}

export default Sixth;