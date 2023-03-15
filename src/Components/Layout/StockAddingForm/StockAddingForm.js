import React, { useState } from 'react'
import Input from '../../UI/Input'
import Button from '../../UI/Button';

export default function StockAddingForm() {

    const [medicineName, setMedicineName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");

    const nameChange_handler = (e) => {
        setMedicineName(e.target.value);
    }

    const descrChange_handler = (e) => {
        setDescription(e.target.value);
    }

    const priceChange_handler = (e) => {
        setPrice(e.target.value);
    }

    const quantityChange_handler = (e) => {
        setQuantity(e.target.value);
    }

    const stockSubmit_handler = () => {
        return;
    }

    return (
        <div>
            <form onSubmit={stockSubmit_handler}>
                <Input label="Medicine Name" input={{
                    type: "text",
                    id: "name",
                    name: "name",
                    onChange: nameChange_handler,
                    value: medicineName
                }} />
                <Input label="Description" input={{
                    type: "text",
                    id: "descr",
                    name: "descr",
                    onChange: descrChange_handler,
                    value: description
                }} />
                <Input label="price" input={{
                    type: "number",
                    id: "price",
                    name: "price",
                    onChange: priceChange_handler,
                    value: price
                }} />
                <Input label="Quantity" input={{
                    type: "number",
                    id: "quantity",
                    name: "quantity",
                    onChange: quantityChange_handler,
                    value: quantity
                }} />
                <Button>Add to Stock</Button>
            </form>
        </div>
    )
}
