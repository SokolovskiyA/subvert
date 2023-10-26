import React from 'react'
import bin from '../../../Assets/Images/bin.svg'
import { motion } from 'framer-motion'
import './CartItem.scss'

function CartItem({product}) {
    return (
        <tr key={product.id} className="cartItem">
            <td><img className='cartItem__image' src={product.image} alt={product.id}/></td>
            <td><h3 className='cartItem__name'>{product.name}</h3></td>
            <td><p className="cartItem__price">{product.price}</p></td>
            <td><div className="cartItem__color" style={{ backgroundColor: product.color, borderRadius: "50%"}}></div></td>
            <td><p className="cartItem__size">{product.size}</p></td>
            <td><motion.button whileHover={{ y : [ 0, -10, 0], rotate: ["0deg", "10deg", "-10deg","10deg", "-10deg", "0deg"]}} transition={{ duration: 1}} className='cartItem__delete'><img className='cartItem__deleteIcon' src={bin} alt="bin"/></motion.button></td>
        </tr>
    )
}

export default CartItem