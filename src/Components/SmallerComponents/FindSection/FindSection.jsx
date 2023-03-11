import React from 'react'
import './FindSection.scss'
import logo from '../../../Assets/Images/logo.png'

function FindSection() {
    return (
        <div className='contact'>
            <img className='contact__logo' src={logo} alt='logo' />
            <div className='contact__info'>
                <h2>Find Us Here</h2> 
            </div>
        </div>
    )
}

export default FindSection