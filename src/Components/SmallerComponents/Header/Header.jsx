import React from 'react'
import './Header.scss'
import { useState } from 'react';
import Button from '../Button/Button';
import Navigation from '../Navigation/Navigation';

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
                { menuOpen ? <div className='header__left'><Navigation click={closeMenu}/><Button text="close" click={closeMenu} classN="header__close"/></div> : <div className="header__left"><Button classN="header__button" click={openMenu} text="Menu"/></div>}
            <div className='header__right'>
                <img className='header__logo' alt="logo"/>
            </div>
        </div>
    )
}
export default Header