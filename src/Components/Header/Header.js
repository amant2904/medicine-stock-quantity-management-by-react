import React from 'react'
import Button from '../UI/Button'
import classes from "./Header.module.css"

export default function Header() {
    return (
        <header>
            <nav className={classes.navBar}>
                <h1 className={classes.navHeading}>Medicine Stock Management</h1>
                <Button className={classes.cartBtn}>Cart</Button>
            </nav>
        </header>
    )
}
