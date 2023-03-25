import React from 'react'
import { Link } from 'react-router-dom'
import './Navigation.scss'
import Button from '../Button/Button'
import { motion } from "framer-motion";


function Navigation({click}) {
    return (
        <motion.div initial={{width: "0%"}} animate={{width: "30%"}} exit={{width: "0%"}} transition={{duration: 1}} key="modal" className="nav">
            <Link className='nav__link' to="/home"><motion.span initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.5 ,duration: 1}}>Home</motion.span></Link>
            <Link className='nav__link' to="/videos"><motion.span initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.5 ,duration: 1}}>More Video</motion.span></Link>
            <Link className='nav__link' to="/audio"><motion.span initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.5 ,duration: 1}}>More Audio</motion.span></Link>
            <Link className='nav__link' to="/store"><motion.span initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.5 ,duration: 1}}>More Merch</motion.span></Link>
            <Button text="close" click={click} classN="nav__close"/>
        </motion.div>
    )
}

export default Navigation