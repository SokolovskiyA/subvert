import React from 'react'
import './HomePage.scss'
import Header from '../SmallerComponents/Header/Header'
import VideoPlayer from '../SmallerComponents/VideoPlayer/VideoPlayer'
import AboutSection from '../SmallerComponents/AboutSection/AboutSection'
import AudioSection from '../SmallerComponents/AudioSection/AudioSection'
import ShopSection from '../SmallerComponents/ShopSection/ShopSection'
import FindSection from '../SmallerComponents/FindSection/FindSection'
import { useState, useEffect } from 'react';
import axios from 'axios';

function HomePage() {
    const [ videos, setVideos] = useState([])
    const [ audio, setAudio] = useState([])
    
    const fetchAudio = async () => {
        try {
            const response = await axios.get(`https://www.buzzsprout.com/api/1889842/episodes.json?api_token=a4d806c2a852bdb2acfac0e5aa554bdc`)
            const sorted = response.data
            sorted.sort((a,b)=> Date.parse(b.published_at) -  Date.parse(a.published_at))
            setAudio(sorted)
        } catch (error) {
            console.log('there was an error fetchin video')
        }
    }
    const fetchVideos = async () => {
        try {
            const response = await axios.get(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=100&playlistId=PL4D0WL2ASB5zo56UHBVrfZ04jsG_EuQfj&key=AIzaSyDE8Zv4QfTBpbzCQy4cBhzGWRI2nxYVQrs`);
            const sorted = response.data.items
            sorted.sort((a,b)=> Date.parse(b.snippet.publishedAt) -  Date.parse(a.snippet.publishedAt))
            setVideos(sorted)
        } catch (error) {
            console.log('there was an error fetchin video')
        }
    }
    useEffect(() => {       
        fetchVideos()
        fetchAudio()
    }, [])
    
    if ( videos.length === 0 || audio.length === 0) 
    return <div> Loading... </div>
    else return (
        <div>
            <Header />
            <VideoPlayer video={videos[0]} />
            <AboutSection />
            <AudioSection episode={audio[0]}  />
            <ShopSection />
            <FindSection />
        </div>
    )
}

export default HomePage