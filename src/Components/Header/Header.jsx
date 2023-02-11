import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'


function Header(props) {
  return (
    <div  className='header'>
        <nav className='header__nav'>
            <Link className='header__link' to="/home">Home</Link>
            <Link className='header__link' to="/about">About</Link>
            <Link className='header__link' to="/video">More Episodes</Link>
            <Link className='header__link' to="/merchendise">Merchendise</Link>
            <Link className='header__link' to="/contacts">Contacts</Link>
        </nav>
        <Button click={props.close} class="header__close" text="close"/>
    </div>
  )
}

export default Header