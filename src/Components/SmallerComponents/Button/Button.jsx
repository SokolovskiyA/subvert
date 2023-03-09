import React from 'react'
import './Button.scss'

function Button({click, text, classN}) {
    return ( 
        <button onClick={click} className={"but " + classN}>{text}</button>
    )
}

export default Button