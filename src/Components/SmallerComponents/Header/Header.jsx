import React from 'react'
import './Header.scss'
import { useState } from 'react';
import Button from '../Button/Button';
import Navigation from '../Navigation/Navigation';
import logo from '../../../Assets/Images/logo.png';


function Header() {
    const [ menuOpen, setMenuOpen ] = useState(false)
    const openMenu = (e) => {
        e.preventDefault()
        setMenuOpen(true)
    }
    const closeMenu = (e) => {
        e.preventDefault()
        setMenuOpen(false)
    }
    return (
        <div className="header">
            {menuOpen ? <Navigation  animate={{x: 200}} click={closeMenu}/> : <Button classN="header__button" click={openMenu} text="Menu"/>}
            <div className='header__right'>
                <img src={logo} className='header__logo' alt="logo"/>
            </div>
        </div>
    )
}
export default Header