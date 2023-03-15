import React, { useContext } from 'react'
import StockContext from '../../Store/stock-context'
import Button from '../../UI/Button';

export default function AvailableMedicine() {
    const stkCtx = useContext(StockContext);

    const addToCart_handler = (e) => {
        e.preventDefault();
        stkCtx.medicineAddInCart(e.target.parentElement.lastElementChild.textContent);
    }

    return (
        <div>
            <ul>
                <li>available medicines</li>
                {stkCtx.medicines.map((medicine) => {
                    return <li key={Math.random()}>{medicine.name} - {medicine.descr} - {medicine.price} - {medicine.quantity}
                        <Button onClick={addToCart_handler}>Add to Cart</Button>
                        <div>{medicine.id}</div>
                    </li>
                })}
            </ul>
        </div>
    )
}
