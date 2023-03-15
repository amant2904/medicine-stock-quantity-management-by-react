import React, { useReducer } from 'react'
import CartContext from './cart-context'

const cartItemReducer = (state, action) => {
    if (action.type === "addInCartList") {
        return {
            items: [...state.items, action.medicine]
        }
    }
    return {
        items: []
    }
}

export default function CartProvider(props) {

    const [cartItems, dispatchCartItems] = useReducer(cartItemReducer, {
        items: []
    })

    const addInCart_handler = (itemDetail) => {
        dispatchCartItems({ type: "addInCartList", medicine: itemDetail });
        // console.log(itemDetail);
    }

    return (
        <CartContext.Provider value={{
            items: cartItems.items,
            addInCart: addInCart_handler
        }}>
            {props.children}
        </CartContext.Provider>
    )
}
