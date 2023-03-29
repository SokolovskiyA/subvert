import React from 'react'
import './AudioSection.scss'
import { useNavigate } from 'react-router-dom';
import { useState, useRef } from 'react';
import Button from '../Button/Button';
import record from '../../../Assets/puppets/record.svg'
import { motion } from 'framer-motion';
import parse from 'html-react-parser';


function AudioSection({episode, video}) {
const [playing, setPlaying] = useState(false)
const navigate = useNavigate('/video')
const videoDescription = episode[0].description.split('Welcome to the land of no easy answers')
const moreEpisodes = (e) => {
    e.preventDefault();
    navigate('/audio')
}
const [currentTime, setCurrentTime] = useState(0);
const [duration, setDuration] = useState(0);
const [volume, setVolume] = useState(1);
const audioRef = useRef(null);

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
        <div className='audio'>
            <div className="play">
                <div className='play__record'>
                    <motion.img animate={{rotate: playing ? "360deg" : "0"}} transition={{duration: 2, repeat: playing && Infinity}} className='play__record-img' src={record} alt="record" />
                </div>
                <div className='play__controls'>
                    <audio
                        ref={audioRef}
                        src={episode[0].audio_url}
                        onTimeUpdate={handleTimeUpdate}
                        onLoadedMetadata={handleDurationChange}
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
                    <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.1"
                        value={volume}
                        onChange={handleVolumeChange}
                    />
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
            <div className='audio__text'>
                <h2 className="audio__header">Listen latest episode</h2>
                {parse(videoDescription[0])}
            </div>
            <Button click={moreEpisodes} classN="audio__link" text="hear more episodes"/>
        </div>
    )
}

export default AudioSection