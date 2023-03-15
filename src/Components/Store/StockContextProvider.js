import React, { useCallback, useContext, useReducer } from 'react'
import StockContext from './stock-context'
import CartContext from './cart-context'

const medicineReducer_handler = (state, action) => {
    if (action.type === "addInStock") {
        return {
            items: [...state.items, action.newMedicine]
        }
    }
    else if (action.type === "addInCart") {
        const checkIndexOfMedicine = state.items.findIndex((item) => {
            return parseFloat(item.id) === parseFloat(action.medicineId);
        })
        if (state.items[checkIndexOfMedicine].quantity === 1) {

        }
        else {
            const currQuantity = state.items[checkIndexOfMedicine].quantity;
            state.items[checkIndexOfMedicine].quantity = +currQuantity - 1;
            return {
                items: state.items
            }
        }
    }
    return { items: [] }
}

export default function StockContextProvider(props) {
    const [medicineInStock, dispatchMedicineInStock] = useReducer(medicineReducer_handler, {
        items: [
            {
                id: Math.random(),
                name: "paracetamol",
                descr: "used to fever",
                price: "23.89",
                quantity: 78
            },
            {
                id: Math.random(),
                name: "meftal space",
                descr: "used to stomach ache",
                price: "23.89",
                quantity: 2
            },
            {
                id: Math.random(),
                name: "disprain",
                descr: "used to headache",
                price: "23.89",
                quantity: 59
            }
        ]
    });

    const cartCtx = useContext(CartContext);

    const medicineUpdate = useCallback((obj) => {
        dispatchMedicineInStock({ type: "addInStock", newMedicine: obj })
    }, []);

    const medicineAddInCart = (id) => {
        dispatchMedicineInStock({ type: "addInCart", medicineId: id });
        const ItemIndex = medicineInStock.items.findIndex((item) => {
            return parseFloat(item.id) === parseFloat(id);
        })
        cartCtx.addInCart(medicineInStock.items[ItemIndex]);
    };

    return (
        <StockContext.Provider value={{
            medicines: medicineInStock.items,
            medicineUpdate: medicineUpdate,
            medicineAddInCart: medicineAddInCart,
            cartItem: medicineInStock.cartItem
        }}>
            {props.children}
        </StockContext.Provider>
    )
}
