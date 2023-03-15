import React, { useContext, useReducer } from 'react'
import CartContext from './cart-context'
import StockContext from './stock-context'

const cartItemReducer = (state, action) => {
    // if (action.type === "addInCartList") {
    //     return {
    //         items: [...state.items, action.itemDetail]
    //     }
    // }
    return {
        items: []
    }
}

export default function CartProvider(props) {
    // const stkCtx = useContext(StockContext);

    const [cartItems, dispatchCartItems] = useReducer(cartItemReducer, {
        items: [{
            name: "khkhd",
            descr: "oiuioui",
            price: "345"
        }]
    })

    // if (stkCtx.cartItem !== null) {
    //     dispatchCartItems({ type: "addInCartList", itemDetail: stkCtx.cartItem });
    // }

    return (
        <CartContext.Provider value={{
            items: cartItems.items
        }}>
            {props.children}
        </CartContext.Provider>
    )
}
