import React from 'react'
import './StartPage.scss'
import { Link } from 'react-router-dom'
import logo from '../../Assets/Images/logo.png'

function StartPage() {
    return (
        <div className="start">
            <img alt="logo" src={logo} />
            <Link to="/home">Click to start</Link>
        </div>
    )
}

export default StartPage