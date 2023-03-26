import React from 'react'
import './AudioSection.scss'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Button from '../Button/Button';
import record from '../../../Assets/puppets/record.svg'
import { motion } from 'framer-motion';


function AudioSection({episode, video}) {
    const [playing, setPlaying] = useState(false)
    console.log(playing)
    const navigate = useNavigate('/video')
    const videoDescription = video.snippet.description.split('Welcome to the land of no easy answers')
    const moreEpisodes = (e) => {
        e.preventDefault();
        navigate('/audio')
    }
    const playAudio = (e) => {
        e.preventDefault();
        setPlaying(!playing)
    }

    return (
        <div className='audio'>
            <div className="play">
                <div className='play__record'>
                    <motion.img animate={{rotate: playing && 360}} transition={{duration: 2, repeat: Infinity}} className='play__record-img' src={record} alt="record" />
                </div>
                <div className='play__controls'>
                    <button onClick={playAudio}>Play</button>
                </div>
            </div>
            {/*<audio controls controlslist="nofullscreen nodownload noremoteplayback">
                <source src={episode[0].audio_url} type="audio/mpeg"/>
            </audio>*/}
            <div className='audio__text'>
                <h2 className="audio__header">Listen latest episode</h2>
                <p className='audio__description'>{videoDescription[0]}</p>
            </div>
            <Button click={moreEpisodes} classN="audio__link" text="hear more episodes"/>
        </div>
    )
}

export default AudioSection