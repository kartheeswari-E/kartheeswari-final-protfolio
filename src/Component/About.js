import React, { useState } from 'react'
import Footer from './Footer'

function About() {
  const[area,setarea]=useState(true);
  const[line,setline]=useState(true);
  const[lines,setlines]=useState(false);
  const[areas,setareas]=useState(false);
  return<>
 <div className='hero-imga'>
    <div className='heading'>
        <h1><span>A</span>BOUT ME</h1>
        <p>Who i'am<span>...</span></p>
    </div>
  </div>
   <div className='head-about'>
  <div className='head-about1'>

  <p className="para">
    <span className='extra'>I'm Kartheeswari E ,</span>
    A passionate Full stack developer with the 
goal of working on a project that solves problems with thoughtful UI design,
creating intuitive, dynamic user experiences powered by strong backend. I primarily work with MERN stack among the full stack technologies. 
The satisfaction that I get while working and completing every project made me do more and more.
And I believe, I have did something creatively.</p>
<div className='nnn'>
<div className="social-icons">
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;   &nbsp;<a href="https://github.com/kartheeswari-E"target={'_blank'} ><i className="fa-brands fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/kartheeswari-e-107746226/" target={'_blank'}><i className="fa-brands fa-linkedin"></i></a>
                   
                </div> <a href="https://drive.google.com/file/d/1SrD_taGm_l3zhA_3DBUE_jzxcUx7bWCk/view?usp=share_link" target={'_blank'} className="na" type="button">Show CV</a>
                
 </div></div>
<div className='head-about2'>
<div class="title">
<p class="t1 actives" onClick={()=>{setarea(!area)
setareas(false)
setline(true) 
setlines(false) }}><span>E</span>xperience
{line?<div className='line'></div>:""}</p>
                <p class="t1" onClick={()=>{setareas(!areas)
                   setarea(false)
                   setlines(true) 
setline(false)}}><span>E</span>ducation
                 {lines?<div className='line'></div>:""}</p>
</div>
              {area?<div className="text active" id="experience">
                    <ul>
                        <li><span>2021-DEC</span><br/> Web Development INTERNSHIP at Code Bind Technology,Chennai.</li>
                        <li><span>(AUG 2022- JAN 2023)</span><br/> Done a  MERN Stack Developer Course at GUVI,chennai</li>
                    </ul>
                </div>:""}  

               {areas?<div className="text" id="education">
                    <ul>
        <li><span>2018-2022 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>CGPA</span></span><br/>BE-CSE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8.1</li>
                        <li><span>2017-2018&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<span>Percentage</span></span><br/> HSC &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;73%</li>
                        <li>
                            <span>2015-2016&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<span>Percentage</span></span><br/>SSLC&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;91.6%</li>
                    </ul>
            
            </div>:""} 
</div>
  </div>
  <Footer/>
  </>
  
}

export default About