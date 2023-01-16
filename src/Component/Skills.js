import React from 'react'
import Footer from './Footer'
function Skills() {
  return<>
    <div className='hero-imgs'>
    <div className='heading'>
        <h1><span>S</span>KILLS & <span>T</span>OOLS</h1>
        <p className='simple'>For those who know what they’re looking for<span>...</span></p>
    </div>
    </div>
    <div class="services-list">
            <div className='cont'>
                <img class="image"src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="js"/>
                <h2 className='mo'>Javascript</h2>
            </div>

            <div className='cont'>
                <img class="image"src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="css"/>
                <h2 className='mo'>Css3</h2>
            </div>
            <div className='cont'>
                <img class="image"src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="html"/>
                <h2 className='mo'>Html5</h2>
            </div>
            <div className='cont'>
                <img class="image"src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs"/>
                <h2  className='mo'>nodejs</h2>
            </div>
            <div className='cont'>
                <img class="image"src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="js"/>
                <h2 className='mo'>React</h2>
            </div>
            <div className='cont'>
                <img class="image"src="https://skillshack.blob.core.windows.net/uploads/express.webp" alt="nodejs"/>
                <h2 className='mo'>Express</h2>
            </div>
            <div className='cont'>
                <img class="image"src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="nodejs"/>
                <h2 className='mo'>Mongodb</h2>
            </div>
            <div className='cont'>
                <img class="image"src="	https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" alt="nodejs"/>
                <h2 className='mo'>Redux</h2>
            </div>
            <div className='sub'>
            <div className='cont'>
                <img class="image"src="	https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="nodejs"/>
                <h2 className='mo'>VScode</h2>
            </div>
            <div className='cont'>
                <img class="image" src="data:image/png;base64,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" alt="nodejs"/>
                <h2 className='mo'>Bootstrap</h2>
            </div>
            </div>
             </div>
    
    <Footer/>
  </>
}

export default Skills