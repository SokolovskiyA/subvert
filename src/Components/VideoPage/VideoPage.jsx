import React from 'react'
import './VideoPage.scss'

function VideoPage({videos}) {
    console.log(videos)
    return (
        <div className="theatre">
            <ul className="theatre__library">
                {videos.map((video) => {
                    const description = video.snippet.description.split('Welcome to the land of no easy answers')
                    return (
                        <li className="theatre__item" key={video.snippet.resourceId.VideoId}>
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