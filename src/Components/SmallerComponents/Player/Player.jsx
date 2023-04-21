import React from 'react'
import sound from '../../../Assets/Images/volume.svg'
import record from '../../../Assets/puppets/record.svg'
import { motion } from 'framer-motion';
import { useState, useRef} from 'react';
import Button from '../Button/Button';
import './Player.scss'

function Player({episode}) {
    console.log(episode)
    const [playing, setPlaying] = useState(false)
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(1);
    const audioRef = useRef(null);
    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        if (seconds < 10) {
            return `${minutes}:0${seconds}`;
        } else {
            return `${minutes}:${seconds}`;
        }   
    }
    const handlePlayPause = () => {
        if (playing) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setPlaying(!playing);
        };
        const handleTimeUpdate = () => {
            setCurrentTime(audioRef.current.currentTime);
        };
        const handleDurationChange = () => {
            setDuration(audioRef.current.duration);
        };
        const handleVolumeChange = (event) => {
        setVolume(event.target.value);
        audioRef.current.volume = event.target.value;
        };

    return (
        <div className="play">
        <div className='play__record'>
            <motion.img animate={{rotate: playing ? "360deg" : "0"}} transition={{duration: 2, repeat: playing && Infinity}} className='play__record-img' src={record} alt="record" />
            <div className='play__controls'>
            <audio
                ref={audioRef}
                src={episode.audio_url}
                preload="auto"
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleDurationChange}
                type="audio/mp3"
            />
            {<Button click={handlePlayPause} classN="play__button" text={ playing ? "stop" : "play"}></Button>}
            <input
                type="range"
                min="0"
                max={duration}
                value={currentTime}
                onChange={(event) => {
                    audioRef.current.currentTime = event.target.value;
                    setCurrentTime(event.target.value);
                }}
            />
            <div className="play__times">
                <p className="play__times-value">{formatTime(currentTime)}</p>
                <p className="play__times-value">{formatTime(duration)}</p>
            </div>
            <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
            />
            <div className="play__volume">
                <img className='play__vol' src={sound} alt="sound"/>
                <p className='play__times-value'>{Math.round(volume * 100)}</p>
            </div>
                <div className='play__lights'>
                    <motion.div initial={{backgroundColor: "#F97C42"}}  
                                animate={{ backgroundColor: playing ? ["#F97C42", "#C73E1D", "#242F40", "#F2C14A", "#C6D858", "#522C53"] : "#none"}} 
                                transition={{ delay: 0, duration: 2, repeat: playing && Infinity}}  
                                className ='play__element1'></motion.div>
                    <motion.div initial={{backgroundColor: "#F97C42"}} 
                                animate={{ backgroundColor: playing ? ["#F97C42", "#C73E1D", "#242F40", "#F2C14A", "#C6D858", "#522C53"] : "#none"}} 
                                transition={{ delay: 0.5, duration: 2, repeat: playing && Infinity}}  
                                className ='play__element2'></motion.div>
                    <motion.div initial={{backgroundColor: "#F97C42"}}
                                animate={{ backgroundColor: playing ? ["#F97C42", "#C73E1D", "#242F40", "#F2C14A", "#C6D858", "#522C53"] : "#none"}} 
                                transition={{ delay: 1, duration: 2, repeat: playing && Infinity}} 
                                className ='play__element3'></motion.div>
                </div>
            </div>
        </div>              
    </div>
    )
}

export default Player