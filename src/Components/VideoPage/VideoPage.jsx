import React from 'react'
import './VideoPage.scss'
import Video from '../SmallerComponents/Video/Video'
import { useState } from 'react'
import logo from '../../Assets/puppets/tape.svg'
import Header from '../SmallerComponents/Header/Header'
import FortuneWheel from '../SmallerComponents/FortuneWheel/FortuneWheel'
import axios from 'axios'
import { useEffect } from 'react'
import Button from '../SmallerComponents/Button/Button'

function VideoPage() {
    const [videos, setVideos] = useState([])
    const [activeVideo, setActiveVideo] = useState({})
    const fetchVideos = async () => {
        try {
            const response = await axios.get(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=100&playlistId=PL4D0WL2ASB5zo56UHBVrfZ04jsG_EuQfj&key=AIzaSyDE8Zv4QfTBpbzCQy4cBhzGWRI2nxYVQrs`);
            const sorted = response.data.items
            sorted.sort((a,b)=> Date.parse(b.snippet.publishedAt) -  Date.parse(a.snippet.publishedAt))
            setVideos(sorted.filter(function(video) { 
                return video.snippet.title !== 'Deleted video';
            }))
            setActiveVideo(sorted[0])
        } catch (error) {
            console.log('there was an error fetchin video')
        }
    }
    useEffect(() => {       
        fetchVideos()
    }, [])

    const chooseEpisode = (e, video) => {
        e.preventDefault()
        setActiveVideo(video)
        window.scrollTo({top: 0, behavior: 'smooth'})
    }
    const chooseRandom = (e) => {
        e.preventDefault()
        const rand = videos[~~(Math.random() * videos.length)]
        setActiveVideo(rand)
        window.scrollTo({top: 0, behavior: 'smooth'})
    }
    const nextTrack = (e) => {
        e.preventDefault()
        const index = videos.indexOf(activeVideo)
        if (index === videos.length - 1) {
            setActiveVideo(videos[videos.length - 1])
        } else {
            setActiveVideo(videos[index + 1])
        }
    }
    const previousTrack = (e) => {
        e.preventDefault()
        let index = videos.indexOf(activeVideo)
        if (index === 0) {
            setActiveVideo(videos[0])
            index = 1
        } else {
            setActiveVideo(videos[index - 1])
        }
    }
    if ( videos.length === 0 ) 
    return <div> Loading... </div>
    else
    return (
        <div className="theatre">
            <Header/>
            <div className='theatre__video-div'>
                <Video video={activeVideo}/>
                <Button click={previousTrack} classN="theatre__track-button" text="earlier episode" />
                <Button click={nextTrack} classN="theatre__track-button2" text="later episode" />
            </div>
            <FortuneWheel chooseRandom={chooseRandom}/>
            <ul className="theatre__library">
                {videos
                    .map((video)=>{
                        const date = new Date(video.snippet.publishedAt).toLocaleDateString('en-us', { year:"numeric", month:"long", day:"numeric"}) 
                        return (
                            <li onClick={e => chooseEpisode(e, video)} className="theatre__item" key={video.snippet.resourceId.VideoId}>
                                <img className="theatre__logo" src={logo} alt="logo" />
                                <h2 className="theatre__item-name">{video.snippet.title}</h2>
                                <p className="theatre__date">{date}</p>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default VideoPage