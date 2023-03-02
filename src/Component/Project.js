import React, { useState } from 'react'
import Pro1 from '../Images/nat.png'
import Pro2 from '../Images/guvi temple pic.png'
import Pro3 from '../Images/weather.jpg'
import Pro4 from '../Images/pro4.png'
import Footer from './Footer'
function Project() {
  // const[tog,settog]=useState(false)
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
                    <div class="layer">
<div className='ex' >
  <p className='e'>When searching for a name it will display the top 2 countries in order of
probability</p></div>
          <div className='pro-btns'>
            <a href="https://comfy-flan-ee954e.netlify.app" target="_blank" rel="noopener noreferrer" className="btn">live</a>
            <a href="https://github.com/kartheeswari-E/webcode1" className="btn" rel="noopener noreferrer" target="_blank">code</a>
          </div>
          </div>
        </div>
        <div className='projects-card'>
          <img  src={Pro4} alt='pro1'/>
         <div style={{"display":"flex","flexDirection":"row"}}> <h4 className='project-title'>CRM Application</h4>
          </div>
          <div class="layer">
          <div className='ex'>
          <div style={{"color":"white"}} >Users:(Email:kartheesw2001@gmail.com,</div> 
          <p style={{"margin":"0","color":"white"}}>Password:karTHI2@1)</p>
          <div style={{"marginBottom":"3px","color":"white"}}>Admin:(Email:kartheescreate@gmail.com,</div>
          <p style={{"margin":"0","color":"white"}}>password:VEK123lak@)</p>
          <p style={{"margin":"0","color":"white"}}>socket info:-
            <p style={{"margin":"0","color":"white"}}>card num:4242 4242 4242 4242</p>
            <p style={{"margin":"0","color":"white"}}>exp.date:12/23 ,cvc:741</p>
            </p></div> 
          <div className='pro-btns'>
         
            <a href="https://heroic-palmier-84480e.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn">live</a>
            <a href="https://github.com/kartheeswari-E/Crm-frontend" target="_blank"rel="noopener noreferrer" className="btn">frontend</a>
            <a href="https://github.com/kartheeswari-E/Crm_backend" target="_blank"rel="noopener noreferrer" className="btn">backend</a>
          </div></div>
          </div>
        <div className='projects-card'>
          <img  src={Pro2} alt='pro1'/>
         <h4 className='project-title'>ZEN student dashboard</h4> 
           <div class="layer">
           <div className='ex'>
          <div style={{"color":"white"}} >Users:(Email:vijaya@gmail.com,</div> 
          <p style={{"marginTop":"0","color":"white"}}>Password:VIja@123)</p>
          <div style={{"marginBottom":"3px","color":"white"}}>Admin:(Email:kartheescreate@gmail.com,</div>
          <p style={{"marginTop":"0","color":"white"}}>password:VEK123lak@)</p></div> 
            <div className='pro-btns'>
          
            <a href="https://splendorous-travesseiro-cb808f.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn">live</a>
            <a href="https://github.com/kartheeswari-E/zen-student-dashboard-frontend." target="_blank"rel="noopener noreferrer" className="btn">frontend</a>
            <a href="https://github.com/kartheeswari-E/zen-student-dashboard-backend" target="_blank"rel="noopener noreferrer" className="btn">backend</a>
        </div>  </div>
          
        </div>
        <div className='project-card'>
          <img src={Pro3} alt='pro1'/>
          <h4 className='project-title'>Check Weather</h4>
          <div class="layer">
            <div className='ex'>
<p className='e'>It shows all the population and other detail of the country and helps to
find the current weather. These covers CRUD operation</p>
            </div>
          <div className='pro-btns'>
            <a href="https://poetic-semolina-293d13.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn">live</a>
            <a href="https://github.com/kartheeswari-E/webcode1" target="_blank" rel="noopener noreferrer" className="btn">code</a>
          </div>
          </div>
        </div>
        </div>  </div>
        <Footer/>
  </>
}

export default Project