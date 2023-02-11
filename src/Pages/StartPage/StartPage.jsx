import React from 'react'
import './StartPage.scss'
/*import * as THREE from 'three';
import vantaFog from 'vanta/src/vanta.fog';
import { useState, useEffect, useRef } from "react";*/
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logoGif.gif'
import logo2 from '../../assets/images/puppetsPop.gif'
import logo3 from '../../assets/images/puppetsPop2.gif'

function StartPage() {
  /*const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        vantaFog({
            el: vantaRef.current,
            THREE: THREE,
            minHeight: 0.00,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            highlightColor: 0xffffff,
            midtoneColor: 0x484848,
            lowlightColor: 0x0,
            baseColor: 0xffffff,
            blurFactor: 0.70,
            speed: 1.70
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);*/

  return (
    <div className='start'>
        <div className='start__logo-container'> 
          <img className="start__puppets" src={logo2} alt='logo'/>
          <img className="start__logo" src={logo} alt='logo'/>
          <img className="start__puppets" src={logo3} alt='logo'/>
        </div>
        <Link to='/home'>
          <motion.p
            whileHover={{
            scale: 1.3,
            transition: { duration: 1 },
            }}
            className="start__button" >Enter Here
          </motion.p>
        </Link>
    </div>
  )
}

export default StartPage