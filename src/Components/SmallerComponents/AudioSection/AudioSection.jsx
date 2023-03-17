import React from 'react'
import './AudioSection.scss'
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';


function AudioSection({episode, video}) {
    const navigate = useNavigate('/video')
    const videoDescription = video.snippet.description.split('Welcome to the land of no easy answers')
    
    const moreEpisodes = (e) => {
        e.preventDefault();
        navigate('/audio')
    }
    return (
        <section className='audio'>
            <div className='audio__player'>
                <audio controls controlslist="nofullscreen nodownload noremoteplayback">
                    <source src={episode[0].audio_url} type="audio/mpeg"/>
                </audio>
            </div>
            <div className='audio__text'>
                <h2 className="audio__header">Listen latest episode</h2>
                <p className='audio__description'>{videoDescription[0]}</p>
            </div>
            <Button click={moreEpisodes} classN="audio__link" text="hear more episodes"/>
        </section>
    )
}

export default AudioSection