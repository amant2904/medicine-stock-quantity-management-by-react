import React, { useContext } from 'react'
import CartContext from '../Store/cart-context'

export default function Cart() {
    const cartCtx = useContext(CartContext);
    console.log(cartCtx.items)

    return (
        <div>
            <h1>My Cart</h1>
            {cartCtx.items.map((item) => {
                return <li key={item.id}>{item.name} - {item.descr} - {item.price}  <span>--5--</span></li>
            })}
        </div>
    )
}
