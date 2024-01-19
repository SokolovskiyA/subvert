import React, {useState} from 'react'
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

const PayPalButton = ({ amount }) => {
    const [paidFor, setPaidFor] = useState(false);
    const [error, setError] = useState(null);
    const handleApprove = (orderID) => {
        setPaidFor(true)
    }
    const paypalOptions = {
    'client-id': 'AYMW4Z2tugm587rDEVcqT7t59gMi3uXYINuoZfTAZtCcdOdUYIii5NhT5oSwkaqk067NNv_wQTWPUp-u',
    currency: 'CAD',
    };
    if (paidFor) {
        return (
            alert('Thank you for your purchase!')
        );
    }
    if (error) {
        alert(error)
    }


    return (
    <PayPalScriptProvider options={paypalOptions}>
        <PayPalButtons
            style={{color: 'white'}}
            onClick={(data, actions) => {
                const purchased = false
                if (purchased) {
                    setError('You have already purchased these items')
                    return actions.reject();
                }
                else {
                    return actions.resolve();
                }
            }}
            createOrder={(data, actions) => {
                console.log('data', data);
                return actions.order.create({
                    purchase_units: [
                        {
                            amount: {
                                value: amount,
                            },
                        },
                    ],
                });
            }}
            onApprove = {async (data, actions) => {
                const order = await actions.order.capture();
                console.log('order', order);
                handleApprove(data.orderID);
            }}
            onCancel={(data) => {}}
            onError={(err) => {
                setError(err);
                console.error('PayPal error', err);
            }}
        />
    </PayPalScriptProvider>
    );
};

export default PayPalButton
