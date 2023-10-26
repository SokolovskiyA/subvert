import React from 'react'
import './Item.scss'
import { useState, useEffect } from 'react'
import Button from '../Button/Button'

function Item({product, add}) {

    const [chosenItem, setChosenItem] = useState(product.options[0])
    const [colors, setColors]= useState([])
    const [sizes, setSizes] = useState([])
    
    useEffect((e) => {    
        const newColors = []
        const newSizes = []
        product.options.forEach((option) => {
            newColors.push(option.color)
            if (option.color === chosenItem.color) {
                newSizes.push(option.size)
            }
        })
        setColors(newColors.filter((value, index) => newColors.indexOf(value) === index))
        setSizes(newSizes.filter((value, index) => newSizes.indexOf(value) === index))
    },[chosenItem])

    const chooseColor = (color) => {
        setChosenItem(product.options.find((item) => item.color === color))
    }
    const chooseSize = (size) => { 
        setChosenItem(product.options.find((item) => item.color === chosenItem.color && item.size === size))
    }
    return (
    <div className='shopItem'>
        <h3 className='shopItem__title'>{product.name}</h3>
        <img className='shopItem__pic' src={chosenItem.image} alt={product.name}/>
        <div className='shopItem__options'>
            <div className='shopItem__addBox'>
                <p className='shopItem__price'>{'$'+chosenItem.price}</p>
                <Button click={e => add(chosenItem)} classN="shopItem__addToCart" text="add to cart"/>
            </div>
            <div className="colors" style={colors.length < 2 ? {display: 'none'}:{}}>
                {colors.map(color => {
                    return(
                        <div onClick={e => chooseColor(color)} className={chosenItem.color === color ? 'shopItem__color choosenColor' : 'shopItem__color'} style={{backgroundColor: `${color}`}}></div>
                    )
                })}
            </div>
            <div className ="sizes">
                {sizes.map(size => {
                    return(
                        <p onClick={e => chooseSize(size)} className={chosenItem.size === size ? 'shopItem__size choosenSize' : 'shopItem__size'}>{size}</p>
                    )
                })}
            </div>
        </div>
    </div>
)
}

export default Item