import React from 'react'
import './Button.scss'
import { motion } from 'framer-motion'

function Button({ hover, click, text, classN}) {
    return ( 
        <motion.button onHoverStart={hover} onHoverEnd ={hover} whileHover={{ scale: 1.1 }} transition={{duration: 0.5}}  onClick={click} className={"but " + classN}>{text}</motion.button>
    )
}

export default Button