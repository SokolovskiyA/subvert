import React from 'react'
import './MerchPage.scss'
import Header from '../SmallerComponents/Header/Header'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Item from '../SmallerComponents/Item/Item'
import bin from '../../Assets/Images/bin.svg'
import { motion } from 'framer-motion'

function MerchPage() {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    const [variants, setVariants] = useState([])

    const getProducts = () => {
        axios.get('http://localhost:5001/products')
        .then(res => {
            setProducts(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }
    const getVariants = () => {
        axios.get('http://localhost:5001/product-variants')
        .then(res => {
            setVariants(res.data)
            console.log(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }


    useEffect(() => {
        getProducts()
        getVariants()
    }, [])

    const addToCart = (e, product) => {
        e.preventDefault()
        setCart([...cart, product])
    }

    const removeItem = (product) => {
        return (e) => {
            e.preventDefault()
            setCart(cart.filter(item => item.id !== product.id))
        }
    }
    
    return (
        <div className='merchPage'>  
            <Header/>
            <div className='merchPage__shopping'>
                <div className='merchPage__products'>
                    <h2>Wear us</h2>
                    <div className='merchPage__container'>
                        {variants.map(product => {
                            return (
                                <Item key={product.sync_product.id} add={addToCart} product={product}/>
                            )
                        })}
                    </div>
                </div>
                <div className='merchPage__cart'>
                    <h2>Your Cart</h2>
                    <div className='merchPage__bag'>
                        {cart.map(product => {
                            return (
                                <div className="merchPage__cartItem">
                                    <img className='merchPage__cartItemImage' src={product.thumbnail_url} alt={product.name}/>
                                    <h3 className='merchPage__cartItemName'>{product.name}</h3>
                                    <motion.button onClick={removeItem(product)} whileHover={{ y : [ 0, -10, 0], rotate: ["0deg", "10deg", "-10deg","10deg", "-10deg", "0deg"]}} transition={{ duration: 1}} className='merchPage__delete'><img className='merchPage__deleteIcon' src={bin} alt="bin"/></motion.button>
                                </div>
                            )
                        })}
                    </div>
                    <button className='merchPage__checkout'>Checkout</button>
                </div>
            </div>
        </div>
    )
}

export default MerchPage