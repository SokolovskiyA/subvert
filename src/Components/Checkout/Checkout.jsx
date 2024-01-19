import React from 'react'
import Header from '../SmallerComponents/Header/Header'
import './Checkout.scss'
import CartContext from '../../Context/CartContext'
import { useContext } from 'react'
import PayPalButton from '../SmallerComponents/PayPalButton/PayPalButton'


function Checkout() {
    const {cart, shipping, totalFunction} = useContext(CartContext)
    const tax = (totalFunction(cart) * .07).toFixed(2);
    const orderTotal = (parseFloat(totalFunction(cart)) + parseFloat(tax) + parseFloat(shipping)).toFixed(2);

    return (
        <div className='checkout_page'>
            <Header/>
            <div className='checkout'>
                <h1 className='checkout__title'>Checkout</h1>
                <table className='checkout__totals'>
                    <tbody>
                        <tr>
                            <td>subtotal</td>
                            <td>{totalFunction(cart).toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>tax</td>
                            <td>{tax}</td>
                        </tr>
                        <tr>
                            <td>shipping</td>
                            <td>{shipping}</td>
                        </tr>
                        <tr>
                            <td>total</td>
                            <td>{orderTotal}</td>
                        </tr>
                    </tbody>
                </table>
                <PayPalButton amount={orderTotal} />
            </div>
            
        </div>
    )
}

export default Checkout