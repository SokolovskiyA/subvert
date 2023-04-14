import React from 'react'
import './AudioPage.scss'
import Header from '../SmallerComponents/Header/Header'
import Player from '../SmallerComponents/Player/Player';
import parse from 'html-react-parser';
import FortuneWheel from '../SmallerComponents/FortuneWheel/FortuneWheel';
import { useState, useEffect } from 'react';
import axios from 'axios';

function AudioPage() {

    const [ audio, setAudio] = useState([])
    const [activeAudio, setActiveAudio] = useState({})
    
    const chooseEpisode = (e, item) => {
        e.preventDefault()
        setActiveAudio(item)
    }
    const chooseRandom = (e) => {
        e.preventDefault()
        const rand = audio[~~(Math.random() * audio.length)]
        console.log(rand)
        setActiveAudio(rand)
    }
    const fetchAudio = async () => {
        try {
            const response = await axios.get(`https://www.buzzsprout.com/api/1889842/episodes.json?api_token=a4d806c2a852bdb2acfac0e5aa554bdc`)
            const sorted = response.data
            sorted.sort((a,b)=> Date.parse(b.published_at) -  Date.parse(a.published_at))
            setAudio(sorted)
            setActiveAudio(sorted[0])
        } catch (error) {
            console.log('there was an error fetchin video')
        }
    }
    useEffect(() => {       
        fetchAudio()
    }, [])

    if ( audio.length === 0) 
        return <div> Loading... </div>
    else return (
        <div className='audioPage'>
            <Header/>
            <div className='audioPage__play'> 
                <h1 className='audioPage__playing-title'>{activeAudio.title}</h1>
                <Player episode={activeAudio}/>
                <p className='audioPage__description'>{parse(activeAudio.description.split('Welcome to the land of no easy answers')[0])}</p>
            </div>
            <div className='audioPage__more'>
                <FortuneWheel chooseRandom={chooseRandom}/>
                <ul className='audioPage__list'>
                    {audio.map((episode) => {
                        return (
                            <li onClick={e => chooseEpisode(e, episode)} className='audioPage__item' key={episode.id}>
                                <h2>{episode.title}</h2>
                            </li>
                        )
                    })}
                </ul>
            </div>
            
        </div>
    )
}
export default AudioPage