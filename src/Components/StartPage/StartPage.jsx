import React from 'react'
import './StartPage.scss'
import Button from '../SmallerComponents/Button/Button'
import { useNavigate } from 'react-router-dom'

function StartPage() {
    const navigate = useNavigate()
    const start = () => {
        navigate('/home')
    }

    return (
        <div className="start">
            {/*<img className='start__logo' alt="logo" src={logo}/>*/}
            <Button click={start} text='to the land of no easy answers' classN="start__button"/>
        </div>
    )
}

export default StartPage