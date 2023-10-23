import React from 'react'
import Header from '../SmallerComponents/Header/Header'
import VideoPlayer from '../SmallerComponents/VideoPlayer/VideoPlayer'
import AboutSection from '../SmallerComponents/AboutSection/AboutSection'
import AudioSection from '../SmallerComponents/AudioSection/AudioSection'
import ShopSection from '../SmallerComponents/ShopSection/ShopSection'
import FindSection from '../SmallerComponents/FindSection/FindSection'


function HomePage({videos, audio, products}) {
    return (
        <div>
            <Header />
            <VideoPlayer video={videos[0]} />
            <AboutSection />
            <AudioSection episode={audio[0]}  />
            <ShopSection products={products}/>
            <FindSection />
        </div>
    )
}

export default HomePage