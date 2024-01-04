import React from 'react'
import './Qty.scss'
import CartContext from '../../../Context/CartContext'
import { useContext } from 'react'


function Qty({qty, pId}) {
    const {decreaseQty, addToCart} = useContext(CartContext)
    return (
        <div className='qty'>
            <button onClick={ e => decreaseQty(pId)}  className='qty__left'>-</button>
            <p className='qty__text'>{qty}</p>
            <button onClick={e=> addToCart(pId)} className='qty__right'>+</button>
        </div>
    )
}

export default Qty