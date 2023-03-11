import React from 'react'
import './AudioSection.scss'
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';

function AudioSection() {
    const navigate = useNavigate('/video')
    const moreEpisodes = (e) => {
        e.preventDefault();
        navigate('/audio')
    }
    return (
        <section className='audio'>
            
            <div className='audio__player'></div>
            <div className='audio__text'>
                <h3>Hear Us</h3>
                <Button click={moreEpisodes} classN="player__link" text="hear more episodes"/>
            </div>
            
        </section>
    )
}

export default AudioSection