import React from 'react'
import './Header.scss'
import { useState } from 'react';
import Button from '../Button/Button';
import Navigation from '../Navigation/Navigation';
import logo from '../../../Assets/Images/Sub.svg';
import { AnimatePresence, motion } from 'framer-motion';



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
        <motion.div initial={{height: "10vh"}} whileInView={{height: "15vh"}} className="header">
            <Button classN="header__button" click={openMenu} text="Menu"/>
            <AnimatePresence>{menuOpen && <Navigation click={closeMenu}/>}</AnimatePresence> 
                <div className='header__right'>
                    <motion.img initial={{height:0}} animate={{height: "70%", rotate: 360}} transition={{ duration: 1}} src={logo} className='header__logo' alt="logo"/>
                </div>
        </motion.div>
    )
}
export default Header