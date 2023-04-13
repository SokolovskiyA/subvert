import React from 'react'
import './AudioPage.scss'
import Header from '../SmallerComponents/Header/Header'
import Player from '../SmallerComponents/Player/Player';
import parse from 'html-react-parser';
import FortuneWheel from '../SmallerComponents/FortuneWheel/FortuneWheel';

function AudioPage({audio}) {
    const description = audio[0].description.split('Welcome to the land of no easy answers')
    return (
        <div className='audioPage'>
            <Header/>
            <div> 
                <h1 className='audioPage__playing-title'>{audio[0].title}</h1>
                <Player episode={audio[0]}/>
                <p className='audioPage__description'>{parse(description[0])}</p>
            </div>
            <div className='audioPage__more'>
                
                <FortuneWheel/>
                <ul className='audioPage__list'>
                    {audio.map((episode) => {
                        return (
                            <li className='audioPage__item' key={episode.id}>
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