import React from 'react'
import './Header.scss'
import { useState } from 'react';
import Button from '../Button/Button';
import Navigation from '../Navigation/Navigation';
import logo from '../../../Assets/Images/Sub.svg';
import { AnimatePresence, motion } from 'framer-motion';
import puppet from '../../../Assets/puppets/BrownPuppet.png';
import { Link } from 'react-router-dom';




function Header() {

    const [ menuOpen, setMenuOpen ] = useState(false)
    const [ mouseOnButton, setMouseOnButton ] = useState(false)

    const setHover = (e) => {
        e.preventDefault()
        setMouseOnButton(!mouseOnButton)
    }
    const openMenu = (e) => {
        e.preventDefault()
        setMenuOpen(true)
    }


    
    return (
        <motion.div className="header">
            <Button hover={setHover} classN="header__button" click={openMenu} text="Menu"/>
            <AnimatePresence>{menuOpen && <Navigation/>}</AnimatePresence>
            <Link className='header__logo-div' to="/home"><motion.img whileInView={{rotate: 355}} transition={{duration: 1}} src={logo} className='header__logo' alt="logo"/></Link>
            {menuOpen ? 
            <motion.img animate={{margin: menuOpen ? "3rem 0 0 9rem" : "3.5rem 0 0 -2rem", rotate: -30}} transition={{delay: 1.5, duration: 1}} src={puppet} className='header__puppet' alt="puppet"/> 
            :  
            <motion.img animate={{margin: mouseOnButton ? "3.5rem 0 0 -2rem" : "3.5rem 0 0 -6rem"}} src={puppet} className='header__puppet' alt="puppet"/>}
        </motion.div> 
    )
}
export default Header