import React from 'react'
import Navbar from './Navbar'
import Heroimg from './Heroimg'
import Pro1 from '../Images/nat.png'
import Pro2 from '../Images/guvi temple pic.png'
import Pro3 from '../Images/weather.jpg'
import Pro4 from '../Images/pro4.png'
import './Home.css'
import Footer from './Footer'
import { Navigate, useNavigate } from 'react-router-dom'


function Home() {
  const navigate =useNavigate();
  return <>
<Navbar/>
<Heroimg/>
<div className='new-about'>
  <div className='new-left'>
    <div className='left-one'>
      <div className='head-of-about'><span>A</span>bout <span>M</span>e</div>
      <div className='see'>
        <div className='sm' onClick={()=>navigate("/about")}>See More</div>
        <div className='arrow'>→</div>
      </div>
    </div>
  </div>
  <div className='new-right'>
  <div className='right-one'>
  <div className='nnn' style={{"height":"50px","transform":"translateY(20px)"}}>
 <div style={{"marginLeft":"560px"}} className="social-iconss">
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;   &nbsp;<a href="https://github.com/kartheeswari-E"target={'_blank'} ><i className="fa-brands fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/kartheeswari-e-107746226/" target={'_blank'}><i className="fa-brands fa-linkedin"></i></a>
                   
              </div> <a href="https://drive.google.com/file/d/1w1jhg97NgxqjXVqd5wR3f02WUDseEzX0/view?usp=share_link" target={'_blank'} className="na" type="button">Show CV</a>
                
 </div>
  </div>
  <div className='rights-one'>I'm Kartheeswari E ,</div>
  <div className='paras'>  A passionate Full stack developer with the 
goal of working on a project that solves problems with thoughtful UI design,
creating intuitive, dynamic user experiences powered by strong backend. I primarily work with MERN stack among the full stack technologies. 
The satisfaction that I get while working and completing every project made me do more and more.
And I believe, I have did something creatively.
</div>
  </div>


</div>
<div className='project-new'>
  <div className='proj-name'><span>P</span>roject</div>
  <p className='fl'>Some Of My Recent Works<span>...</span></p>

  <div className='projects-container'>
        <div className='project-cardss'>
          <img  src={Pro1} alt='pro1'/>
          <h4 className='project-title'>Nationalize Api</h4>
          
        </div>
        <div className='projects-cardss'>
          <img  src={Pro4} alt='pro1'/>
          <h4 className='project-title'>CRM Application</h4>
       
          </div>
        <div className='projects-cardss'>
          <img  src={Pro2} alt='pro1'/>
          <h4 className='project-title'>ZEN student dashboard</h4>

          
        </div>
        <div className='project-cardss'>
          <img src={Pro3} alt='pro1'/>
          <h4 className='project-title'>Check Weather</h4>

        </div>
        </div>
        <div className='see'>
        <div className='sm' onClick={()=>navigate("/project")}>Explore More</div>
        <div className='arrow'>→</div>
      </div>
</div>
<Footer/>

  </>
}

export default Home