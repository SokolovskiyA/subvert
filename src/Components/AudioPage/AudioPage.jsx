import React from 'react'
import './AudioPage.scss'

function AudioPage({episodes}) {
    return (
        <div className='audio__page'>
            <h1>Audio Page</h1>
            <ul>
                {episodes.map((episode) => {
                    return (
                        <li key={episode.id}>
                            <h2>{episode.title}</h2>
                            <p>{episode.description}</p>
                            <audio controls>
                                <source src={episode.audio} type="audio/mpeg"/>
                            </audio>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
export default AudioPage