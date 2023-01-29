import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.jpg'

function Header() {
  return (
    <div  className='header'>
        <nav className='header__nav'>
            <Link className='header__link' to="/video">Video</Link>
            <Link className='header__link' to="/audio">Audio</Link>
            <Link className='header__link' to="/home"><img className='header__logo' src={logo} alt="subvert logo"/></Link>
            <Link className='header__link' to="/merchendise">Merchendise</Link>
            <Link className='header__link' to="/about">About</Link>
            <Link className='header__link' to="/contacts">Contacts</Link>
        </nav>
    </div>
  )
}

export default Header