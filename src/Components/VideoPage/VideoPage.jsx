import React from 'react'
import './VideoPage.scss'
import Video from '../SmallerComponents/Video/Video'
import { useState } from 'react'
import logo from '../../Assets/Images/Sub.svg'
import Header from '../SmallerComponents/Header/Header'
import FortuneWheel from '../SmallerComponents/FortuneWheel/FortuneWheel'

function VideoPage({videos}) {
    const [activeVideo, setActiveVideo] = useState(videos[0])
    const chooseEpisode = (e, video) => {
        e.preventDefault()
        setActiveVideo(video)
    }
    const chooseRandom = (e) => {
        e.preventDefault()
        const rand = videos[~~(Math.random() * videos.length)]
        setActiveVideo(rand)
    }
    return (
        <div className="theatre">
            <Header/>
            <Video video={activeVideo}/>
            <FortuneWheel chooseRandom={chooseRandom}/>
            <ul className="theatre__library">
                {videos
                    .filter(function(video) { 
                        return video.snippet.title !== 'Deleted video';
                    })
                    .filter(video => video.snippet.resourceId.videoId !== activeVideo.snippet.resourceId.videoId)
                    .map((video)=>{
                        return (
                            <li onClick={e => chooseEpisode(e, video)} className="theatre__item" key={video.snippet.resourceId.VideoId}>
                                <img className="theatre__logo" src={logo} alt="logo" />
                                <h2 className="theatre__item-name">{video.snippet.title}</h2>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default VideoPage