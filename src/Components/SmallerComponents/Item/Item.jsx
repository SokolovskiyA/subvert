import React from 'react'
import './Item.scss'
import { useState, useEffect } from 'react'
import Button from '../Button/Button'

function Item({product, add}) {
    const [colors, setColors]= useState([])
    const [sizes, setSizes] = useState([])
    
    const [chosenItem, setChosenItem] = useState({
        id: product.options[0].variant_id,
        image: product.options[0].image,
        price: product.options[0].price,
        color: product.options[0].color,
        size: product.options[0].size
    })

    const chooseSize = (e, size) => {
        e.preventDefault();
        const newItem = product.options.find((item) => item.color === chosenItem.color && item.size === size)
        setChosenItem(newItem)
    }
    const chooseColor = (e, color) => {
        e.preventDefault()
        const newSizes = []
        const newItems = []
        product.options.forEach((option)=> {
            if (option.color === color) {
                newItems.push(option)
                newSizes.push(option.size)
            }
        })
        setSizes(newSizes)
        chosenItem.size = newSizes[0]
        setChosenItem(newItems[0])
    }

    useEffect((e) => {    
        product.options.forEach((option) => {
            colors.push(option.color)
            if (option.color === chosenItem.color) {
                sizes.push(option.size)
            }
        })
        setColors(colors.filter((value, index) => colors.indexOf(value) === index))
        setSizes(sizes.filter((value, index) => sizes.indexOf(value) === index))
    },[product.options])

    
    return (
    <div className='shopItem'>
        <h3 className='shopItem__title'>{product.name}</h3>
        <img className='shopItem__pic' src={chosenItem.image} alt={product.name}/>
        <div className='shopItem__options'>
            <div className='shopItem__addBox'>
                <p className='shopItem__price'>{'$'+chosenItem.price}</p>
                <Button click={e => add(e,chosenItem)} classN="shopItem__addToCart" text="add to cart"/>
            </div>
            <div className="colors" style={colors.length < 2 ? {display: 'none'}:{}}>
                {colors.map(color => {
                    return(
                        <div onClick={e => chooseColor(e, color)} className={chosenItem.color === color ? 'shopItem__color choosenColor' : 'shopItem__color'} style={{backgroundColor: `${color}`}}></div>
                    )
                })}
            </div>
            <div className ="sizes">
                {sizes.map(size => {
                    return(
                        <p onClick={e => chooseSize(e, size)} className={chosenItem.size === size ? 'shopItem__size choosenSize' : 'shopItem__size'}>{size}</p>
                    )
                })}
            </div>
        </div>
    </div>
)
}

export default Item