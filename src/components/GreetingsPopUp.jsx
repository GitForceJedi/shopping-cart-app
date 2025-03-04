import React, { useState } from 'react';
import './Greetings.css';
const GreetingPopup = () => {
  // State to track visibility of the popup
  const [isVisible, setIsVisible] = useState(true);

  // Handle closing the popup
  const handleClose = () => {
    setIsVisible(false);
  };

  // If the popup is visible, render it, otherwise return null
  return (
    <>
      {isVisible && (
        <div className="popup-container">
          {' '}
          {/* Popup container */}
          <div className="popup">
            {' '}
            {/* Greeting text */}
            <button onClick={handleClose} className="close-button">
              &times; {/* "X" for close */}
            </button>
            <br />
            <h1 style={{ color: 'black' }}>WELCOME!</h1>
            <br />
            {/* Popup box */}
            <span className="greeting-text">
            This app allows you to add items to your cart using the Add Items section. Simply select an item, 
            choose the quantity, and click Save to add it to your shopping cart. Your total cart value will 
            update dynamically as you add or adjust items.
            <br /><br />
            When you're ready to complete your purchase, click Checkout to proceed to the payment screen. The 
            Credit Card Information form will appear, where you can securely enter your payment details. The 
            form includes validation to ensure that all required fields are filled out correctly before submitting.
            </span>{' '}
            <br />
            <br />
            <span className="greeting-text">
              Click the ""X" in the upper right corner to begin
              using the Shopping Cart App.
            </span>{' '}
            <br />
            <br />
          </div>
        </div>
      )}
    </>
  );
};

export default GreetingPopup;
