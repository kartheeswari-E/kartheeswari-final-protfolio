import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {FaBars,FaTimes} from "react-icons/fa"
function Navbar() {
  const[click,setclick]= useState(false)
 
  return<>
  <div className='header'>
  <Link to="/">
    <h1 className='new'><span className='caps-color'>K</span>artheeswari</h1>
  </Link>
  <ul className={click?'nav-menu active':'nav-menu'}>
    <li>
    <Link to="/">Home</Link>
    </li>
    <li>
    <Link to="/about">About</Link>
    </li>
    <li>
    <Link to="/skills">Skills</Link>
    </li>
    <li>
    <Link to="/project">Project</Link>
    </li>
    <li>
    <Link to="/contact">Contact</Link>
    </li>
  </ul>
  <div className='menu-short' onClick={()=>setclick(!click)}>
    {click?<FaTimes size={20} style={{color:"white"}}/>:
    <FaBars size={20} style={{color:"white"}}
    />}
</div>
</div>
  </>
}

export default Navbar