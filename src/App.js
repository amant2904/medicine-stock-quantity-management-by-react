import React from 'react';
import Header from './Components/Header/Header';
import StockAddingForm from './Components/Layout/StockAddingForm/StockAddingForm';
import StockContextProvider from './Components/Store/StockContextProvider';
import AvailableMedicine from './Components/Layout/AvailableMedicine/AvailableMedicine';
import Cart from './Components/Cart/Cart';
import './App.css';
import CartProvider from './Components/Store/CartProvider';

function App() {
  return (
    <CartProvider>
      <StockContextProvider>
        <Header />
        <StockAddingForm />
        <AvailableMedicine />
        <Cart />
      </StockContextProvider>
    </CartProvider>
  );
}

export default App;
