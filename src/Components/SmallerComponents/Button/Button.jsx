import React from 'react'
import './Button.scss'
import { motion } from 'framer-motion'

function Button({ hover, click, text, classN}) {
    return ( 
        <motion.button whileTap={{ scale: 0.9 }} onHoverStart={hover} onHoverEnd ={hover} whileHover={{ scale: 1.1 }} transition={{duration: 0.5, type: "spring", stiffness: 400, damping: 17}}  onClick={click} className={"but " + classN}>{text}</motion.button>
    )
}

export default Button