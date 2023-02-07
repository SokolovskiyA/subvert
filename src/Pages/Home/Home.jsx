import React from 'react'
import './Home.scss'
import Header from '../../Components/Header/Header'
import VideoPlayer from '../../Components/VideoPlayer/VideoPlayer'
import ex1 from '../../assets/ex1.jpg'
import ex2 from '../../assets/ex2.gif'
import ex3 from '../../assets/ex3.png'
import ex4 from '../../assets/ex4.png'


function Home() {
  return (
    <div className='home'>
      <Header />
      <VideoPlayer />
      <div>
        <img className='example' src={ex1} alt="examples"/>
        <img className='example' src={ex2} alt="examples"/>
        <img className='example' src={ex3} alt="examples"/>
        <img className='example' src={ex4} alt="examples"/>
      </div>
    </div>
  )
}

export default Home