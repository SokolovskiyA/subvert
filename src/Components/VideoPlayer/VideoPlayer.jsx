import './VideoPlayer.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';

function VideoPlayer(props) {
    const [featuredVideo, setVideo] = useState('')
    const apiKey="AIzaSyDE8Zv4QfTBpbzCQy4cBhzGWRI2nxYVQrs"
    const fetchVideos = () => {
        axios.get(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=100&playlistId=PL4D0WL2ASB5zo56UHBVrfZ04jsG_EuQfj&key=${apiKey}`)
        .then(response => {
            console.log(response.data.items[0].snippet.publishedAt)
            console.log(response.data.items)
            const sorted = response.data.items
            sorted.sort((a,b)=> Date.parse(b.snippet.publishedAt) -  Date.parse(a.snippet.publishedAt))
            setVideo(sorted[0].snippet.resourceId.videoId)
            })
        .catch(error => console.log(error))
    }
    useEffect(() => { 
        fetchVideos()
    }, [])
    
    return (  
        <section className="video"> 
            <iframe 
                className='video__player' 
                width="560" 
                height="315" 
                src={`https://www.youtube.com/embed/${featuredVideo}`} 
                title="YouTube video player" 
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen></iframe>
        </section>
    )
}

export default VideoPlayer