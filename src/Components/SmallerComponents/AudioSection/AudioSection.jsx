import React from 'react'
import './AudioSection.scss'
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import record from '../../../Assets/Images/record.png'


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
                {/*<audio controls>
                    <source src={episode[0].audio_url} type="audio/mpeg"/>
                </audio>*/}
                <div className="audio__record-container">
                    <img className="audio__record" src={record} alt="record"/>
                </div>
                <div className='audio__controls'>
                    <button className='audio__control-btn'>Play</button>
                    <span></span>
                    <span></span>
                </div>
                <div className="audio__bar-container">
                    <span>00:00</span>
                    <input type="range" className='audio__seek-bar'/>  
                    <span>00:00</span>
                </div>
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