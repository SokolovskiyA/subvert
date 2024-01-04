import React, { useContext } from 'react'
import './MerchPage.scss'
import Header from '../SmallerComponents/Header/Header'
import Item from '../SmallerComponents/Item/Item'
import basket from '../../Assets/Images/shoppingCart.svg'
import Cart from '../SmallerComponents/Cart/Cart'
import { motion } from 'framer-motion'
import CartContext from '../../Context/CartContext'

function MerchPage({products}) {
    const {cart} = useContext(CartContext)
    const {open, setOpen} = useContext(CartContext)
    return (
            <div className='merchPage'>  
                <Header/>
                {open ? 
                <div className='merchPage__products'>
                    <Cart />
                </div> : 
                <motion.div initial={{x: "-100%"}} animate={{x: 0}} transition={{duration: 1}} className='merchPage__products'>
                    <h2 className='merchPage__title'>Wear us</h2>
                    <div onClick={e => setOpen(!open)} className='cart__cartIconCnt'>
                        <img className='cart__cartIcon' src={basket} alt='shopping basket'/>
                        <span className='cart__number'>{cart.length}</span>
                    </div>
                    <div className='merchPage__container'>
                        {products.map(product => {
                            return (
                                <Item key={product.id} product={product}/>
                            )
                        })}
                    </div>
                </motion.div>}
            </div>              
    )
}

export default MerchPage