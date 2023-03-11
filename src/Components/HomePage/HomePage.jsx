import React from 'react'
import './HomePage.scss'
import Header from '../SmallerComponents/Header/Header'
import VideoPlayer from '../SmallerComponents/VideoPlayer/VideoPlayer'
import AboutSection from '../SmallerComponents/AboutSection/AboutSection'
import AudioSection from '../SmallerComponents/AudioSection/AudioSection'
import ShopSection from '../SmallerComponents/ShopSection/ShopSection'
import FindSection from '../SmallerComponents/FindSection/FindSection'


function HomePage({videos}) {
    return (
        <div>
            <Header />
            <VideoPlayer video={videos[0]}/>
            <AboutSection />
            <AudioSection />
            <ShopSection />
            <FindSection />
        </div>
    )
}

export default HomePage