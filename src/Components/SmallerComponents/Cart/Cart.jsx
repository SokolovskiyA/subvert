import React from 'react'
import './Cart.scss'
import { motion } from 'framer-motion'
import Button from '../Button/Button'
import CartItem from '../CartItem/CartItem'

function Cart({cart, open}) {
    return (
        <motion.div initial={{x: "100%"}} animate={{x: 0}} transition={{duration: 1}} className='cart'>
            <h2>Your Cart</h2>
            <Button click={open} classN="cart__back" text="back" />
            <table className='cart__bag'>
                <tr>
                    <th>
                        <p></p>
                    </th>
                    <th>
                        <p>name</p>
                    </th>
                    <th>
                        <p>price</p>
                    </th>
                    <th>
                        <p>color</p>
                    </th>
                    <th>
                        <p>size</p>
                    </th>
                    <th>
                    </th>
                </tr>
                {cart.map(product => {
                    return (
                        <CartItem product={product}/>
                    )
                })}
            </table>
            <button className='cart__checkout'>Checkout</button>
        </motion.div>
    )
}

export default Cart