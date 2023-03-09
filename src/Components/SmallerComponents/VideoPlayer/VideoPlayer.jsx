import React from 'react'
import './VideoPlayer.scss'
import Button from '../Button/Button'
import { useNavigate } from "react-router-dom";


function VideoPlayer({video}) {
    const navigate = useNavigate('/video')
    const moreEpisodes = (e) => {
        e.preventDefault();
        navigate('/video')
    }
    return (
        <section className="player"> 
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
                <h2 className="player__title">{video.snippet.title}</h2>
                <Button click={moreEpisodes} classN="player__link" text="see more episodes"/>
            </div>
        </section>
    )
}

export default VideoPlayer