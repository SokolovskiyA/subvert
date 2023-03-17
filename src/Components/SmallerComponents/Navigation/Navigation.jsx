import React from 'react'
import { Link } from 'react-router-dom'
import './Navigation.scss'
import Button from '../Button/Button'
import { motion } from 'framer-motion';

function Navigation({click}) {
    return (
        <motion.div initial={{x: -100 }} animate={{ x: 0 }} transition={{duration: 2}} className="nav">
            <Link className='nav__link' to="/home">Home</Link>
            <Link className='nav__link' to="/videos">More Video</Link>
            <Link className='nav__link' to="/audio">More Audio</Link>
            <Link className='nav__link' to="/store">Our Store</Link>
            <Button text="close" click={click} classN="header__close"/>
        </motion.div>
    )
}

export default Navigation