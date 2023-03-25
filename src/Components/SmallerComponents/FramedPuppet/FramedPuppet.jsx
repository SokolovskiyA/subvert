import React from 'react'
import './FramedPuppet.scss'
import frame1 from '../../../Assets/puppets/frame1.svg'
import frame2 from '../../../Assets/puppets/frame2.svg'
import puppet1 from '../../../Assets/puppets/PinkPuppet.png'
import puppet2 from '../../../Assets/puppets/YellowPuppet.png'
import { AnimatePresence, motion } from 'framer-motion'

function FramedPuppet({openBull}) {
    console.log(openBull)
    return (
        <motion.div className='framed'>
            <motion.div className='framed__frame1'>
                <motion.img initial={{x: 1000}} animate={{x:[-1000, -500, -300, -200, -100, 0], rotate: ["14deg","-14deg","14deg","-14deg","14deg","-14deg"]}} transition={{duration: 2}} src={frame1} className='framed__pic1' alt="frame1"/>
                <AnimatePresence><motion.img initial={{visibility: "hidden"}}  animate={{visibility: openBull && "visible", rotate: openBull && ["-360deg","-16deg"]}} transition={{duration: 1}} src={puppet1} className='framed__puppet1' alt="puppet1"/></AnimatePresence>
            </motion.div>
            <motion.div className='framed__frame2'>
                <motion.img initial={{x: -1000}} animate={{x:[1000, 500, 300, 200, 100, 0], rotate: ["-14deg","14deg","-14deg","14deg","-14deg","14deg"]}} transition={{duration: 2}} src={frame2} className='framed__pic2' alt="framed2"/>
                <AnimatePresence><motion.img initial={{visibility: "hidden"}}  animate={{visibility: openBull && "visible",  rotate:openBull &&  ["360deg","18deg"]}} transition={{duration: 1}} src={puppet2} className='framed__puppet2' alt="puppet2"/></AnimatePresence>
            </motion.div>
        </motion.div>
    )
}

export default FramedPuppet