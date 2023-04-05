import React from 'react'
import { Link } from 'react-router-dom'
import './Navigation.scss'
import { motion } from "framer-motion";



function Navigation() {
    return (
        <motion.div initial={{width: 0}} animate={{width: "30%"}} exit={{width: 0}} transition={{duration: 2}} key="modal" className="nav">
            <Link className='nav__link' to="/home">Home</Link>
            <Link className='nav__link' to="/videos">More Video</Link>
            <Link className='nav__link' to="/audio">More Audio</Link>
            <Link className='nav__link' to="/store">More Merch</Link>
        </motion.div>
    )
}

export default Navigation