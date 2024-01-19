import { createContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({children}) {
    const [cart, setCart] = useState([])
    const [open, setOpen] = useState(false)
    const [shipping, setShipping] = useState(0)
    const [recipient, setRecipient] = useState({ 
        name: ``,
        address1: ``,
        city: ``,
        state_name: ``,
        state_code:``,
        country_name: ``,
        country_code:``,
        zip: ``,
        phone: ``,
        email: ``,
    })

    const removeItem = (product) => {
        setCart(cart.filter(item => item.variant_id !== product.variant_id))
    }
    const addToCart = (product) => {
        setCart(currItems => {
            if (currItems.find(item => item.variant_id === product.variant_id) == null) return [...currItems, product]
            else return currItems.map(item => {
                if (item.variant_id === product.variant_id) {
                    return {...item, qty: item.qty + 1}
                }
                else return item
            })
        })
    };

    const decreaseQty = (product) => {
        setCart(currItems => {
            if (currItems.find(item => item.variant_id === product.variant_id)?.qty === 1) return currItems.filter(item => item.variant_id !== product.variant_id)
            else return currItems.map(item => {
                if (item.variant_id === product.variant_id) {
                    return {...item, qty: item.qty - 1}
                }
                else return item
            })
        })
    };

    const totalFunction = (cart) => {
        var orderTotal = 0
        cart.forEach( item => {
            const itemTotal = item.price * item.qty
            orderTotal = orderTotal + itemTotal
        })
        return orderTotal
    }


    return (
        <CartContext.Provider value={{
            cart, 
            setCart, 
            open,
            setOpen,
            addToCart,
            decreaseQty,
            removeItem,
            recipient,
            setRecipient, 
            shipping, 
            setShipping,
            totalFunction
            }}>{children}</CartContext.Provider>
    )
}

export default CartContext;

