import React from 'react'

function VideoPage({videos}) {
    return (
        <div className="theatre">
            <ul>
                {videos.map((video) => {
                    return (
                        <li key={video.snippet.resourceId.VideoId}>
                            <h2>{video.snippet.title}</h2>
                            <p>{video.snippet.description}</p>
                            <iframe width="560" height="315" src={`https://www.youtube.com/embed/${video.snippet.resourceId.videoId}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                            </iframe>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default VideoPage