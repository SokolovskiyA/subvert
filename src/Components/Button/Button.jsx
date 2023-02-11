import './Button.scss'

import React from 'react'

function Button(props) {
    return (
        <button onClick={props.click} className={`button ${props.class}`}>{props.text}</button>
    )
}

export default Button