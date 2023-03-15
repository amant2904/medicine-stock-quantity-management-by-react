import React, { useContext } from 'react'
import CartContext from '../Store/cart-context'

export default function Cart() {
    const cartCtx = useContext(CartContext);

    return (
        <div>
            <h1>My Cart</h1>
            {cartCtx.items.map((item) => {
                return <li>{item.name} - {item.descr} - {item.price}  <span>--5--</span></li>
            })}
        </div>
    )
}
