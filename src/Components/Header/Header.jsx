import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import puppet from '../../assets/images/puppet.png'


function Header(props) {
  return (
    <div  className='header'>
        <nav className='header__nav'>
            <Link className='header__link' to="/home"><img src={puppet} alt="puppet" className="header__puppet"/>Home</Link>
            <Link className='header__link' to="/about"> <img src={puppet} alt="puppet" className="header__puppet"/>About</Link>
            <Link className='header__link' to="/video"> <img src={puppet} alt="puppet" className="header__puppet"/>More Episodes</Link>
            <Link className='header__link' to="/merchendise"> <img src={puppet} alt="puppet" className="header__puppet"/>Merchendise</Link>
            <Link className='header__link' to="/contacts"> <img src={puppet} alt="puppet" className="header__puppet"/>Contacts</Link>
        </nav>
        <Button click={props.close} class="header__close" text="close"/>
    </div>
  )
}

export default Header