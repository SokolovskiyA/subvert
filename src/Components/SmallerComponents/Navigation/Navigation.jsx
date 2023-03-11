import React from 'react'
import { Link } from 'react-router-dom'
import './Navigation.scss'

function Navigation({click}) {
    return (
        <div className="nav">
            <Link className='nav__link' to="/home">Home</Link>
            <Link className='nav__link' to="/videos">More Video</Link>
            <Link className='nav__link' to="/audio">More Audio</Link>
            <Link className='nav__link' to="/store">Our Store</Link>
        </div>
    )
}

export default Navigation