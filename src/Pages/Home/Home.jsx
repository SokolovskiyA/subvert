import React from 'react'
import './Home.scss'
import VideoPlayer from '../../Components/VideoPlayer/VideoPlayer'
import pageBreak from '../../assets/images/pageBreakUp.gif'
function Home() {
  return (
    <div className='home'>
      <VideoPlayer />
      <img className='page-break' src={pageBreak} alt="page break"/>
      <section className="about">
        <h2 className='about__header'>About Us</h2>
        <div>
          <p className='about__text'>Welcome to the Land of No Easy Answers. We seek to unravel the mysteries of the mind, the vagaries of the universe, and all the connections between. From learning to friend again in the post-pandemic, to combining neuroscience with sock puppets, The Subvert Podcast is here to help explain the chaos, with more chaos. Join hosts Kristin Rumohr and Aaron Stewart as we attempt to unravel the mysteries of the mind and your universe, subverting the disconnect between perceived realities. Subscribe to our YouTube channel to get the most out of this podcast</p>
        </div>
      </section>
    </div>
  )
}

export default Home