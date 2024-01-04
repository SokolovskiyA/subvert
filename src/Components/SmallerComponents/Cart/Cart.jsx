import React from 'react'
import './Cart.scss'
import { motion } from 'framer-motion'
import Button from '../Button/Button'
import CartItem from '../CartItem/CartItem'
import CartContext from '../../../Context/CartContext'
import { useContext } from 'react'
import axios from 'axios'
import RecipientForm from '../../RecipientForm/RecipientForm'
import brownPuppet from '../../../Assets/puppets/BrownPuppet.png'
import { useNavigate } from 'react-router-dom'

function Cart() {
    const navigate = useNavigate()
    const {cart, open, setOpen, recipient} = useContext(CartContext)
    const getOrderTotal = (cart, recipient) => {
        if (recipient.name === `` || recipient.address1 === `` || recipient.city === `` || recipient.state_name === `` || recipient.country_name === `` || recipient.zip === `` || recipient.phone === `` || recipient.email === ``) {
            alert('Please fill out all fields')
        }
        else {
        const items = []
        cart.forEach((item)=> {
            const newItem = {
                variant_id : item.variant_id,
                quantity : item.qty,
                retail_price : item.price,
                files : [{
                    url: item.image
                }]
            }
            items.push(newItem)
        })
        axios.post('http://localhost:5001/get_estimate', {
            recipient: recipient, 
            items: items
        })
        .then(function (response) {
            console.log(response);
            navigate('/store/checkout')
        })
        .catch(function (error) {
        console.log(error);
        });
        }
    }

    const totalFunction = (cart) => {
        var orderTotal = 0
        cart.forEach( item => {
            const itemTotal = item.price * item.qty
            orderTotal = orderTotal + itemTotal
        })
        return orderTotal
    }
    return (
        <motion.div initial={{x: "100%"}} animate={{x: 0}} transition={{duration: 1}} className='cart'>
            <h2>Your Cart</h2>
            <Button click={e => setOpen(!open)} classN="cart__back" text="back" />
            {cart.length === 0 ? 
                <div>
                    <p className='cart__empty'>Your cart is empty</p> 
                    <img className='cart__puppet' src={brownPuppet} alt="puppet"/>
                </div> :
            <table className='cart__bag'>
                <tbody>
                {cart.map(product => {
                    return (
                        <CartItem key={product.variant_id} product={product}/>
                    )
                })}
                </tbody>
                <tfoot>
                    <tr className='cart__total-row'>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th className='cart__total-label'>Order Total</th>
                        <th className='cart__total'><p>{totalFunction(cart).toFixed(2)}</p></th>
                    </tr>
                </tfoot>
            </table> 
            }
            <div className="cart__form_container">
                <h3>where to?</h3>
                <RecipientForm/>
                <button onClick={e => getOrderTotal(cart, recipient)} className='cart__checkout'>Checkout</button>
            </div>
        </motion.div>
    )
}

export default Cart