import React from 'react'
import './AudioPlayer.scss'
import play from '../../assets/images/play.svg'

function AudioPlayer() {
  return (
    <div className='container'>
      <h2 className='container__header'>Listen Us Here</h2>
      <div className='container__item'>
        <img className="container__item-image"src={play}n alt="player button"/>
      </div>
    </div>
  )
}

export default AudioPlayer