import React from 'react'
import './VideoPage.scss'
import Header from '../../Components/Header/Header'
import { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import * as THREE from 'three';
import vantaFog from 'vanta/src/vanta.fog'


function VideoPage() {
    const apiKey="AIzaSyDE8Zv4QfTBpbzCQy4cBhzGWRI2nxYVQrs"
    const [videos, setVideos] = useState([])
    const fetchVideos = () => {
    axios.get(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=100&playlistId=PL4D0WL2ASB5zo56UHBVrfZ04jsG_EuQfj&key=${apiKey}`)
    .then(response => setVideos(response.data.items))
    .catch(error => console.log(error))
  }
  useEffect(() => { 
    fetchVideos()
  }, [])
    const [vantaEffect, setVantaEffect] = useState(0);
    const ref = useRef(null);
    useEffect(() => {
      if (!vantaEffect) {
        setVantaEffect(
          vantaFog({
              el: ref.current,
              THREE: THREE,
              minHeight: 0.00,
              mouseControls: true,
              touchControls: true,
              gyroControls: false,
              highlightColor: 0xffffff,
              midtoneColor: 0x484848,
              lowlightColor: 0x0,
              baseColor: 0xffffff,
              blurFactor: 0.70,
              speed: 1.70
          })
        );
      }
      return () => {
        if (vantaEffect) vantaEffect.destroy();
      };
    }, [vantaEffect]);
  
    return (
      <section className='videos' ref={ref}> 
        <Header />
        <div className="videos__container">
          {videos.map(video => 
            <div key={video.snippet.resourceId.videoId} className="videos__video">
              <h2>{video.snippet.title}</h2>
              <h2>This is video</h2>
            </div>
          )}
        </div>
      </section>
    )
}

export default VideoPage