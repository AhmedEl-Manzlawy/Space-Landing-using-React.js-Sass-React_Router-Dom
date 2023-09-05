import React, { useState } from 'react'
import Logo from "../assert/logo.svg"
import menu from "../assert/icon-menu.svg"
import { NavLink  } from 'react-router-dom'
import close from "../assert/icon-close.svg"

function Navbar() {


  const [open , setOpen] =useState(false);
  function closeMenu(){
    setOpen(false)
  }
  return (
    <header>
    <nav className={`nav ${open?'show' : ''}`}>
        <div className='logo'>
            <img alt='logo' src={Logo} />
        </div>
        <ul>
            <li onClick={closeMenu} className='active'>
            <NavLink  to="/"><span>00</span> Home</NavLink>
            </li>
            <li onClick={closeMenu} ><NavLink  to="/destination"><span>01</span> Destination</NavLink></li>
            <li onClick={closeMenu} ><NavLink  to="/crew"><span>02</span> Crew</NavLink></li>
            <li onClick={closeMenu} ><NavLink  to="/technology"><span>03</span> Technology</NavLink></li>
        </ul>
        <div onClick={()=>setOpen(!open)} className='menu'>
            {
              open === false ? <img alt='menu' src={menu} />:
            <img alt='close' src={close} />
            }
        </div>
    </nav>
    </header>
  )
}

export default Navbar