import React from 'react'
import './FramedPuppet.scss'
import frame1 from '../../../Assets/puppets/frame1.svg'
import frame2 from '../../../Assets/puppets/frame2.svg'
import puppet1 from '../../../Assets/puppets/PinkPuppet.png'
import puppet2 from '../../../Assets/puppets/YellowPuppet.png'
import { motion, useInView } from 'framer-motion'
import {useRef} from 'react'

function FramedPuppet({openBull}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    
    return (
        <div ref={ref} className='framed'>
            <div className='framed__frame1'>
                <motion.img  animate={{x: isInView && [-1000, -500, -300, -200, -100, 0], rotate: isInView &&["14deg","-14deg","14deg","-14deg","14deg","-14deg"]}} transition={{duration: 2}} src={frame1} className='framed__pic1' alt="frame1"></motion.img>
                <motion.img initial={{visibility: "hidden"}}  animate={{visibility:  "visible", rotate:  ["-360deg","-16deg"]}} transition={{duration: 1, delay: 4}} src={puppet1} className='framed__puppet1' alt="puppet1"/>
            </div>
            <div className='framed__frame2'>
                <motion.img animate={{x: isInView && [1000, 500, 300, 200, 100, 0], rotate: isInView && ["-14deg","14deg","-14deg","14deg","-14deg","14deg"]}} transition={{duration: 2}}  src={frame2} className='framed__pic2' alt="framed2"/>
                <motion.img initial={{visibility: "hidden"}}  animate={{visibility:  "visible",  rotate:  ["360deg","18deg"]}} transition={{duration: 1, delay: 4}} src={puppet2} className='framed__puppet2' alt="puppet2"/>
            </div>
        </div>
    )
}

export default FramedPuppet