import React from 'react'
import './Home.scss'
import Header from '../../Components/Header/Header'
import VideoPlayer from '../../Components/VideoPlayer/VideoPlayer'

function Home() {
  return (
    <div className='home'>
      <Header />
      <VideoPlayer />
    </div>
  )
}

export default Home