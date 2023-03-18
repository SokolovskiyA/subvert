import React from 'react'
import './Header.scss'
import { useState } from 'react';
import Button from '../Button/Button';
import Navigation from '../Navigation/Navigation';
import logo from '../../../Assets/Images/logo.png';
import { AnimatePresence } from 'framer-motion';



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
            <Button classN="header__button" click={openMenu} text="Menu"/>
            <AnimatePresence>{menuOpen && <Navigation click={closeMenu}/>}</AnimatePresence> 
                <div className='header__right'>
                    <img src={logo} className='header__logo' alt="logo"/>
                </div>
        </div>
    )
}
export default Header