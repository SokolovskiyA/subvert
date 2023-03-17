import React from 'react'
import './VideoPage.scss'
import Video from '../SmallerComponents/Video/Video'
import { useState } from 'react'
import logo from '../../Assets/Images/logo.png'
import Header from '../SmallerComponents/Header/Header'

function VideoPage({videos}) {

    const [activeVideo, setActiveVideo] = useState(videos[0])
    
    const chooseEpisode = (e, video) => {
        e.preventDefault()
        setActiveVideo(video)
    }
    return (
        <div className="theatre">
            <Header/>
            <Video video={activeVideo}/>
            <ul className="theatre__library">
                {videos.filter(video => video.snippet.resourceId.videoId !== activeVideo.snippet.resourceId.videoId).map((video)=>{
                    const description = video.snippet.description.split('Welcome to the land of no easy answers')
                    return (
                        <li onClick={e => chooseEpisode(e, video)} className="theatre__item" key={video.snippet.resourceId.VideoId}>
                            <img className="theatre__logo" src={logo} alt="logo" />
                            <h2 className="theatre__item-name">{video.snippet.title}</h2>
                            <p className="thetre__item-description">{description[0]}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default VideoPage