import React from "react";

const CartContext = React.createContext({
    items: [],
    addInCart: () => { }
})

export default CartContext;