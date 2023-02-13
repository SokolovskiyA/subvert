import React from 'react'
import './ItemCard.scss'
import Button from '../Button/Button'
import item from '../../assets/images/tshirt.png'

function ItemCard() {
    return (
        <div className='itemCard'>
            <img src={item} className="itemCard__image" alt="item_image"/>
            <h3 className="itemCard__head">Man's T-shirt</h3>
            <p className='itemCard__text'>Lorem ipsum cdskcmsd lcsdknclsd clsjndcls lskdnclksdn lskdnclksdn kd lskdnc lkdd dlkmds</p>
            <Button text="buy" />
        </div>
    )
}

export default ItemCard