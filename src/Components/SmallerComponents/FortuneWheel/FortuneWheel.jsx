import React from 'react'
import { motion } from 'framer-motion'
import './FortuneWheel.scss'
import pup from '../../../Assets/Images/pup.svg'
import wheel from '../../../Assets/Images/wheel.svg'

function FortuneWheel({chooseRandom}) {
    return (
        <div className='random'>
            <h2 className='random__header'>explore more episodes</h2>
            <img src={pup} className='random__pup'  alt="puppet"/>
            <div className='random__wheel-div'>
                <button  onClick={ e => chooseRandom(e)} className='random__button'>PLAY RANDOM</button>
                <motion.img animate={{rotate: 360}} transition={{ ease: "linear" , duration: 15, repeat: Infinity }} className='random__wheel' alt="wheel" src={wheel}/>
            </div>
        </div>
    )
}

export default FortuneWheel