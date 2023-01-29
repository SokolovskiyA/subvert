import React from 'react'
import { useNavigate } from 'react-router-dom'
import './StartPage.scss'
import * as THREE from 'three';
import vantaFog from 'vanta/src/vanta.fog';
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion"

function StartPage() {
  const navigate = useNavigate()
  const buttonClick = () => {
    navigate('/home')
  }
  const [vantaEffect, setVantaEffect] = useState(0);
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
  }, [vantaEffect]);

  return (
    <div ref={vantaRef} className='start'>
        <motion.button 
        whileHover={{
        scale: 1.3,
        transition: { duration: 1 },
        }}
        className="start__button" onClick={buttonClick}>Enter Here</motion.button>
    </div>
  )
}

export default StartPage