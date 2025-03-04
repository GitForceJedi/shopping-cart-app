import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { AppProvider } from './context/AppContext';
import CartValue from './components/CartValue';
import ExpenseList from './components/ExpenseList';
import ItemSelected from './components/ItemSelected';
import Location from './components/Location';
import CreditCardForm from './components/CreditCardForm';
import GreetingPopup from './components/GreetingsPopUp';

const App = () => {
  const [showCheckout, setShowCheckout] = useState(false);

  // Function to toggle checkout form
  const handleCheckout = () => {
    setShowCheckout(true);
  };

  return (
    <AppProvider>
      <div>
        <GreetingPopup />{' '}
      </div>
      <div className="container">
        <h1 className="mt-3">Shopping App</h1>
        <div className="row mt-3">
          <div className="col-sm">
            <CartValue />
          </div>
          <div className="col-sm">
            <Location />
          </div>
        </div>
        <h3 className="mt-3">Shopping Cart</h3>
        <div className="row ">
          <div className="col-sm">
            <ExpenseList />
          </div>
        </div>
        <h3 className="mt-3">Add Items</h3>
        <div className="row mt-3">
          <div className="col-sm">
            {/* Pass the function to show checkout */}
            <ItemSelected onCheckout={handleCheckout} />
          </div>
        </div>

        {/* Show CreditCardForm only when "Checkout" is clicked */}
        {showCheckout && (
          <>
            <h3 className="mt-3">Checkout</h3>
            <div className="row mt-3">
              <div className="col-sm">
                <CreditCardForm />
              </div>
            </div>
          </>
        )}
      </div>
    </AppProvider>
  );
};

export default App;
