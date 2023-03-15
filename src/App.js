import React from 'react';
import Header from './Components/Header/Header';
import StockAddingForm from './Components/Layout/StockAddingForm/StockAddingForm';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Header />
      <StockAddingForm />
    </React.Fragment>
  );
}

export default App;
