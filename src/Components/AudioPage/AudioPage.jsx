import React from 'react'
import './AudioPage.scss'
import Header from '../SmallerComponents/Header/Header'

function AudioPage({audio}) {
    return (
        <div className='audio__page'>
            <Header/>
            <h1>Audio Page</h1>
            <ul>
                {audio.map((episode) => {
                    return (
                        <li key={episode.id}>
                            <h2>{episode.title}</h2>
                            <p>{episode.description}</p>
                            <audio className='aaudio-player' controls>
                                <source src={episode.audio_url} type="audio/mpeg"/>
                            </audio>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
export default AudioPage