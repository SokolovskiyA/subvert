import React from 'react'
import './StartPage.scss'
import { Link } from 'react-router-dom'

function StartPage() {
    return (
        <Link to="/home">Click to start</Link>
    )
}

export default StartPage