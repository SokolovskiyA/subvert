import React from 'react'
import bin from '../../../Assets/Images/bin.svg'
import { motion } from 'framer-motion'
import './CartItem.scss'
import Qty from '../Qty/Qty'
import CartContext from '../../../Context/CartContext'
import { useContext } from 'react'

function CartItem({product}) {
    const { removeItem } = useContext(CartContext)
    return (
        <tr  className="cartItem">
            <td><img className='cartItem__image' src={product.image} alt={product.id}/></td>
            <td><h3 className='cartItem__name'>{product.name}</h3></td>
            <td><div className="cartItem__color" style={{backgroundColor: product.color}}></div></td>
            <td><p className="cartItem__size">{product.size}</p></td>
            <td><Qty pId={product}  qty={product.qty}/></td>
            <td><motion.button onClick={e => removeItem(product)} whileHover={{ y : [ 0, -10, 0], rotate: ["0deg", "10deg", "-10deg","10deg", "-10deg", "0deg"]}} transition={{ duration: 1}} className='cartItem__delete'><img className='cartItem__deleteIcon' src={bin} alt="bin"/></motion.button></td>
            <td><p className="cartItem__price">{(product.price * product.qty).toFixed(2)}</p></td>
        </tr>
    )
}

export default CartItem