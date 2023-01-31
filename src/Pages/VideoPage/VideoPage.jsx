import React from 'react'
import './VideoPage.scss'
import Header from '../../Components/Header/Header'
import { useEffect, useState } from 'react'
import axios from 'axios'

function VideoPage() {
  
  const [videos, setVideos] = useState([])
  videos.map(item => 
  console.log(item.snippet.resourceId.videoId))
  useEffect(() => { 
    axios.get('https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=100&playlistId=PL4D0WL2ASB5zo56UHBVrfZ04jsG_EuQfj&key=AIzaSyDE8Zv4QfTBpbzCQy4cBhzGWRI2nxYVQrs')
      .then(response => setVideos(response.data.items))
      .catch(error => console.log(error))
  }, [])
  

  return (
    <div>
      <Header/>
        {videos.map(item => 
          <div>
          <h1>{item.snippet.title}</h1>
          <p>{item.snippet.description}</p>
          <iframe width="560" height="315" src={`https://www.youtube.com/embed/${item.snippet.resourceId.videoId}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
        )}
      
    </div>
  )
}

export default VideoPage