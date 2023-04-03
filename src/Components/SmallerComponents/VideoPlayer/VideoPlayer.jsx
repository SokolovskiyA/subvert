import React from 'react'
import './VideoPlayer.scss'
import Button from '../Button/Button'
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion'
import tv from '../../../Assets/puppets/tv.svg'


function VideoPlayer({video}) {
    const navigate = useNavigate('/video')
    const moreEpisodes = (e) => {
        e.preventDefault();
        navigate('/videos')
    }
    return (
        <section className="player"> 
            <iframe 
                className='player__video'   
                src={`https://www.youtube.com/embed/${video.snippet.resourceId.videoId}`} 
                title="YouTube video player" 
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen>
            </iframe>
            <div className='player__text'>
                <h2 className="player__title">{video.snippet.title}</h2>
                <motion.img animate={{rotate: [-5, 5, -5, 5, -5]}} transition={{duration: 4 ,repeat: Infinity }} className ="player__tv" src={tv} alt="tv"/>
            </div>
            <Button click={moreEpisodes} classN="player__link" text="see more episodes"/>
        </section>
    )
}

export default VideoPlayer