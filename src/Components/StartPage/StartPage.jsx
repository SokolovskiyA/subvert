import React from 'react'
import './StartPage.scss'
import { useNavigate } from 'react-router-dom'
import logo from '../../Assets/Images/door.svg'
import puppet1 from '../../Assets/puppets/BrownPuppet.png'
import puppet2 from '../../Assets/puppets/GPurplePuppet.png'
import puppet3 from '../../Assets/puppets/PinkPuppet.png'
import puppet4 from '../../Assets/puppets/PuppetGP.png'
import puppet5 from '../../Assets/puppets/YellowPuppet.png'
import puppet6 from '../../Assets/puppets/YellowGPuppet.png'
import { useState } from 'react'
import { motion } from 'framer-motion'

function StartPage() {
    const [hover, setHover] = useState(false) 
    console.log(hover)
    const navigate = useNavigate()

    const hoverAction = (e) => {
        setHover(!hover)
    }

    const start = () => {
        navigate('/home')
    }

    return (
        <div className="start">
            <motion.img initial={{top: -300}} animate={{top: [-200, 1000], rotate: 360}} transition={{duration: 4, repeat: Infinity}} className='start__puppet puppet1' src={puppet1} alt="puppet"/>
            <motion.img initial={{top: -300}} animate={{top: [-200, 1000], rotate: -360}} transition={{duration: 4, repeat: Infinity, delay: 1}} className='start__puppet puppet2' src={puppet2} alt="puppet"/>
            <motion.img initial={{top: -300}} animate={{top: [-200, 1000], rotate: 360}} transition={{duration: 4, repeat: Infinity, delay: 2.5}} className='start__puppet puppet3' src={puppet3} alt="puppet"/>
            <motion.img initial={{top: -300}} animate={{top: [-200, 1000], rotate: -360}} transition={{duration: 4, repeat: Infinity, delay: 1.5}} className='start__puppet puppet4' src={puppet4} alt="puppet"/>
            <motion.img initial={{top: -300}} animate={{top: [-200, 1000], rotate: 360}} transition={{duration: 4, repeat: Infinity, delay: 0.8}} className='start__puppet puppet5' src={puppet5} alt="puppet"/>
            <motion.img initial={{top: -300}} animate={{top: [-200, 1000], rotate: -360}} transition={{duration: 4, repeat: Infinity, delay: 0.5}} className='start__puppet puppet6' src={puppet6} alt="puppet"/>
            <img className='start__door' alt="logo" src={logo}/>
            <button onMouseEnter={hoverAction} onMouseLeave={hoverAction} onClick={start} className="btn btn-2 btn-2g">Welcome!</button>
        </div>
    )
}

export default StartPage