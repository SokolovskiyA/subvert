import React from 'react'
import { Link } from 'react-router-dom'
import './Navigation.scss'
import { motion } from "framer-motion";




function Navigation() {
    return (
        <motion.div initial={{width: 0}} animate={{width: "fit-content"}} exit={{width: 0}} transition={{duration: 2}} key="modal" className="nav">
            <Link className='nav__link' to="/home"><motion.span className="nav__span" initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.5, delay: 1}}>Home</motion.span></Link>
            <Link className='nav__link' to="/videos"><motion.span className="nav__span" initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.5, delay: 1}}>Video</motion.span></Link>
            <Link className='nav__link' to="/audio"><motion.span className="nav__span" initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.5, delay: 1}}>Audio</motion.span></Link>
            <Link className='nav__link' to="/store"><motion.span className="nav__span" initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.5, delay: 1}}>Merch</motion.span></Link>
        </motion.div>
    )
}

export default Navigation