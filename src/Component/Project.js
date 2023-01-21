import React from 'react'
import Pro1 from '../Images/nat.png'
import Pro2 from '../Images/guvi temple pic.png'
import Pro3 from '../Images/weather.jpg'
import Pro4 from '../Images/Pro4.png'
import Footer from './Footer'
function Project() {
  return<>
  <div className='hero-img'>
    <div className='heading'>
        <h1><span>P</span>roject</h1>
        <p>Some Of My Recent Works<span>...</span></p>
    </div>
    </div>
  <div className='work-container'>
    <h1 className='project-heading'>Projects</h1>
      <div className='project-container'>
        <div className='project-card'>
          <img  src={Pro1} alt='pro1'/>
          <h4 className='project-title'>Nationalize Api</h4>
          <div className='pro-btns'>
            <a href="https://comfy-flan-ee954e.netlify.app" target="_blank" rel="noopener noreferrer" className="btn">View</a>
            <a href="https://github.com/kartheeswari-E/webcode1" className="btn" rel="noopener noreferrer" target="_blank">Source</a>
          </div>
          
        </div>
        <div className='projects-card'>
          <img  src={Pro4} alt='pro1'/>
          <h4 className='project-title'>CRM Application</h4>
          <div className='pro-btns'>
          
            <a href="https://heroic-palmier-84480e.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn">View</a>
            <a href="https://github.com/kartheeswari-E/Crm-frontend" target="_blank"rel="noopener noreferrer" className="btn">Source</a>
          </div>
          </div>
        <div className='projects-card'>
          <img  src={Pro2} alt='pro1'/>
          <h4 className='project-title'>ZEN student dashboard</h4>
          <div className='pro-btns'>
          
            <a href="https://splendorous-travesseiro-cb808f.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn">View</a>
            <a href="https://github.com/kartheeswari-E/zen-student-dashboard-frontend." target="_blank"rel="noopener noreferrer" className="btn">Source</a>
          </div>
          
        </div>
        <div className='project-card'>
          <img src={Pro3} alt='pro1'/>
          <h4 className='project-title'>Check Weather</h4>
          <div className='pro-btns'>
            <a href="https://poetic-semolina-293d13.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn">View</a>
            <a href="https://github.com/kartheeswari-E/webcode1" target="_blank" rel="noopener noreferrer" className="btn">Source</a>
          </div>
          
        </div>
        </div>  </div>
        <Footer/>
  </>
}

export default Project