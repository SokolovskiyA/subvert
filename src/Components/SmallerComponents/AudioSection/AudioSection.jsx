import React from 'react'
import './AudioSection.scss'
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import parse from 'html-react-parser';
import Player from '../Player/Player';



function AudioSection({episode}) {

const navigate = useNavigate('/video')
const videoDescription = episode[0].description.split('Welcome to the land of no easy answers')
const moreEpisodes = (e) => {
    e.preventDefault();
    navigate('/audio')
}
    return (
        <div className='audio'>
            <Player episode={episode[0]} />
            <div className='audio__text'>
                <h2 className="audio__header">Listen latest episode</h2>
                {parse(videoDescription[0])}
            </div>
            <Button click={moreEpisodes} classN="audio__link" text="hear more episodes"/>
        </div>
    )
}

export default AudioSection