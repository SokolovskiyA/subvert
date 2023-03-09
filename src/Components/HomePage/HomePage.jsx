import React from 'react'
import './HomePage.scss'
import Header from '../SmallerComponents/Header/Header'
import VideoPlayer from '../SmallerComponents/VideoPlayer/VideoPlayer'
import AboutSection from '../SmallerComponents/AboutSection/AboutSection'

function HomePage({videos}) {
    return (
        <div>
            <Header />
            <VideoPlayer video={videos[0]}/>
            <AboutSection />
        </div>
    )
}

export default HomePage