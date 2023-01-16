import React from 'react'
import "./Hero.css";
// import { Link } from 'react-router-dom'
import design from "../Images/design.png"
import profile from "../Images/hero.png"
function Heroimg() {
  return <>
  <div className='i'>
    <div className='i-left'>    
    <div className='i-left-wrapper'>
    <p className='i-intro'>Hai there👋</p>
            <h1 className='i-name'>I'm Kartheeswari <span>E</span></h1>
        <p class="info">This is My Official Protfolio Website</p>
        <div className='i-tittle'>
<div className='i-tittle-wrapper'>
<div className='i-tittle-items'>MERN Stack Developer</div>
<div className='i-tittle-items'>Full Stack Developer</div>
<div className='i-tittle-items'>Web Developer</div>
</div>
        </div>
      </div>   
    </div>

   <div className='i-right'>
   <img className='design' src={design} alt="design"/>
        <img className='profile' src={profile} alt="profile"/>
    </div>
  </div>
  </>
}

export default Heroimg