import React from 'react'
import './MerchPage.scss'
import Header from '../SmallerComponents/Header/Header'
import { useState } from 'react'
import Item from '../SmallerComponents/Item/Item'
import { motion } from 'framer-motion'
import bin from '../../Assets/Images/bin.svg'
import basket from '../../Assets/Images/shoppingCart.svg'
import Button from '../SmallerComponents/Button/Button'

function MerchPage({products}) {
    const [cart, setCart] = useState([])
    const [open, setOpen] = useState(false)
    const addToCart = (e, product) => {
        e.preventDefault()
        console.log(product)
        setCart([...cart, product])

    }
    return (
        <div className='merchPage'>  
            <Header/>
            <div className='merchPage__products'>
                <h2 className='merchPage__title'>Wear us</h2>
                { open ? <motion.div initial={{x: "100%"}} animate={{x: 0}} transition={{duration: 2}} className='cart'>
                <h2>Your Cart</h2>
                    <Button click={e => setOpen(!open)} classN="cart__back" text="back" />
                    <div className='cart__bag'>
                        {cart.map(product => {
                            return (
                                <div key={product.id} className="cart__cartItem">
                                    <img className='cart__cartItemImage' src={product.image} alt={product.id}/>
                                    <h3 className='cart__cartItemName'>{product.name}</h3>
                                    <p>{product.price}</p>
                                    <motion.button whileHover={{ y : [ 0, -10, 0], rotate: ["0deg", "10deg", "-10deg","10deg", "-10deg", "0deg"]}} transition={{ duration: 1}} className='cart__delete'><img className='cart__deleteIcon' src={bin} alt="bin"/></motion.button>
                                </div>
                            )
                        })}
                    </div>
                    <button className='cart__checkout'>Checkout</button>
                </motion.div> : 
                <div onClick={e => setOpen(!open)} className='cart__cartIconCnt'>
                    <img className='cart__cartIcon' src={basket} alt='shopping basket'/>
                    <span className='cart__number'>{cart.length}</span>
                </div>}
                <div className='merchPage__container'>
                    {products.map(product => {
                        return (
                            <Item key={product.id} add={addToCart} product={product}/>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default MerchPage