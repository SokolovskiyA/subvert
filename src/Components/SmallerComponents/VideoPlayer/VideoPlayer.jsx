import React from 'react'
import './VideoPlayer.scss'
import Button from '../Button/Button'
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion'


function VideoPlayer({video}) {
    const navigate = useNavigate('/video')
    const moreEpisodes = (e) => {
        e.preventDefault();
        navigate('/videos')
    }
    return (
        <motion.section className="player"> 
            <iframe 
                className='player__video' 
                width="560" 
                height="315" 
                src={`https://www.youtube.com/embed/${video.snippet.resourceId.videoId}`} 
                title="YouTube video player" 
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen>
            </iframe>
            <div className='player__text'>
                <h2>Watch latest episode</h2>
                <h2 className="player__title">{video.snippet.title}</h2>
            </div>
            <Button click={moreEpisodes} classN="player__link" text="see more episodes"/>
        </motion.section>
    )
}

export default VideoPlayer