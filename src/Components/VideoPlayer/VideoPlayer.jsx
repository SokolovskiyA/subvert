import './VideoPlayer.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from '../Button/Button';
import { Link } from 'react-router-dom'

function VideoPlayer(props) {
    const [featuredVideoId, setVideoId] = useState('')
    const [videoHead, setHead ] = useState('')
    const apiKey="AIzaSyDE8Zv4QfTBpbzCQy4cBhzGWRI2nxYVQrs"
    const fetchVideos = () => {
        axios.get(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=100&playlistId=PL4D0WL2ASB5zo56UHBVrfZ04jsG_EuQfj&key=${apiKey}`)
        .then(response => {
            const sorted = response.data.items
            sorted.sort((a,b)=> Date.parse(b.snippet.publishedAt) -  Date.parse(a.snippet.publishedAt))
            setVideoId(sorted[1].snippet.resourceId.videoId)
            console.log(sorted)
            setHead(sorted[4].snippet.title)
            })
        .catch(error => console.log(error))
    }
    useEffect(() => { 
        fetchVideos()
    }, [])
    
    return (  
        <section className="video"> 
            <h2 className="video__header">See Us</h2>
            <div className='video__player-div'>
                <iframe 
                    className='video__player' 
                    width="560" 
                    height="315" 
                    src={`https://www.youtube.com/embed/${featuredVideoId}`} 
                    title="YouTube video player" 
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen>
                </iframe>
                <h2>{videoHead}</h2>
                <Link className="video__link-to-more" to="/video"><Button text="see more episodes" /></Link>
            </div>
        </section>
    )
}

export default VideoPlayer